import { gql, HttpLink } from '@apollo/client'

export class ApolloAdapter {
  apolloClient = null

  constructor (apolloClient) {
    this.apolloClient = apolloClient
  }

  async request (data) {
    this.apolloClient.setLink(new HttpLink({
      uri: data.url
    }))

    const response = await this.apolloClient.query({
      query: gql`
        ${data.query}
      `
    })

    return {
      statusCode: 200,
      body: response.data
    }
  }
}
