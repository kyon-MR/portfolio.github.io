$(function(){
  $('img[src], iframe[src]').each(function(){
    let src = $(this).attr('src');
    src = src + '?ts=' + (new Date()).getTime();
    $(this).attr('src', src);
  });
})

$(function(){
  var parallaxBkImg = function(){
     $(window).on('load resize', function() {
       $(window).on('load scroll', function(){
         var $winTop = $(window).scrollTop();
         var $target = $('.cd-fixed-bg');
         var $winWidth = $(window).width();
         var $winHeight = $(window).height();
         //このLPはビューポートを設定していないので、ブラウザはスマホの画面幅を認識できず、
         //980pxと認識します。そのため、ウィンドウ幅を取得しても736以下にはなりません。
         //if($winWidth < 736) {
           $target.each(function(index){
             var $position = $winTop - $target.eq(index).offset().top;
             if($winTop > $target.eq(index).offset().top - $winHeight) {
               $target.eq(index).css({
                 'background-position-y': $position * 1 // この数値で背景のスクロール速度を調整
               });
             }
           });
         //}
       });
     });
   }();
})
