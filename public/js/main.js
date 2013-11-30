$(function(){
  $('.contain-to-grid').height('66px');
  $('.contain-to-grid').hide();
  $('.contain-to-grid').fadeIn(1000);
  $('.disq_comments').click(function(e){
   window.location = "post.html?pid="+$(this).attr('id');
   return false;
  });
})