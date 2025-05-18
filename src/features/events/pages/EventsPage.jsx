import CalendarEvents from "../components/CalendarEvents";

const EventsPage = () => {
  return (
    <div>
      <h1>Eventos</h1>
      <p>Esta es la página de eventos.</p>
      <p>Pronto podrás ver los eventos disponibles.</p>
      <p>¡Mantente atento!</p>
      <p>
        Si quieres ver los eventos de la comunidad, puedes ir a la sección de
        eventos.
      </p>
      <CalendarEvents />
    </div>
  );
};

export default EventsPage;
