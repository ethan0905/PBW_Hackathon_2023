import idl from '../public/idl.json'
import { Program, Provider,Idl, web3} from '@project-serum/anchor'

const network = "https://api.devnet.solana.com";
const programID = "GR4kCNvK9Wvasg5H11JpWp5dqUyJwVYH9K5RJHkxnjG2";
const connection = new web3.Connection(network);

const getProvider = () => {
  const provider = new Provider(connection, wallet, {
	preflightCommitment: "confirmed",
  });
  return provider;
};

const getProgram = () => {
  const program = new Program(
	idl as Idl,
	programID,
	getProvider()
  ) as Program;
  return program;
};