import React from 'react'
import Logo from '../imgs_ansiedade/Logo.png'
import Asarobo from '../imgs_login/asarobo.png'
import Email from '../imgs_login/email.png'
export function Esqueceu() {

  return (
    <>
     <header>
          <div>
            <img src={Logo} alt="logo" />
          </div>
      </header>

      <main>
        <div className="rec">
          <h2>Para recuperar a sua senha insira o e-mail cadastrado na plataforma </h2>
        </div>

        <form action="">

          <div className="email">
          <img src={Email} alt="Imagem de um emvelope"/>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' placeholder='email' />
          </div>

          <button>Enviar</button>
        </form>
         
        <div className="robo">
        <img src={Asarobo} alt="Imagem de um robo"/>
        </div>
      </main>
    </>
  )
}
