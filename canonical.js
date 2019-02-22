/*
canonical.js -- JavaScript for insartion of <link rel="caconical" ...> tag in <head> element.
----
MIT License

Copyright (c) 2019 NAKATSUKA, Yukitaka (mailto:zool@zool.jpn.org)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

window.addEventListener("load", function () {
    var doc    = document;
    var head   = doc.getElementsByTagName("head")[0];
    var links  = doc.getElementsByTagName("link");
    var as     = doc.getElementsByTagName("a");
    var a_curl = doc.getElementById("canonical_url");
    var c_href = location.href;
    var canon  = null;

    for (var i = 0; i < links.length; i++) {
        if (links[i].rel && (links[i].rel.toLowerCase() == "canonical")) {
            if (canon == null) {
                canon = links[i];  // <link rel="canonical" ...> タグを１個抽出。
            } else {
                links[i].parentNode.removeChild(links[i]);  // 残りの <link rel="canonical" ...> タグは除去。
                i--; // 除去したタグ <link rel="canonical" ...> １個分だけ links.length が 1 減少する。
            }
        }
    }

    if (canon == null) {
        canon = doc.createElement("link");  // <link rel="canonical" ...> タグが存在しない場合はこれを生成。
        canon.setAttribute("rel", "canonical");
        head.appendChild(canon);
    }

    if (a_curl && (a_curl.href.toString() != "")) {
        // <a href="..." id="canonical_url"> タグの href 属性が空文字列でない場合は、
        // この href 属性を <link rel="canonical" ...> タグの href 属性とする。
        c_href = a_curl.href.toString();
    } else {
        // <a href="..." id="canonical_url"> タグの href 属性が空文字列の場合は、
        // <a> タグの中から title 属性が "canonical url" であるものを探す。
        for (var i = 0; i < as.length; i++) {
            if (as[i].title && (as[i].title.toLowerCase() == "canonical url")) {
                if (as[i].href.toString() != "") {
                    // <a href="..." title="canonical url"> タグの href 属性が空文字列でないもののうち、
                    // 最初の href 属性を <link rel="canonical" ...> タグの href 属性とする。
                    c_href = as[i].href.toString();
                    break;
				}
            }
	    }
    }

    // <link rel="canonical" ...> タグに href 属性を付与する。
    canon.setAttribute("href", c_href);
});
