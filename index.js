function init() {
  // accessing buttons
  let buttonsGroup = document.querySelector(".buttons-group");
  let increaseButton = document.querySelector("#increase-button");
  let resetButton = document.querySelector("#reset-button");
  let decreaseButton = document.querySelector("#decrease-button");

  // listening to a click event on buttons group (defining event listener)
  buttonsGroup.addEventListener("click", update, true);

  // change counter displayed text when event handler called
  let counterText = document.querySelector(".counter");

	const defaultCounterValue = 0;

  let state = {
    counter: defaultCounterValue,
    step: 1,
  };
  // changign step size from a list
  let stepSelector = document.querySelector("#step-select");

  stepSelector.addEventListener("change", onSelectedStep, true);

  function onSelectedStep(event) {
    counterText.textContent = defaultCounterValue;
		state.counter = defaultCounterValue;
    state.step = parseInt(event.target.value);
  }

  // defining event handler function
  function update(event) {
    if (event.target == increaseButton) {
			state.counter += state.step;
    }

    if (event.target == resetButton) {
      state.counter = defaultCounterValue;
    }

    if (event.target == decreaseButton) {
      if (state.counter > 0) {
        state.counter -= state.step;
      }
    }

    counterText.textContent = state.counter;
  }
}

window.onload = init;
