// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract NFTDrop is ERC721 {

    bytes32 private root;
    constructor(bytes32 _root) ERC721("Wise NFT Drop", "WND") {
        root = _root;
    }

    function claimAirDrop(bytes32[] calldata proof, uint256 tokenID) public {
        verify(proof,msg.sender,tokenID);
        _mint(msg.sender, tokenID);
    }

    function verify(
        bytes32[] memory proof,
        address addr,
        uint256 amount
    ) public view {
        bytes32 leaf = keccak256(bytes.concat(keccak256(abi.encode(addr, amount))));
        require(MerkleProof.verify(proof, root, leaf), "Invalid proof");
    }
}
