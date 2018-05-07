import ms from "ms";

export const getNextLunchtime = (hours, minutes) => {
  console.log("getNextLunchtime called");

  var lunchtime = new Date();

  lunchtime.setHours(hours);
  lunchtime.setMinutes(minutes);
  lunchtime.setSeconds(0);
  lunchtime.setMilliseconds(0);

  // if we've already had lunch today, start planning
  // tomorrow's lunch
  if (lunchtime < Date.now()) lunchtime.setDate(lunchtime.getDate() + 1);

  return lunchtime;
};

export const millisecondsUntil = date => {
  console.log("millisecondsUntil called");

  return date - Date.now();
};

export const howLongUntilLunch = (hours, minutes) => {
  console.log("howLongUntilLunch called");

  // lunch is at 12.30
  if (hours === undefined) hours = 12;
  if (minutes === undefined) minutes = 30;

  var millisecondsUntilLunchTime = millisecondsUntil(
    getNextLunchtime(hours, minutes)
  );
  return ms(millisecondsUntilLunchTime, { long: true });
};
