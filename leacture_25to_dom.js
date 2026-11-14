// // JAVASCRIPT execution  context
//         //         // {} = global ec , function ec 

//         //         js ka code 2 phase me execute hota h 
//         //         -memory execution phase
//         //         -

//         //        // node ek code likte h 
//         //         let val1 = 10;                      1. global execution , this ke andr 
//         //                                             2. memory phase 
//         //         let val2 = 39;                        val1,val2->undefined
//         //         function addnum(num1,num2){            addnum -> defination
//         //             let total = num1 + num2 ;          result1,result2 -> undefined

//         //             return total;                   3. Execution phase
//         //         }                                       val1 =10 ,val2 39;
//         //         let result = addnum(val1,val2);         addnum -> iske liye new variable enviroment
//         //         let result = addnum(10,2);                         or execution thread banta h or duavara 2,3 execute hoga
//         //                                                fir se memory or execution hoga or total ki value nikaalege or total ka phase = undefine hihota h 
//         //                                                or return h to return global ko hota h ,or baad me hua function call ka phase delete ho jata h after execute automatically
        

// // //CONTROL FLOW
//         // false value = false , 0 ,-0,NaN ,undefined ,BigInt 0n,
//         // true value = '0' ,'false' ,[] ,{} ,function(){} 

//         // let username = [];
//         // if(username.length == 0){
//         //     console.log(`array iis empty`);
//         // }
//         // const emptyonj = {}
//         // if(Object.keys(emptyonj).length === 0){
//         //     console.log(`object is empty `);
//         // }

//         // Null coalescing operator (??) ; is it for null or undefined
//         // let val1 = 5 ?? 10;     //5 if we console
//         //     val1 = null ?? 3;   //3 ,, 
//         //     val1 = undefined ?? 94;  //94 ,,
 
// //ITERATION
//         // 1 FOR OF LOOP
//         const name = [1,2,34,5,56,6,67,7,4]
//         const for (const element of name) {
//             console.log(element);
            
//         }

//         //maps   
//         // in map forof loop is used to iterate over the map and get the key value pair ,but in object we use forin loop to iterate over the object and get the key value pair
//         const map = new Map()
//         map.set('ind', 'india')
//         map.set('us', 'united state of america')
//         for (const [key, value] of map) {
//         console.log(key, '->', value)
//         }  //forin loop iterable nhi hota map ke liye ,map iterable hota h isliye forof loop use krte h

//         const obj = {
//             ind: 'india',
//             us: 'united state of america',
//             pk: 'pakistan',
//             srl: 'srilanka'
//         }    //we use forin loop to iterate over the object and get the key value pair
//         for (const key in obj) {
//             console.log(key, 'shortkey is for', obj[key])
//         }

//         for array when we use forin loop we need to pass key like nameofarray[key] then we get the value
//         const arr = [1,2,3,4,5,6,7,8]
//         for (const key in arr) {
//             console.log(key, 'index is for', arr[key])
//         }

// //foreach loop
//         const arr = [1,2,3,4,5,6,7,8]
//         arr.forEach(function (val){
//             console.log(val);
//         }) 
//         or
//         arr.forEach((val) => {
//             console.log(val);
//         }
//         or
//         arr.forEach((val,index,arr) => {
//             console.log(val,index,arr);
//         }

//         const obj = [
//             {
//                 lang: 'javascript',
//                 framework: 'react',
//                 library: 'redux'
//             },
//             {
//                 lang: 'python',
//                 framework: 'django',
//                 library: 'pandas'
//             }
//         ];

//         obj.forEach((item) => {
//             console.log(item.lang, item.framework, item.library);
//         });

// //basisc of filter

//         const mynum = [1,2,3,4,5,6,7,8,9,10]
//         const newnum = mynum.filter((val) =>val % 2 === 0) //filter method returns a new array with all elements that pass the test implemented by the provided function.{
//             console.log(newnum);
//         //OUTPUT 2,4,6,8,10

//         if we use scope then we need to return for example
//         const newnum = mynum.filter((val) => {
//             return val % 2 === 0
//         }   
//         console.log(newnum);

//         //chaining 
//         const num = [1,2,3,4,5,6,7,8,9,10]
//         const newnum = num.map((val) => val * 2).map((val) => val + 1).filter((val) => val > 10)
//         console.log(newnum);

// //reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
//         cosnt num = [1,2,3,4,5,6,7,8,9,10]
//         const total = num.reduce((acc, val) => acc + val, 0) //reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
//         console.log(total); //55       //upr 0 accumilator ko initial value dene ke liye h 

