import React  from "react";

import PageHeader from '../../components/PageHeader';
import TeacherItem from "../../components/TeacherItem";

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
            <TeacherItem />
          </main>
    </div>
  );
}

export default TeacherList;