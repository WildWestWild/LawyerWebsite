$('.part').hover(
    function(){
        var namePlaceText = $(this).attr('nameplace');
        $('.description').text(namePlaceText);
        $('.description').fadeIn();
    },
    function(){
        $('.description').fadeOut(50);
    }
);

$('.part').click(function () { 
    Swal.fire({
        title: 'Региональный лидер ',
        showDenyButton: true,
        showCancelButton: true,
        cancelButtonText: "Выйти",
        confirmButtonText: 'Позвонить',
        denyButtonText: `Написать`
      }).then((result) => {
        if (result.isConfirmed) {
          // Логика звонка
        } else if (result.isDenied) {
          // Логика отправки Email
        }
      })
});