console.log('Hello, world!');

window.licker = window.licker || {};
((ns) => {
  const $body = $('body');

  const $list = $('.list');
  var $item = $list.find('.item');

  $list.on('click', '.item', (evt) => {
    const $target = $(evt.target);
    $target.closest('.item').attr('data-clicked', '1');
  });

  $(window).on('focus', (evt) => {
    $item.filter('[data-clicked]').each((i, itm) => {
      let $itm = $(itm);
      let compiled = $itm.attr('data-compiled');
      $itm.find('.link').text(compiled);
    });
  });
})(window.licker);

console.log('Thanks, world!');
