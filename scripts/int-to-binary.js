function intToBinary(decimalNumber) {
    let binary = "";

    while (decimalNumber > 0) {
        let remainder = decimalNumber % 2;
        decimalNumber = Math.floor(decimalNumber / 2);
        binary = remainder + binary;
    }
    return binary;
}

function convertDecimalNumber() {
    const decimalInput = document.getElementById("decimalInput").value;
    document.getElementById("binaryResult").value = intToBinary(decimalInput);
}