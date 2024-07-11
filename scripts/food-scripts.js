$(document).ready(function() {
  console.log("ready!");

  // Issue1: Click event for "Load Foods" button
  $('#btnLoadFoods').click(function() {
    $('#foodList').empty(); // Clear the existing food list

    // Issue2: target food list container
    foodList.forEach(function(food) {
      $('#foodList').append(`<li class="list-group-item"><i class="fas fa-utensils"></i> ${food}</li>`);
    });

    $('#foodList').slideDown(2000);
  });

  // Issue2: target food list container
  $('#btnClearFoods').on('click', function() {
    $('#foodList').slideUp(1000, function() {
      $(this).empty();
    });
  });
  
  
  let foodList = [
    "Prime Rib",
    "Flank Steak",
    "Loaded Mac and Cheese",
    "Barbeque Tacos",
    "Shrimp Alfredo",
    "Chicken Fingers"
  ];

});