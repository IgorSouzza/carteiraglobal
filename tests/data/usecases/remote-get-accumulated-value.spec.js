import { RemoteGetAccumulatedValue } from '../../../src/data/usecases'

import { HttpClientSpy } from '../mocks'

describe('RemoteGetAccumulatedValue', () => {
  it('should call HttpClient with correct url and query', () => {
    const httpClientSpy = new HttpClientSpy()
    const sut = new RemoteGetAccumulatedValue('/any_url', httpClientSpy)

    sut.load({ query: 'any_query' })

    expect(httpClientSpy.url).toBe('/any_url')
    expect(httpClientSpy.query).toBe('any_query')
  })

  it('should return a body if HttpClient returns 200', async () => {
    const httpClientSpy = new HttpClientSpy()
    const sut = new RemoteGetAccumulatedValue('/any_url', httpClientSpy)

    const httpResult = { data: { futureValue: 200 } }

    httpClientSpy.response = {
      statusCode: 200,
      body: httpResult
    }

    const response = await sut.load({ query: 'any_query' })

    expect(response).toBe(httpResult)
  })
})
