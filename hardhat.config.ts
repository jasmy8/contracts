require('dotenv').config()

import "@nomiclabs/hardhat-waffle"

// You have to export an object to set up your config
// This object can have the following optional entries:
// defaultNetwork, networks, solc, and paths.
// Go to https://buidler.dev/config/ to learn more
export default {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true
    },
    kovan : {
      url: "https://kovan.rpc.authereum.com",
      accounts: [process.env.USER_PRIVATE_KEY, process.env.LIQUIDITY_PROVIDER_PRIVATE_KEY]
    },
    arbitrum: {
      url: "https://kovan2.arbitrum.io/rpc",
      accounts: [process.env.USER_PRIVATE_KEY, process.env.LIQUIDITY_PROVIDER_PRIVATE_KEY],
      gasPrice: 0
    }
  },
  solidity: {
    compilers: [
      {
        version:"0.6.12"
      },
      {
        version:"0.6.6"
      },
      {
        version:"0.5.16"
      },
      {
        version:"0.5.11"
      },
      {
        version:"0.4.25"
      }
    ]
  }
}