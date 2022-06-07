export class RemoteGetAccumulatedValue {
  url = ''
  httpClient = null

  constructor (url, httpClient) {
    this.url = url
    this.httpClient = httpClient
  }

  async load (data) {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      query: data.query
    })

    return httpResponse.body
  }
}
