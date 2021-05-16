/**
 * Coverts datetime to Month day, year, time comma-separated
 * args - dateTime
 * example:  converts 1523647508250 to "13 April, 2018, 2:25 AM"
 */
export const createDateTime = (dateTime) => {
  let intlFormat = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "long",
    timeStyle: "medium",
  }).format(dateTime);

  const dateTimeFormat = intlFormat.split(" ");

  return (
    dateTimeFormat[0] +
    " " +
    dateTimeFormat[1] +
    ", " +
    dateTimeFormat[2] +
    ", " +
    convertTo12Hour(dateTimeFormat[4])
  );
};
/**
 * Coverts 24 hour time to 12 hour time
 * args - time
 *  example:  converts 14:25:08 to 2:25 AM
 */
export const convertTo12Hour = (time) => {
  const res = time.split(":");
  let hours = res[0];
  const AmOrPm = hours >= 12 ? "AM" : "PM";
  hours = hours % 12 || 12;
  const minutes = res[1];
  return hours + ":" + minutes + " " + AmOrPm;
};

/*
 * compares a and b returns 1 if a is greater else -1
 * args - a,b
 */
export const sortColumn = (a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};
