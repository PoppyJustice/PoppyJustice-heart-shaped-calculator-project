function handleClick(value) {
  let display = document.getElementById("display");
  let currentText = display.innerText;

  if (value === "=") {
    try {
      // Handle square root and percentage calculations
      if (currentText.includes("√")) {
        display.innerText = Math.sqrt(parseFloat(currentText.split("√")[1]));
      } else if (currentText.includes("%")) {
        display.innerText = eval(currentText.replace("%", "/100"));
      } else {
        display.innerText = eval(currentText);
      }
    } catch {
      display.innerText = "Error";
    }
  } else if (value === "C") {
    display.innerText = "";
  } else {
    display.innerText += value;
  }
}
