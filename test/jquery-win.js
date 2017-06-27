// 1.实现$.inArray(实现Array.indexOf一样的功能)
var core_deleteIds = [];
var core_indexOf = core_deleteIds.indexOf;

const inArray = (ele,arr,i) => {
	var len;
	if(arr){
	 	if(core_indexOf){
	 		return core_indexOf(arr,ele,i);
	 	}
	 	len = arr.length;
	 	i = (i<0) ? Math.max(i+len,0):i;
	 	for(;i<len;i++){
	 		if(i in arr && ele === arr[i]){
	 			return i;
	 		}
	 	}
	}
	return -1;
}
// 
// 2.实现$.grep的功能
// 例：
// $.grep( [0,1,2], function(n,i){
//   return n <= 0;
// });
// //结果是：[0] 

// $.grep( [0,1,2], function(n,i){
//   return n <= 0;
// }, true);
const grep = (arr,callback,inv){
	var i = 0;
	var length = arr.length;
	inv = !!inv;
	var boolResult;
	var result = [];
	for(;i<length;i++){
		boolResult = !!callback(arr[i],i);
		if(inv !== boolResult){
			result.push(arr[i]);
		}
	}
	return result;
}