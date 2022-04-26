import SignIn from './SignIn'
import ForgotPassword from './ForgotPassword'
import {render, screen, fireEvent} from '@testing-library/react'
import SignInModalsContextProvider from '../../../contexts/SignInModalsContext.jsx'

describe('SignIn Component', () => {
  const renderSignIn = () => {
    render(
      <SignInModalsContextProvider>
        <SignIn />)
      </SignInModalsContextProvider>,
    )
  }

  it('Should render without crash', async () => {
    renderSignIn()
  })
  it('Should display : * E-mail', async () => {
    renderSignIn()

    const element = screen.getByTestId('email')
    expect(element.textContent).toBe('* E-mail')
  })
  it('Should display : * Mot de passe', async () => {
    renderSignIn()

    const element = screen.getByText(`* Mot de passe`)
    expect(element).toHaveTextContent(`* Mot de passe`)
  })
  it("Should display twice : S'identifier", async () => {
    renderSignIn()

    const element = screen.getAllByText(`S'identifier`)
    expect(element).toHaveLength(2)
  })
  it('Should display button : Mot de passe oublié ?', async () => {
    renderSignIn()

    const element = screen.getByRole('button', {name: /Mot de passe oublié ?/})
    expect(element).toHaveTextContent(`Mot de passe oublié ?`)
  })
  it('Should display button : Créer un compte', async () => {
    renderSignIn()

    const element = screen.getByRole('button', {name: /Créer un compte/})
    expect(element).toHaveTextContent(`Créer un compte`)
  })
  it('Should display modal ForgotPassword when click button', async () => {
    renderSignIn()

    const element = screen.getByRole('button', {name: /Mot de passe oublié ?/i})
    fireEvent.click(element)
    render(
      <SignInModalsContextProvider>
        <ForgotPassword />)
      </SignInModalsContextProvider>,
    )
    const forgotPass = screen.getByText(`Mot de passe oublié`)
    const email = screen.getByTestId('email')
    const btnCancel = screen.getByRole('button', {name: /Annuler/})
    const btnSubmit = screen.getByRole('button', {name: /Soumettre/})
    
    expect(forgotPass).toHaveTextContent(`Mot de passe oublié`)
    expect(email.textContent).toBe('* E-mail')
    expect(btnCancel).toHaveTextContent(`Annuler`)
    expect(btnSubmit).toHaveTextContent(`Soumettre`)
  })
})
