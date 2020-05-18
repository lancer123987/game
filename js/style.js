var ques1 = [
  '1+1=?',
  '0',
  '1',
  '2',
  '3',
  '2'
];
var ques2 = [
  '2+2=?',
  '0',
  '1',
  '2',
  '4',
  '4'
];
var ques3 = [
  '3+3=?',
  '0',
  '1',
  '6',
  '4',
  '6'
];
var ques4 = [
  '4+4=?',
  '0',
  '1',
  '6',
  '8',
  '8'
];
var ques5 = [
  '5+5=?',
  '0',
  '10',
  '6',
  '4',
  '10'
];

$(document).ready(function () {
  //取題目
  var arr = [];//存放隨機數的陣列
  var arrLen = 5;//陣列長度，也用來限制範圍
  for (var i = 0; i < arrLen; i++) {
    var radomNum = parseInt(Math.random() * arrLen) + 1;
    if (arr.indexOf(radomNum) == -1) {
      arr.push(radomNum);
    } else {
      i--;
    }
  }
  console.log(arr);

  for (var i = 0; i < arrLen; i++) {

  }


  $('.ques').attr('value', ques1[5]);
  $('.ques h3').text(ques1[0]);
  $('.ques .a1').text(ques1[1]);
  $('.ques .a2').text(ques1[2]);
  $('.ques .a3').text(ques1[3]);
  $('.ques .a4').text(ques1[4]);
  $('.ans .a1').attr('value', ques1[1]);
  $('.ans .a2').attr('value', ques1[2]);
  $('.ans .a3').attr('value', ques1[3]);
  $('.ans .a4').attr('value', ques1[4]);

  $('.ans button').click(function () {
    var bt = $(this).attr('value');
    var ans = $('.ques').attr('value');
    if (bt != ans) {
      console.log(bt);
      console.log(ans);
      console.log('錯誤');
    } else {
      console.log(bt);
      console.log(ans);
      console.log('正確');
    }
  });
});