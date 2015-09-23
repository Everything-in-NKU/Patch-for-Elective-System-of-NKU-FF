// ==UserScript==
// @name        NK_Xuanke
// @namespace   nku
// @include     http://222.30.32.10/*
// @version     1
// @grant       none
// ==/UserScript==
function insJS(src, pos) {
  if ('function' == typeof source) {
    // Execute this function with no arguments, by adding parentheses.
    // One set around the function, required for valid syntax, and a
    // second empty set calls the surrounded function.
    var source = '(' + src + ')();'
  } 
  else {
    var source = src;
  }
  var script = document.createElement('script');
  script.setAttribute('dataTyoe', 'application/javascript');
  script.textContent = source;
  pos.appendChild(script);
}
window.onload = function () {
  var sel = [
    'checkcode_text',
    'usercode_text',
    'userpwd_text'
  ];
  for (var i in sel) {
    if (document.getElementsByName(sel[i])[0] !== undefined) { //Patch for the Password input
      document.getElementsByName(sel[i])[0].id = sel[i];
    }
  }
  var aa = window.top.document.getElementsByName('leftFrame') [0];
  if (aa !== undefined) { //patch for the side bar
    aa = aa.contentDocument;
    var t = 110;
    for (var i = 0; i < 21; i++) {
      var tmp = aa.getElementById('MFX' + i);
      if (tmp) {
        tmp.style['visibility'] = 'visible';
        tmp.style['top'] = t + 'px';
        t = t + 12;
      }
    }
  }
  var cc = window.top.document.getElementsByName('mainFrame') [0].contentDocument;
  cc.onload = function () {
    insJS('var index = document.getElementsByTagName("input")[1];var operation = document.getElementsByTagName("input")[0];var submit = (function () { document.getElementsByTagName("form")[0].submit(); });', cc)
  }
}
