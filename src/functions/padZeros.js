// takes any number or string and padds it with the specified number of zeros
function padZeros(any, n) {
    return String(any).padStart(n,"0");
}

export default padZeros;