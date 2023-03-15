let arrows = document.querySelector("#arrows");
arrows.onclick = () => {
    let nav = document.getElementById("navigation");
    if(nav.style.width === "" || nav.style.width === "3rem"){
        nav.style.transitionDelay ="0s";
        nav.style.width = "12rem";
        arrows.style.transitionDelay ="0s";
        arrows.style.alignSelf= "flex-end";
        arrows.style.transform = "rotate(180deg)";
        document.querySelector(".main").style.left = "12rem";
        document.querySelector(".main").style.transitionDelay ="0s";
        document.querySelector("#mailus").style.opacity = "1";
        document.querySelector("#mailus").style.transitionDelay = ".8s";
        for(let i = 0 ; i < 7 ; i++) {
            document.getElementsByClassName("bar")[i].style.cursor = "pointer";
            document.getElementsByTagName("h1")[i].style.opacity = "1";
            document.getElementsByTagName("h1")[i].style.transitionDelay = ".8s";
        }
        return;
    }

    if(nav.style.width === "12rem" ){
        nav.style.transitionDelay =".8s";
        nav.style.width = "3rem";
        arrows.style.transitionDelay =".8s";
        arrows.style.transform = "translateX(-435%)";
        document.querySelector(".main").style.left = "0rem";
        document.querySelector(".main").style.transitionDelay =".8s";
        document.querySelector("#mailus").style.opacity = "0";
        document.querySelector("#mailus").style.transitionDelay = "0s";
        for(let i = 0 ; i < 7 ; i++) {
            document.getElementsByClassName("bar")[i].style.cursor = "default";
            document.getElementsByTagName("h1")[i].style.opacity = "0";
            document.getElementsByTagName("h1")[i].style.transitionDelay = "0s";
        }

    }
};

let myCard_2 = document.getElementsByClassName("card-2")[0];
let myCard_3 = document.getElementsByClassName("card-3")[0];
let btn = document.getElementsByClassName("btn")[0];

window.onscroll = () => {
    if (window.scrollY >= 300){
        btn.style.opacity = "1";
        btn.style.cursor = "pointer";
    }else {
        btn.style.opacity = "0";
        btn.style.cursor = "none";
    }
    if (window.scrollY >= 500){
        myCard_2.style.transform = "translateX(0)";
    }else {
        myCard_2.style.transform = "translateX(150%)";
    }
    if (window.scrollY >= 1000){
        myCard_3.style.transform = "translateX(0)";
    }else {
        myCard_3.style.transform = "translateX(150%)"
    }
};

btn.onclick = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
};



