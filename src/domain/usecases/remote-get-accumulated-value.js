/** Class responsable to get and return information from HttpClient */
export class RemoteGetAccumulatedValue {
  url = ''
  httpClient = null

  /**
   * Variables needed to call adapter request
   * @param {string} url - URL will be sent in load function
   * @param {ApolloAdapter} httpClient - Adapter to make a call
   */
  constructor (url, httpClient) {
    this.url = url
    this.httpClient = httpClient
  }

  /**
   * Make a request to some URL
   * @param {Object} data - Data to be sent to the API
   * @param {string} data.query - GraphQL Query
   * @returns {any}
   */
  async load (data) {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      query: data.query
    })

    return httpResponse.body
  }
}
