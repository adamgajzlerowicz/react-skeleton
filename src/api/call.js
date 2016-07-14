require('whatwg-fetch');

let commonPart = 'https://api.imgur.com/3/';
let Call = function(url){
    fetch(commonPart + url + ".json",{
        headers:{
            "Authorization": "Client-ID ab003787db82196",
            "Access-Control-Allow-Headers": "authorization",
            "Access-Control-Allow-Origin" : "*"
        }
    }).then( result => {
        console.log(result);
    })
};

module.exports = Call;