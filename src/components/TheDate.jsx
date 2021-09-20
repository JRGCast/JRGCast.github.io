import { useEffect, useState } from "react";

const TheDate = () => {
  const [theDate, setTheDate] = useState('');
  useEffect(() => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    };
    const actualDate = new Date().toLocaleString('pt-br', options);
    setTheDate(actualDate);
    setInterval(() => {
      const actualDate = new Date().toLocaleString('pt-br', options);
      setTheDate(actualDate);
    }, 1000);
  }, []);
  return (<span>{ theDate }</span>);
};

export default TheDate;
