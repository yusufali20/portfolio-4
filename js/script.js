// ===========sticky navbar part start===========
window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})
// ===========sticky navbar part end===========


// ===========banner slider start===========
const slider_items = document.querySelectorAll(".slider_item")
var count = 0;
slider_items.forEach(
    (slider_item, index) => {
        slider_item.style.left = `${index * 100}%`
    }
)
const goPrev = () =>{
    slideImage()
    if (count == 0) {
        count = slider_items.length - 1;
        slideImage()
    }else{
        count--
        slideImage()
    }
}
const goNext = () =>{
    if(count == slider_items.length-1){
        count = 0
        slideImage()
    }else{
        count++
        slideImage()
    }
}
const slideImage = () => {
    slider_items.forEach(
        (slider_item) => {
            slider_item.style.transform = `translateX(-${count * 100}%)`
        }
    )
}
// ===========banner slider end===========

// ===========banner slider start===========
// ===========banner slider end===========


// ===========faqs accordion start===========
let listElements = document.querySelectorAll('.accordion_item');

listElements.forEach(listElement => {
    listElement.addEventListener('click', () => {
        if (listElement.classList.contains('active')) {
            listElement.classList.remove('active');
        }else{
            listElements.forEach(listE => {
                listE.classList.remove('active');
            })
            listElement.classList.toggle('active');
        }
    })
})
// ===========faqs accordion end===========


// ===========banner slider start===========
// ===========banner slider end===========


// ===========back to top part start===========
window.addEventListener("scroll", function(){
    let backToTop = document.querySelector(".back_to_top");
    backToTop.classList.toggle("active", window.scrollY > 0)
})
// ===========back to top part end===========



