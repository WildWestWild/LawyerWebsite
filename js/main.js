$(document).ready(SetOffset);

$(window).resize(SetOffset);

$('.part').hover(
    function(e){
        let namePlaceText = $(this).attr('nameplace');
        //TODO: Рассмотреть возможность более точно определять координаты
        let evt = window.event;
        let description = $('.description');
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
    let partElement = $(this);
    Swal.fire({
        icon: 'info',
        title: 'Региональный лидер  <br> <hr> ' + partElement.attr('namelead') + ' <br> ',
        showDenyButton: true,
        showCancelButton: true,
        showCloseButton: true,
        cancelButtonText: "Адвокаты",
        cancelButtonColor: '#b81414',
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
        } else if(result.dismiss == 'cancel'){
          Swal.fire({
            title: GetLinks(partElement.attr('email')),//'<div><a href="#">Павлов Алексей Сергевич </a></div> <br> <div><a href="#">Виктор Андреевич Кравцев</a></div>',
            showCloseButton: true,
            showConfirmButton: false
          });
        }
      })
});


function GetLinks(email){
    let lawyerInfoArray = this.lawyerJson[email];
    let html = '<div> <br> ';
    lawyerInfoArray.forEach(element => {
      html += '<button type="button" class="btn btn-primary" onclick=GetInformationAboutLawyer("' + email + '","' + element.image +'")>' + element.fio + '</button><br><br>';
    });
    html += '</div>';

    return html;
}

function GetInformationAboutLawyer(email, image){
  let lawyerInfoArray = this.lawyerJson[email];
  let lawyerInfoPersonJson = lawyerInfoArray.find(item => item.image == image);
  
  Swal.fire({
    title: '<div class="container"><h3>' + lawyerInfoPersonJson.fio +'</h3> <hr> <p align="left" class="popupfontsize">' + lawyerInfoPersonJson.text +'</p></div>',
    showDenyButton: true,
    showCloseButton: true,
    confirmButtonText: 'Позвонить',
    confirmButtonColor: '#01DF74',
    denyButtonText: `Написать`,
    denyButtonColor: '#01A9DB',
    imageUrl: lawyerInfoPersonJson.image,
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Изображение адвоката',
  }).then((result) => {
    if (result.isConfirmed) {
      // Логика звонка
      window.location.href = lawyerInfoPersonJson.phone;
    } else if (result.isDenied) {
      // Логика отправки Email
      window.location.href = lawyerInfoPersonJson.email;
    }
  });
}


function SetOffset(){ 
  let heightHeader = $('nav').outerHeight();
  let heightFooter =  $('footer').outerHeight();

  $('.space-from-header').css({
    'margin-top': heightHeader + 'px'
  });

  $('.space-from-footer').css({
    'margin-bottom': heightFooter + 'px'
  });  
}