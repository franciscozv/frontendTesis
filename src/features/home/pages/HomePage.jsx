import dayjs from "dayjs";
import { useEffect, useState } from "react";
const HomePage = () => {
  const [currentTime, setCurrentTime] = useState(dayjs().format("HH:mm:ss"));
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().format("HH:mm:ss"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>Bienvenido a la página de inicio</h1>
      <p>Esta es la página de inicio de la aplicación.</p>
      <p>La hora actual es: {currentTime}</p>
      <p>¡Disfruta navegando por la aplicación!</p>
    </div>
  );
};

export default HomePage;
