$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed');
});
$('ul').on('click', 'span', function() {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    $('ul').append('<li><span><i class="far fa-trash-alt"></i></span> ' + $(this).val() + '</li>');
    $(this).val('');
  }
});
$('button').click(function() {
  $("input[type='text']").toggleClass('toggleInput');
});
