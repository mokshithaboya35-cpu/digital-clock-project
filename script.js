const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const formatButton = document.getElementById("formatButton");

let use24Hour = false;

function updateClock() {
  const now = new Date();

  timeElement.textContent = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: !use24Hour
  }).format(now);

  dateElement.textContent = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(now);
}

formatButton.addEventListener("click", () => {
  use24Hour = !use24Hour;
  formatButton.textContent = use24Hour ? "Switch to 12-hour" : "Switch to 24-hour";
  updateClock();
});

updateClock();
setInterval(updateClock, 1000);
