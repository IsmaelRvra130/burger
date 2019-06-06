
$(document).ready(function() {
    $(".devour-form").on("submit", function(event){
      event.preventDefault();

      var burger_id = $(this).children(".burger_id").val();
      console.log(burger_id);
      $.ajax({
        method: "PUT",
        url: "/burgers/" + burger_id
      }).then(function(data){
        location.reload();
      });
    });
});




// $(function() {
//     $("#devoured").on("click", function(event) {
//       var id = $(this).data("id");
//       var toDevour = $(this).data("devoured");
//       var wasDevoured = {
//         devoured: toDevour
//       };
//       $.ajax("burgers" + id, {
//         type: "PUT",
//         data: wasDevoured
//       }).then(function() {
//         console.log("changed devour to", toDevour);
//         location.reload();
//       });
//     });
  
//     $(".create-form").on("submit", function(event) {
//       event.preventDefault();
//       var newBurger = {
//         name: $("#bur")
//           .val()
//           .trim(),
//         // devoured: $("[name=devoured]:checked")
//         //   .val()
//         //   .trim()
//       };
//       $.ajax("/api/burgers", {
//         type: "POST",
//         data: newBurger
//       }).then(function() {
//         console.log("created new burger");
//         location.reload();
//       });
//     });
//   });