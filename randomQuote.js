const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authEl = document.getElementById("author");

async function fetchApi() {
    try {
        
        btnEl.innerText = "Updating...";
        btnEl.disabled = true;

        quoteEl.innerText = "Loading quote";
        authEl.innerText = "-------";
        
        const response = await fetch("http://api.quotable.io/random");
        const data = await response.json();
        console.log(data);
        quoteEl.innerText = data.content;
        authEl.innerText = "~ " + data.author;
        btnEl.innerText = "GET QUOTE";
        btnEl.disabled = false;
    } catch (error) {
        quoteEl.innerText = "Error Occured, Try again later";
        authEl.innerText = "Error";
        btnEl.innerHTML = "Try Again";
    }
};

btnEl.addEventListener("click", () => {
    fetchApi();
});