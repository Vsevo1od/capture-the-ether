import { TxData, Transaction } from '@ethereumjs/tx';
import {bufferToHex} from 'ethereumjs-util';
import Common, {Chain} from '@ethereumjs/common';

const txData: TxData = { 
    "gasPrice": "0x3b9aca00", 
    "nonce": "0x0", 
    "r": "0xa5522718c0f95dde27f0827f55de836342ceda594d20458523dd71a539d52ad7", 
    "s": "0x5710e64311d481764b5ae8ca691b05d14054782c7d489f3511a7abf2f5078962", 
    "to": "0x6b477781b0e68031109f21887e6b5afeaaeb002b", 
    "type": "0x0", 
    "v": "0x29", 
    "value": "0x0",
    "data": "0x5468616e6b732c206d616e21",
    "gasLimit": 90000,
}

const tx = new Transaction(txData, {common: new Common({chain: Chain.Ropsten})});

const address = tx.getSenderAddress();
const publicKey = tx.getSenderPublicKey();

console.log(address.toString());
console.log(bufferToHex(publicKey))