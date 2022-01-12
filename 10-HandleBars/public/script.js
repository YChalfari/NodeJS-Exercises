const q = document.querySelector(".quote");
const button = document.querySelector("button");
const getQuote = () => {
  fetch("http://localhost:3000/quote").then((res) => {
    res.json().then((data) => {
      q.innerText = data;
    });
  });
};
button.addEventListener("click", getQuote);
