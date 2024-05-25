document.addEventListener("DOMContentLoaded", function() {
    var barsIcon = document.querySelector(".navbar-menu-toggle i.fa-bars");
    var xMark = document.querySelector(".side-navbar p i.fa-xmark");
    

    barsIcon.addEventListener("click", showNavbar);
    xMark.addEventListener("click", closeNavbar);
   
    
    var inst = document.querySelector(".fa-brands.fa-instagram");
    var twit = document.querySelector(".fa-brands.fa-twitter");
    var fb = document.querySelector(".fa-brands.fa-facebook");
    
    inst.addEventListener("click", openInstagram);
    twit.addEventListener("click", openTwitter);
    fb.addEventListener("click", openFacebook);
});

function showNavbar() {
    var sideNavbar = document.querySelector(".side-navbar");
    sideNavbar.style.display = "block";
}

function closeNavbar() {
    var sideNavbar = document.querySelector(".side-navbar");
    sideNavbar.style.display = "none";
}

function openInstagram() {
    window.open("https://www.instagram.com/your_instagram_username/", "_blank");
}

function openTwitter() {
    window.open("https://twitter.com/your_twitter_username/", "_blank");
}

function openFacebook() {
    window.open("https://www.facebook.com/your_facebook_page/", "_blank");
}
