import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  // Deploy Fee Token contract
  const FeeToken = await ethers.getContractFactory("FeeToken");
  const feeToken = await FeeToken.deploy(deployer.address);
  await feeToken.deployed();

  console.log(`FeeToken deployed at ${feeToken.address}`);
  // Deployed at: 0x4D02360BeE5bd28202c282b26bCaf30dADE47443

  // Reward token - WETH (Ropsten)
  const rewardToken = "0xb603cea165119701b58d56d10d2060fbfb3efad8";
  // Deploy the staking contract
  const Factory = await ethers.getContractFactory("StakingRewardsFactory");
  const factory = await Factory.deploy(rewardToken);
  await factory.deployed();

  console.log("Staking Reward Factory Contract Address:", factory.address);
  // Deployed at: 0x70490bE16aCAc8c497cE0C0064e81faA7BC96D54
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
