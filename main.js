 $(document).ready(function() {
  $("button#search-icon").click(function(){
      $("#wid"). fadeToggle("slow");
});});

$(document).ready(function() {
  $(".droplist-menue").click(function(){
      $(".inside-droplist-menue"). fadeToggle("slow");
});});
$(document).ready(function() {
  $(".container").click(function(){
      $(".inside-droplist-menue").css("display","none");
});});


$(document).ready(function(){
    $('#navOut a').click(function(){
         $(this).addClass('active').siblings().removeClass('active');
  });      // #change li =this
});
$(document).ready(function(){
    $('.btn-toolbar button').click(function(){
         $(this).addClass('active').siblings().removeClass('active');
  });      
});


$(document).ready(function(){
    $('.Account li').click(function(){
         $(this).addClass('active5').siblings().removeClass('active5');
  });      
});

//
//$(document).ready(function() {
//  $('.hide-text').each(function(fadeIn) {
//    $(this).delay(fadeIn * 500).fadeIn(1000);
//  });
//});
//
//document.getElementById('readMoreid').onclick = function(e)


$(document).ready(function(){
    $('#navbar-nav a').click(function(){
         $(this).addClass('active').siblings().removeClass('active');
  });     
});
