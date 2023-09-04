import React from 'react'
import Logo from '../imgs_ansiedade/Logo.png'
import Asarobo from '../imgs_login/asarobo.png'
import Boneco from '../imgs_login/boneco.png'
import Cadeado from '../imgs_login/cadeado.png'
export function Login() {

  return (
    <>
     <header>
          <div>
            <img src={Logo} alt="logo" />
          </div>
      </header>

      <main>
        <div className="login">
          <h1>Login</h1>
          <h2>Faça seu login com os dados que você inseriu durante o seu registro </h2>
        </div>

        <form action="">

          <div className="usuario">
          <img src={Boneco} alt="Imagem de um boneco"/>
            <label htmlFor="usuario">Usuário</label>
            <input type="text" id='usuario' placeholder='Usuário' />
          </div>

          <div className="senha">
          <img src={Cadeado} alt="Imagem de um cadeado"/>
            <label htmlFor="senha">Senha</label>
            <input type="password" id='senha' placeholder='Senha' />
          </div>

          <button>Entrar</button>
        </form>
         <div className="esqueceu">
         <p>Esqueceu sua senha?</p>
         </div>

         <div className="criar">
         <p>Quer participar e ainda não tem um cadastro? Crie sua conta </p>
         </div>
        <div className="robo">
        <img src={Asarobo} alt="Imagem de um robo"/>
        </div>
      </main>
    </>
  )
}

