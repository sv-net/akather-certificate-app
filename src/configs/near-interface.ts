/* Talking with a contract often involves transforming data, we recommend you to encapsulate that logic into a class */

import { Wallet } from "./near-wallet";

export class HelloNEAR {
  contractId: string;
  wallet: Wallet;

  constructor({ contractId, walletToUse }: { contractId: string; walletToUse: Wallet }) {
    this.contractId = contractId;
    this.wallet = walletToUse;
  }
}
