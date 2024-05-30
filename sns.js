
function snsAnimation() {
  anime({
  targets: '#sns',
  translateX: 360,
  duration: 2000,
  });
}

snsAnimation();

$(window).scroll(function(){
  var t = $('#share').offset().top; // ターゲットの位置取得
  var p = t - $(window).height();  // 画面下部からのターゲットの位置
  if($(window).scrollTop() > p){
  }
})

