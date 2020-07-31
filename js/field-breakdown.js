"use-strict";

let showBreakdownButton = document.getElementById("showBreakdown");
showBreakdownButton.addEventListener("click", () => {
  let detailBreakdown = document.getElementById("fieldBreakdown");
  detailBreakdown.classList.toggle("show");

  let distinctValueCounts = document.getElementsByClassName(
    "distinct-value-stat"
  );

  let valueCounts = [];

  for (let i = 0; i < distinctValueCounts.length; i++) {
    valueCounts.push(+distinctValueCounts[i].innerText);
  }
  let maxValue = Math.max(...valueCounts);

  let distinctValueRow = document.getElementsByClassName(
    "distinct-value-rows"
  )[0];
  let distinctValueRowWidth = distinctValueRow.offsetWidth / 2;

  let ratio = distinctValueRowWidth / maxValue;

  for (let i = 0; i < distinctValueCounts.length; i++) {
    distinctValueCounts[i].style.width =
      +distinctValueCounts[i].innerText * ratio + "px";
  }
});
