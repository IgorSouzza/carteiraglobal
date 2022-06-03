import { render, screen } from '@testing-library/react'
import Header from '../../../src/presentation/components/Header'

describe('<Header />', () => {
  it('should render correctly', () => {
    const { container } = render(<Header />)

    const logo = screen.getByRole('img', { name: /planejador de poupança/i })
    const text = screen.getByRole('heading', { name: /planejador de poupança/i })

    expect(logo).toBeInTheDocument()
    expect(text).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
