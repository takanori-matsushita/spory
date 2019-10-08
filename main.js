$(function() {
  //スクロールトップ
  let topBtn = $('.pagetop');    
  topBtn.hide();
  //スクロールが指定値に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      //ボタンの表示方法
      topBtn.fadeIn();
    } else {
      //ボタンの非表示方法
      topBtn.fadeOut();
    }
  });
  //スクロールしてトップ
  topBtn.click(function () {
    $('body,  html').animate({
      scrollTop: 0
    },   500);
    return false;
  });
  //一定量スクロールでヘッダーカラー変更
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      $('.bg-nav').addClass('scroll-nav');
      $('.navbar-nav').css({
        display:'flex',
        transition:'all 1s ease'
      });
    } else {
      $('.bg-nav').removeClass('scroll-nav');
      $('.navbar-nav').fadeOut();
    }
  });
  //一定量スクロールでロゴサイズ変更
  $(window).scroll(function() {
    if ($(window).scrollTop() > 600) {
      $('.header-logo').css({
        height:'40px',
        transition:'all 1s ease'
      });
    } else {
      $('.header-logo').css({
        height:'60px',
        transition:'all 1s ease'
      });
    }
  });
  
  $(window).scroll(function() {
    let position = $('#top-about').offset().top - 80;
    if($(window).scrollTop() > position) {
      
      $('#btn-bottom').slideDown().css('display','inline-flex');
    } else {
      
      $('#btn-bottom').slideUp();
    }
  });
  
  //マウスアイコンクリックで下のセクションへスクロール
  $(function(){
    $('#mouse').click(function(){
      let speed = 500;
      let elementPosition = $('#top-about').offset().top;
      let position = elementPosition - 70;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });
  
  //モーダル関連
  $('.login-show').click(function() {
    $('#login').fadeIn();
  })
  
  $('.register-show').click(function() {
    $('#register').fadeIn();
  })
});