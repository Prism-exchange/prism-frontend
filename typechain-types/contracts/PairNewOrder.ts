/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace PairNewOrder {
  export type OrderStruct = {
    id: PromiseOrValue<BigNumberish>;
    trader: PromiseOrValue<string>;
    isBuy: PromiseOrValue<BigNumberish>;
    createdDate: PromiseOrValue<BigNumberish>;
    token: PromiseOrValue<string>;
    amount: PromiseOrValue<BigNumberish>;
    price: PromiseOrValue<BigNumberish>;
    filled: PromiseOrValue<BigNumberish>;
    nextNodeID: PromiseOrValue<BigNumberish>;
    tickFeeID: PromiseOrValue<BigNumberish>;
  };

  export type OrderStructOutput = [
    BigNumber,
    string,
    number,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    id: BigNumber;
    trader: string;
    isBuy: number;
    createdDate: BigNumber;
    token: string;
    amount: BigNumber;
    price: BigNumber;
    filled: BigNumber;
    nextNodeID: BigNumber;
    tickFeeID: BigNumber;
  };
}

export interface PairNewOrderInterface extends utils.Interface {
  functions: {
    "_findIndex(uint256,uint8,uint256,uint256)": FunctionFragment;
    "_findPrevOrder(uint8,uint256,uint256,uint256)": FunctionFragment;
    "createLimitOrder(uint8,uint256,uint256,uint256,uint256,bool)": FunctionFragment;
    "createMarketOrder(uint8,uint256,uint256)": FunctionFragment;
    "feeController()": FunctionFragment;
    "getOrderBook(uint8,uint256,uint256)": FunctionFragment;
    "listSize(uint8)": FunctionFragment;
    "mainValueWallet()": FunctionFragment;
    "price()": FunctionFragment;
    "removeOrder(uint8,uint256,uint256,bool)": FunctionFragment;
    "settingExchange()": FunctionFragment;
    "token0()": FunctionFragment;
    "token1()": FunctionFragment;
    "updateOrder(uint8,uint256,uint256,uint256,uint256,uint256,uint256,bool)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_findIndex"
      | "_findPrevOrder"
      | "createLimitOrder"
      | "createMarketOrder"
      | "feeController"
      | "getOrderBook"
      | "listSize"
      | "mainValueWallet"
      | "price"
      | "removeOrder"
      | "settingExchange"
      | "token0"
      | "token1"
      | "updateOrder"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_findIndex",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "_findPrevOrder",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createLimitOrder",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createMarketOrder",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "feeController",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOrderBook",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "listSize",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "mainValueWallet",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "price", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeOrder",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "settingExchange",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token0", values?: undefined): string;
  encodeFunctionData(functionFragment: "token1", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateOrder",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "_findIndex", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_findPrevOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createLimitOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createMarketOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrderBook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "listSize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mainValueWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settingExchange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateOrder",
    data: BytesLike
  ): Result;

  events: {
    "CreateLimitOrder(address,address,uint8,uint256,uint256,uint256)": EventFragment;
    "MarketOrder(address,address,uint8,uint256,uint256,uint256)": EventFragment;
    "RemoveOrder(address,address,uint8,uint256,uint256,uint256,uint256)": EventFragment;
    "RemoveOrderNoUpdateBalances(address,address,uint8,uint256,uint256,uint256,uint256)": EventFragment;
    "SumMarketOrder(address,address,uint8,uint256,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreateLimitOrder"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MarketOrder"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveOrder"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "RemoveOrderNoUpdateBalances"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SumMarketOrder"): EventFragment;
}

export interface CreateLimitOrderEventObject {
  pair: string;
  trader: string;
  isBuy: number;
  amount: BigNumber;
  price: BigNumber;
  date: BigNumber;
}
export type CreateLimitOrderEvent = TypedEvent<
  [string, string, number, BigNumber, BigNumber, BigNumber],
  CreateLimitOrderEventObject
>;

export type CreateLimitOrderEventFilter =
  TypedEventFilter<CreateLimitOrderEvent>;

export interface MarketOrderEventObject {
  pair: string;
  trader: string;
  isBuy: number;
  amount: BigNumber;
  price: BigNumber;
  date: BigNumber;
}
export type MarketOrderEvent = TypedEvent<
  [string, string, number, BigNumber, BigNumber, BigNumber],
  MarketOrderEventObject
>;

export type MarketOrderEventFilter = TypedEventFilter<MarketOrderEvent>;

export interface RemoveOrderEventObject {
  pair: string;
  trader: string;
  isBuy: number;
  amount: BigNumber;
  price: BigNumber;
  executed: BigNumber;
  date: BigNumber;
}
export type RemoveOrderEvent = TypedEvent<
  [string, string, number, BigNumber, BigNumber, BigNumber, BigNumber],
  RemoveOrderEventObject
>;

export type RemoveOrderEventFilter = TypedEventFilter<RemoveOrderEvent>;

export interface RemoveOrderNoUpdateBalancesEventObject {
  pair: string;
  trader: string;
  isBuy: number;
  amount: BigNumber;
  price: BigNumber;
  executed: BigNumber;
  date: BigNumber;
}
export type RemoveOrderNoUpdateBalancesEvent = TypedEvent<
  [string, string, number, BigNumber, BigNumber, BigNumber, BigNumber],
  RemoveOrderNoUpdateBalancesEventObject
>;

export type RemoveOrderNoUpdateBalancesEventFilter =
  TypedEventFilter<RemoveOrderNoUpdateBalancesEvent>;

export interface SumMarketOrderEventObject {
  pair: string;
  trader: string;
  isBuy: number;
  amount: BigNumber;
  price: BigNumber;
  executed: BigNumber;
  date: BigNumber;
}
export type SumMarketOrderEvent = TypedEvent<
  [string, string, number, BigNumber, BigNumber, BigNumber, BigNumber],
  SumMarketOrderEventObject
>;

export type SumMarketOrderEventFilter = TypedEventFilter<SumMarketOrderEvent>;

export interface PairNewOrder extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PairNewOrderInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _findIndex(
      _price: PromiseOrValue<BigNumberish>,
      _isBuy: PromiseOrValue<BigNumberish>,
      startIndex: PromiseOrValue<BigNumberish>,
      lengthToFind: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    _findPrevOrder(
      _isBuy: PromiseOrValue<BigNumberish>,
      startIndex: PromiseOrValue<BigNumberish>,
      targetIndex: PromiseOrValue<BigNumberish>,
      lengthToFind: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    createLimitOrder(
      _isBuy: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      prevNodeID: PromiseOrValue<BigNumberish>,
      tickFeeID: PromiseOrValue<BigNumberish>,
      forceCreate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createMarketOrder(
      _isBuy: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    feeController(overrides?: CallOverrides): Promise<[string]>;

    getOrderBook(
      _isBuy: PromiseOrValue<BigNumberish>,
      startIndex: PromiseOrValue<BigNumberish>,
      lengthToFind: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[PairNewOrder.OrderStructOutput[], BigNumber]>;

    listSize(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    mainValueWallet(overrides?: CallOverrides): Promise<[string]>;

    price(overrides?: CallOverrides): Promise<[BigNumber]>;

    removeOrder(
      _isBuy: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      prevIndex: PromiseOrValue<BigNumberish>,
      forceCreate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    settingExchange(overrides?: CallOverrides): Promise<[string]>;

    token0(overrides?: CallOverrides): Promise<[string]>;

    token1(overrides?: CallOverrides): Promise<[string]>;

    updateOrder(
      _isBuy: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      newPriceOrder: PromiseOrValue<BigNumberish>,
      newAmount: PromiseOrValue<BigNumberish>,
      prevIndexAdd: PromiseOrValue<BigNumberish>,
      prevIndexRemove: PromiseOrValue<BigNumberish>,
      tickFeeID: PromiseOrValue<BigNumberish>,
      forceCraete: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  _findIndex(
    _price: PromiseOrValue<BigNumberish>,
    _isBuy: PromiseOrValue<BigNumberish>,
    startIndex: PromiseOrValue<BigNumberish>,
    lengthToFind: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber]>;

  _findPrevOrder(
    _isBuy: PromiseOrValue<BigNumberish>,
    startIndex: PromiseOrValue<BigNumberish>,
    targetIndex: PromiseOrValue<BigNumberish>,
    lengthToFind: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber]>;

  createLimitOrder(
    _isBuy: PromiseOrValue<BigNumberish>,
    _amount: PromiseOrValue<BigNumberish>,
    _price: PromiseOrValue<BigNumberish>,
    prevNodeID: PromiseOrValue<BigNumberish>,
    tickFeeID: PromiseOrValue<BigNumberish>,
    forceCreate: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createMarketOrder(
    _isBuy: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    _price: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  feeController(overrides?: CallOverrides): Promise<string>;

  getOrderBook(
    _isBuy: PromiseOrValue<BigNumberish>,
    startIndex: PromiseOrValue<BigNumberish>,
    lengthToFind: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[PairNewOrder.OrderStructOutput[], BigNumber]>;

  listSize(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  mainValueWallet(overrides?: CallOverrides): Promise<string>;

  price(overrides?: CallOverrides): Promise<BigNumber>;

  removeOrder(
    _isBuy: PromiseOrValue<BigNumberish>,
    index: PromiseOrValue<BigNumberish>,
    prevIndex: PromiseOrValue<BigNumberish>,
    forceCreate: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  settingExchange(overrides?: CallOverrides): Promise<string>;

  token0(overrides?: CallOverrides): Promise<string>;

  token1(overrides?: CallOverrides): Promise<string>;

  updateOrder(
    _isBuy: PromiseOrValue<BigNumberish>,
    index: PromiseOrValue<BigNumberish>,
    newPriceOrder: PromiseOrValue<BigNumberish>,
    newAmount: PromiseOrValue<BigNumberish>,
    prevIndexAdd: PromiseOrValue<BigNumberish>,
    prevIndexRemove: PromiseOrValue<BigNumberish>,
    tickFeeID: PromiseOrValue<BigNumberish>,
    forceCraete: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _findIndex(
      _price: PromiseOrValue<BigNumberish>,
      _isBuy: PromiseOrValue<BigNumberish>,
      startIndex: PromiseOrValue<BigNumberish>,
      lengthToFind: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    _findPrevOrder(
      _isBuy: PromiseOrValue<BigNumberish>,
      startIndex: PromiseOrValue<BigNumberish>,
      targetIndex: PromiseOrValue<BigNumberish>,
      lengthToFind: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    createLimitOrder(
      _isBuy: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      prevNodeID: PromiseOrValue<BigNumberish>,
      tickFeeID: PromiseOrValue<BigNumberish>,
      forceCreate: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    createMarketOrder(
      _isBuy: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    feeController(overrides?: CallOverrides): Promise<string>;

    getOrderBook(
      _isBuy: PromiseOrValue<BigNumberish>,
      startIndex: PromiseOrValue<BigNumberish>,
      lengthToFind: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[PairNewOrder.OrderStructOutput[], BigNumber]>;

    listSize(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mainValueWallet(overrides?: CallOverrides): Promise<string>;

    price(overrides?: CallOverrides): Promise<BigNumber>;

    removeOrder(
      _isBuy: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      prevIndex: PromiseOrValue<BigNumberish>,
      forceCreate: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    settingExchange(overrides?: CallOverrides): Promise<string>;

    token0(overrides?: CallOverrides): Promise<string>;

    token1(overrides?: CallOverrides): Promise<string>;

    updateOrder(
      _isBuy: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      newPriceOrder: PromiseOrValue<BigNumberish>,
      newAmount: PromiseOrValue<BigNumberish>,
      prevIndexAdd: PromiseOrValue<BigNumberish>,
      prevIndexRemove: PromiseOrValue<BigNumberish>,
      tickFeeID: PromiseOrValue<BigNumberish>,
      forceCraete: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CreateLimitOrder(address,address,uint8,uint256,uint256,uint256)"(
      pair?: PromiseOrValue<string> | null,
      trader?: PromiseOrValue<string> | null,
      isBuy?: null,
      amount?: null,
      price?: null,
      date?: null
    ): CreateLimitOrderEventFilter;
    CreateLimitOrder(
      pair?: PromiseOrValue<string> | null,
      trader?: PromiseOrValue<string> | null,
      isBuy?: null,
      amount?: null,
      price?: null,
      date?: null
    ): CreateLimitOrderEventFilter;

    "MarketOrder(address,address,uint8,uint256,uint256,uint256)"(
      pair?: PromiseOrValue<string> | null,
      trader?: PromiseOrValue<string> | null,
      isBuy?: null,
      amount?: null,
      price?: null,
      date?: null
    ): MarketOrderEventFilter;
    MarketOrder(
      pair?: PromiseOrValue<string> | null,
      trader?: PromiseOrValue<string> | null,
      isBuy?: null,
      amount?: null,
      price?: null,
      date?: null
    ): MarketOrderEventFilter;

    "RemoveOrder(address,address,uint8,uint256,uint256,uint256,uint256)"(
      pair?: PromiseOrValue<string> | null,
      trader?: PromiseOrValue<string> | null,
      isBuy?: null,
      amount?: null,
      price?: null,
      executed?: null,
      date?: null
    ): RemoveOrderEventFilter;
    RemoveOrder(
      pair?: PromiseOrValue<string> | null,
      trader?: PromiseOrValue<string> | null,
      isBuy?: null,
      amount?: null,
      price?: null,
      executed?: null,
      date?: null
    ): RemoveOrderEventFilter;

    "RemoveOrderNoUpdateBalances(address,address,uint8,uint256,uint256,uint256,uint256)"(
      pair?: PromiseOrValue<string> | null,
      trader?: PromiseOrValue<string> | null,
      isBuy?: null,
      amount?: null,
      price?: null,
      executed?: null,
      date?: null
    ): RemoveOrderNoUpdateBalancesEventFilter;
    RemoveOrderNoUpdateBalances(
      pair?: PromiseOrValue<string> | null,
      trader?: PromiseOrValue<string> | null,
      isBuy?: null,
      amount?: null,
      price?: null,
      executed?: null,
      date?: null
    ): RemoveOrderNoUpdateBalancesEventFilter;

    "SumMarketOrder(address,address,uint8,uint256,uint256,uint256,uint256)"(
      pair?: PromiseOrValue<string> | null,
      trader?: PromiseOrValue<string> | null,
      isBuy?: null,
      amount?: null,
      price?: null,
      executed?: null,
      date?: null
    ): SumMarketOrderEventFilter;
    SumMarketOrder(
      pair?: PromiseOrValue<string> | null,
      trader?: PromiseOrValue<string> | null,
      isBuy?: null,
      amount?: null,
      price?: null,
      executed?: null,
      date?: null
    ): SumMarketOrderEventFilter;
  };

  estimateGas: {
    _findIndex(
      _price: PromiseOrValue<BigNumberish>,
      _isBuy: PromiseOrValue<BigNumberish>,
      startIndex: PromiseOrValue<BigNumberish>,
      lengthToFind: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _findPrevOrder(
      _isBuy: PromiseOrValue<BigNumberish>,
      startIndex: PromiseOrValue<BigNumberish>,
      targetIndex: PromiseOrValue<BigNumberish>,
      lengthToFind: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createLimitOrder(
      _isBuy: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      prevNodeID: PromiseOrValue<BigNumberish>,
      tickFeeID: PromiseOrValue<BigNumberish>,
      forceCreate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createMarketOrder(
      _isBuy: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    feeController(overrides?: CallOverrides): Promise<BigNumber>;

    getOrderBook(
      _isBuy: PromiseOrValue<BigNumberish>,
      startIndex: PromiseOrValue<BigNumberish>,
      lengthToFind: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    listSize(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mainValueWallet(overrides?: CallOverrides): Promise<BigNumber>;

    price(overrides?: CallOverrides): Promise<BigNumber>;

    removeOrder(
      _isBuy: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      prevIndex: PromiseOrValue<BigNumberish>,
      forceCreate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    settingExchange(overrides?: CallOverrides): Promise<BigNumber>;

    token0(overrides?: CallOverrides): Promise<BigNumber>;

    token1(overrides?: CallOverrides): Promise<BigNumber>;

    updateOrder(
      _isBuy: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      newPriceOrder: PromiseOrValue<BigNumberish>,
      newAmount: PromiseOrValue<BigNumberish>,
      prevIndexAdd: PromiseOrValue<BigNumberish>,
      prevIndexRemove: PromiseOrValue<BigNumberish>,
      tickFeeID: PromiseOrValue<BigNumberish>,
      forceCraete: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _findIndex(
      _price: PromiseOrValue<BigNumberish>,
      _isBuy: PromiseOrValue<BigNumberish>,
      startIndex: PromiseOrValue<BigNumberish>,
      lengthToFind: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _findPrevOrder(
      _isBuy: PromiseOrValue<BigNumberish>,
      startIndex: PromiseOrValue<BigNumberish>,
      targetIndex: PromiseOrValue<BigNumberish>,
      lengthToFind: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createLimitOrder(
      _isBuy: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      prevNodeID: PromiseOrValue<BigNumberish>,
      tickFeeID: PromiseOrValue<BigNumberish>,
      forceCreate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createMarketOrder(
      _isBuy: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    feeController(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getOrderBook(
      _isBuy: PromiseOrValue<BigNumberish>,
      startIndex: PromiseOrValue<BigNumberish>,
      lengthToFind: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    listSize(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mainValueWallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    price(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeOrder(
      _isBuy: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      prevIndex: PromiseOrValue<BigNumberish>,
      forceCreate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    settingExchange(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateOrder(
      _isBuy: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      newPriceOrder: PromiseOrValue<BigNumberish>,
      newAmount: PromiseOrValue<BigNumberish>,
      prevIndexAdd: PromiseOrValue<BigNumberish>,
      prevIndexRemove: PromiseOrValue<BigNumberish>,
      tickFeeID: PromiseOrValue<BigNumberish>,
      forceCraete: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
