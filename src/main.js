function selectOption(isSafe) {
  const result = document.getElementById("result");
  if (isSafe) {
    result.innerText = "Correct! You avoided a potential phishing scam.";
    result.style.color = "#4CAF50";
  } else {
    result.innerText = "Incorrect. That was a phishing attack and you got infected.";
    result.style.color = "#f44336";
  }
}