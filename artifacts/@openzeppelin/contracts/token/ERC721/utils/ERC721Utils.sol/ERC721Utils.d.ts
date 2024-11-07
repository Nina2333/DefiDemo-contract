// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface ERC721Utils$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "ERC721Utils",
  "sourceName": "@openzeppelin/contracts/token/ERC721/utils/ERC721Utils.sol",
  "abi": [],
  "bytecode": "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220b315ab6447a46824340535a89811d16f6e93628b290fe14e2cb81fb4b7210a4c64736f6c63430008180033",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220b315ab6447a46824340535a89811d16f6e93628b290fe14e2cb81fb4b7210a4c64736f6c63430008180033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "ERC721Utils",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<ERC721Utils$Type["abi"]>>;
  export function deployContract(
    contractName: "@openzeppelin/contracts/token/ERC721/utils/ERC721Utils.sol:ERC721Utils",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<ERC721Utils$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "ERC721Utils",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<ERC721Utils$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "@openzeppelin/contracts/token/ERC721/utils/ERC721Utils.sol:ERC721Utils",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<ERC721Utils$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "ERC721Utils",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<ERC721Utils$Type["abi"]>>;
  export function getContractAt(
    contractName: "@openzeppelin/contracts/token/ERC721/utils/ERC721Utils.sol:ERC721Utils",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<ERC721Utils$Type["abi"]>>;
}