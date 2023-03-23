/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { NFTDrop, NFTDropInterface } from "../../contracts/NFTDrop";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
        name: "tokenID",
        type: "uint256",
      },
    ],
    name: "claimAirDrop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "verify",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002e7b38038062002e7b833981810160405281019062000037919062000117565b6040518060400160405280600d81526020017f57697365204e46542044726f70000000000000000000000000000000000000008152506040518060400160405280600381526020017f574e4400000000000000000000000000000000000000000000000000000000008152508160009081620000b49190620003c3565b508060019081620000c69190620003c3565b5050508060068190555050620004aa565b600080fd5b6000819050919050565b620000f181620000dc565b8114620000fd57600080fd5b50565b6000815190506200011181620000e6565b92915050565b60006020828403121562000130576200012f620000d7565b5b6000620001408482850162000100565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620001cb57607f821691505b602082108103620001e157620001e062000183565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200024b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200020c565b6200025786836200020c565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620002a46200029e62000298846200026f565b62000279565b6200026f565b9050919050565b6000819050919050565b620002c08362000283565b620002d8620002cf82620002ab565b84845462000219565b825550505050565b600090565b620002ef620002e0565b620002fc818484620002b5565b505050565b5b81811015620003245762000318600082620002e5565b60018101905062000302565b5050565b601f82111562000373576200033d81620001e7565b6200034884620001fc565b8101602085101562000358578190505b620003706200036785620001fc565b83018262000301565b50505b505050565b600082821c905092915050565b6000620003986000198460080262000378565b1980831691505092915050565b6000620003b3838362000385565b9150826002028217905092915050565b620003ce8262000149565b67ffffffffffffffff811115620003ea57620003e962000154565b5b620003f68254620001b2565b6200040382828562000328565b600060209050601f8311600181146200043b576000841562000426578287015190505b620004328582620003a5565b865550620004a2565b601f1984166200044b86620001e7565b60005b8281101562000475578489015182556001820191506020850194506020810190506200044e565b8683101562000495578489015162000491601f89168262000385565b8355505b6001600288020188555050505b505050505050565b6129c180620004ba6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342b4f93511610097578063a22cb46511610066578063a22cb46514610282578063b88d4fde1461029e578063c87b56dd146102ba578063e985e9c5146102ea576100f5565b806342b4f935146101e85780636352211e1461020457806370a082311461023457806395d89b4114610264576100f5565b8063081812fc116100d3578063081812fc14610164578063095ea7b31461019457806323b872dd146101b057806342842e0e146101cc576100f5565b806301ffc9a7146100fa57806304b38ce01461012a57806306fdde0314610146575b600080fd5b610114600480360381019061010f919061191e565b61031a565b6040516101219190611966565b60405180910390f35b610144600480360381019061013f9190611ba4565b6103fc565b005b61014e6104a1565b60405161015b9190611c92565b60405180910390f35b61017e60048036038101906101799190611cb4565b610533565b60405161018b9190611cf0565b60405180910390f35b6101ae60048036038101906101a99190611d0b565b610579565b005b6101ca60048036038101906101c59190611d4b565b610690565b005b6101e660048036038101906101e19190611d4b565b6106f0565b005b61020260048036038101906101fd9190611df9565b610710565b005b61021e60048036038101906102199190611cb4565b61076b565b60405161022b9190611cf0565b60405180910390f35b61024e60048036038101906102499190611e59565b6107f1565b60405161025b9190611e95565b60405180910390f35b61026c6108a8565b6040516102799190611c92565b60405180910390f35b61029c60048036038101906102979190611edc565b61093a565b005b6102b860048036038101906102b39190611fd1565b610950565b005b6102d460048036038101906102cf9190611cb4565b6109b2565b6040516102e19190611c92565b60405180910390f35b61030460048036038101906102ff9190612054565b610a1a565b6040516103119190611966565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103e557507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103f557506103f482610aae565b5b9050919050565b60008282604051602001610411929190612094565b6040516020818303038152906040528051906020012060405160200161043791906120de565b60405160208183030381529060405280519060200120905061045c8460065483610b18565b61049b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049290612145565b60405180910390fd5b50505050565b6060600080546104b090612194565b80601f01602080910402602001604051908101604052809291908181526020018280546104dc90612194565b80156105295780601f106104fe57610100808354040283529160200191610529565b820191906000526020600020905b81548152906001019060200180831161050c57829003601f168201915b5050505050905090565b600061053e82610b2f565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105848261076b565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036105f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105eb90612237565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610613610b7a565b73ffffffffffffffffffffffffffffffffffffffff16148061064257506106418161063c610b7a565b610a1a565b5b610681576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610678906122c9565b60405180910390fd5b61068b8383610b82565b505050565b6106a161069b610b7a565b82610c3b565b6106e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d79061235b565b60405180910390fd5b6106eb838383610cd0565b505050565b61070b83838360405180602001604052806000815250610950565b505050565b61075c838380806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505033836103fc565b6107663382610fc9565b505050565b600080610777836111e6565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036107e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107df906123c7565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610861576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085890612459565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546108b790612194565b80601f01602080910402602001604051908101604052809291908181526020018280546108e390612194565b80156109305780601f1061090557610100808354040283529160200191610930565b820191906000526020600020905b81548152906001019060200180831161091357829003601f168201915b5050505050905090565b61094c610945610b7a565b8383611223565b5050565b61096161095b610b7a565b83610c3b565b6109a0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109979061235b565b60405180910390fd5b6109ac8484848461138f565b50505050565b60606109bd82610b2f565b60006109c76113eb565b905060008151116109e75760405180602001604052806000815250610a12565b806109f184611402565b604051602001610a029291906124b5565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600082610b2585846114d0565b1490509392505050565b610b3881611526565b610b77576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6e906123c7565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610bf58361076b565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610c478361076b565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610c895750610c888185610a1a565b5b80610cc757508373ffffffffffffffffffffffffffffffffffffffff16610caf84610533565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610cf08261076b565b73ffffffffffffffffffffffffffffffffffffffff1614610d46576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3d9061254b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610db5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dac906125dd565b60405180910390fd5b610dc28383836001611567565b8273ffffffffffffffffffffffffffffffffffffffff16610de28261076b565b73ffffffffffffffffffffffffffffffffffffffff1614610e38576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e2f9061254b565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610fc4838383600161156d565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611038576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161102f90612649565b60405180910390fd5b61104181611526565b15611081576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611078906126b5565b60405180910390fd5b61108f600083836001611567565b61109881611526565b156110d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110cf906126b5565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46111e260008383600161156d565b5050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611291576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161128890612721565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516113829190611966565b60405180910390a3505050565b61139a848484610cd0565b6113a684848484611573565b6113e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113dc906127b3565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060006001611411846116fa565b01905060008167ffffffffffffffff8111156114305761142f611997565b5b6040519080825280601f01601f1916602001820160405280156114625781602001600182028036833780820191505090505b509050600082602001820190505b6001156114c5578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816114b9576114b86127d3565b5b04945060008503611470575b819350505050919050565b60008082905060005b845181101561151b57611506828683815181106114f9576114f8612802565b5b602002602001015161184d565b9150808061151390612860565b9150506114d9565b508091505092915050565b60008073ffffffffffffffffffffffffffffffffffffffff16611548836111e6565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b50505050565b50505050565b60006115948473ffffffffffffffffffffffffffffffffffffffff16611878565b156116ed578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026115bd610b7a565b8786866040518563ffffffff1660e01b81526004016115df94939291906128fd565b6020604051808303816000875af192505050801561161b57506040513d601f19601f82011682018060405250810190611618919061295e565b60015b61169d573d806000811461164b576040519150601f19603f3d011682016040523d82523d6000602084013e611650565b606091505b506000815103611695576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161168c906127b3565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506116f2565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611758577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000838161174e5761174d6127d3565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611795576d04ee2d6d415b85acef8100000000838161178b5761178a6127d3565b5b0492506020810190505b662386f26fc1000083106117c457662386f26fc1000083816117ba576117b96127d3565b5b0492506010810190505b6305f5e10083106117ed576305f5e10083816117e3576117e26127d3565b5b0492506008810190505b6127108310611812576127108381611808576118076127d3565b5b0492506004810190505b60648310611835576064838161182b5761182a6127d3565b5b0492506002810190505b600a8310611844576001810190505b80915050919050565b600081831061186557611860828461189b565b611870565b61186f838361189b565b5b905092915050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600082600052816020526040600020905092915050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6118fb816118c6565b811461190657600080fd5b50565b600081359050611918816118f2565b92915050565b600060208284031215611934576119336118bc565b5b600061194284828501611909565b91505092915050565b60008115159050919050565b6119608161194b565b82525050565b600060208201905061197b6000830184611957565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6119cf82611986565b810181811067ffffffffffffffff821117156119ee576119ed611997565b5b80604052505050565b6000611a016118b2565b9050611a0d82826119c6565b919050565b600067ffffffffffffffff821115611a2d57611a2c611997565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b611a5681611a43565b8114611a6157600080fd5b50565b600081359050611a7381611a4d565b92915050565b6000611a8c611a8784611a12565b6119f7565b90508083825260208201905060208402830185811115611aaf57611aae611a3e565b5b835b81811015611ad85780611ac48882611a64565b845260208401935050602081019050611ab1565b5050509392505050565b600082601f830112611af757611af6611981565b5b8135611b07848260208601611a79565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611b3b82611b10565b9050919050565b611b4b81611b30565b8114611b5657600080fd5b50565b600081359050611b6881611b42565b92915050565b6000819050919050565b611b8181611b6e565b8114611b8c57600080fd5b50565b600081359050611b9e81611b78565b92915050565b600080600060608486031215611bbd57611bbc6118bc565b5b600084013567ffffffffffffffff811115611bdb57611bda6118c1565b5b611be786828701611ae2565b9350506020611bf886828701611b59565b9250506040611c0986828701611b8f565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b60005b83811015611c4d578082015181840152602081019050611c32565b60008484015250505050565b6000611c6482611c13565b611c6e8185611c1e565b9350611c7e818560208601611c2f565b611c8781611986565b840191505092915050565b60006020820190508181036000830152611cac8184611c59565b905092915050565b600060208284031215611cca57611cc96118bc565b5b6000611cd884828501611b8f565b91505092915050565b611cea81611b30565b82525050565b6000602082019050611d056000830184611ce1565b92915050565b60008060408385031215611d2257611d216118bc565b5b6000611d3085828601611b59565b9250506020611d4185828601611b8f565b9150509250929050565b600080600060608486031215611d6457611d636118bc565b5b6000611d7286828701611b59565b9350506020611d8386828701611b59565b9250506040611d9486828701611b8f565b9150509250925092565b600080fd5b60008083601f840112611db957611db8611981565b5b8235905067ffffffffffffffff811115611dd657611dd5611d9e565b5b602083019150836020820283011115611df257611df1611a3e565b5b9250929050565b600080600060408486031215611e1257611e116118bc565b5b600084013567ffffffffffffffff811115611e3057611e2f6118c1565b5b611e3c86828701611da3565b93509350506020611e4f86828701611b8f565b9150509250925092565b600060208284031215611e6f57611e6e6118bc565b5b6000611e7d84828501611b59565b91505092915050565b611e8f81611b6e565b82525050565b6000602082019050611eaa6000830184611e86565b92915050565b611eb98161194b565b8114611ec457600080fd5b50565b600081359050611ed681611eb0565b92915050565b60008060408385031215611ef357611ef26118bc565b5b6000611f0185828601611b59565b9250506020611f1285828601611ec7565b9150509250929050565b600080fd5b600067ffffffffffffffff821115611f3c57611f3b611997565b5b611f4582611986565b9050602081019050919050565b82818337600083830152505050565b6000611f74611f6f84611f21565b6119f7565b905082815260208101848484011115611f9057611f8f611f1c565b5b611f9b848285611f52565b509392505050565b600082601f830112611fb857611fb7611981565b5b8135611fc8848260208601611f61565b91505092915050565b60008060008060808587031215611feb57611fea6118bc565b5b6000611ff987828801611b59565b945050602061200a87828801611b59565b935050604061201b87828801611b8f565b925050606085013567ffffffffffffffff81111561203c5761203b6118c1565b5b61204887828801611fa3565b91505092959194509250565b6000806040838503121561206b5761206a6118bc565b5b600061207985828601611b59565b925050602061208a85828601611b59565b9150509250929050565b60006040820190506120a96000830185611ce1565b6120b66020830184611e86565b9392505050565b6000819050919050565b6120d86120d382611a43565b6120bd565b82525050565b60006120ea82846120c7565b60208201915081905092915050565b7f496e76616c69642070726f6f6600000000000000000000000000000000000000600082015250565b600061212f600d83611c1e565b915061213a826120f9565b602082019050919050565b6000602082019050818103600083015261215e81612122565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806121ac57607f821691505b6020821081036121bf576121be612165565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000612221602183611c1e565b915061222c826121c5565b604082019050919050565b6000602082019050818103600083015261225081612214565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b60006122b3603d83611c1e565b91506122be82612257565b604082019050919050565b600060208201905081810360008301526122e2816122a6565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b6000612345602d83611c1e565b9150612350826122e9565b604082019050919050565b6000602082019050818103600083015261237481612338565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b60006123b1601883611c1e565b91506123bc8261237b565b602082019050919050565b600060208201905081810360008301526123e0816123a4565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000612443602983611c1e565b915061244e826123e7565b604082019050919050565b6000602082019050818103600083015261247281612436565b9050919050565b600081905092915050565b600061248f82611c13565b6124998185612479565b93506124a9818560208601611c2f565b80840191505092915050565b60006124c18285612484565b91506124cd8284612484565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612535602583611c1e565b9150612540826124d9565b604082019050919050565b6000602082019050818103600083015261256481612528565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006125c7602483611c1e565b91506125d28261256b565b604082019050919050565b600060208201905081810360008301526125f6816125ba565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612633602083611c1e565b915061263e826125fd565b602082019050919050565b6000602082019050818103600083015261266281612626565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b600061269f601c83611c1e565b91506126aa82612669565b602082019050919050565b600060208201905081810360008301526126ce81612692565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b600061270b601983611c1e565b9150612716826126d5565b602082019050919050565b6000602082019050818103600083015261273a816126fe565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b600061279d603283611c1e565b91506127a882612741565b604082019050919050565b600060208201905081810360008301526127cc81612790565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061286b82611b6e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361289d5761289c612831565b5b600182019050919050565b600081519050919050565b600082825260208201905092915050565b60006128cf826128a8565b6128d981856128b3565b93506128e9818560208601611c2f565b6128f281611986565b840191505092915050565b60006080820190506129126000830187611ce1565b61291f6020830186611ce1565b61292c6040830185611e86565b818103606083015261293e81846128c4565b905095945050505050565b600081519050612958816118f2565b92915050565b600060208284031215612974576129736118bc565b5b600061298284828501612949565b9150509291505056fea2646970667358221220dd1b76f186cad46a1e7e0760367a68fc3c5367323dd54da4c4f98500497b0f6764736f6c63430008110033";

type NFTDropConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTDropConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTDrop__factory extends ContractFactory {
  constructor(...args: NFTDropConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _root: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NFTDrop> {
    return super.deploy(_root, overrides || {}) as Promise<NFTDrop>;
  }
  override getDeployTransaction(
    _root: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_root, overrides || {});
  }
  override attach(address: string): NFTDrop {
    return super.attach(address) as NFTDrop;
  }
  override connect(signer: Signer): NFTDrop__factory {
    return super.connect(signer) as NFTDrop__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTDropInterface {
    return new utils.Interface(_abi) as NFTDropInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTDrop {
    return new Contract(address, _abi, signerOrProvider) as NFTDrop;
  }
}