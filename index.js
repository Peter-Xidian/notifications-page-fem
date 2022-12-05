function toggleNotifText() {
  document.querySelector(".nm-cc__message").classList.toggle("show-message");
}

function toggleUnread() {
  let notifNum = document.querySelector(".notifs-number");
  let nIcons = document.querySelectorAll(".notif-icon");
  let nmCards = document.querySelectorAll(".nm-card");

  if (notifNum.innerHTML === "3") {
    notifNum.innerHTML = "0";
  } else if (notifNum.innerHTML === "0") {
    notifNum.innerHTML = "3";
  }

  for (let i = 0; i < 3; i++) {
    let nmCard = nmCards[i];
    nmCard.classList.toggle("unread");
    let nIcon = nIcons[i];
    nIcon.classList.toggle("hide-notif-icon");
  }
}
