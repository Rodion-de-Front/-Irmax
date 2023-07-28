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

//функция чтобы открыть и спрятать меню
function toggleMenu() {

    document.getElementById('sidebar').classList.toggle('sidebar-active')
    document.getElementById('lines').classList.toggle('lines-active');
    document.querySelector('body').classList.toggle('opacity');
}

console.log(window.innerWidth)

if (window.innerWidth > 800) {
    document.querySelector('#navigation').innerHTML = `
        <img id="lines" src="img/lines.png" onclick="toggleMenu()">
        <div id="sidebar">
            <div class="item">
                <img src="img/home.png"/>
                <a class="nav-item" href="#Home" onclick="toggleMenu()">Home</a>
            </div>
            <div class="item">
                <img src="img/about.png"/>
                <a class="nav-item" href="#About" onclick="toggleMenu()">About</a>
            </div>
            <div class="item">
                <img src="img/services.png"/>
                <a class="nav-item" href="#Advantages" onclick="toggleMenu()">Advantages</a>
            </div>
            <div class="item">
                <img src="img/projects.png"/>
                <a class="nav-item" href="#Work" onclick="toggleMenu()">Work</a>
            </div>
            <div class="item">
                <img src="img/clients.png"/>
                <a class="nav-item" href="#Services" onclick="toggleMenu()">Services</a>
            </div>
            <div class="item">
                <img src="img/contacts.png"/>
                <a class="nav-item" href="#Contact" onclick="toggleMenu()">Contact</a>
            </div>
        </div>`;
}
