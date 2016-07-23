$(function(){
  $('#output').css({
    display:'none'
  });

  var $input = $('input'),
      user = {
        name : 'name',
        birthday : 19700101
      };

  $('#submit').on("click",function(e){
    //各要素を取りしてuserに反映
    user.name = $input[0].value;
    user.birthday =  $input[1].value;
    //alert('本当にいいんですか？');
    //alert('本当の本当にいいんですか？');
    //画面切り替え
    $('#input').toggle();
    $('#output').toggle();

  });

});
