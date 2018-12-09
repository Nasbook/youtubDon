let CourseTitle = document.querySelectorAll("#title a");
let x = document.querySelectorAll("a#thumbnail.yt-simple-endpoint.inline-block.style-scope.ytd-thumbnail");
let dev = `
DEVeloper ADham allam
Cood_ip{}hotmail.com`;

console.info(`
${CourseTitle[0].innerText}
Total Videos[${x.length}] ${dev}`);

x.forEach(item => {
  console.log(`youtube-dl https://www.youtube.com/${item.getAttribute("href")}`);
});
