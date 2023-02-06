let clickCount = 0;
function greetMe() {
    clickCount++;
    target.textContent = clickCount;
  }
  myTrigger.addEventListener('click', greetMe);
