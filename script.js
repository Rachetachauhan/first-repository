console.log("this is my script")
let submitbtn = document.getElementById("submitbtn")
let resultconst = document.getElementById("resultconst")
let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "akshaykumar",
    "email": "akshaykumar@codewithharry.com",
    "score": 0.64,
    "state": "undeliverable",
    "domain": "codewithharry.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}

submitbtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("clicked..")

    resultconst.innerHTML = `<img width="132px" src="loading.svg">`

    let apikey = "ema_live_zxj6LOCI1STnp55nyr243r4QH4F0Q17nSkUfOMdX"
    let email = document.getElementById("username").value

    let url = `https://api.emailvalidation.io/v1/info?apikey=${apikey}&email=${email}`

    let res = await fetch(url)
    let apiresult = await res.json()

    let str = ""

    for (let key of Object.keys(apiresult)) {
        if (apiresult[key] !== "" && apiresult[key] !== null) {
            str += `<div>${key}: ${apiresult[key]}</div>`
        }
    }

    console.log(str)
    resultconst.innerHTML = str
})

