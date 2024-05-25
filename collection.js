document.addEventListener("DOMContentLoaded", function() {
    var productContainer = document.getElementById("product");
    var search = document.getElementById("search");
    var productlist = productContainer.querySelectorAll(".product.box"); 
    var inst = document.querySelector(".fa-brands.fa-instagram");
    var twit = document.querySelector(".fa-brands.fa-twitter");
    var fb = document.querySelector(".fa-brands.fa-facebook");
    
    inst.addEventListener("click", openInstagram);
    twit.addEventListener("click", openTwitter);
    fb.addEventListener("click", openFacebook);

    search.addEventListener("keyup", function(event) { // Added event parameter
        var enteredValue = event.target.value.toUpperCase();
        for (var count = 0; count < productlist.length; count++) {
            var productName = productlist[count].querySelector("p").textContent;
            if (productName.toUpperCase().indexOf(enteredValue) < 0) {
                productlist[count].style.display = "none";
            } else {
                productlist[count].style.display = "block";
            }  
        }
    });
});
function openInstagram() {
    window.open("https://www.instagram.com/your_instagram_username/", "_blank");
}

function openTwitter() {
    window.open("https://twitter.com/your_twitter_username/", "_blank");
}

function openFacebook() {
    window.open("https://www.facebook.com/your_facebook_page/", "_blank");
}

