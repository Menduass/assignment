document.addEventListener("DOMContentLoaded", function() {
    // Set the date we're counting down to (30 days from now)
    var countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 30);
    countDownDate.setHours(0, 0, 0, 0);
    var endDate = countDownDate.getTime();
  
    // Update the countdown every 1 second
    var x = setInterval(function() {
      // Get the current date and time
      var now = new Date().getTime();
  
      // Calculate the time remaining
      var distance = endDate - now;
  
      // Calculate days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the countdown in the element with id="countdown"
      document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
  
      // If the countdown is over, display a message
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
      }
    }, 1000);
  });
  