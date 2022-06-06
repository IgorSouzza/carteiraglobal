import { render, screen } from '@testing-library/react'

import Portal from '@/presentation/components/Portal'

const makeSut = (wrapperId) => {
  render(
    <>
      <div id={wrapperId} />
      <div id="another-div" />
      <Portal wrapperId={wrapperId || undefined}>
        <h1>Testing</h1>
      </Portal>
    </>
  )
}

describe('Portal', () => {
  it('should add Portal content to another div with wrapperId', () => {
    makeSut('modal-portal-wrapper')

    const heading = screen.getByRole('heading', { name: /testing/i })

    expect(heading).toBeInTheDocument()
    expect(heading.parentElement).toHaveAttribute('id', 'modal-portal-wrapper')
  })

  it('should create a default wrapper if is not created yet in document body', () => {
    makeSut('')

    const heading = screen.getByRole('heading', { name: /testing/i })

    expect(heading).toBeInTheDocument()
    expect(heading.parentElement).toHaveAttribute('id', 'portal-wrapper')
  })
})
