import { makeFinancialProjectionQuery } from '../queries'

/** Class responsable to get and return information from HttpClient */
export class RemoteGetFinancialProjection {
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
   * Call Adapter and returns API body
   * @param {Object} params - Params to be sent to the API
   * @param {number} params.installmentValue - The amount that is added monthly
   * @param {number} params.installmentValue - Initial investment
   * @param {number} params.time - Time in months
   * @param {number} params.interestRate - Interest rate
   * @returns {any}
   */
  async load (params) {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      query: makeFinancialProjectionQuery(params)
    })

    return httpResponse.body
  }
}
