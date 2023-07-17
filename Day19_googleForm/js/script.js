$(document).ready(function () {

  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/hogehoge",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".submit-btn").hide();
          $(".submit-success").fadeIn();
          //window.location.href = "thanks.html";
        },
        200: function () {
          $(".submit-failed").fadeIn();
        }
      }
    });
    event.preventDefault();
  });

});