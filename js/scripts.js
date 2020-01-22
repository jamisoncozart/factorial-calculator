var factorial = function(num) {
  if(num == 1) {
    return num;
  } else {
    return num * factorial(num - 1);
  }
}

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var input = $("#numberInput").val();
    $("#output").text(factorial(input));
  })
})

