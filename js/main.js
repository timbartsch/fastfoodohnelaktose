$(function(){
  $(".row.warning").click(function(){
    var $info = $(this).children(".info");
    if($info.is(":visible")){
      $info.slideUp();
    } else {
      $info.slideDown();
    }
  });
});
