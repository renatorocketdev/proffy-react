// Modules
import React  from "react";

// Components
import PageHeader from '../../components/PageHeader';

// Css
import './styles.css';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrível você quer dar aulas." 
        description="O primeiro passo, é preencher esse formulário de inscrição"/>

      <main>
        <fieldset>
          <legend>Seus Dados</legend>

          <div className="input-block">
              <label htmlFor="name">Nome completo</label>
              <input type="text" className="name"/>
          </div>

          <div className="input-block">
              <label htmlFor="avatar">Avatar</label>
              <input type="text" className="avatar"/>
          </div>

          <div className="input-block">
              <label htmlFor="whatsapp">WhatsApp</label>
              <input type="text" className="whatsapp"/>
          </div>
        </fieldset>
      </main>
    </div>
  );
}

export default TeacherForm;