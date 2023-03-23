import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import fs from "fs";

var dataPath = "./files/data.json";

const data = fs.readFileSync(dataPath,{encoding:'utf8'});
console.log(data);
var JSONdata = JSON.parse(data);

const values: any[] = [];

JSONdata.map((e: { Address: string[]; Amount: string[]; }) => values.push([e.Address, e.Amount]));
console.log(JSONdata);
  console.log(values)

  const tree = StandardMerkleTree.of(values, ["address", "uint256"]);
  console.log('Merkle Root:', tree.root);

  values.forEach((e,i)=> console.log(tree.getProof(i)))


  fs.writeFileSync("./files/tree.json", JSON.stringify(tree.dump()));