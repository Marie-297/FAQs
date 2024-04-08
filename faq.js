imgPlus = document.querySelector(".plus");
imgMinus = document.querySelector(".minus");
details = document.querySelector(".detailspara");

 function plusClick() {
  imgPlus.classList.add("hidden");
  imgMinus.classList.remove("hidden");
  details.classList.remove("hidden");
};

function minusClick() {
  imgPlus.classList.remove("hidden");
  imgMinus.classList.add("hidden");
  details.classList.add("hidden");
};

