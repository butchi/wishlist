!function b(u,t,c){function h(bb,ub){if(!t[bb]){if(!u[bb]){var tb="function"==typeof require&&require;if(!ub&&tb)return tb(bb,!0);if(i)return i(bb,!0);var cb=new Error("Cannot find module '"+bb+"'");throw cb.code="MODULE_NOT_FOUND",cb}var hb=t[bb]={exports:{}};u[bb][0].call(hb.exports,function(b){var t=u[bb][1][b];return h(t?t:b)},hb,hb.exports,b,u,t,c)}return t[bb].exports}for(var i="function"==typeof require&&require,bb=0;bb<c.length;bb++)h(c[bb]);return h}({1:[function(b,u,t){"use strict";console.log("Hello, world!"),window.licker=window.licker||{},function(b){var u=($("body"),$(".list")),t=u.find(".item");u.on("click",".item",function(b){var u=$(b.target);u.closest(".item").attr("data-clicked","1")}),$(window).on("focus",function(b){t.filter("[data-clicked]").each(function(b,u){var t=$(u),c=t.attr("data-compiled");t.find(".link").text(c)})})}(window.licker),console.log("Thanks, world!")},{}]},{},[1]);