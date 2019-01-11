window.addEventListener("load", function () {
    var doc    = document;
    var head   = doc.getElementsByTagName("head")[0];
    var links  = doc.getElementsByTagName("link");
    var a_curl = doc.getElementById("canonical_url");
    var canon  = null;

    for (var i = 0; i < links.length; i++) {
        if (links[i].rel) {
            if (links[i].rel.toLowerCase() == "canonical") {
                if (canon == null) {
                    canon = links[i];  // <link rel="canonical" ...> タグを１個抽出。
                } else {
                    var par = links[i].parentNode;  // 残りの <link rel="canonical" ...> タグは除去。
                    par.removeChild(links[i]);
                }
            }
        }
    }

    if (canon == null) {
        canon = doc.createElement("link");  // <link rel="canonical" ...> タグが存在しない場合はこれを生成。
        canon.setAttribute("rel", "canonical");
        head.appendChild(canon);
    }

    //  <link rel="canonical" ...> タグに href 属性を付与。
    // href 属性の値は、ページ中の <a> タブのうち、 id 属性が "canonical_url" であるもののリンク先とする。
    if (a_curl != null) { 
        canon.setAttribute("href", a_curl.href.toString());
    }
});
