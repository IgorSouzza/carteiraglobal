export class HttpClientSpy {
  url = ''
  query = ''
  body = null
  response = {
    statusCode: 200
  }

  request (data) {
    this.url = data.url
    this.query = data.query
    this.body = data.body

    return Promise.resolve(this.response)
  }
}
