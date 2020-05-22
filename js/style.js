//參數表
var stay = 2000;//ooxx停留時間
var arrLen = 5;//陣列長度，也用來限制範圍(題目數)
//題庫
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
  for (var i = 0; i < arrLen; i++) {
    var radomNum = parseInt(Math.random() * arrLen) + 1;
    if (arr.indexOf(radomNum) == -1) {
      arr.push(radomNum);
    } else {
      i--;
    }
  }
  console.log(arr);

  function match() {
    if (quesNo == 1) {
      var ques = ques1;
    } if (quesNo == 2) {
      var ques = ques2;
    } if (quesNo == 3) {
      var ques = ques3;
    } if (quesNo == 4) {
      var ques = ques4;
    } if (quesNo == 5) {
      var ques = ques5;
    }
  }

  function quesPushOld() {
    $('.ques').attr('value', ques[5]);
    $('.ques h3').text(ques[0]);
    $('.ques .a1').text(ques[1]);
    $('.ques .a2').text(ques[2]);
    $('.ques .a3').text(ques[3]);
    $('.ques .a4').text(ques[4]);
    $('.ans .a1').attr('value', ques[1]);
    $('.ans .a2').attr('value', ques[2]);
    $('.ans .a3').attr('value', ques[3]);
    $('.ans .a4').attr('value', ques[4]);
  }

  var quesNo = 1;
  function quesPush() {
    if (quesNo == 1) {
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
    } if (quesNo == 2) {
      $('.ques').attr('value', ques2[5]);
      $('.ques h3').text(ques2[0]);
      $('.ques .a1').text(ques2[1]);
      $('.ques .a2').text(ques2[2]);
      $('.ques .a3').text(ques2[3]);
      $('.ques .a4').text(ques2[4]);
      $('.ans .a1').attr('value', ques2[1]);
      $('.ans .a2').attr('value', ques2[2]);
      $('.ans .a3').attr('value', ques2[3]);
      $('.ans .a4').attr('value', ques2[4]);
    } if (quesNo == 3) {
      $('.ques').attr('value', ques3[5]);
      $('.ques h3').text(ques3[0]);
      $('.ques .a1').text(ques3[1]);
      $('.ques .a2').text(ques3[2]);
      $('.ques .a3').text(ques3[3]);
      $('.ques .a4').text(ques3[4]);
      $('.ans .a1').attr('value', ques3[1]);
      $('.ans .a2').attr('value', ques3[2]);
      $('.ans .a3').attr('value', ques3[3]);
      $('.ans .a4').attr('value', ques3[4]);
    } if (quesNo == 4) {
      $('.ques').attr('value', ques4[5]);
      $('.ques h3').text(ques4[0]);
      $('.ques .a1').text(ques4[1]);
      $('.ques .a2').text(ques4[2]);
      $('.ques .a3').text(ques4[3]);
      $('.ques .a4').text(ques4[4]);
      $('.ans .a1').attr('value', ques4[1]);
      $('.ans .a2').attr('value', ques4[2]);
      $('.ans .a3').attr('value', ques4[3]);
      $('.ans .a4').attr('value', ques4[4]);
    } if (quesNo == 5) {
      $('.ques').attr('value', ques5[5]);
      $('.ques h3').text(ques5[0]);
      $('.ques .a1').text(ques5[1]);
      $('.ques .a2').text(ques5[2]);
      $('.ques .a3').text(ques5[3]);
      $('.ques .a4').text(ques5[4]);
      $('.ans .a1').attr('value', ques5[1]);
      $('.ans .a2').attr('value', ques5[2]);
      $('.ans .a3').attr('value', ques5[3]);
      $('.ans .a4').attr('value', ques5[4]);
    }
  }

  function remove() {
    $('.ans button').removeClass('erro');
    $('.ans button').removeClass('active');
  }

  quesPush();
  var correctN = 0;
  var erroN = 0;
  function endPush() {
    if (quesNo > 5) {
      $('.end').show();
      $('.correctCount').text(correctN);
      $('.errorCount').text(erroN);
    } else { }
  }

  $('.ans button').click(function () {
    var bt = $(this).attr('value');
    var ans = $('.ques').attr('value');
    if (bt != ans) {
      $(this).addClass('erro');
      $('.correct').hide();
      $('.error').show();
      erroN = erroN + 1;
      quesNo = quesNo + 1;
      console.log('錯誤');
      $('.error').delay(stay).hide(0);
      if (quesNo == 1) {
        var ques = ques1;
      } if (quesNo == 2) {
        var ques = ques2;
      } if (quesNo == 3) {
        var ques = ques3;
      } if (quesNo == 4) {
        var ques = ques4;
      } if (quesNo == 5) {
        var ques = ques5;
      }
      console.log(quesNo);
      setTimeout(quesPush, 2000);
      endPush();
      setTimeout(remove, 2000);
    } else {
      $(this).addClass('active');
      $('.error').hide();
      $('.correct').show();
      correctN = correctN + 1;
      quesNo = quesNo + 1;
      console.log('正確');
      $('.correct').delay(stay).hide(0);

      if (quesNo == 1) {
        var ques = ques1;
      } if (quesNo == 2) {
        var ques = ques2;
      } if (quesNo == 3) {
        var ques = ques3;
      } if (quesNo == 4) {
        var ques = ques4;
      } if (quesNo == 5) {
        var ques = ques5;
      }
      setTimeout(quesPush, 2000);
      setTimeout(endPush, 2000);
      setTimeout(remove, 2000);
    }
  });


  $('.end button').click(function () {
    window.location.reload();
  });
});