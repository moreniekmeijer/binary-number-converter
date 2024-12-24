function binaryToInt(binaryNumber) {
    let decimalNumber = 0;
    let binaryString = binaryNumber.toString();

    for (let i = 0; i < binaryString.length; i++) {
        const bit = binaryString[binaryString.length - 1 - i];
        if (bit === '1') {
            decimalNumber += Math.pow(2, i);
        }
    }
    return decimalNumber;
}

function convertBinaryNumber() {
    const binaryInput = document.getElementById("binaryInput").value;
    document.getElementById("decimalResult").value = binaryToInt(binaryInput);
}