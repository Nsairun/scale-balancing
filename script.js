const leftWeight = document.querySelector('#left-weight')
const rightWeight = document.querySelector('#right-weight')
const blcBtn = document.querySelector('#sub-btn')
const range = document.querySelector('#left-input')
const resultField = document.querySelector('.result')

const UpdateWeightOne = () => {
  const weightOne = leftWeight.value
  const weightTwo = rightWeight.value
  if (!weightOne || !weightTwo) {
    return window?.alert('Input all fields')
  }
  const arr = range.value.trim().split(',')

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (
        parseInt(weightOne) + parseInt(arr[i]) ===
        parseInt(weightTwo) + parseInt(arr[j])
      ) {
        console.log(arr[i])
        console.log(arr[j])
        resultField.innerHTML = [arr[i], arr[j]]
        return
      } else {
        resultField.innerHTML = 'inbalanced scale'
      }
    }
  }
}

blcBtn.addEventListener('click', () => {
  UpdateWeightOne()
})
