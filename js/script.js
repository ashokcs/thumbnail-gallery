const main = document.querySelector(`#main`);
const thump1 = document.querySelector(`#first_thumbnail`);
const thump2 = document.querySelector(`#second_thumbnail`);
const thump3 = document.querySelector(`#third_thumbnail`);

thump1.addEventListener(`click`, function() {
    setMainImgSrc(thump1);
});

thump2.addEventListener(`click`, function() {
    setMainImgSrc(thump2);
});

thump3.addEventListener(`click`, function() {
    setMainImgSrc(thump3);
});

const setMainImgSrc = function(thumbnail){
    const url = thumbnail.getAttribute(`src`);
    main.setAttribute(`src`, url);
}