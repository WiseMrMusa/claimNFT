/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITimiDAN, ITimiDANInterface } from "../../contracts/ITimiDAN";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "claimAirDrop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ITimiDAN__factory {
  static readonly abi = _abi;
  static createInterface(): ITimiDANInterface {
    return new utils.Interface(_abi) as ITimiDANInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITimiDAN {
    return new Contract(address, _abi, signerOrProvider) as ITimiDAN;
  }
}
