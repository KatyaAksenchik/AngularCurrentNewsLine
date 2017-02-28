"use strict";
var Article = (function () {
    function Article(id, articleName, imgUrl, tag, previewText, articleText, authorName, published) {
        if (published === void 0) { published = false; }
        this.id = id;
        this.articleName = articleName;
        this.imgUrl = imgUrl;
        this.tag = tag;
        this.previewText = previewText;
        this.articleText = articleText;
        this.authorName = authorName;
        this.published = published;
    }
    return Article;
}());
exports.Article = Article;
//# sourceMappingURL=article.js.map