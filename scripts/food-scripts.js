$(document).ready(function() {
  console.log("ready!");

  // Issue1: add into DOM https://github.com/AustinMO30/vigilant-cow-food-app/issues/1
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