$('.lightFireBtn').on('touchend', () => {
  $('.lightFireBtn').attr("src", "./src/images/lightFireBtnHover.png");
  let i = 0;
  setInterval(() => {
    if (i >= 14) {
      i = 4
    } else {
      i++
    }
    $('.fireMove')[0].style.backgroundImage = 'url("./src/images/fireImages/fire' + i + '.png")'
  }, 110)
  setTimeout(() => {
    $('.lightFireBtn').attr("src", "./src/images/lightFireBtn.png");
    $('.model').fadeIn(500);
  }, 5000)
});

$('.model').on('touchend', () => {
  //alert(123)
});

$('.getRedBagBtn').on('touchend', () => {
  $('.phoneNumInput').hide();
  $('.getRedBagTip').fadeIn(222);
  $('.getRedBagBtn').hide();
  setTimeout(() => {
    $('.toProListPage').fadeIn(222);
  }, 100);
});
$('.toProListPage').on('touchend', () => {
  location.replace($(this).attr("href"));
})
