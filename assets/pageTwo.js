// var config = {
    //   apiKey: "AIzaSyAJS4YQWU5DmESeYueG1qH1NGkjv3DncEY",
    //   authDomain: "fir-click-counter-7cdb9.firebaseapp.com",
    //   databaseURL: "https://wikivideo-90f6d.firebaseio.com/",
    //   storageBucket: "fir-click-counter-7cdb9.appspot.com"
    //   };

    //   firebase.initializeApp(config);

    //   var database = firebase.database();

      var sideHtml = new Array;
      var altHtml = new Array;
      var newSearchTerm = localStorage.searchTerm;

      $(document).on('submit', function(event) {
        newSearchTerm = $('#searchTerm').val().trim();

      //   database.ref().set({
      //   searchTerm: newSearchTerm
      // });
      localStorage.setItem("searchTerm", newSearchTerm);

      });

      $(document).ready(function () { 
      // database.ref('/searchTerm').on('value', function(snapshot) {

      function getResults(searchTerm) {
    $.getJSON("https://www.googleapis.com/youtube/v3/search",
      {
        "type": "video",
        "videoEmbeddable": true,
        "videoSyndicated": 'true',
        "videoLicense": "youtube",
        "part": "snippet",
        "key": "AIzaSyCcaq0-kwYgkRs1yiz6gorx8i_4wydT3F0",
        "q": searchTerm,
        "maxResults": 7,
        "safeSearch": "strict"
      },
      function (data) {
        console.log(data);
        if (data.pageInfo.totalResults == 0) {
          $('#articleHead').html("No results!");
        }
        // If no results, empty the list
        displayResults(data.items);
      }
    );
  }
  
  function displayResults(videos) {
    var html = "";
    sideHtml = [];
    $.each(videos, function (index, video) {
   
      // console.log(video.snippet.title);
      // console.log(video.snippet.thumbnails.high.url);
      html = "<p>" + video.snippet.title + '<p><iframe width="800" height="400" src="https://www.youtube.com/embed/' + video.id.videoId + '" frameborder="0" allowfullscreen></iframe></p>';
      altHtml.push("<p>" + video.snippet.title + '<p><iframe width="800" height="400" src="https://www.youtube.com/embed/' + video.id.videoId + '" frameborder="0" allowfullscreen></iframe></p>');
      sideHtml.push("<img id='sideVid" + index +"' height='60' width='120' src='" +  video.snippet.thumbnails.high.url + "'/><p id='sideVidTitle'>" + video.snippet.title + '</p>');
        //console.log(videos);



    });
    $("#vidArray").html(html);
    $("#sideVids").html(sideHtml);
  }




      $(document).ready(function () {
        getResults(newSearchTerm);
        //$('#articleHead').html();
      });
  
  // });
      });

  $(document).on('click', '#sideVid0', function() {
    $('#vidArray').html(altHtml[0]);
  });
  $(document).on('click', '#sideVid1', function() {
    $('#vidArray').html(altHtml[1]);
  });
  $(document).on('click', '#sideVid2', function() {
    $('#vidArray').html(altHtml[2]);
  });
  $(document).on('click', '#sideVid3', function() {
    $('#vidArray').html(altHtml[3]);
  });
  $(document).on('click', '#sideVid4', function() {
    $('#vidArray').html(altHtml[4]);
  });
  $(document).on('click', '#sideVid5', function() {
    $('#vidArray').html(altHtml[5]);
  });
  $(document).on('click', '#sideVid6', function() {
    $('#vidArray').html(altHtml[6]);
  });
    var wikiData;
// var queryTerm = document.getElementById("queryTerm").value;

    // database.ref('/searchTerm').on('value', function(snapshot) {

        //var searchTerm = $("#searchTerm").val();
        // var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
        $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?&redirects=main%20page&action=parse&format=json&prop=text&section=0&page=" + newSearchTerm + "&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data) {
            console.log(data);
        $("#articleHead").html('<a href="https://en.wikipedia.org/wiki/' + data.parse.title + '">' + data.parse.title + '</a>');
          var markup = data.parse.text["*"];
          var blurb = $('<div></div>').html(markup);
          $('#articleBody').html($(blurb).find('p'));
            
            // finding a tags from data
            atag = $("#articleBody").find("a");

            // for each a tag, grab the attribute href save it to a variable href. 
            // Then, select each href and replace it with the url and concatenate the href value found from above.
      atag.each(function () {
          var href = $(this).attr('href');
          $(this).attr('href', "https://en.wikipedia.org" + href);
            $(this).attr("target","_blank");
      });

      
             // console.log(changed);
             // console.log('wiki',s wikiData)
        },
        error: function (errorMessage) {
        }


    });
// });


   $("#random").on("click", function() {

    var randomArray = ["duck", "cat", "bird", "computer", "Southern Methodist University", "web developer", "cow", "ostrich", "Dallas", "Texas", "fossil", "reptile", "engine", "mouse", "spongebob squarepants", "Student", "Happy", "Television", "Hawaii", "The United States", "Canada", "Mexico", "dog", "marsupial", "India", "meme"]
    var randomNumber = Math.floor(Math.random() * randomArray.length);
    var randomTerm = randomArray[randomNumber];
    console.log(randomTerm);
    // database.ref().set({
    //   searchTerm: randomTerm
    // });
    localStorage.setItem("searchTerm", randomTerm);
window.open('pageTwo.html','_self');
            });

   $('#homeButton').on('click', function() {
    window.open('index.html', "_self");
   });

      console.log(newSearchTerm);