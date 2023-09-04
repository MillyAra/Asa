import React from 'react'
import logo from '../imgs_home/Logo.png'
import robo from '../imgs_home/robozin.png'
import logo2 from '../imgs_home/logo2.png'
import publico from '../imgs_home/publico.png'
import Asa1 from '../imgs_home/Asa1.png'



export function Home() {
  return (
    <>
     <header>
          <div>
            <img src={logo} alt="logo" />
          </div>
        </header>
      
    <main>
        <section className="intro">
          <div>
            <img src={Asa1} alt="Robo_Asa" />
          </div>

          <div>
            <img src={logo2} alt="logo pequena" />
          </div>
          <p>Asa é um robô especializado em proporcionar relaxamento. Ele possui várias funcionalidades projetadas para auxiliar no alívio dos sintomas da ansiedade.</p>
          <p>Ele busca oferecer uma abordagem complementar para o gerenciamento da ansiedade, fornecendo uma experiência reconfortante e prática para aqueles que lidam com essa condição.
          Asa é projetado para ser um complemento ao tratamento da ansiedade, fornecendo suporte adicional e ajudando a criar um ambiente relaxante.</p>
        </section>
        
      <section className="diferente">
        <h2>Diferencial</h2>

        <div>
            <img src={robo} alt="Imagem da cabeça de um robô"/>
        </div>

          <p>A ansiedade é algo que assola o mundo inteiro desde os tempos mais primórdios, então é de se esperar que já existam aparelhos com objetivos semelhantes. Entretanto, nosso diferencial é principalmente seu tamanho, pois, por ser um robô pequeno ao ponto de caber em uma escrivaninha, permite que ele seja transportado para onde quiser. </p>
          <p>Além disso, suas funcionalidades são outra novidade, pois mais do que uma luminária e objeto de decoração, Asa também é especial devido a sua abrangência em questão de ajuda, pois os demais produtos são destinados a públicos ou situações específicas, como em caso de transtorno pós-traumático, por exemplo.</p>

      </section>

      <section className="publico">

        <h2>Público-Alvo</h2>
        <div>
            <img src={publico} alt="icon de pessoas" />
          </div>
          <p>O produto é uma luminária em forma de anjo que pode ser utilizado por pessoas de todas as idades, mas foi desenvolvido especialmente para crianças e adolescentes devido aos altos índices de ansiedade nesse grupo. Ele oferece um suporte prático e reconfortante para aliviar os sintomas e promover o bem-estar emocional. </p>
          <p>O objetivo é preencher essa necessidade específica e fornecer um recurso direcionado para aqueles que são mais propensos a sofrer dessa doença, atendendo a uma demanda específica de combate à ansiedade, especialmente entre crianças e adolescentes, proporcionando um recurso prático e reconfortante para ajudar a aliviar os sintomas e promover o bem-estar emocional.</p>

      </section>
      <section className="botao">

        <button>Crie sua conta gratuitamente</button>

      </section>
      <section id="nav_final">
        <p>Home</p>
        <p>Produto</p>
        <p>Funcionamento</p>
        <p>O que é Ansiedade</p>
        <p>Bibliografia</p>
        <p>Equipamentos utilizados</p>
        <p>Quem somos</p>
      </section>
      </main>
    </>

  )
}

