$(function(){
  $('.contain-to-grid').height('66px');
  $('.disq_comments').click(function(e){
   window.location = "post.html?pid="+$(this).attr('id');
   return false;
  });

  $(".soc_open").hide();
  $(".soc_close").click(function(e){
    e.preventDefault();
    $(".soc_close").hide();
    $('.soc_share ul').animate({'opacity':'0','left':'-20px'},500,'linear',function(){
      $(".soc_open").show();
    });
  });
  $(".soc_open").click(function(e){
    e.preventDefault();
    $(".soc_open").hide();
    $('.soc_share ul').animate({'opacity':'1','left':'0'},500,'linear',function(){
      $(".soc_close").show();
    });
  });

  $('.soc_share').hover(function(){
    if($('.soc_share ul').css('opacity')==1){
    $(".soc_close").show();
  }
  }, function(){$(".soc_close").hide();});

})