function init() {
  // accessing buttons
  let increaseButton = document.querySelector("#increase-button");
  let resetButton = document.querySelector("#reset-button");
  let decreaseButton = document.querySelector("#decrease-button");
  let buttonsGroup = document.querySelector(".buttons-group");

  // listening to a click event on buttons group (defining event listener)
  buttonsGroup.addEventListener("click", update, true);

  // change counter displayed text when event handler called
  let counterText = document.querySelector(".counter");

  let state = {
    counter: 0,
    step: 1,
  };

  // defining event handler function
  function update(event) {
    if (event.target == increaseButton) {
      state.counter += state.step;
    }

    if (event.target == resetButton) {
      state.counter = 0;
    }

    if (event.target == decreaseButton) {
      state.counter -= state.step && state.counter > 0;
    }

    counterText.textContent = state.counter;
  }
}

window.onload = init;
