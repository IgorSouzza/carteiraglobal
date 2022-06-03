import { tc } from '@/presentation/utils'

describe('TailClasses', () => {
  it('should be able to trim all line breaks from string', () => {
    const string = `
      test1
      test2
    `

    const withoutBreak = tc(string)

    expect(withoutBreak).toBe('test1 test2')
  })
})
