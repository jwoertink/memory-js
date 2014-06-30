// create an empty array and assign to variable selections
var selections = [];
// kick off everything when the document is ready
$(function() {
  // find all elements with a class of .card and bind a click event
  $('.card').click(function() {
    // assign the current clicked card to variable $card
    var $card = $(this);
    // if the $card has the class "face-down" and the length of my selections array is less than 2
    if($card.hasClass('face-down') && selections.length < 2) {
      // remove that face-down class
      $card.removeClass('face-down');
      // add the face-up class
      $card.addClass('face-up');
      // push the $card into the array
      selections.push($card);
    }
    // if my selections array has exactly 2 elements in it
    if(selections.length == 2) {
      // set a timeout for 800 milliseconds
      window.setTimeout(function() {
        // if the text of the first element and the text of the second element are equal to eachother
        if(selections[0].text() == selections[1].text()) {
          // iterate over the array and replace each element with a new empty div that has the class "taken"
          $(selections).each(function(i,card){
            $(card).replaceWith('<div class="taken"></div>');
          });
        }
        // take all elements with a class of face-up and remove the face-up class then add the face-down class
        $('.face-up').removeClass('face-up').addClass('face-down');
        // reset my array to be empty again
        selections = [];
      }, 800);
    }
  });
});
