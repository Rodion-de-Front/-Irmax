window.addEventListener('scroll', function () {

    let posTop = window.pageYOffset;

    if (posTop == 0) {

        document.querySelector(".menu").style.backgroundColor = "transparent";

    } else {

        document.querySelector(".menu").style.backgroundColor = "#1a1a1a";

    }
});

function sendMessage() {
    let email = document.getElementById('email').value;
    let name = document.getElementById('name').value;
    let text = document.getElementById('message').value;

    if (email !== '' && name !== '' && text !== '') {
        let data = "email=" + encodeURIComponent(email) + "&name=" + encodeURIComponent(name) + "&message=" + encodeURIComponent(text);

        let requestObj = new XMLHttpRequest();
        let link = 'http://localhost/send_email.php';
        requestObj.open('POST', link, true);

        requestObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        requestObj.send(data);

        document.querySelector(".contact-form").innerHTML = "<h1>Ваша заявка отправлена</h1>"

    }
}
