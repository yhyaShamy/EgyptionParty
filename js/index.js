"use strict";

const form = document.querySelector("form");
const userMessage = document.querySelector("#userComment");

$("#navOpener").on("click", function () {
  if ($("#navOpener").css("margin-left") == `${$("#nav").innerWidth()}px`) {
    $("#nav").animate({ left: `-${$("#nav").innerWidth()}` }, 500);
    $("#navOpener").animate({ marginLeft: `0px` }, 500);
  } else {
    $("#nav").animate({ left: `${$("#nav").innerWidth()}` }, 500);
    $("#navOpener").animate({ marginLeft: `${$("#nav").innerWidth()}px` }, 500);
  }
});

$("#navCloser").on("click", function () {
  $("#nav").animate({ left: `-${$("#nav").innerWidth()}` }, 500);
  $("#navOpener").animate({ marginLeft: `0px` }, 500);
});

// apear text when user click details h2

$(".details-head").on("click", function (e) {
  $(e.target).parent().siblings().children("p").slideUp(500);
  $(e.target).siblings("p").slideToggle(500);
});

// Make Countdown

// Set the target date
const targetDate = new Date("2024-04-24T00:00:00");

// Update the countdown timer
function updateCountdown() {
  const currentTime = new Date();
  const difference = targetDate - currentTime;

  // Calculate the time units
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Update the HTML elements
  document.getElementById("days").innerText = days + "D";
  document.getElementById("hours").innerText = hours + "h";
  document.getElementById("minutes").innerText = minutes + "min";
  document.getElementById("seconds").innerText = seconds + "sec";

  // If the countdown is over, display a message
  if (difference < 0) {
    // clearInterval(interval);
    document.getElementById("days").innerText = days + "D";
    document.getElementById("hours").innerText = hours + "h";
    document.getElementById("minutes").innerText = minutes + "min";
    document.getElementById("seconds").innerText = seconds + "sec";
  }
}

setInterval(updateCountdown, 1000);

// Contact

// userMessage.addEventListener("input", function () {
//   const userMessageLetters = userMessage.value.length;
//   document.querySelector("#remainLetters").innerHTML = 100 - userMessageLetters;
//   if (100 - userMessageLetters <= 0) {
//     document.querySelector("#remainLetters").innerHTML = 0;
//   }
// });

const regex = /^.{0,99}$/;

$("#userComment").on("input", function () {
  const regexTest = regex.test($("#userComment").val());

  const userMessageLetters = $("#userComment").val().length;
  $("#remainLetters").html(100 - userMessageLetters);
  $("#userComment").keydown(function (e) {
    if (!regexTest && e.key != "Backspace") {
      $("#remainLetters").html(100 - userMessageLetters);
      $("#userComment").attr("readOnly", true);
    } else {
      $("#remainLetters").html(100 - userMessageLetters);
      $("#userComment").attr("readOnly", false);
    }
  });
});
