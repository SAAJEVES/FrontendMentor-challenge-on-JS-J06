let slider = document.querySelector(".slider");
let sliderBackground = document.querySelector(".custom-slider");
let amountValue = document.querySelector(".amount");
let pageViewValue = document.querySelector(".amount-views");
let discount = document.querySelector(".discount");


let amountPageViews = ["8.00", "12.00", "16.00", "24.00", "36.00"];
let pageViews = ["10k", "50k", "100k", "500k", "1m"];

slider.addEventListener("input", function() {
    let sliderValue = slider.value;
    changeInnerHtml(sliderValue);
});


function changeInnerHtml(value) {
    switch (value) {
        case "0":
            amountValue.innerHTML = amountPageViews[parseInt(value)];
            pageViewValue.innerHTML = pageViews[parseInt(value)];
            sliderBackground.style.width = `${parseInt(value) * 25}%`;
            console.log(parseInt(value) );
            break;
    
        case "1":
            amountValue.innerHTML = amountPageViews[parseInt(value)];
            pageViewValue.innerHTML = pageViews[parseInt(value)];
            sliderBackground.style.width = `${parseInt(value) * 25}%`;
            break;
    
        case "2":
            amountValue.innerHTML = amountPageViews[parseInt(value)];
            pageViewValue.innerHTML = pageViews[parseInt(value)];
            sliderBackground.style.width = `${parseInt(value) * 25}%`;
            break;
    
        case "3":
            amountValue.innerHTML = amountPageViews[parseInt(value)];
            pageViewValue.innerHTML = pageViews[parseInt(value)];
            sliderBackground.style.width = `${parseInt(value) * 25}%`;
            break;
    
        case "4":
            amountValue.innerHTML = amountPageViews[parseInt(value)];
            pageViewValue.innerHTML = pageViews[parseInt(value)];
            sliderBackground.style.width = `${parseInt(value) * 25}%`;
            break;
    }
}

window.addEventListener("resize", function() {
    if (screen.width <= 400) {
        discount.innerHTML = "-25%";
    } else {
        discount.innerHTML = "25% discount";
    }
});