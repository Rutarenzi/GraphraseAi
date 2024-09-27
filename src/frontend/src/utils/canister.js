import { HttpAgent, Actor } from "@dfinity/agent";
import { idlFactory } from "../../../declarations/backend/backend.did.js"

//change this Canister 
const GraphraseAiCANISTER_ID = "bkyz2-fmaaa-aaaaa-qaaaq-cai";

export const GraphraseAiCanister=async()=>{
 return await getCanister(GraphraseAiCANISTER_ID,idlFactory);
}

const getCanister=async(canisterId,idl)=>{
  const authClient = window.auth.client;
  const agent = new HttpAgent({
    identity: authClient.getIdentity(),
  });
  await agent.fetchRootKey();
  return Actor.createActor(idl,{
    agent,
    canisterId
  });
}
