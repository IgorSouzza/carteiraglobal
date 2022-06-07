import React from 'react'
import { ApolloProvider } from '@apollo/client'

import { apolloClient } from '../main/config'

import DashboardTemplate from '../presentation/templates/Dashboard'

export default function Home () {
  return (
    <ApolloProvider client={apolloClient}>
      <div>
        <main>
          <DashboardTemplate />
        </main>
      </div>
    </ApolloProvider>

  )
}
