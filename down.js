
var CourseTitle=document.querySelectorAll("#title a"),
x=document.querySelectorAll("a#thumbnail.yt-simple-endpoint.inline-block.style-scope.ytd-thumbnail"),contener="\n\n\n",dev="\n DEVeloper ADham allam .. \n Cood_ip{}hotmail.com";
for (var i = x.length - 1; i >= 0; i--) {
var obj =  x[i].getAttribute("href").slice(9,20);
contener +="youtube-dl https://www.youtube.com/watch?v="+obj+"\n"; };
console.log("\n\n"+CourseTitle[0].innerText+"\nTotal Videos [ "+x.length+" ]"+dev+contener);
