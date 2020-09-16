var lengthOfLongestSubstring = function (s) {

  let lsc = 0;
  let lsArr = [];
  let lsTempArr = [];
  let strArr = s.split('');

  if (strArr.length !== 0) {

    lsTempArr[0] = strArr[0];
    lsArr[0] = strArr[0];

    for (let j = 0; j < strArr.length; j++) {

      for (let i = j + 1; i < strArr.length; i++) {

        if (lsTempArr.includes(strArr[i])) {

          if (lsTempArr.length >= lsArr.length) {

            lsArr = lsTempArr;
            lsTempArr = [];
            lsc = 0;
            lsTempArr[lsc] = strArr[j + 1];

            break;

          }

          else {

            lsTempArr = [];
            lsc = 0;
            lsTempArr[lsc] = strArr[j + 1];
            break;

          }

        }
        else {
          lsc++;
          lsTempArr[lsc] = strArr[i];
        }
      }
    }
  }

  else {
    return 0;
  }

  if (lsTempArr.length >= lsArr.length) {

    lsArr = lsTempArr;

  }

  return lsArr.length;

};

// let lcs = lengthOfLongestSubstring("pwwkew");


// let lcs = lengthOfLongestSubstring("bbbbbbbbb");

// let lcs = lengthOfLongestSubstring("abcabbc");

// let lcs = lengthOfLongestSubstring("");
//  let lcs = lengthOfLongestSubstring("dvdf");

let lcs = lengthOfLongestSubstring("abrkaabcdefghijjxxx");

console.log(lcs);