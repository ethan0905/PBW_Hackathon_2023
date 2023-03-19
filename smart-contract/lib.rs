use anchor_lang::prelude::*;
// use anchor_lang::system_program;

// This is your program's public key and it will update
// automatically when you build the project.
declare_id!("GR4kCNvK9Wvasg5H11JpWp5dqUyJwVYH9K5RJHkxnjG2");

#[program]
mod hello_anchor {
    use super::*;

    pub fn create_contract(
        ctx: Context<CreateContract>,
        sender: Pubkey,
        receiver: Pubkey,
        amount: u64,
        url: String,
    ) -> Result<()> {
        ctx.accounts.new_contract.sender = sender;
        ctx.accounts.new_contract.receiver = receiver;
        ctx.accounts.new_contract.amount = amount;
        ctx.accounts.new_contract.status_sender = 0;
        ctx.accounts.new_contract.status_receiver = 0;
        ctx.accounts.new_contract.url = url;
        let cpi_program = ctx.accounts.system_program.to_account_info();
        let cpi_accounts = anchor_lang::system_program::Transfer {
            from: ctx.accounts.sender.to_account_info(),
            to: ctx.accounts.new_contract.to_account_info(),
        };
        let cpi_context = CpiContext::new(cpi_program, cpi_accounts);
        anchor_lang::system_program::transfer(cpi_context, ctx.accounts.new_contract.amount);
        ctx.accounts.new_contract.status_sender = 1;
        ctx.accounts.new_contract.status_receiver = 1;
        msg!("OK");
        Ok(())
    }

    // pub fn sign_contract(ctx: Context<SignContract>) -> Result<()> {
    //     if (ctx.accounts.account.sender == ctx.accounts.signer.key()) {
    //     } else {
    //         //MODIFY STATUS
    //     }
    //     Ok(())
    // }

    pub fn validate_contract(ctx: Context<ValidateContract>) -> Result<()> {
        if (ctx.accounts.account.receiver == ctx.accounts.signer.key() && ctx.accounts.account.status_sender == 2) {
            let cpi_program = ctx.accounts.system_program.to_account_info();
            let cpi_accounts = anchor_lang::system_program::Transfer {
                from: ctx.accounts.account.to_account_info(),
                to: ctx.accounts.signer.to_account_info(),
            };
            let cpi_context = CpiContext::new(cpi_program, cpi_accounts);
            anchor_lang::system_program::transfer(cpi_context, ctx.accounts.account.amount);
            ctx.accounts.account.status_receiver = 2;
            msg!("SENDER");
        } else {
            ctx.accounts.account.status_sender = 2;
        }
        Ok(())
    }
}

#[account]
#[derive(Default)]
pub struct ContractInfo {
    pub sender: Pubkey,
    pub receiver: Pubkey,
    pub amount: u64,
    pub status_sender: u8,
    pub status_receiver: u8,
    pub url: String,
    pub id_contract: u8,
}

#[derive(Accounts)]
pub struct CreateContract<'info> {
    #[account(mut)]
    pub sender: Signer<'info>,
    pub receiver: AccountInfo<'info>,
    pub system_program: Program<'info, System>,
    #[account(
            init, 
            payer = sender,
            space = std::mem::size_of::<ContractInfo>(),
            seeds=[b"contract",sender.key().as_ref(), receiver.key().as_ref()],
            bump, 
    )]
    pub new_contract: Box<Account<'info, ContractInfo>>,
}

// #[derive(Accounts)]
// pub struct SignContract<'info> {
//     #[account(mut)]
//     pub account: Account<'info, ContractInfo>,
//     #[account(
//         constraint = ((account.sender == signer.key() && account.status_sender == 0)|| (account.receiver == signer.key() && account.status_receiver == 0))
//     )]
//     pub signer: Signer<'info>,
//     pub system_program: Program<'info, System>,
// }

#[derive(Accounts)]
pub struct ValidateContract<'info> {
    #[account(mut)]
    pub account: Account<'info, ContractInfo>,
    #[account(
        constraint = ((account.sender == signer.key() && account.status_sender == 1 && account.status_receiver > 0)|| (account.receiver == signer.key() && account.status_receiver == 1 && account.status_sender > 0))
    )]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}
