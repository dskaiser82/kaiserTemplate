(function($){
  $(function(){

    // $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      });

      $( "#nav-wrapper" ).click(function() {
        console.log("yoyo")
});


  }); //end embedded iffy
    //

    //

  // end of document ready
})(jQuery); // end of jQuery name space




// 
// console.log("Hi Danny")
