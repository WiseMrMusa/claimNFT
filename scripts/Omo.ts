import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import fs from "fs";
import { ethers } from "hardhat";
import { impersonateAccount, setBalance } from "@nomicfoundation/hardhat-network-helpers";
import { utils } from 'ethers';


async function main() {
  const NFTDropContract = await ethers.getContractFactory("NFTDrop");
  const deployContract = await NFTDropContract.deploy("0x0ad622eb5e074cf6c6b6c296355dcb95959b0baf218ca08b121ce07ee51117c9");
  await deployContract.deployed()
  const conAddress = deployContract.address;
  console.log(`This contract is deloyed at: ${deployContract.address}`);


  const nftClaimContract = await ethers.getContractAt("IclaimNFT",conAddress);
  
  let address = "0xab7608F1B3aaf54c54aDf5EEb50Fe507c3668D40";
  await impersonateAccount(address);
  await setBalance(address,ethers.utils.parseEther("1000000000"));
  const TheSigner = await ethers.getSigner(address);
  
  // console.log(await nftClaimContract.balanceOf(address));

  let proof = [
    '0x9f64f35eaac851f914aa5ca407d3cb78715a7342350f879395410b33413e8ced',
    '0x460ba19c7c2ecc99a7537896c0fbc6f0aa083059a8e35b8d2cbea8ec364f6290',
    '0x7f0fa266ad859fa5084a03fc05026dcd8d176d9e3ac7404f209c21fe4be46866',
    '0x950d41c19666d8e0eb3607bcfe998a2b5c0c3ee40b3d165c05cd9bec26f7327d'
  ];

  let amount = "1";

  nftClaimContract.connect(TheSigner).claimAirDrop(proof,amount);
  console.log(await deployContract.ownerOf(1));
}

 




// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
