// Modules
import React, { useState, FormEvent }  from "react";
import api from "../../services/api";

// Components
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

// Css
import './styles.css';

// Img
import warningIcon from '../../assets/icons/warning.svg';


function TeacherForm() {
  // Model States
  const [ name, setName] = useState('');
  const [ avatar, setAvatar] = useState('');
  const [ whatsapp, setWhatsApp] = useState('');
  const [ bio, setBio] = useState('');

  const [ subject, setsubject] = useState('');
  const [ cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: ''},
  ]);

  // Adding new Schedule from button
  function AddNewScheduleItems(){
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: ''},
    ]);

    scheduleItems.push();
  }

  // Updating Shedule item with the parameters
  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItem = scheduleItems.map((scheduleItem, index) => {
      if(index === position){
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItem);  
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule: scheduleItems
    }).then(() => {alert("Cadastro feito com sucesso")}).catch((error) => {alert(error.message)});
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrível você quer dar aulas." 
        description="O primeiro passo, é preencher esse formulário de inscrição"/>

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus Dados</legend>

            <Input 
              name="name" 
              label="Nome completo"
              value={name}
              onChange={(e) => { setName(e.target.value); }}
            />

            <Input 
              name="avatar" 
              label="Avatar" 
              value={avatar}
              onChange={(e) => { setAvatar(e.target.value); }}
            />

            <Input 
              name="whatsapp" 
              label="WhatsApp" 
              value={whatsapp}
              onChange={(e) => { setWhatsApp(e.target.value); }}
            />

            <TextArea 
              name="bio" 
              label="Biografia" 
              value={bio}
              onChange={(e) => { setBio(e.target.value); }}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select 
              name="subject" 
              label="Matéria"
              value={subject}
              onChange={(e) => { setsubject(e.target.value); }}
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

            <Input 
              name="cost" 
              label="Custo da sua hora por aula" 
              value={cost}
              onChange={(e) => { setCost(e.target.value); }}
            />
          </fieldset>

          <fieldset>
            <legend>Hórarios disponíveis 
              <button type="button" onClick={AddNewScheduleItems}>
                + Novo horário
              </button>
            </legend>

          {scheduleItems.map((scheduleItem, index) => {
            return (
              <div key={scheduleItem.week_day} className="schedule-item">
              <Select 
                name="week_day" 
                label="Dia da semana" 
                value={scheduleItem.week_day}
                onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                options={[
                  { value: "1", label: "Domingo"},
                  { value: "2", label: "Segunda-feira"},
                  { value: "3", label: "Terça-feira"},
                  { value: "4", label: "Quarta-feira"},
                  { value: "5", label: "Quinta-feira"},
                  { value: "6", label: "Sexta-feira"},
                  { value: "7", label: "Sábado"},
                ]}
              />

              <Input 
                type="time" 
                name="from" 
                label="Das"
                value={scheduleItem.from}
                onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
              />

              <Input 
                type="time" 
                name="to" 
                label="Até"
                value={scheduleItem.to}
                onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
              />
            </div>
            ) 
          })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso Importante"/>
              Importante!! <br/>
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;