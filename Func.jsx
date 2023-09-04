import React from 'react'
import engre from '../imgs_func/engrenagem.png'
import video from '../imgs_func/video.png'
import logo from '../imgs_home/Logo.png'

export function Func() {

  return (
    <>
      <header>
          <div>
            <img src={logo} alt="logo" />
          </div>
        </header>
      
    <main>
        <section className="func">

          <div>
            <img src={engre} alt="icon de de engrenagem" />
            <h2>Funcionamento</h2>
          </div>
          <div id='Lista'>
          <p>Suas funcionalidades consistem em:</p>
          <li>
            <ul>Uma lista telefônica de números de emergência: O sistema fornece uma lista de números de telefone de emergência, como o serviço de atendimento de emergência, bombeiros, polícia, entre outros. Isso permite que os usuários acessem rapidamente esses números em caso de necessidade.</ul>
          </li>
        
          <li>
            <ul>Luzes com cores calmantes e diminuição gradual de luminosidade: Este dispositivo possui luzes que emitem cores que são consideradas calmantes, ou seja, cores que têm um efeito relaxante sobre as pessoas. Além disso, as luzes também podem ser gradualmente diminuídas em intensidade, o que pode ajudar a criar um ambiente tranquilo. Estudos têm mostrado que ambientes tranquilos podem ajudar a reduzir os sintomas da ansiedade.</ul>
          </li>
          <li>
            <ul>Números específicos para ajudar: O sistema também inclui números de contato específicos para oferecer ajuda em situações de emergência ou necessidade. Esses números podem incluir serviços como o Centro de Valorização da Vida (CVV), bombeiros, polícia e o Serviço de Atendimento Móvel de Urgência (Samu), que são contatos comuns para diferentes tipos de emergências, além de contatos de confiança fornecidos pelo próprio usuário.</ul>
          </li>
          <li>
            <ul>Alarmes pré definidos pelo usuário e sons calmantes ASMR: O usuário tem a opção de configurar alarmes personalizados no sistema. Além disso, o dispositivo também é capaz de reproduzir sons ASMR (Autonomous Sensory Meridian Response), que são sons suaves e relaxantes que podem ajudar a induzir uma sensação de bem-estar e tranquilidade.</ul>
          </li>
          </div>

          <div id="video">
          <img src={video} alt="thumb do video de apresentação" />

          </div>
      </section>
      </main>
    </>
  )
}

