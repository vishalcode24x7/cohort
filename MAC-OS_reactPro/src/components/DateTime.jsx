import React, { useEffect, useState } from "react";

const DateTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const amPm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12 || 12;

      const formattedTime = `${days[now.getDay()]} ${months[now.getMonth()]} ${now.getDate()} ${String(hours).padStart(2, "0")}:${minutes} ${amPm}`;

      setTime(formattedTime);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>{time}</p>;
};

export default DateTime;