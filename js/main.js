$(document).ready(SetOffset);

$(window).resize(SetOffset);

$('.part').hover(
    function(e){
        var namePlaceText = $(this).attr('nameplace');
        console.log(namePlaceText);
        //TODO: Рассмотреть возможность более точно определять координаты
        var evt = window.event;
        var description = $('.description');
        description.text(namePlaceText);
        description.css({
          'left': (evt.clientX + 20) + 'px',
          'top': (evt.clientY + 20) + 'px'
        });
        description.fadeIn();
    },
    function(){
        $('.description').fadeOut(50);
    }
);

$('.part').click(function () { 
    var partElement = $(this);
    Swal.fire({
        icon: 'info',
        title: 'Региональный лидер  <br> <hr> ' + partElement.attr('namelead') + ' <br> ',
        showDenyButton: true,
        showCancelButton: true,
        cancelButtonText: "Выйти",
        cancelButtonColor: '#BDBDBD',
        confirmButtonText: 'Позвонить',
        confirmButtonColor: '#01DF74',
        denyButtonText: `Написать`,
        denyButtonColor: '#01A9DB'
      }).then((result) => {
        if (result.isConfirmed) {
          // Логика звонка
          window.location.href = partElement.attr('phone');
        } else if (result.isDenied) {
          // Логика отправки Email
          window.location.href = partElement.attr('email');
        }
      })
});


function SetOffset(){ 
  let heightHeader = $('nav').outerHeight();
  let heightFooter =  $('footer').outerHeight();

  console.log(heightHeader);

  $('.space-from-header').css({
    'margin-top': heightHeader + 'px'
  });

  $('.space-from-footer').css({
    'margin-bottom': heightFooter + 'px'
  });  
}