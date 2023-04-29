const btns = document.querySelectorAll(".btn");
// const btns = document.getElementsByClassName('btn');
const display = document.querySelector("#display");

for (btn of btns) {
  btn.addEventListener("click", function () {
    if (this.value == "equal") {
      return evaluate();
    }
    if (this.value == "clear") {
      return (display.value = "");
    }
    display.value += this.value;
  });
}

// function evaluate(){
//     if(display.value != ''){
//         let result = eval(display.value)
//         return display.value = result;
//     }
//     return false;
// }

const evaluate = () => {
  if (display.value != "") {
    let result = eval(display.value);
    return (display.value = result);
  }
  return false;
};

display.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    return evaluate();
  }
  console.log(e);

  //const charCode = e.which ? e.which : e.keyCode;
  let charCode = '';
  if (e.which) {
    charCode = e.which;
  } else {
    charCode = e.keyCode;
  }

  if (
    charCode > 31 &&
    (charCode < 48 || charCode > 57) &&
    charCode !== 43 &&
    charCode !== 45 &&
    charCode !== 42 &&
    charCode !== 47
  ) {
    e.preventDefault();
  }
});
