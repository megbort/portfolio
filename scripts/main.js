// FLYOUT NAVIGATION BAR //
// Resize the width of panel to show menu - add right border
function openNav() {
  document.getElementById("mySidepanel").style.borderRight = "1px solid #FF3358";
  document.getElementById("mySidepanel").style.width = "230px";
  
}// Resize the width to hide menu - hide right border
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
  document.getElementById("mySidepanel").style.borderRight = "none";
}

// CHANGE PICTURE IN FOOTER //
// Change the image of cartoon when user clicks
function changeMeg() {
  document.getElementById('aniMeg').src = "images/animeg_heart.png";
}

// ISOTOPE FILTERING //
// initialize Isotope, set class and sizing option
var $grid = $('.grid').isotope({
  itemSelector: '.work-card',
  layoutMode: 'fitRows',
  filter: '.featured'
});

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

// ABOUT ME READ MORE TOGGLE //
$( "#myBtn" ).click(function() {
  $( "#more" ).slideToggle( "slow" );
  $(this).text(function(i, v){
    return v === 'Read Less' ? 'Read More' : 'Read Less'
 })
});