/* Partners */

var logos = [];
var fileNames = [];
var imgList = [];
var image;

var openList = "<li class='partner col-12 col-sm-6 col-md-4 col-lg-2'>";
var closeList = "</li>";

for (var i = 0; i < 6; i++) {

    fileNames.push("partner" + (i + 1) + ".png");

    logos.push(
        "<img src='images/partners/" + fileNames[i] + "'>"
    );

    image = openList + logos[i] + closeList;

    imgList.push(image);
}

document.getElementById("partners").innerHTML = imgList.join("");