import { render, screen } from '@testing-library/react'
import { Example } from '.'

const { getByRole } = screen

describe('<PlanCard />', () => {
  it('should render by default', () => {
    render(<Example />)

    const heading = getByRole('heading', { name: 'Example' })

    expect(heading).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<Example />)

    expect(container).toMatchSnapshot()
  })
})
