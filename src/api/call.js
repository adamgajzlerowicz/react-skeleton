var Ajax = require('ajax');

let commonPart = 'https://api.imgur.com/3/';

let Call = function(url){

    return new Promise(function(res){

        Ajax.get(commonPart + url, {

            "Authorization": "Client-ID ab003787db82196"

        }, function(data){

            res(data);

        });

    })
};

module.exports = {
    get: Call
};