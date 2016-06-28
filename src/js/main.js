console.log('Hello, world!');

class Main {
  constructor() {
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

    var features = [
      'menubar=no',
      'location=no',
      'resizable=yes',
      'scrollbars=yes',
      'status=no'
    ].join(',');
    console.log(features);
    window.open("http://amazon.co.jp/", "amazon", features);
  }
}

window.licker = window.licker || {};
((ns) => {
  $(() => {
    ns.main = new Main();
  })
})(window.licker);

console.log('Thanks, world!');
