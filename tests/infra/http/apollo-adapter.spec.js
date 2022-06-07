import { ApolloAdapter } from '../../../src/infra/http'

jest.mock('@apollo/client')

describe('ApolloAdapter', () => {
  it('should call ApolloClient setLink and Query', async () => {
    const apolloClientMock = {
      setLink: jest.fn(),
      query: jest.fn().mockImplementationOnce(() => 'sad')
    }

    const sut = new ApolloAdapter(apolloClientMock)
    await sut.request({ url: 'test', query: 'any_query' })

    expect(apolloClientMock.query).toHaveBeenCalledTimes(1)
    expect(apolloClientMock.setLink).toHaveBeenCalledTimes(1)
  })
})
