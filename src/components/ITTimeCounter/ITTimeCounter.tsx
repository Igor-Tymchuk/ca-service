import React, { useEffect, useState } from "react";
import s from "./ITTimeCounter.module.css";
import { useTranslation } from "react-i18next";

interface ITTime {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ITTimeCounter: React.FC = () => {
  const [elapsedTime, setElapsedTime] = useState<ITTime>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const { t } = useTranslation();
  useEffect(() => {
    const startDate = new Date("2024-04-05");
    const mathCount = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      const months = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44)
      );
      const days = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setElapsedTime({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
      });
    };
    mathCount();
    const interval = setInterval(mathCount, 1000);

    return () => clearInterval(interval);
  }, []);
  const { years, months, days, hours, minutes, seconds } = elapsedTime;
  return (
    <div className={s.box}>
      <h1>{t("my_it_journey")}</h1>
      <div>
        {years > 0 && (
          <span className={s.count}>
            {years}
            <span className={s.text}>{t("years")}&nbsp;</span>
          </span>
        )}
        <span className={s.count}>
          {months}
          <span className={s.text}>{t("months")}&nbsp;</span>
        </span>
        <span className={s.count}>
          {days}
          <span className={s.text}>{t("days")}&nbsp;</span>
        </span>
        <span className={s.count}>
          {hours}
          <span className={s.text}>{t("hours")}&nbsp;</span>
        </span>
        <span className={s.count}>
          {minutes} <span className={s.text}>{t("minutes")}&nbsp;</span>
        </span>
        <span className={s.count}>
          {seconds}
          <span className={s.text}>{t("seconds")}</span>
        </span>
      </div>
    </div>
  );
};

export default ITTimeCounter;
