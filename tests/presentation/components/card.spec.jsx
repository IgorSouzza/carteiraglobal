import { render, screen } from '@testing-library/react'
import Card from '../../../src/presentation/components/Card'

describe('<Card />', () => {
  it('should render correctly with children and title', () => {
    const { container } = render(
      <Card title="Card Title">
        <p>Card Children Text</p>
      </Card>
    )

    const title = screen.getByRole('heading', { name: /card title/i })
    const children = screen.getByText(/card children text/i)

    expect(title).toBeInTheDocument()
    expect(children).toBeInTheDocument()
    expect(children.tagName).toBe('P')
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should be able to add a custom class', () => {
    render(
      <Card title="Card Title" customClass="my-custom-class">
        <p>Card Children Text</p>
      </Card>
    )

    const wrapper = screen.getByRole('heading', {
      name: /card title/i
    }).closest('div')

    expect(wrapper).toHaveClass('my-custom-class')
  })
})
