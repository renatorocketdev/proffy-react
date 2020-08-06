import React from 'react';

import whatsappIcon from "../../assets/icons/whatsapp.svg";

import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/40499768?s=460&u=28d46815dbf552f9ba15d908d05cf5d0c42b9d31&v=4" alt="Proffy"/>
          <div>
            <strong>Renato Alves</strong>
            <span>Programação</span>
          </div>
          
          </header>
            <p>
              Programador Junior
              <br/><br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat mi, porttitor at nunc molestie, sagittis consectetur diam. Suspendisse sed metus lectus. Maecenas a venenatis metus. Nunc sodales, erat rhoncus sagittis vulputate, enim elit egestas urna, accumsan finibus diam nunc et velit. Vivamus consequat, sapien at pulvinar suscipit, metus quam semper augue, et placerat erat metus id mauris. Fusce vel ipsum quam. Nulla ac augue et justo dignissim malesuada quis id dui.
            </p>

            <footer>
              <p>
                Preço/hora
                <strong>R$ 80,00</strong>
              </p>
              
              <button type="button">
                <img src={whatsappIcon} alt="Entrar em contato"/>
                Entrar em contato
              </button>
            </footer>
      </article>
  );
}

export default TeacherItem;