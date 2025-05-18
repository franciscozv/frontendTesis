import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "dayjs/locale/es";

dayjs.locale("es");
const CalendarEvents = () => {
  const localizer = dayjsLocalizer(dayjs);

  const events = [
    {
      start: dayjs("2025-05-12T12:00:00").toDate(),
      end: dayjs("2025-05-12T14:00:00").toDate(),
      title: "Evento 1",
      data: {
        x: 20,
      },
    },
  ];

  const components = {
    event: (props) => {
      console.log(props);
      return <div>{props.title}</div>;
    },
  };
  return (
    <div style={{ height: "500px" }}>
      <Calendar
        localizer={localizer}
        events={events}
        messages={{
          allDay: "Todo el día",
          previous: "Anterior",
          next: "Siguiente",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
          agenda: "Agenda",
          date: "Fecha",
          time: "Hora",
          event: "Evento",
        }}
        defaultView="month"
        components={components}
      />
    </div>
  );
};

export default CalendarEvents;
