let currentCaptcha = "";

function generateCaptcha() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  currentCaptcha = captcha;
  document.getElementById("captcha").innerText = captcha;
  document.getElementById("captchaInput").value = "";
  document.getElementById("message").innerText = "";
}

function validateCaptcha() {
  const input = document.getElementById("captchaInput").value;
  const message = document.getElementById("message");

  if (input === currentCaptcha) {
    message.style.color = "green";
    message.innerText = "CAPTCHA verified!";
   
  } else {
    message.style.color = "red";
    message.innerText = "Incorrect CAPTCHA. Try again.";
    
  }
}


window.onload = generateCaptcha;
