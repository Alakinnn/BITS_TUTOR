export function SliderFunction({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
}) {
  const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
  let priceGap = 1;

  // Set default values for price range
  priceInput[0].value = 0;
  priceInput[1].value = 100;

  rangeInput[0].value = priceInput[0].value;
  rangeInput[1].value = priceInput[1].value;

  range.style.left = (priceInput[0].value / rangeInput[0].max) * 100 + "%";
  range.style.right =
    100 - (priceInput[1].value / rangeInput[1].max) * 100 + "%";

  setMinPrice(priceInput[0].value);
  setMaxPrice(priceInput[1].value);

  priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPriceVal = parseInt(priceInput[0].value),
        maxPriceVal = parseInt(priceInput[1].value);
      setMinPrice(minPriceVal);
      setMaxPrice(maxPriceVal);
      if (
        maxPriceVal - minPriceVal >= priceGap &&
        maxPriceVal <= rangeInput[1].max
      ) {
        if (e.target.className === "input-min") {
          rangeInput[0].value = minPriceVal;
          range.style.left = (minPriceVal / rangeInput[0].max) * 100 + "%";
        } else {
          rangeInput[1].value = maxPriceVal;
          range.style.right =
            100 - (maxPriceVal / rangeInput[1].max) * 100 + "%";
        }
      }
    });
  });
  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
      setMinPrice(minVal);
      setMaxPrice(maxVal);
      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    });
  });
}
