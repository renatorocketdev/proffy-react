// React
import React  from "react";

// Components
import PageHeader from '../../components/PageHeader';
import TeacherItem from "../../components/TeacherItem";
import Select from "../../components/Select";
import Input from "../../components/Input";

// Css
import './styles.css';


function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Select 
            name="subject" 
            label="Matéria" 
            options={[
              { value: "Artes", label: "Artes"},
              { value: "Biologia", label: "Biologia"},
              { value: "Física", label: "Física"},
              { value: "Matemática", label: "Matemática"},
              { value: "Química", label: "Química"},
              { value: "Fisolofia", label: "Fisolofia"},
              { value: "Sociologia" , label: "Sociologia"}
            ]}
          />
          
          <Select 
            name="week_day" 
            label="Dia da semana" 
            options={[
              { value: "1", label: "Domingo"},
              { value: "2", label: "Segunda-feira"},
              { value: "3", label: "Terça-feira"},
              { value: "4", label: "Quarta-feira"},
              { value: "5", label: "Quinta-feira"},
              { value: "6", label: "Sexta-feira"},
              { value: "6", label: "Sábado"},
            ]}
          />
          <Input type="time" label="Hora" name="time" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;