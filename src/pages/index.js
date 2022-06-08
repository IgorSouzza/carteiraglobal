import React from 'react'
import { ApolloProvider } from '@apollo/client'

import { apolloClient } from '../main/config'
import { makeRemoteGetAccumulatedValue } from '../main/factories/usecases'

import {
  AccumulatedvalueProvider,
  FinancialProjectionProvider
} from '../presentation/context'

import DashboardTemplate from '../presentation/templates/Dashboard'

export default function Home () {
  return (
    <ApolloProvider client={apolloClient}>
      <AccumulatedvalueProvider>
        <FinancialProjectionProvider>
          <main>
            <DashboardTemplate getAccumulatedValue={makeRemoteGetAccumulatedValue()} />
          </main>
        </FinancialProjectionProvider>
      </AccumulatedvalueProvider>
    </ApolloProvider>
  )
}
