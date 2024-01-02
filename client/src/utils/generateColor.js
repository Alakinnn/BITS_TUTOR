import md5 from "md5";

// Function to generate a unique color based on input string
function generateColor(inputString) {
    // Use md5 hash function (you need to include an md5 library)
    const hashedValue = md5(inputString);

    // Take the first 6 characters of the hash to get a valid hex color code
    const hexColor = "#" + hashedValue.slice(0, 6);

    return hexColor;
}

export default generateColor;
