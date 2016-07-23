$(function(){
  //非表示
  $('#output').css({
    display:'none'
  });

  var $input = $('input'),
      buun_index = 0,
      kotsuun_index = 0,
      kinun_index = 0,
      training_index = 0,
      user = {
        name : 'name',
        birthdayYear: function(){
          return Number($input[1].value.slice(0,4));
        },
        birthdayMonth:function(){
          return Number($input[1].value.slice(4,6));
        },
        birthdayDay:function(){
          return Number($input[1].value.slice(6,8));
        }
      };

  $('#submit').on("click",function(e){

    //各要素を取りしてuserに反映
    user.name = $input[0].value;
    console.log(user.birthdayYear());
    console.log(user.birthdayMonth());
    console.log(user.birthdayDay());


    //
    calcIndex();



    $.ajax({
      url: "json/data.json",
      dataType: "json",
      success: function(data){
        console.log(data);
        execute(data);
      }
    });

  });


  function execute(data){

    calcIndex();
    //文言を反映
    document.getElementById('name').innerHTML = user.name;
    document.getElementById('buun').innerHTML = data.buun[buun_index];
    document.getElementById('kotsuun').innerHTML = data.kotsuun[kotsuun_index];
    document.getElementById('kinun').innerHTML = data.kinun[kinun_index];
    document.getElementById('training').innerHTML = data.training[training_index];

    //画面切り替え
    $('#input').toggle();
    $('#output').toggle();
  }

  function calcIndex(){

    var sum = user.birthdayYear() + user.birthdayMonth() + user.birthdayDay();
    var arr_index = String(sum).split('');

    buun_index = (Math.floor(Math.random() * 10) + Number(arr_index[0]))%5;
    kotsuun_index = (Math.floor(Math.random() * 10) + Number(arr_index[1]))%5;
    kinun_index = (Math.floor(Math.random() * 10) + Number(arr_index[2]))%5;
    training_index = (Math.floor(Math.random() * 10) + Number(arr_index[3]))%5;

  }


});
