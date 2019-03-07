//define functions here

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});


function getIt() {
  $('p').on('click');
  alert("Hey!");
}

function frameIt() {
  $('img').addClass('tasty').on('load');
}

function pressIt() {
  $(document).on('keydown', function(key) {
    if(key.which === '71') {
      alert("G was pressed");
    }
  });
  
}

function submitIt() {
  $('form').on('submit');
  alert("Your form is going to be submitted now.")
}




