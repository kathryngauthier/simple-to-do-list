var $input = $('#to-do-list');
var $list = $(".list");

$('#to-do-list').on('submit', function (e) {
  var $li = $('<li>');
  e.preventDefault();
  $li.html($input.val());
  $list.append($li);
});
