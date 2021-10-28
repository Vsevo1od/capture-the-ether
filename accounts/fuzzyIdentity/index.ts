import { ethers } from "ethers";
import { formatBytes32String } from "ethers/lib/utils";

const FROM = '0x49902E2A2f639bcb0d2726865E2a03E389548C6E';
const INIT_CODE_HASH = '0xc3729a9190d7f34cde02460f875c101cc9d56c28106319f933cd3af9a8dc47e9';

let isAddressFound = false;
let i = 0;
while (!isAddressFound){
    const iFormatted = formatBytes32String(i.toString());
    const guess = ethers.utils.getCreate2Address(FROM, iFormatted, INIT_CODE_HASH);
    console.log(`${guess}   salt: ${iFormatted}`);
    if (guess.toLowerCase().includes('badc0de')){
        console.log(`^^^ Found ^^^, salt: ${iFormatted}`);
        isAddressFound = true;
    }
    i++;
}