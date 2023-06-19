const leftWeight = document.querySelector("#left-weight");
const rightWeight = document.querySelector("#right-weight");
const blcBtn = document.querySelector("#sub-btn");
const range = document.querySelector("#left-input");
const resultField = document.querySelector(".result");

const UpdateWeightOne = () => {
  let weightOne = leftWeight.value;
  let weightTwo = rightWeight.value;
  if (!weightOne || !weightTwo) {
    return alert("Input all fields");
  }
  let arr = range.value.trim().split(",");

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (
        parseInt(weightOne) + parseInt(arr[i]) ===
        parseInt(weightTwo) + parseInt(arr[j])
      ) {
        console.log(arr[i]);
        console.log(arr[j]);
        resultField.innerHTML = [arr[i], arr[j]]
        return;
      } else {
        resultField.innerHTML = "inbalanced scale"
      }
    }
  }
};

blcBtn.addEventListener("click", () => {
  UpdateWeightOne();
  return;
});
