import Footer from './Footer.jsx'
import {render, screen} from '@testing-library/react'

describe('<Footer />', () => {
  it('Should render without crash', async () => {
    render(<Footer />)
  })
  it("Should display Livraison gratuite dans toute l'Europe", async () => {
    render(<Footer />)
    const element = screen.getByTestId('Livraison')
    expect(element.textContent).toBe("Livraison gratuite dans toute l'Europe")
  })
  it('Should SVG Visa exist', async () => {
    render(<Footer />)
    expect(screen.getByTestId('Visa')).toBeTruthy()
  })
  it('Should display Téléphone', async () => {
    render(<Footer />)
    const element = screen.getByTestId('Telephone')
    expect(element.textContent).toBe('Téléphone : ')
  })
  it('Should display Abonnez-vous à la newsletter', async () => {
    render(<Footer />)
    const element = screen.getByTestId('ButtonAbonnezVous')
    expect(element.textContent).toBe('Abonnez-vous à la newsletter')
  })
  it('Should display Copyright ©', async () => {
    render(<Footer />)
    const element = screen.getByTestId('Copyright')
    expect(element.textContent).toBe('Copyright ©')
  })
  it('Should BubbleChat exist', async () => {
    render(<Footer />)
    const element = screen.getByTestId('BubbleChat')
    expect(element.textContent).toBeTruthy()
  })
})
