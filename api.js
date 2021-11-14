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
        console.log(list[0])
        getpostContent1(list[0])
        console.log(list[1])
        getpostContent2(list[1])
        console.log(list[2])
        getpostContent3(list[2])
         
    })
    .catch(function (error) {
        console.log(error);
    });
}


function getpostContent1(postId){
    URL = 'https://hacker-news.firebaseio.com/v0/item/'+postId+'.json?print=pretty'
    
    var config={
        url :URL,
        method: 'get'
    }
    axios(config)
    .then(function (response) {
        var userText = response.data.text
        var res = $('#post1').text(userText)
        console.log(userText)
        getSentimentResult1(userText)
         
    })
    .catch(function (error) {
        console.log(error);
    });
    
}


function getpostContent2(postId){
    URL = 'https://hacker-news.firebaseio.com/v0/item/'+postId+'.json?print=pretty'
    
    var config={
        url :URL,
        method: 'get'
    }
    axios(config)
    .then(function (response) {
        var userText = response.data.text
        var res = $('#post2').text(userText)
        console.log(userText)
        getSentimentResult2(userText)
         
    })
    .catch(function (error) {
        console.log(error);
    });
    
}


function getpostContent3(postId){
    URL = 'https://hacker-news.firebaseio.com/v0/item/'+postId+'.json?print=pretty'
    
    var config={
        url :URL,
        method: 'get'
    }
    axios(config)
    .then(function (response) {
        var userText = response.data.text
        var res = $('#post3').text(userText)
        console.log(userText)
        getSentimentResult3(userText)
         
    })
    .catch(function (error) {
        console.log(error);
    });
    
}

function getSentimentResult1(userText){

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
          'Ocp-Apim-Subscription-Key': '9818484e04f047caac8fb392a358299c'
      },
      data: data
  }

  axios(config)
  .then(function (response) {
      var sentimentfromAPI1 = response.data.documents[0].sentiment;
      
      var result = $('#sentiment1').text(sentimentfromAPI1)
      console.log(sentimentfromAPI1)
  })
  .catch(function (error) {
      console.log(error);
  });

}

function getSentimentResult2(userText){

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
            'Ocp-Apim-Subscription-Key': '9818484e04f047caac8fb392a358299c'
        },
        data: data
    }
  
    axios(config)
    .then(function (response) {
        var sentimentfromAPI2 = response.data.documents[0].sentiment;
        
        var result = $('#sentiment2').text(sentimentfromAPI2)
        console.log(sentimentfromAPI2)
    })
    .catch(function (error) {
        console.log(error);
    });
  
  }

  function getSentimentResult3(userText){

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
            'Ocp-Apim-Subscription-Key': '9818484e04f047caac8fb392a358299c'
        },
        data: data
    }
  
    axios(config)
    .then(function (response) {
        var sentimentfromAPI3 = response.data.documents[0].sentiment;
        
        var result = $('#sentiment3').text(sentimentfromAPI3)
        console.log(sentimentfromAPI3)
    })
    .catch(function (error) {
        console.log(error);
    });
  
  }