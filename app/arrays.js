exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    //let accumulator = 0; 
    let reducer = (accumulator, item) => accumulator + item;
    //console.log(arr)
    //console.log(arr.findIndex(element => element===3));
    //arr.reduce(reducer);
    return arr.reduce(reducer, 0);
  },

  remove: function(arr, item) {
    // var months = ['Jan', 'March', 'April', 'June'];
    // months.splice(3, 1, 'May');
    //replaces 1 element at 3rd index
    //if at 4th index, it adds it in
    //console.log(months)
    
    //console.log(arr)
    // let itemIndexAgg= [];
    // for(let i=0; i<arr.length; i++){
    //   if(arr[i]===item){
    //     itemIndexAgg.push(i)
    //   }
    // }
    //console.log(itemIndexAgg)

    // for(let x=0; x<itemIndexAgg.length; x++){
    //   arr.splice(itemIndexAgg[x], 1)
    // }
    //let newb = arr.splice(itemIndex, 1)
    //console.log(arr)
    let copy=[]
    for(let i=0; i<arr.length; i++){
      if(arr[i] !== item){
        copy.push(arr[i])
      }
    }
    arr = copy;
    //console.log(arr)
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    //console.log(arr)
    while(arr.indexOf(2) > 0){
      for(let i=0; i<arr.length; i++){
        if(arr[i] === item){
          arr.splice(i, 1)
        }
      }
    }
    //console.log(arr)
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    //console.log(arr)
    arr.unshift(item);
    //console.log(arr)
    return arr;
  },

  curtail: function(arr) {
    //console.log(arr)
    arr.shift();
    //console.log(arr)
    return arr;
  },

  concat: function(arr1, arr2) {
    //console.log(arr)
    let arrResult = arr1.concat(arr2);
    //console.log(arr)
    return arrResult;
  },

  insert: function(arr, item, index) {
    // console.log(arr)
    // console.log(item)
    // console.log(index)
    //start index, number of items deleting, things to add
    arr.splice(index,0,item);
    //console.log(arr)
    return arr;
  },

  count: function(arr, item) {
    let counter = 0
    for(let i=0; i<arr.length; i++){
      if(arr[i] === item){
        counter++
      }
    }
    return counter
  },

  //you should be able to find duplicates in an array
  duplicates: function(arr) {
    //console.log(arr)
    //[1, 2, 4, 4, 3, 3, 1, 5, 3]
    ////start result agg
    let results = [];
                  
    for(let i=0; i<arr.length; i++){
      //console.log("i is "+i)

      for(let j=i+1; j<arr.length; j++){
        // console.log("j is "+j)
        // console.log("arr[i] is "+ arr[i] +" AND arr[j] is "+ arr[j])
        if (arr[i] === arr[j]){
          //console.log(arr[i] +"is a match")
          if (results.length){ 
            for(let k=0; k<results.length; k++){
              if( results.indexOf(arr[i]) === -1 ){
                results.push(arr[i])
                //console.log(results)
              }
            }
          } else {
            results.push(arr[i])
            //console.log(results)
          }
          
          
        }
      }
    }
    return results
  },

  square: function(arr) {
    //.map does not modify original.
    //console.log(arr)
    let arr2 = arr.map(num => num * num);
    //console.log(arr2)
    return arr2;
  },

  //you should be able to find all occurrences of an item in an array
  findAllOccurrences: function(arr, target) {
    //console.log(arr)
    let results = []
    for(let i=0; i<arr.length; i++){
      if(arr[i] === target){
        results.push(i)
      }
    }
    //console.log(results)
    return results
  }
};
