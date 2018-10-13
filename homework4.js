//2
const triangleStars = function(a) {
let c = 0;
while (a >= 1) {
	let	b = 2*a-1;
	let d = (" ".repeat(c)+"*".repeat(b));
	console.log(d)
	a = a-1;
	c = c+1
}
}


//3
const Func = function(arr) {
  for(var i=0; i < arr.length - 1; i++) {
    var arr1 = arr[i];
  }
  for(var j=0; j < arr.length; j++) {
    var arr2 = arr[j];
  }
    return arr1.concat(arr2);
}
  

//4
const findMinMax = function(arr, str) {
  if(str === "true") {
   return Math.max(...arr);
  } else if(str === "false") {
    return min; Math.min(...arr);
  }
}

//5
const forEach = function(arr, Func1) {
    for(i=0; i < arr.length; i++) {
		const a = arr[i];
		console.log(a);
	}
}

forEach([4, 3, 2], function(val) {
	console.log(val)
}) 


//6
const SuM = function(arr) {
	let sum = 0;
	let i = 0;
	while(i < arr.length) {
        sum = sum + arr[i];
        i++;
        console.log(sum);
	}
}


//7
const reverse = function(str) {
	var str1 = '';
	for(i=str.length - 1; i >= 0; i--) {
       str1 = str1 + str[i];
	}
	console.log(str1);
}
 
//8
const checkboard = function(n) {
    let m = 0;
    while(m < n) {
    	if(m%2 !=0) {
    		s = " " + "*".repeat(n)
    	} else {
    		s = "*".repeat(n)
    	}
    	console.log(s);
    	m++;
    }
}
 