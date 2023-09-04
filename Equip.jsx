import React from 'react'
import Logo from '../imgs_ansiedade/Logo.png'
import asa3 from '../imgs_equi/3asa.png'
import a2 from '../imgs_equi/asinha2.png'

export function Equip() {

  return (
    <>
      <header>
          <div>
            <img src={Logo} alt="logo" />
          </div>
        </header>

      <main>
        <section className='asa3'>
          <div>
            <img src={asa3} alt="robo asa em tres angulos" />
          </div>
        </section>
         
        <section className='visaogeral'>
          <div>
            <img src={a2} alt="asa azul" />
            <h2>Visão Geral</h2>
          </div>
          <p>Asa é um robô projetado especificamente para auxiliar indivíduos durante crises de ansiedade. 
            Com um design amigável e funcionalidades especializadas, ele proporciona um suporte emocional e 
            prático para ajudar a lidar com os sintomas da ansiedade e promover o bem-estar mental. Seu 
            objetivo é fornecer um espaço seguro e reconfortante para aqueles que enfrentam momentos de 
            intensa ansiedade.</p>
        </section>

        <section className='Carac'>
          <div>
            <img src={a2} alt="asa azul" />
            <h2>Características Físicas</h2>
          </div>
          <p>Ele é compacto, com aproximadamente 40 centímetros de altura, e tem um corpo arredondado e suave. 
            Sua estrutura é feita de soft silicone, tornando o robô suave e durável. Seus olhos são grandes e 
            expressivos, projetados para transmitir empatia e calma. O robô também é equipado com sensores 
            táteis sensíveis ao toque, permitindo interações suaves e naturais.</p>
        </section>

        <section className='Rec'>
          <div>
            <img src={a2} alt="asa azul" />
            <h2>Recursos e Funcionalidades</h2>
          </div>
          <p>
            <ul>Técnicas de Respiração e Relaxamento: O robô guia os usuários por exercícios de respiração 
            profunda e técnicas de relaxamento muscular, ajudando a reduzir a tensão e a ansiedade no momento
            das crises. Esses exercícios estarão disponíveis no aplicativo que acompanha o robô.</ul>
            
            <ul>Interações de Auto Cuidado: Com base nas preferências do usuário, Asa oferece, através do 
            aplicativo, sugestões personalizadas de atividades de auto cuidado, como meditação e música 
            relaxante além de luzes relaxantes para ajudar a aliviar o estresse e a ansiedade.</ul>
             
            <ul>Conexão com Profissionais de Saúde: O robô possui uma rede de contato pré definidos com 
            profissionais de saúde, como o Centro de Valorização à Vida, e outros 3 contatos de emergência 
            introduzidos pelo próprio usuário. Tais números poderão ser acionados através do aplicativo 
            instalado no aparelho móvel do usuário.</ul> 
             </p>
        </section>
         
        <section className='Asa1'>
          <div>
            <img src={a2} alt="asa azul" />
            <h2>Asa</h2>
          </div>
          <p>Lembre-se de que Asa é um auxílio complementar e não substitui a orientação de profissionais de 
            saúde mental qualificados. Sempre procure aconselhamento adequado para obter um diagnóstico e 
            tratamento pessoal.</p>
        </section>

      </main>
    </>
  )
}

