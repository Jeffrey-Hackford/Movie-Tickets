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
    var price = [];
    console.log(inputtedName, inputtedMovie, inputtedTime, inputtedAge);

    var newTicket = new Ticket (inputtedName, inputtedMovie, inputtedTime, inputtedAge);

    Ticket.prototype.ticketPrice = function() {
      price = 10;
      if (inputtedTime === 'Much Later') {
        price -= 1;
      } else if (inputtedTime === 'Yesterday') {
        price = 0;
      }

      if ((inputtedAge === 1 || 3) && (inputtedTime !== 'Yesterday')) {
        price -= 1;
      }
      return price;
    }

    // attempted prototype for outputting details
    //  Ticket.prototype.getDetails = function() {
    //   newTicket.getDetails.forEach(function(detail) {
    //     $("p#details").append("<li>" + detail.newTicket() + "</li><br>");
    //   });
    //   $("p#details").append("<li>" + newTicket.ticketPrice + "</li><br>")
    //  }

    $("ul#movie-goers").append("<li><span class='click'>" + inputtedName + "</span></li>");

    $(".click").last().click(function() {
      // newTicket.getDetails()
      $("ul#details li").last().remove();
      $("ul#details").append("<li><h3>" + inputtedName + "</h3>" + "<br>" + inputtedMovie + "<br>" + inputtedTime + "<br>" + newTicket.ticketPrice()) + "</li>";


    console.log(newTicket);
    });
  });
});
