import React from 'react'
import { ApolloProvider } from '@apollo/client'

import { apolloClient } from '../main/config'
import { makeRemoteGetAccumulatedValue } from '../main/factories/usecases'

import { AccumulatedvalueProvider } from '../presentation/context'

import DashboardTemplate from '../presentation/templates/Dashboard'

export default function Home () {
  return (
    <ApolloProvider client={apolloClient}>
      <AccumulatedvalueProvider>
        <div>
          <main>
            <DashboardTemplate getAccumulatedValue={makeRemoteGetAccumulatedValue()} />
          </main>
        </div>
      </AccumulatedvalueProvider>
    </ApolloProvider>
  )
}
