const formatTime = (dateString) => {
    // Convert the date string into a Date object
    let dateObj = new Date(dateString);
    // Get the time portion of the Date object
    const timeString = dateObj.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });

    // Determine if it's AM or PM
    const period = dateObj.getHours() < 12 ? "am" : "pm";

    // Format the final time string
    const formattedTime = `${timeString}${period}`;

    return formattedTime;
};

const formatDate = (dateString) => {
    // Convert the date string into a Date object
    let dateObj = new Date(dateString);
    // Get the date portion of the Date object
    const date = dateObj.toLocaleDateString();

    return date;
};

export { formatTime, formatDate };
