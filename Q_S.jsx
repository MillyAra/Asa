import React from 'react'
import Logo from '../imgs_ansiedade/Logo.png'
import asinha from '../imgs_qs/asinha.png'
import ari from '../imgs_qs/ari.png'
import dani from '../imgs_qs/dani.png'
import kami from '../imgs_qs/kami.png'
import khikhi from '../imgs_qs/khikhi.png'

export function Q_S() {
   
  return (
    <>
          <header>
          <div>
            <img src={Logo} alt="logo" />
          </div>
        </header>

        <main>
          <section className='qs'>
          <div>
            <img src={asinha} alt="Imagem de uma asa azul"/>
            <h2>Quem somos?</h2>
        </div>
        <p>Somos estudantes do Colégio Unasp, cursando  terceiro ano do EM integrado com curso de TI, 
          finalizando mais uma etapa de nossas vida acadêmica com o projeto do TCC  de Robótica, ASA.</p>
          </section>

          <section className='fotinhas'>

          <div className='ari'>
            <img src={ari} alt="Imagem de uma menina linda"/>
            <p>Aricia Carolina Silva Lima</p>
        </div>

        <div className='dani'>
            <img src={dani} alt="Imagem de uma menina linda"/>
            <p>Danielle Nogueira Ramos</p>
        </div>

        <div className='kami'>
            <img src={kami} alt="Imagem de uma menina linda"/>
            <p>Kamilly Chicareli Affonso Araujo</p>
        </div>

        <div className='khikhi'>
            <img src={khikhi} alt="Imagem de uma menina linda"/>
            <p>Julia Khiara da Silva Vaz</p>
        </div>
          </section>
        </main>
    </>
  )
}

