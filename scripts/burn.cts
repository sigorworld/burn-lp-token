import { config } from "chai";
import { ethers, network } from "hardhat";
import { MetamaskClient } from "hardhat_metamask_client";

async function main() {
  const deployedLPTokenAddress = "0x63bb8dda3dcb4d08fadb7062b1ebeb389cabb0b0";

  const client = new MetamaskClient({
    hardhatConfig: config,
    networkName: network.name,
    network,
    ethers,
  });

  const signer = await client.getSigner();
  const lpToken = await ethers.getContractAt(
    "IERC20",
    deployedLPTokenAddress,
    signer,
  );

  console.log("Burning LP tokens...");

  const tx = await lpToken.transfer(
    ethers.ZeroAddress,
    7169205549869003936562n,
  );
  await tx.wait();

  console.log("LP tokens burned");

  client.close();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
