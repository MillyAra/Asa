import React from 'react'
import Logo from '../imgs_ansiedade/Logo.png'
export function Enviadoemail() {

  return (
    <>
     <header>
          <div>
            <img src={Logo} alt="logo" />
          </div>
      </header>

      <main>
        <div className="emailenvi">
            <h1>E-mail enviado com sucesso!</h1>
            <p>Verifique sua caixa de entrada para atualizar sua senha</p>

        </div>

        <div className="robo">
        <img src={Asarobo} alt="Imagem de um robo"/>
        </div>
      </main>
    </>
  )
}