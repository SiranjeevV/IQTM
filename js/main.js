var spinner = document.getElementById('spinner');
setTimeout(() => {
    spinner.classList.remove('show');
}, 2000);

let button = document.getElementById('toggle');
const panel = document.getElementById("navpanel");
function opennavpanel() {
    button.classList.toggle('clicked');
    panel.classList.toggle('view');


}
window.onscroll = function () {
    scrolleFunction()
};
function scrolleFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById('header').classList.add('sticky');
    }
    else {
        document.getElementById('header').classList.remove('sticky');

    }
}
var exp = document.getElementById('expertise');
var winheight = window.innerHeight;
const rect = exp.getBoundingClientRect();
const topOffset = rect.top;

exp.classList.add('fixed');


