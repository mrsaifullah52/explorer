import { PublicKey } from "@solana/web3.js";

export const HELLO_CLOCKWORK_PROGRAM_ID = new PublicKey(
  "8FFu5CSkQKQiGZihvv59PmV1FggLHLrH5GU6SP2JWBWq"
);

export const CLOCKWORK_THREAD_PROGRAM_ID = new PublicKey(
  "3XXuUFfweXBwFgFfYaejLvZE4cGZiHgKiGfMtdxNzYmv"
);

export const DEFAULT_PROGRAM_ID = CLOCKWORK_THREAD_PROGRAM_ID;

export const CLOCKWORKS_PROGRAMS: { [key: string]: string } = {
  "7KNTQLA6wrwM2orK4bTcoXJ9tEQnWbKngh7nNPzcuxa": "hello_clockwork",
  "3XXuUFfweXBwFgFfYaejLvZE4cGZiHgKiGfMtdxNzYmv": "Thread Program V1.3.15",
};

export default CLOCKWORKS_PROGRAMS;
