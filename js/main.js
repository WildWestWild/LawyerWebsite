$('.part').hover(
    function(){
        var namePlaceText = $(this).attr('nameplace');
        $('.description').text(namePlaceText);
        $('.description').fadeIn();
        //$(this).append("<span> Текст подсказки </span>");
        //$(this).find("span:last").css("background-color", "red");
    },
    function(){
        $('.description').fadeOut(50);
        //$(this).find("span:last").remove();
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