import React from 'react'
import Logo from '../imgs_ansiedade/Logo.png'
import Asarobo from '../imgs_login/asarobo.png'
export function Criar() {

  return (
    <>
     <header>
          <div>
            <img src={Logo} alt="logo" />
          </div>
      </header>

      <main>
        <div className="criarconta">
          <h1>Criar conta</h1>
          <h2>Insira seus dados para criar uma nova conta, após isso verifique a sua caixa de entrada</h2>
        </div>

        <form action="">

          <div className="nome">
            <label htmlFor="nome">Nome completo</label>
            <input type="text" id='nome' placeholder='Nome completo' />
          </div>

          <div className="emailc">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' placeholder='email' />
          </div>

          <div className="senhac">
            <label htmlFor="senha">Senha</label>
            <input type="password" id='senha' placeholder='Senha' />
          </div>

          <div className="senhac2">
            <label htmlFor="senha">Senha</label>
            <input type="password" id='senha' placeholder='Confirmar senha' />
          </div>

          <button>Criar</button>
        </form>

        <div className="robo">
        <img src={Asarobo} alt="Imagem de um robo"/>
        </div>
      </main>
    </>
  )
}