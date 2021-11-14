$("#analyze").click(function(){
    var userText = $('#userText').val()
    getpostsByUser(userText)
    
})

function getpostsByUser(userID){
    URL = 'https://hacker-news.firebaseio.com/v0/user/'+userID+'.json?print=pretty'
    var config={
        url :URL,
        method: 'get'
    }
    axios(config)
    .then(function (response) {
        var list = response.data['submitted']
        for(let i=0;i<3;i++){
            console.log(list[i])
            getpostContent(list[i])
        }
         
    })
    .catch(function (error) {
        console.log(error);
    });
}


function getpostContent(postId){
    URL = 'https://hacker-news.firebaseio.com/v0/item/'+postId+'.json?print=pretty'
    
    var config={
        url :URL,
        method: 'get'
    }
    axios(config)
    .then(function (response) {
        var userText = response.data.text
        //var res = $('#posts').text(userText)
        console.log(userText)
        getSentimentResult(userText)
         
    })
    .catch(function (error) {
        console.log(error);
    });
    
}

function getSentimentResult(userText){

  var data = JSON.stringify({
  "documents": [
      {
      "id": "1",
      "language": "en",
      "text": userText
      }
  ]
  });
  
  var config={
      url :'https://isthismyfriend.cognitiveservices.azure.com/text/analytics/v3.1/sentiment',
      method: 'post',
      headers:{
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': 'API_KEY_HERE'
      },
      data: data
  }
  axios(config)
  .then(function (response) {
      var sentimentfromAPI = response.data.documents[0].sentiment;
      //var result = $('#sentiment').text(sentimentfromAPI)
      console.log(sentimentfromAPI)
  })
  .catch(function (error) {
      console.log(error);
  });

}