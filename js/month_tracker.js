$(document).ready(function () {
  var d= new Date();
  var	month = d.getMonth();
  var	msg = ["It's the first month!",
             "It's the second month!",
             "It's the third month!",
             "It's the fourth month!",
             "It's the fifth month!",
             "It's the sixth month!",
             "It's the seventh month!",
             "It's the eighth month!",
             "It's the ninth month!",
             "It's the tenth month!",
             "It's the eleventh month!",
             "It's the twelfth month!"]

  $('#' + month).attr('id', 'this_month');
  $("#message").text(msg[month]);

});
