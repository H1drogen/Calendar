import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Calendar } from '@fullcalendar/core'
import interactionPlugin, { Draggable } from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const calendarEl = document.getElementById('calendar')
const calendar = new Calendar(calendarEl, {
    selectable: true,
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    plugins: [
        interactionPlugin,
        dayGridPlugin
    ],
    droppable: true,
    editable: true,
    events: [
        { title: 'Meeting', start: new Date() }
    ]
})

calendar.render()


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
