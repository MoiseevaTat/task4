var arr =[];
for (var i = 0; i < 20; i++) {
	arr.push(i*5);
}
console.log(arr);
console.log( Math.min.apply(null, arr));
console.log( Math.max.apply(null, arr));

// //Write a script that compares two char arrays lexicographically (letter by letter).

var arrChar = ['a', 'b', 'c', 'd'];
var arrChar1 = ['a', 'b', 'q', 'x'];
function  comparesCharInArray (arrChar, arrChar1){
	var str;
	if (arrChar.length > arrChar1.length) {
		str = 'The fist array more than the second array';
	} else {
		str = 'The second array more than the fist array';
	}
	for (var i = 0; i < arrChar.length; i++) {
		if (arrChar[i] > arrChar1[i]) {
			str = 'The fist array more than the second array';
		}
		else {
			str = 'The second array more than the fist array';
		}
	}
	return str;
}
console.log(comparesCharInArray (arrChar, arrChar1));


//Write a script that finds the maximal sequence of equal elements in an array.
//**Example:** [2, 1, 1, 2, 3, 3, 2, 2, 2, 1] -> [2, 2, 2].

var arr = [2, 1, 1, 2, 5, 5, 5, 5, 7, 8, 9, 10, 10];
function findMaxSequenceOfEqualElements(arr) {
	var tempArr1 = [arr[0]];
	var tempArr = [arr[0]];
	for  (var i = 1; i < arr.length; i++) {
		if (arr[i-1]===arr[i]) {
		tempArr.push(arr[i]);
		}
		else {
			if (tempArr.length > tempArr1.length) {
				tempArr1 =tempArr;
			}
			tempArr =[arr[i]];	
		}
	}
	if (tempArr1.length < tempArr.length) {
		tempArr1 =tempArr;
	}
	
return(tempArr1);
}
console.log(findMaxSequenceOfEqualElements(arr));

var  arr =[3, 2, 3, 4];
function findMaxIncreasingSequenceOfElements(arr) {
	var tempArr = [arr[0]];
	var tempArr1 = [arr[0]];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i-1]<arr[i]) {
		tempArr.push(arr[i]);
		}
		else {
			if (tempArr.length>tempArr1.length) {
				tempArr1 =tempArr;
			}
			tempArr =[arr[i]];
		}
	}
	if (tempArr.length > tempArr1.length) {
		tempArr1 =tempArr;
	}
	return(tempArr1);
}
console.log(findMaxIncreasingSequenceOfElements(arr));


function sortArray(arr) {
	var tempArr = [];
	var count =arr.length;
	for (var i = 0; i < count; i++) {
		min = Math.min.apply(null, arr);
		tempArr.push (Math.min.apply(null, arr));
		arr.splice(arr.indexOf(min), 1);
	}
	return tempArr;
}
console.log(sortArray(arr));


//Write a program that finds the most frequent number in an array.{4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3} -> 4 (5 times)
var arr =[4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
function findMostFrequentNumberInArray(arr) {
	var tempArr = sortArray (arr);
	var times = 0;
	var times1 = 0;
	
	var i = 0;
	while (i < tempArr.length) {
		times = tempArr.lastIndexOf(tempArr[i]) - tempArr.indexOf(tempArr[i]) + 1 ;
		if (times > times1) {
			times1 = times;
		}
		i = i + times;
	}
	if (times1 < times) {
		times1 = times;
	}
	return times1;
}
console.log(findMostFrequentNumberInArray(arr)+ 'times');




//  Write a program that finds the index of given element 
//in a sorted array of integers by using the binary search algorithm.
var arr = [0, 1, 2, 3, 4, 5, 4, 6, 8, 9];
function findIndexOfElement(arr, findElement) {
	var tempArr = sortArray (arr);
	var indexBegin = 0;
	var middleArray = 0;
	var indexEnd = tempArr.length -1 ;
	while ( indexBegin <= indexEnd) {
		middleArray =   Math.floor((indexEnd + indexBegin)/2);
		//console.log(middleArray);
		if (tempArr[middleArray] === findElement) {
			return middleArray;
		}
		else {
			if (findElement > tempArr [middleArray]){
				indexBegin = middleArray  + 1;
			}
			else {
				indexEnd = middleArray -1;
			}
		}
	}
}
console.log(findIndexOfElement(arr, 6));
