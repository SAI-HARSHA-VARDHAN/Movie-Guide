   function loadDoc(a) {
                var name=a;
                str1="https://www.omdbapi.com/?t=";
                str2="&apikey=231f9d03";
                var url=str1.concat(name,str2);
                $.getJSON(url,function(result){
                    var a = result;
                    var response=a.Response;
                    var actors=a.Actors;
                    var director=a.Director;
                    var genre=a.Genre;
                    var plot=a.Plot;
                    var language=a.Language;
                    var title=a.Title;
                    var year=a.Year;
                    var imdb=a.imdbRating;
                    var Country=a.Country;
                    var duration=a.Runtime;
                    var votes=a.imdbVotes;
                    var poster=a.Poster;
                    var arr=[title,year,imdb,Country,duration,votes];
                    document.getElementById("movietitle").innerHTML=title;
                    document.getElementById("genre").innerHTML=genre;
                    document.getElementById("year").innerHTML=year;
                    document.getElementById("lang").innerHTML=language;
                    document.getElementById("imdb").innerHTML=imdb;
                    document.getElementById("plot").innerHTML=plot;
                    document.getElementById("directors").innerHTML=director;
                    document.getElementById("actors").innerHTML=actors;
                    document.getElementById("Movieimg").src=poster;
                    if(response=="True"){
                    document.getElementById("Modal1").click();
                    }
                    else{
                      document.getElementById("notfound").click();
                    }
                });
            }