//from calvins demo
$('li a').on('click', function (event) {
    event.preventDefault();
    console.log($(this).attr('rel'));

    var relatedSection = "." + $(this).attr('rel');

    $(relatedSection).addClass('active');
    $(relatedSection).siblings().removeClass('active');

});

$('li.photo a').on('click', function (event) {
    event.preventDefault();
    console.log($(this).attr());

  });


$('button h3').on('click', function (event) {

  event.preventDefault();
  console.log($(this).text());
});
