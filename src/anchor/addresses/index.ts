import { PublicKey } from "@solana/web3.js";

export const DEFAULT_PROGRAM_ID = new PublicKey(
  "BM8qtWUVWL6srduS6dSdYLCWds1Y866arsRrL22tFAz6"
);

export const HELLO_CLOCKWORK_PROGRAM_ID = new PublicKey(
  "8FFu5CSkQKQiGZihvv59PmV1FggLHLrH5GU6SP2JWBWq"
);

export const CLOCKWORK_THREAD_PROGRAM_ID = new PublicKey(
  "3XXuUFfweXBwFgFfYaejLvZE4cGZiHgKiGfMtdxNzYmv"
);

export const CLOCKWORKS_PROGRAMS: { [key: string]: string } = {
  BM8qtWUVWL6srduS6dSdYLCWds1Y866arsRrL22tFAz6: "Crank V1.0.3",
  "3XXuUFfweXBwFgFfYaejLvZE4cGZiHgKiGfMtdxNzYmv": "Queue Program V1.2.14",
  "7KNTQLA6wrwM2orK4bTcoXJ9tEQnWbKngh7nNPzcuxa": "hello_clockwork",
};

export default CLOCKWORKS_PROGRAMS;
