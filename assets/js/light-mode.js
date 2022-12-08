

var a = document.getElementById('button-light');
var close = document.getElementById('close-menu')

a.addEventListener('click', lightMode)

function lightMode() {
    var body = document.body;
    var home = document.getElementById('home')

    close.checked = false;

    home.classList.toggle('light-bg')
    body.classList.toggle('light-mode')
    for (var i = 0, len = 5; i < len; i++) {
        var section = document.getElementById(`light-${i + 1}`)
        section.classList.toggle('dark-sec')
        section.querySelector('p').classList.add('dark-sec')
        section.querySelector('h2').classList.add('dark-sec')
    }
}