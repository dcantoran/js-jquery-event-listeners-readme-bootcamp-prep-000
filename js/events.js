//define functions here

$(document).ready(function(){

// call functions here

});


function getIt() {
  $('p').on('click');
  alert("Hey!");
}

function frameIt() {
  $('img').on('load').append('.tasty');
}

function pressIt() {
  $(document).on('keydown');
  if(key.which === 73) {
    alert('G key pressed');
  }
}

function submitIt() {
  $('form').on('submit');
  alert("Your form is going to be submitted now.")
}




