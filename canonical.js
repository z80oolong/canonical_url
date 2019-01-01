window.onload = function () {
    var doc    = document;
    var head   = doc.getElementsByTagName("head")[0];
    var links  = doc.getElementsByTagName("link");
    var a_curl = doc.getElementById("canonical_url");
    var canon  = null;
console.log(a_curl.toString());
    for (var i = 0; i < links.length; i++) {
        if (links[i].rel) {
            if (links[i].rel.toLowerCase() == "canonical") {
                if (canon == null) {
                    canon = links[i];  // <link rel="canonical" ...> タグを１個抽出。
                } else {
                    var par = link[i].parentNode;  // 残りの <link rel="canonical" ...> タグは除去。
                    par.removeChild(link[i]);
                }
            }
        }
    }

    if (canon == null) {
        canon = head.createElement("link");  // <link rel="canonical" ...> タグが存在しない場合はこれを生成。
        canon.setAttribute("rel", "canonical");
    }

    canon.setAttribute("href", a_curl.href.toString());  // <link rel="canonical" ...> タグに href 属性を付与。
};
