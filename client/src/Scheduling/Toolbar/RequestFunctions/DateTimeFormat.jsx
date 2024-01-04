export const formatDate = (dateString) => {
  // Convert the date string into a Date object
  let dateObj = new Date(dateString);
  // Get the time portion of the Date object
  const timeString = dateObj.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "UTC",
  });

  const period = dateObj.getUTCHours() < 12 ? "am" : "pm";

  // Format the final time string
  const formattedTime = `${timeString}${period}`;

  return formattedTime;
};

export const extractDate = (dateString) => {
  // Convert the date string into a Date object
  let dateObj = new Date(dateString);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the day of the week from the Date object
  const dayIndex = dateObj.getDay();
  const dayOfWeek = daysOfWeek[dayIndex];

  // Get the date portion from the Date object
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1; // Months are zero-indexed, so add 1
  const day = dateObj.getDate();

  // Format the date string in the desired format (e.g., YYYY-MM-DD)
  const formattedDate = `${dayOfWeek}, ${day < 10 ? "0" + day : day}-${
    month < 10 ? "0" + month : month
  }-${year}`;

  return formattedDate;
};

export const convertTimeToString = (dateTime) => {
  if (dateTime) {
    const selectedDate = new Date(dateTime);
    const formattedDateTime = selectedDate.toISOString().slice(0, 19); // Format as YYYY-MM-DDTHH:mm:ss
    return formattedDateTime;
  }
};

export function convertStringToDateTime(dateTimeString) {
  console.log(dateTimeString);
  if (!dateTimeString) {
    return null; // or handle the case when the string is empty
  }

  const dateTimeObject = new Date(dateTimeString);
  console.log(dateTimeObject);
  return dateTimeObject;
}

export function checkTimeAhead(startTime, endTime, duration) {
  startTime = convertStringToDateTime(startTime);
  endTime = convertStringToDateTime(endTime);
  return endTime - startTime >= duration * 60 * 1000;
}
