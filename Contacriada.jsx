import React from 'react'
import Logo from '../imgs_ansiedade/Logo.png'
export function Contacriada() {

  return (
    <>
     <header>
          <div>
            <img src={Logo} alt="logo" />
          </div>
      </header>

      <main>
        <div className="contacri">
            <h1>Conta criada com sucesso!</h1>
            <p>Verifique sua caixa de entrada para validar sua conta</p>

        </div>

        <div className="robo">
        <img src={Asarobo} alt="Imagem de um robo"/>
        </div>
      </main>
    </>
  )
}