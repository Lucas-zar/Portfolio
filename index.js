const Imgs = document.getElementById("imgs");
const Info = document.getElementById("info")
const Info_content = document.getElementById("info_content");
Info.onclick = function(){
    Imgs.classList.toggle("hidden");
    Info_content.classList.toggle("animate-fade-down");
};