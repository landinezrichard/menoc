// var liveFyre = (function () {

// 	const fyre =  require('../../lib/livefyre.js');

// 	function initialize () {
// 		var articleId = fyre.conv.load.makeArticleId(null);
// 		fyre.conv.load({}, [{
// 		    el: 'livefyre-comments',
// 		    network: "livefyre.com",
// 		    siteId: "368992",
// 		    articleId: articleId,
// 		    signed: false,
// 		    collectionMeta: {
// 		        articleId: articleId,
// 		        url: fyre.conv.load.makeCollectionUrl(),
// 		    }
// 		}], function() {});
// 	}

// 	return {
// 		init : function () {
// 			initialize();
// 		}
// 	};	

// })();

// module.exports = liveFyre;

(function () {
    var articleId = fyre.conv.load.makeArticleId(null);
    fyre.conv.load({}, [{
        el: 'livefyre-comments',
        network: "livefyre.com",
        siteId: "368992",
        articleId: articleId,
        signed: false,
        collectionMeta: {
            articleId: articleId,
            url: fyre.conv.load.makeCollectionUrl(),
        }
    }], function() {});
}());