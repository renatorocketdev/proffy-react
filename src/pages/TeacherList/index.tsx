import React  from "react";

import PageHeader from '../../components/PageHeader';

import whatsappIcon from "../../assets/icons/whatsapp.svg";

import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
            <form id="search-teachers">
              <div className="input-block">
                <label htmlFor="subject">Matéria</label>
                <input type="text" className="subject"/>
              </div>

              <div className="input-block">
                <label htmlFor="subject">Dia da semana</label>
                <input type="text" className="week-day"/>
              </div>

              <div className="input-block">
                <label htmlFor="subject">Hora</label>
                <input type="text" className="time"/>
              </div>
            </form>
          </PageHeader>

          <main>
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
          </main>
    </div>
  );
}

export default TeacherList;