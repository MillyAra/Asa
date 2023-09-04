import { useState } from 'react'
import './index.css'
import {List, X} from '@phosphor-icons/react'



function Header() {
    const[abrirFechar, setAbrirFechar] = useState(false)

    function handleAbrirFecharMenu(){
        if(abrirFechar){
            setAbrirFechar(false)
            return
        }

        setAbrirFechar(true)
    }

  return (
    <header>
        <div className="menu-mobile">
            <div className="botao-menu">
                <button onClick={handleAbrirFecharMenu}>{abrirFechar == true ? <X size={32} />: <List size={32} />}</button>
            </div>

        <div className={` menu ${abrirFechar ? "" : "close"}`}>
            <nav>
                <a href="./Ansiedade.jsx/components"></a>
                <a href=""></a>
                <a href=""></a>
            </nav>
        </div>

        </div>
    </header>
  )
}

export default Header