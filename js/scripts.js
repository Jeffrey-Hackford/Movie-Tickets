//Business Logic
function Ticket (name, movie, time, age) {
  this.name = name;
  this.movie = movie;
  this.time = time;
  this.age = age;
}



//User Interface
$(function() {
  $("form#new-movie").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#name-input").val();
    var inputtedMovie = $("#movie-input :selected").val();
    var inputtedTime = $("#time-input :selected").val();
    var inputtedAge = $('input[name="age-input"]:checked').val();

    var ticketPrice = 10;
    if (inputtedTime === 3) {
      ticketPrice -= 1;
    } else if (inputtedTime === 4) {
      ticketPrice = 0;
    }

    if (inputtedAge === 1 || 3) {
      ticketPrice -= 1;
    }

    $("ul#movie-goers").append("<li><span class='click'>" + inputtedName + "</span></li>")

    $("click").click(function() {
      var newTicket = new Ticket (inputtedName, inputtedMovie, inputtedTime, inputtedAge);
      $("ul#details").text("<span class='userDetails'><h3>" + inputtedName + "</h3><br>" + inputtedMovie + "<br>" + inputtedTime + "<br>" + inputtedAge + "</span>")

    });
  });
});
