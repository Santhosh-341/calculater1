const display = document.getElementById("display");
      const modeBtn = document.getElementById("modeBtn");
      let calculater = document.querySelector(".calculater");
      let body = document.querySelector(".body");
      let input = document.querySelector(".inputs");
      let button = document.querySelector(".button");
      function addToDisplay(input) {
        display.value += input;
      }

      function calculate() {
        try {
          // eslint-disable-next-line no-eval
          display.value = eval(display.value);
        } catch (error) {
          display.value = "Error";
        }
      }

      function clears() {
        display.value = "";
      }
      modeBtn.addEventListener("click", () => {
        if (calculater.style.backgroundColor == "white") {
            calculater.style.backgroundColor = "black";
          body.style.backgroundColor = "white";
          input.style.backgroundColor = "white";
          input.style.color = "black";
          modeBtn.innerHTML="light Mode";
          
          
        } else {
           calculater.style.backgroundColor = "white";
          body.style.backgroundColor = "black";
          input.style.backgroundColor = "black";
          input.style.color = "white";
          button.style.color = "white";
          
           modeBtn.innerHTML=" Mode";
        }
      });
     