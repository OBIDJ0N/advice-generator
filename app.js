"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const adviceText = document.querySelector(".advice_text");
    const adviceNumber = document.querySelector(".advice_number");
    const api = "https://api.adviceslip.com/advice";
    const getAdviceBtn = document.querySelector(".get_advice");
    getAdviceBtn.addEventListener("click", ()=>{
        fetch(api)
            .then((res) => res.json())
            .then((data) => {
                adviceText.textContent = data.slip.advice;
                adviceNumber.textContent = `#${data.slip.id}`;
            })
             .catch((error) => {
                console.error("Error fetching advice:", error);
            });
    })
});

