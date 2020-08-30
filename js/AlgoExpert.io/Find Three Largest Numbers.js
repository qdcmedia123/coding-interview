//https://stackoverflow.com/questions/11792158/optimized-javascript-code-to-find-3-largest-element-and-its-indexes-in-array

var maxPoints = new Array();
var scoreByPattern = new Array(93,17,56,91,98,33,9,38,55,78,29,81,60);

findLargest3();

function findLargest3(){
    // sort descending
    scoreByPattern.sort(function(a,b) {
        if (a < b) { return 1; }
        else if (a == b) { return 0; }
        else { return -1; }
    });

    alert(scoreByPattern+"/******/"+scoreByPattern[0]+"/"+scoreByPattern[1]+"/"+scoreByPattern[2]);
}