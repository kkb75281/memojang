// 마우스 스크롤 내리면 top 버튼 올라오게
let goToTop = document.querySelector(".top");

window.onwheel = function (e) {
    // console.log(e);

    if (e.deltaY > 0) {
        goToTop.style.bottom = '3vw';
    } else {
        goToTop.style.bottom = '-5vw';
    }
}

goToTop.addEventListener("click", () => {
    // window.scrollTo({ top:0, behavior:'smooth' });
    window.scrollTo(0, 0);
    goToTop.style.bottom = '-5vw';
});

// 소메뉴 클릭했을때 active 추가
let clickMenu = document.querySelectorAll(".topic li");
let showCont = document.querySelectorAll("section");

console.log(clickMenu[0].id);
console.log(showCont[0].id);

for (let i = 0; i < clickMenu.length; i++) {
    clickMenu[i].addEventListener("click", () => {
        let mdata = clickMenu[i].getAttribute('mydata');

        // showCont 묶음에 for 문 돌려서 각 섹션의 id 를 비교
        for (let j = 0; j < showCont.length; j++) {
            let sdata = showCont[j].id;

            if (mdata === sdata) {
                showCont[j].classList.add("active");
            } else {
                showCont[j].classList.remove("active");
            }
        }
    })
}