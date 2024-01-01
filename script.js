
// const mobile_btn = document.querySelector("#mobile");

// const header_elm = document.querySelector("#header");


// if(mobile_btn){
//     mobile_btn.addEventListener("click", ()=>{
//         header_elm.classList.toggle("active");
//     })
// }

const mobile_btn = document.querySelector("#mobile");
const header_elm = document.querySelector("#header");

mobile_btn.addEventListener('click', () =>{
    header_elm.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=>{
    header_elm.classList.remove("active");
}))


// ================================== Shop Page ===============================

// ------------------------------- Product Slider -------------------------------

        let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
        showSlides(slideIndex += n);
        }

        function currentSlide(n) {
        showSlides(slideIndex = n);
        }

        function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("demo");
        let captionText = document.getElementById("caption");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        captionText.innerHTML = dots[slideIndex-1].alt;
        }

// ================================== Product Details Page ===============================
    
        // When User Click on any Product from Shop.html page that same Product will display in Product_deetails.html page 

        // 1) First We have to add Page Location product_details.html to every .pro container in shop.html file 
        let pro = document.getElementsByClassName("pro");
        let proArray = Array.from(pro);
        console.log(proArray);

        proArray.map((x)=> x.addEventListener("click",()=> window.location.href="product_detail.html"))


        // 2) Now We haveto display lciked product in product_details section 

        let shop_img = document.getElementsByClassName("pro-img");
        let imgsrc = Array.from(shop_img)
        console.log(imgsrc)

        let main_pro_img = document.getElementById("MainImg");
        console.log(main_pro_img)
        imgsrc.map((x)=>{
            x.addEventListener("click",()=>{
                main_pro_img.src = imgsrc.src;
            })
        })

