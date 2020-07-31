"use strict";

// animations.html code
let fieldValueList = document.getElementsByClassName("filter-value-list")[0];
let applyAnimation = document.getElementById("animateFilterList");
applyAnimation.addEventListener("click", () => {
  fieldValueList.classList.toggle("expanded");
});
