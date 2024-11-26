import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import "dotenv/config";

const accounts = [process.env.DEV_WALLET_PRIVATE_KEY!];

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{
      version: "0.8.28",
      settings: {
        viaIR: true,
        optimizer: {
          enabled: true,
        },
      },
    }],
  },
  networks: {
    "base-sepolia": {
      url: "https://sepolia.base.org",
      accounts,
      chainId: 84532,
      gasPrice: 1000000000,
    },
  },
};

export default config;
