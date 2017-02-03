var elasticsearch = require('elasticsearch');

var elasticClient = new elasticsearch.Client({  
    host: 'localhost:8080',
    log: 'info'
});

var indexName = "randomindex";

/**
* Delete an existing index
*/
function deleteIndex() {  
    return elasticClient.indices.delete({
        index: indexName
    });
}
exports.deleteIndex = deleteIndex;

/**
* create the index
*/
function initIndex() {  
    return elasticClient.indices.create({
        index: indexName
    });
}
exports.initIndex = initIndex;

/**
* check if the index exists
*/
function indexExists() {  
    return elasticClient.indices.exists({
        index: indexName
    });
}
exports.indexExists = indexExists;

//mapping the data
function initMapping() {  
    return elasticClient.indices.putMapping({
        index: indexName,
        type: "style",
        body: {
            properties: {
                clothing_type: { type: "string" },
                product_desc: { type: "string" },
                suggest: {
                    type: "completion",
                    analyzer: "simple",
                    search_analyzer: "simple",
                    payloads: true
                }
            }
        }
    });
}
exports.initMapping = initMapping;

//adding a type style, with the three fields I have defined in the mapping - clothing_type, product_desc and suggest.
function addStyle(style) {  
    return elasticClient.index({
        index: indexName,
        type: "style",
        body: {
            clothing_type: style.clothing_type,
            product_desc: style.product_desc,
            suggest: {
                input: style.clothing_type.split(" "),
                output: style.clothing_type,
                payload: style.metadata || {}
            }
        }
    });
}
exports.addStyle = addStyle;

//This function receives a text input and sending it to the completion feature of elasticsearch.
// fuzzy: true part will correct simple spelling mistakes. true means elasticsearch will define the level of fuzziness.
function getSuggestions(input) {  
    return elasticClient.suggest({
        index: indexName,
        type: "style",
        body: {
            docsuggest: {
                text: input,
                completion: {
                    field: "suggest",
                    fuzzy: true
                }
            }
        }
    })
}
exports.getSuggestions = getSuggestions;