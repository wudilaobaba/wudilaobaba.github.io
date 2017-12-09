$('.plusBtn').click(function() {
  let currentNum = parseInt($(this).prev().html());
  $(this).prev().html(currentNum + 1);
})
$('.reduceBtn').click(function() {
  let currentNum = parseInt($(this).next().html());
  if (currentNum === 1) {
    $(this).next().html(currentNum);
  } else {
    $(this).next().html(currentNum - 1);
  }
})
