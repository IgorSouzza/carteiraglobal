import { RemoteGetAccumulatedValue } from '../../../src/domain/usecases'

import { HttpClientSpy } from '../mocks'

jest.mock('../../../src/domain/queries/accumulated-value-query', () => {
  return {
    makeAccumulatedValueQuery: () => 'any_query'
  }
})

describe('RemoteGetAccumulatedValue', () => {
  it('should call HttpClient with correct url and query', () => {
    const httpClientSpy = new HttpClientSpy()
    const sut = new RemoteGetAccumulatedValue('/any_url', httpClientSpy)

    const params = {}

    sut.load(params)

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
