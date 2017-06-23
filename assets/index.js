    // var config = {
    //   apiKey: "AIzaSyAJS4YQWU5DmESeYueG1qH1NGkjv3DncEY",
    //   authDomain: "fir-click-counter-7cdb9.firebaseapp.com",
    //   databaseURL: "https://wikivideo-90f6d.firebaseio.com/",
    //   storageBucket: "fir-click-counter-7cdb9.appspot.com"
    //   };

    // firebase.initializeApp(config);

    // var database = firebase.database();

    var searchTerm;

    $(document).on('submit', function(event) {

      searchTerm = $('#searchTerm').val().trim();
      
      // database.ref().set({
      // 	searchTerm: searchTerm
      // });
      localStorage.setItem("searchTerm", searchTerm);

      if ($('#searchTerm').val().trim()) {
        window.open('pageTwo.html','_blank');
      } else {
        event.preventDefault();
        $('#userInputPrompt').html('Enter a term to get started!')
      }
      

    });

    var maxVideos = 1;
   $(document).ready(function(){
  $.get(
    "https://www.googleapis.com/youtube/v3/videos",{
      part: 'snippet',
      chart: 'mostPopular',
      kind: 'youtube#videoListResponse',
      maxResults: maxVideos,
      regionCode: 'US',
      type: "video",
      videoEmbeddable: true,
      videoSyndicated: true,
      safeSearch: 'strict',
      key: 'AIzaSyBkK8PEuhSfyz05gnUWhwOuE5cqWV5Oa3A'},

      function(data){
        console.log("data->" +JSON.stringify(data, null, 3));
        var output;
        $.each(data.items, function(i, item){
          console.log(item);
          videTitle = item.snippet.title;
                description = item.snippet.description;
                thumb = item.snippet.thumbnails.high.url;
                channelTitle = item.snippet.channelTitle;
                videoDate = item.snippet.publishedAt;
                Catagoryid = item.snippet.categoryId;
                cID = item.snippet.channelId;
                vidId = item.id;
          output = "<p>" + videTitle + '<p><iframe width="800" height="400" src="https://www.youtube.com/embed/' + vidId + '" frameborder="0" allowfullscreen></iframe></p>';
          $('#hVid').html(output);
        })

      }
    );
});

   $("#random").on("click", function() {

    var randomArray = ["duck", "cat", "bird", "computer", "Southern Methodist University", "web developer", "cow", "ostrich", "Dallas", "Texas", "fossil", "reptile", "engine", "mouse", "spongebob squarepants", "Student", "Happy", "Television", "Hawaii", "The United States", "Canada", "Mexico", "dog", "marsupial", "India", "meme"]
    var randomNumber = Math.floor(Math.random() * randomArray.length);
    var randomTerm = randomArray[randomNumber];
    console.log(randomTerm);
    // database.ref().set({
    //   searchTerm: randomTerm
    // });
    localStorage.setItem("searchTerm", randomTerm);
    window.open('pageTwo.html','_blank');
            });