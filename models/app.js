var elastic = require('./elasticsearch');  
elastic.indexExists().then(function (exists) {  
  if (exists) {
    return elastic.deleteIndex();
  }
}).then(function () {
  return elastic.initIndex().then(elastic.initMapping).then(function () {
    //Adding articles of clothing for the autocomplete
    var promises = [
      'jeans',
      'shoes',
      'shirts',
      'socks',
      'pants'
    ].map(function (clothing) {
      return elastic.addStyle({
        title: clothing,
        content: clothing + " content",
        metadata: {
          clothingLength: clothing.length
        }
      });
    });
    return Promise.all(promises);
  });
});