// showmore
function showmore() {
    var list = document.getElementsByClassName("first-list");
    var list1 = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < list.length; i++) {
        list[i].style.display = "block";
        if (i == 4) list[i].style.display = "none";
    }
}
// scroll on top
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// show-hot
var indexProduct = 1;

function shownext(n) {
    showproduct(indexProduct += n);
}
showproduct(indexProduct);

function showproduct(n) {
    var product = document.getElementsByClassName("product");
    var temp = 0;
    // xét trường hợp
    if (indexProduct < 0) { indexProduct = 5 * (parseInt(product.length / 5)) + 1; }
    if (indexProduct > product.length) {
        indexProduct = 1;
    }
    if (indexProduct > product.length - 5 && indexProduct < product.length) { temp = product.length - indexProduct; }

    var i;
    for (i = 0; i < product.length; i++) {
        product[i].style.display = "none";
    }
    for (i = 0; i < 5; i++) {
        product[indexProduct + i - temp - 1].style.display = "block";
    }
}

// show accessories
var indexProduct1 = 1;

function shownext1(n1) {
    showproduct1(indexProduct1 += n1);
}
showproduct1(indexProduct1);

function showproduct1(n) {
    var product1 = document.getElementsByClassName("product1");
    var temp = 0;
    // xét trường hợp
    if (indexProduct1 < 0) { indexProduct1 = 5 * (parseInt(product1.length / 5) - 1) + 1; }
    if (indexProduct1 > product1.length) {
        indexProduct1 = 1;
    }
    // alert(n + " " + indexProduct1 + " " + product1.length);
    var i;
    for (i = 0; i < product1.length; i++) {
        product1[i].style.display = "none";
    }
    for (i = 0; i < 5; i++) {
        product1[indexProduct1 + i - 1].style.display = "block";
    }
}






// slide 
// $(document).ready(function(){
//     $('.carousel').carousel('number');
//     var slideIndex = $('.carousel-inner .active').index('.carousel-inner .carousel-item');
//     console.log(slideIndex);
//     // function currentSlide(n) {
//     //     showSlides(slideIndex = n);
//     // }
//    });
//     //showSlides(slideIndex);
//     function showSlides(n) {
//         // var i;
//         // var slides = document.getElementsByClassName("carousel-item");
//         // var dots = document.getElementsByClassName("dot");
//         // for (i = 0; i < slides.length; i++) {
//         //     slides[i].style.display = "none";
//         // }
//         // for (i = 0; i < dots.length; i++) {
//         //     dots[i].className = dots[i].className.replace(" active", "");
//         // }
//         // slides[slideIndex - 1].style.display = "block";
//         // dots[slideIndex - 1].className += " active";
//     }