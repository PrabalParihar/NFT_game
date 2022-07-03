const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["DRONACHARYA", "ARJUN", "KARAN"],       // Names
      ["QmeME9D7NVstL1RFWyhvboyNzBmvciTy8o3tzJRReCVXtY/1.jpeg", // Images
      "QmeME9D7NVstL1RFWyhvboyNzBmvciTy8o3tzJRReCVXtY/2.jpeg", 
      "QmeME9D7NVstL1RFWyhvboyNzBmvciTy8o3tzJRReCVXtY/3.jpeg"],
      [100, 200, 300],                    // HP values
      [100, 50, 25] ,
      "Elon Musk", // Boss name
  "https://i.imgur.com/AksR0tt.png", // Boss image
  10000, // Boss hp
  50 // Boss attack damage                      // Attack damage values
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
txn = await gameContract.mintCharacterNFT(2);
await txn.wait();

txn = await gameContract.attackBoss();
await txn.wait();

txn = await gameContract.attackBoss();
await txn.wait();

  
// We only have three characters.
// an NFT w/ the character at index 2 of our array.
txn = await gameContract.mintCharacterNFT(2);
await txn.wait();

// Get the value of the NFT's URI.
let returnedTokenUri = await gameContract.tokenURI(1);
console.log("Token URI:", returnedTokenUri);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();