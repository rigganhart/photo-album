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
    console.log($(this));

  });


$('button').on('click', function (event) {

  event.preventDefault();
  console.log($(this).attr('name'));

  var relatedSection = "." + $(this).attr('name');
  $(relatedSection).addClass('active');
  $(relatedSection).siblings().removeClass('active');
});






//appending data to html, i used info from bobloblawblog demo
// var albumHtmlstr = "<ul>";
//   albums.forEach(function(element,idx) {
//   albumHtmlStr += `
//   <ul class="albums active">
//       <li class="album">
//           <ul class="photos">
//               <li class="photo"></li>
//           </ul>
//       </li>
//   </ul>
// `
