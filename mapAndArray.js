(function () {
//console.log("test iify");

var obj1 = { custId : 1,
			 name : "jayesh"
		}

var obj2 = { custId : 2,
			 name : "nayana"
		}
var obj3 = { custId : 3,
			 name : "sanjana"
		}

var customerArray = [];
customerArray.push(obj1);
customerArray.push(obj2);
customerArray.push(obj3);

//worst look up time -> O(n)--> # of elements
for(var i in customerArray) {
	if(customerArray[i].name === "sanjana") {
		console.log(customerArray[i]);
	}
}

for(var obj of customerArray)
	console.log(obj);

var customerMap = {
	1 : obj1,
	2 : obj2,
	three : obj3
}

console.log(customerMap[1]);


//ECMA 6
var custMap = new Map();
custMap.set(1,obj1);
custMap.set(2,obj2);
custMap.set(2,obj3);

console.log(custMap.get(2));

//set does not store duplicates
var custSet = new Set();
custSet.add(obj1);
custSet.add(obj2);
custSet.add(obj2);

//console.log(custSet);
/*for(var obj of custSet)
	console.log(obj);

*/

//custSet.forEach(function(value) {console.log(value);});

//two differnt discounts 1. regular 2.sr citizen

function discount(rate) {

	return function(itemPrice) {
		return (itemPrice-rate*itemPrice);
	}
}

var srCitizenDiscount = discount(.10);
var otherCitizenDiscount = discount(.05);

console.log("sr citizen : " + srCitizenDiscount(100));
console.log("sr citizen : " + otherCitizenDiscount(100));

}());


