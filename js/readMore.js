$(document).ready(function(){
    $(".corner__card").slice(0, 15).show();
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      $(".corner__card:hidden").slice(0, 6).slideDown();
      if($(".corner__card:hidden").length == 0) {
        $("#loadMore").addClass("noContent");
      }
    });
    
  })




