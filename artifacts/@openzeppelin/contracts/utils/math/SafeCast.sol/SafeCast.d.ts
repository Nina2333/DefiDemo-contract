// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface SafeCast$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "SafeCast",
  "sourceName": "@openzeppelin/contracts/utils/math/SafeCast.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "bits",
          "type": "uint8"
        },
        {
          "internalType": "int256",
          "name": "value",
          "type": "int256"
        }
      ],
      "name": "SafeCastOverflowedIntDowncast",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "int256",
          "name": "value",
          "type": "int256"
        }
      ],
      "name": "SafeCastOverflowedIntToUint",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "bits",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "SafeCastOverflowedUintDowncast",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "SafeCastOverflowedUintToInt",
      "type": "error"
    }
  ],
  "bytecode": "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220b5f566bcc33798f030e57f140ce005b7099829e7434ae2c81bd24cfd7eb2b16a64736f6c63430008180033",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220b5f566bcc33798f030e57f140ce005b7099829e7434ae2c81bd24cfd7eb2b16a64736f6c63430008180033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "SafeCast",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<SafeCast$Type["abi"]>>;
  export function deployContract(
    contractName: "@openzeppelin/contracts/utils/math/SafeCast.sol:SafeCast",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<SafeCast$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "SafeCast",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<SafeCast$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "@openzeppelin/contracts/utils/math/SafeCast.sol:SafeCast",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<SafeCast$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "SafeCast",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<SafeCast$Type["abi"]>>;
  export function getContractAt(
    contractName: "@openzeppelin/contracts/utils/math/SafeCast.sol:SafeCast",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<SafeCast$Type["abi"]>>;
}
