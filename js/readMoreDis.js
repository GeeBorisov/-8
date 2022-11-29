$(document).ready(function(){
    $(".ourDesigners").slice(0, 12).show();
    $("#loadMoreDis").on("click", function(e){
      e.preventDefault();
      $(".ourDesigners:hidden").slice(0, 9).slideDown();
      if($(".ourDesigners:hidden").length == 0) {
        $("#loadMoreDis").addClass("noContentDis");
      }
    });
    
  })
