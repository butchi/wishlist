(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

console.log('Hello, world!');

window.licker = window.licker || {};
(function (ns) {
  var $body = $('body');

  var $list = $('.list');
  var $item = $list.find('.item');

  $list.on('click', '.item', function (evt) {
    var $target = $(evt.target);
    $target.closest('.item').attr('data-clicked', '1');
  });

  $(window).on('focus', function (evt) {
    $item.filter('[data-clicked]').each(function (i, itm) {
      var $itm = $(itm);
      var compiled = $itm.attr('data-compiled');
      $itm.find('.link').text(compiled);
    });
  });
})(window.licker);

console.log('Thanks, world!');

},{}]},{},[1]);
