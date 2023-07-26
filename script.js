const wrapperMain = document.querySelector(".wrapper__main");
const wrapperThnx = document.querySelector(".wrapper__thanks");
const submitBtn = document.querySelector(".btn--submit");
const buttonList = document.querySelectorAll(".btn");
const selectedRatingElement = document.getElementById('selectedRating');


 submitBtn.addEventListener("click", function() {
    wrapperThnx.classList.remove("hidden");
    wrapperMain.classList.add("hidden");
});

buttonList.forEach(btn => { 
    btn.addEventListener("click", function() {
        const rating = btn.innerHTML;
        selectedRatingElement.textContent = rating;
    }
)});

