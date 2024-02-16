import {
  execute,
  PrismQueryPairsDocument,
  PrismQueryPairsQuery,
  PrismQueryTokensDocument,
  PrismQueryTokensQuery,
  PrismQueryHistoryWalletsDocument,
  PrismQueryHistoryWalletsQuery,
  PrismQueryHistoryOrdersDocument,
  PrismQueryHistoryOrdersQuery,
  PrismQueryHistoryMarketsDocument,
  PrismQueryHistoryMarketsQuery,
  PrismQueryDatasPairDocument,
  PrismQueryDatasPairQuery,
} from '../.graphclient'

export async function queryPairs() {
  const data = await execute(PrismQueryPairsDocument, {})
  return data.data as PrismQueryPairsQuery
}

export async function queryTokens() {
  const data = await execute(PrismQueryTokensDocument, {})
  return data.data as PrismQueryTokensQuery
}

export async function queryWalletHistorys(address: String) {
  const data = await execute(PrismQueryHistoryWalletsDocument, {
    Address: address,
  })
  return data.data as PrismQueryHistoryWalletsQuery
}

export async function queryHistoryOrders(address: String) {
  const data = await execute(PrismQueryHistoryOrdersDocument, {
    Address: address,
  })
  return data.data as PrismQueryHistoryOrdersQuery
}

export async function queryHistoryMarkets(pair: String) {
  const data = await execute(PrismQueryHistoryMarketsDocument, {
    Pair: pair,
  })
  return data.data as PrismQueryHistoryMarketsQuery
}

export async function queryDatasPair(pair: String) {
  const data = await execute(PrismQueryDatasPairDocument, {
    Pair: pair,
  })
  return data.data as PrismQueryDatasPairQuery
}
