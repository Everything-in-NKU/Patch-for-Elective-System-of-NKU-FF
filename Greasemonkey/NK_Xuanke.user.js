// ==UserScript==
// @name        NK_Xuanke
// @namespace   nku
// @include     http://222.30.32.10/*
// @version     1
// @grant       none
// @run-at      document-start
// ==/UserScript==
window.onload = function () {
    var sel = document.getElementsByTagName("input");
    for(var j = 0;j < sel.length; j++){
        sel[j].id = sel[j].name;
    }
    var aa = window.top.document.getElementsByName('leftFrame') [0];
    if(aa){ //patch for the side bar
            aa = this.contentDocument;
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
    var cc = window.top.document.getElementsByName('mainFrame') [0];
    if(cc){
        cc.onload = function () {
            dd  = this.contentDocument.getElementsByTagName("input");
            this.contentWindow.localtion = this.contentWindow.location;
            for(var i = 0; i<dd.length; i++){
                dd[i].name?eval("var " + dd[i].name + " = dd["+i+"]"):eval("");
                dd[i].id = dd[i].name;
            }
        }
    }
    else{}
}
