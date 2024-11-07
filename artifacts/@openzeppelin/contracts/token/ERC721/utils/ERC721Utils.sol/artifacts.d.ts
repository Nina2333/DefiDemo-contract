// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { ERC721Utils$Type } from "./ERC721Utils";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["ERC721Utils"]: ERC721Utils$Type;
    ["@openzeppelin/contracts/token/ERC721/utils/ERC721Utils.sol:ERC721Utils"]: ERC721Utils$Type;
  }

  interface ContractTypesMap {
    ["ERC721Utils"]: GetContractReturnType<ERC721Utils$Type["abi"]>;
    ["@openzeppelin/contracts/token/ERC721/utils/ERC721Utils.sol:ERC721Utils"]: GetContractReturnType<ERC721Utils$Type["abi"]>;
  }
}
