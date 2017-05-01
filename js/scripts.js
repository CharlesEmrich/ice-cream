$(function() {
  $("form").submit(function(event) {
    var flavarray = $("input[name='flavors']").val().split(",");
    flavarray.forEach(function(flavor) {
      if (flavor[0] === " ") {
        flavor = flavor.slice(1);
      }
      $(".output").append("<li>" + flavor + "</li>");
    })
    event.preventDefault();
  });
})
