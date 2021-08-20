// function([string1, string2],target id,[color1,color2])
window.onscroll = function ()
{
    let B = document.body,
        DE = document.documentElement,
        O = Math.min (B.clientHeight, DE.clientHeight); if (!O) O = B.clientHeight;
    let S = Math.max (B.scrollTop, DE.scrollTop),
        C = Math.max (B.scrollHeight, DE.scrollHeight);
   let btn =  document.getElementById('fixedOrder');
    if (O + S  > C-700 && !btn.classList.contains('hidden')) btn.classList.add('hidden');
    else if (O + S  <= C-700) btn.classList.remove('hidden');
};


startAnimateTable();
function startAnimateTable() {

    let tables = Array.from(document.querySelectorAll("[id^='content-']"));
    tables.forEach(function (table) {
            let tableNodes = Array.from(table.childNodes).filter(elem => elem.tagName);
            Loop(tableNodes);
        }
    );

    function Loop(arr) {
        setTimeout(function () {
            arr.forEach(function (elem) {
                elem.classList.remove("pulse");
            });
            arr[Math.trunc(Math.floor(Math.random() * arr.length))].classList.add("pulse");
            Loop(arr);
        }, 6500)
    }
}


new TypeIt('#text', {
    speed: 180,
    loop: true,
    cursor: false
})
    .type("Интеграция")
    .pause(1500)
    .delete(10)
    .type("Разработка")
    .pause(1500)
    .delete(10)
    .type("Автоматизация")
    .pause(1500)
    .delete(13)
    .type("Обучение")
    .pause(1500)
    .delete(8)
    .type("Поддержка")
    .pause(1500)
    .delete(9)
    .go();

let button = document.getElementById('menu-btn');

button.addEventListener('click', () => {
    if( button.classList.contains('open')){
        button.classList.remove('open');
        button.classList.add('close');

    } else {
        button.classList.remove('close');
        button.classList.add('open');
    }
});



let hamburger = document.getElementById('hamburger')
let mySidenav = document.getElementById('mySidenav')
let main = document.getElementById('main');

hamburger.addEventListener('click', () => {
    if( mySidenav.classList.contains('sidenav_open')){
        mySidenav.classList.remove('sidenav_open');
        mySidenav.classList.add('sidenav_close');
        main.classList.remove('main_open');
        main.classList.add('main_close');

    } else {
        mySidenav.classList.remove('sidenav_close');
        mySidenav.classList.add('sidenav_open');
        main.classList.remove('main_close');
        main.classList.add('main_open')
    }
});


// var card = document.querySelector('.card');
// card.addEventListener( 'click', function() {
//     card.classList.toggle('is-flipped');
// });



