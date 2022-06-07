import React from 'react'
import { ApolloProvider } from '@apollo/client'

import { apolloClient } from '../main/config'
import { makeRemoteGetAccumulatedValue } from '../main/factories/usecases'

import DashboardTemplate from '../presentation/templates/Dashboard'

export default function Home () {
  return (
    <ApolloProvider client={apolloClient}>
      <div>
        <main>
          <DashboardTemplate getAccumulatedValue={makeRemoteGetAccumulatedValue()} />
        </main>
      </div>
    </ApolloProvider>
  )
}
