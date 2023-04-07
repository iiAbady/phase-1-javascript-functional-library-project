function getCollection(object) {
	if(Array.isArray(object)) {
		return [...object]
	} else {
		return Object.values(object);
	}
}

function myEach(collection, callback) {
	const thisCollection = getCollection(collection);
	
	for (let i = 0; i < thisCollection.length; i++) {
		callback(thisCollection[i])
	}
	
	return collection;
}

function myMap(collection, callback) {
	const thisCollection = getCollection(collection);
	const resArray = [];
	for (let i = 0; i < thisCollection.length; i++) {
		resArray.push(callback(thisCollection[i]));
	}
	return resArray;
}

function myReduce(collection, callback, acc) {
	let thisCollection = getCollection(collection);
	if (!acc) {
		acc = thisCollection[0];
		thisCollection = thisCollection.slice(1);
	}
	for(let i = 0; i < thisCollection.length; i++) {
		acc = callback(acc, thisCollection[i], thisCollection);
	}
	return acc;
}

function myFind(collection, predicate) {
	const thisCollection = getCollection(collection);
	
	for(let i = 0; i < thisCollection.length; i++) {
		if(predicate(thisCollection[i])) return thisCollection[i]
 	}
	
	return undefined;
}

function myFilter(collection, predicate) {
	const thisCollection = getCollection(collection);
	const res = [];
	
	for(let i = 0; i < thisCollection.length; i++) {
		if(predicate(thisCollection[i])) res.push(thisCollection[i])
 	}
	
	return res;
}

function mySize(collection) {
	return getCollection(collection).length;
}

function myFirst(arr, stop=false) {
	if (stop) {
		return arr.slice(0, stop)
	} else {
		return arr[0];
	}
}

function myLast(arr, start=false) {
	if (start) {
		return arr.slice(arr.length-start, arr.length)
	} else {
		return arr[arr.length-1]
	}
}

function myKeys(obj) {
    const keys = [];
    for (let key in obj){
      keys.push(key);
    }
    return keys;
  }
  
function myValues(obj) {
    const values = [];
    for (let key in obj){
      values.push(obj[key]);
    }
    return values;
  }