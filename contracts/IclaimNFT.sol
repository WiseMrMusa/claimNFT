// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


interface IclaimNFT {
    function claimAirDrop(bytes32[] calldata proof, uint256 amount) external;
    function balanceOf(address account) external view returns (uint256);
}
