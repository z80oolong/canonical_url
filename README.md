# canonical_url -- 任意の Web ページ等に ```<link rel="canonical" ...>``` タグを付与する javascript コード

## 概要

各種 Web コンテンツを複数の Web ページ及びブログサービス等にクロス投稿を行う場合に、クロス投稿先となる Web ページ及びブログサービス等に、 ```<link rel="canonical" href="...">``` タグを ```<head>``` 要素内に付与することで、各種検索エンジンに ”主たる Web ページ及びブログサービスの URL” を知らせる事は、各種 Web コンテンツの検索の効率性を高めるために非常に重要です。

本リポジトリに含まれる javascript コードである ```canonical.js``` は、任意の Web ページ及びブログサービス等に ```<link rel="canonical" href="...">``` タグを ```<head>``` 要素内に付与するための javascript コードです。

なお、本リポジトリに含まれる javascript コードである ```canonical.js``` に関する詳細については、拙稿 "[ブログサービス等に ```<link rel="canonical" ...>``` タグを付与する][QRN1]" を参照して下さい。

## 使用法

まず、クロス投稿先となる任意の Web ページ及びブログサービスにおいて、ページ内の任意の位置に以下の ```<script>``` タグを記述します。これは、 ```<head>``` 要素内若しくは ```<body>``` 要素内の何れでも構いません。

```
<!-- ...(略)... -->
<script text="text/javascript" src="https://github.com/z80oolong/canonical_url/releases/download/v0.0.2/canonical.js"></script>
<!-- ...(略)... -->
```

なお、[はてなブログ][HATE]等、デザインの設定により、ヘッダ及びフッタに任意の HTML を記述できる場合は、上記の ```<script>``` タグをヘッダ及びフッタに記述しても構いません。

そして、クロス投稿先となる任意の Web ページ等において、クロス投稿元となる Web ページ等の URL を以下のような形式で埋め込みます。

```
<!-- ...(略)... -->
<a href="https://www.example.com/canonical.html" id="canonical_url">クロス投稿元のリンクです</a> <!-- ここに、 https://www.example.com/canonical.html は、クロス投稿元の URL -->
<!-- ...(略)... -->
```

即ち、クロス投稿先となる任意の Web ページ内に id 属性が ```"canonical_url"``` である ```<a href="..." ...>``` タグを埋め込みます。

若しくは、クロス投稿先となる任意の Web ページ内に title 属性が ```"canonical url" (ここで、 "canonical url" の文字列は大文字・小文字を区別しません)``` である ```<a href="..." ...>``` タグを以下のような形式で埋め込みます。

```
<!-- ...(略)... -->
<a href="https://www.example.com/canonical.html" title="Canonical URL">クロス投稿元のリンクです</a> <!-- ここに、 https://www.example.com/canonical.html は、クロス投稿元の URL -->
<!-- ...(略)... -->
```

なお、上記の形式は、 Markdown 記法では、以下のような形式で埋め込むことが出来ます。

```
<!-- ...(略)... -->
[クロス投稿元のリンクです][CANON]

[CANON]:https://www.exanple.com/canonical.html "Canonical URL"

<!-- ここに、 https://www.example.com/canonical.html は、クロス投稿元の URL -->
<!-- ...(略)... -->
```

以上の設定等を行った後、各種ブラウザ等で "Web 開発" の設定から "インスペクタ" の画面を表示せることにより、 ```<head>``` 要素内に ```<link rel="canonical" ...>``` が埋め込まれているのを確認します。

なお、ここで ```<link rel="canonical" ...>``` タグに付与される href 属性の値は、以下の順序に従って決定されます。

- ページ内に存在する全ての ```<a>``` タグのうち、 id 属性の値が ```"canonical_url"``` である ```<a>``` タグの href 属性の値。
- 上記の値が存在しない場合は、ページ内に存在する全ての ```<a>``` タグのうち、 title 属性の値が ```"canonical url"``` (大文字・小文字の区別をしない) であるもののうち、最初に href 属性をもつ```<a>``` タグの href 属性の値。
- 上記の値が存在しない場合は、ページ自体の URL。

## 注意点

なお、本リポジトリに含まれる javascript コードである ```canonical.js``` によって```<link rel="canonical" href="...">``` タグを ```<head>``` 要素内に付与するには、クロス投稿先の Web ページ及びブログサービスが ```<script>``` タグによる javascript コードの実行を許可していることが条件です。
 
その他、これらの Web ページ若しくはブログサービスについて javascript コードの実行を制限している場合に関しても、 ```canonical.js``` の実行が制限されますので、御注意下さい。

## 謝辞

本リポジトリに含まれる javascript コードである ```canonical.js``` を記述するにあたっては、以下の投稿を参考にしました。投稿記事の著者各位に心より感謝致します。

- [はてなブログ→WordPress移転でcanonical使って検索順位維持に成功 | じじろぐ][JIJI]
- [はてなブログでmetaタグにnoindexやcanonical設定する方法 - きりんの自由研究][KIRI]
- [javascript:正規化された(canonical)URLを取得する - サンプルコードと使用例 - Dr.ウーパのコンピュータ備忘録][UUPA]
- [addEventListener type一覧と各ブラウザ対応 - Qiita][MRPE]

## 使用条件

本リポジトリ及び本リポジトリに含まれる ```canonical.js``` は、 [Z.OOL. (mailto:zool@zool.jpn.org)][ZOOL] が著作権を有し、 [MIT License][MITL] に基づいて配布されるものとします。詳細については、本リポジトリに同梱する ```LICENSE``` を参照して下さい。

<!-- 外部リンク一覧 -->

[QRN1]:https://z80oolong.qrunch.io/entries/rTn7c3y1wYUbWOBU
[HATE]:https://hatenablog.com/
[JIJI]:http://asean-info.net/jijilog/17021401-hatenablog-wordpress-transfer/
[KIRI]:http://giraffyk1.hatenablog.com/entry/hatena-blog-force-meta-tag
[UUPA]:http://upa-pc.blogspot.com/2015/03/javascript-canonical-url-get.html?m=1
[MRPE]:https://qiita.com/mrpero/items/156968e3512d42fffc5e
[MITL]:https://opensource.org/licenses/MIT
[ZOOL]:http://zool.jpn.org/
