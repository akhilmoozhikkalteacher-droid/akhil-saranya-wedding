import { wedding } from "@/data/wedding";

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TARGET = new Date(
  wedding.countdown.target
).getTime();

export function getTimeRemaining(): CountdownTime {

  const difference =
    TARGET - Date.now();

  if (difference <= 0) {

    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

  }

  return {

    days: Math.floor(
      difference /
      (1000 * 60 * 60 * 24)
    ),

    hours: Math.floor(
      (difference /
        (1000 * 60 * 60)) %
        24
    ),

    minutes: Math.floor(
      (difference /
        (1000 * 60)) %
        60
    ),

    seconds: Math.floor(
      (difference / 1000) %
        60
    ),

  };

}

export function isCountdownFinished(
  time: CountdownTime
) {

  return (
    time.days === 0 &&
    time.hours === 0 &&
    time.minutes === 0 &&
    time.seconds === 0
  );

}

export const countdownLabels = [
  {
    key: "days",
    label: "Days",
  },
  {
    key: "hours",
    label: "Hours",
  },
  {
    key: "minutes",
    label: "Minutes",
  },
  {
    key: "seconds",
    label: "Seconds",
  },
] as const;