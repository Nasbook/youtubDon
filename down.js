var x=document.querySelectorAll(".yt-simple-endpoint.style-scope.ytd-playlist-video-renderer"),contener="\n\n\n",contener="\n\n\n";
for (var i = x.length - 1; i >= 0; i--) {  var hreftxs = x[i].getAttribute("href").split("v=")[1].substring(0, 11);
contener +="youtube-dl https://www.youtube.com/watch?v="+hreftxs+"\n"; };  console.log(contener);
