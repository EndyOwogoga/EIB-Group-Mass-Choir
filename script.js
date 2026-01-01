function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    
    video.pause();
    trailer.classList.toggle('active');
}

function changeBg(bg, title){
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');

    banner.style.background = `url("../images/Movies/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    contents.forEach(content => {
        content.classList.remove('active');
        if(content.classList.contains(title)){
            content.classList.add('active');
        }
    });
}




$(document).ready(function (){
    $(".filter-item").click(function (){
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".post-box").show("1000");
        } else{
            $(".post-box").not("." + value).hide("1000");
            $(".post-box").filter("." + value).show("1000");
        }
    });
    $(".filter-item").click(function (){
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});

let header = document.querySelector("header");

window.addEventListener("scroll", () =>{
    header.classList.toggle("shadow", window.scrollY > 0);
});