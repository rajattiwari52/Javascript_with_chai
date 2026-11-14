      // const accountId = 309842;   // never change
      // let accountName = "John Doe";  // it is a blocked scope avriable , can change
      // var accountBalance = 1000.50;  // can change
      // let accountcity = "New York"; 

      // // accountId = 30; // error: cannot reassign a const

      // console.log(accountId);
      // console.log(accountName);
      // console.log(accountBalance);
      // accountName = "rajattiwari"; // valid because accountName is let

      //  table output example:
      // console.table([{ accountId, accountName, accountBalance ,accountcity}]);
      // console.table([{ accountId: 309842, accountName: "John Doe", accountBalance: 1000.50 ,accountcity: "New York"}]);



      // leacture   2
      // "use strict"; // treat all js code as newer version

      // alert(3 + 4); // we are using nodejs ,not browser so alert will not work 
      // there are some data types in js
      // 1. number => 2 to power 53 -1;
      // 2. bigint  
      // 2. string
      // 3. boolean => true or false
      // 4. null => empty value , standalone value
      // 5. undefined 
      // 6. symbol (ES6) => unique identifier
      // 7. object => collection of key value pairs

      // console.log(typeof 123); // number
      // console.log(typeof 123n); // bigint    here at last n identifies it is a bigint
      // console.log(typeof "hello"); // string        
      // console.log(typeof true); // boolean
      // console.log(typeof null); // object (this is a bug in js  but it is kept for backward compatibility)
        console.log(typeof undefined); // undefined
      // console.log(typeof Symbol("id")); // symbol
      // console.log(typeof { name: "John", age: 30 }); // object



// ********************data types**************************
        // // datatype conversion

        // let score = 100 
        // let valueInNumber = Number(score) // converts to number
        // console.log(typeof valueInNumber); // number
        // console.log(valueInNumber); // 100~

        // //alphanumeric string to number
        // let str = "123abc"
        // let valueInNumber2 = Number(str) // converts to NaN (Not a Number)
        // console.log(typeof valueInNumber2); // number
        // console.log(valueInNumber2); // NaN(not a number)

        // // boolean to number
        // let bool = true
        // let valueInNumber3 = Number(bool) // converts to 1
        // console.log(typeof valueInNumber3); // number
        // console.log(valueInNumber3); // 1

        // // null value
        // let nullValue = null
        // let valueInNumber4 = Number(nullValue) // converts to 0
        // console.log(typeof valueInNumber4); // number
        // console.log(valueInNumber4); // 0   

        // // undefined value
        // let undefinedValue = undefined
        // let valueInNumber5 = Number(undefinedValue) // converts to NaN
        // console.log(typeof valueInNumber5); // number
        // console.log(valueInNumber5); // NaN 

        // let typeofNaN = NaN
        // console.log(typeof typeofNaN); // number
        // console.log(typeofNaN); // NaN




// *******************operations ********* */
        
        // console.log(5**2); // 25
        // // addition OF string
        // let str1 = "hello"
        // let str2 = "world"
        // console.log(str1 + " " + str2); // hello world 

        // //
        // console.log("5" + 2 + 2); // 522 (string concatenation)
        // console.log(2 + 2 + "5"); // 45 (number addition followed by string concatenation)

        // console.log(+true); // 1
        // console.log(+false); // 0
        // console.log(+""); // 0
        
        // let gamecounter = 100
        // gamecounter++ // post increment (returns the value before incrementing)
        // console.log(gamecounter); // 101


        // comparison operators  -->    answer true or false
        //    console.log(5 > 3); // true
        //     console.log("2"< 3); // true, predictable because of string comparison
        //     console.log(undefined < 0); // false, not predictable because of string comparison
        //     console.log(null > 0); // false, not predictable because of string comparison
        //     console.log(null == 0); // false, not predictable because of string comparison
        //     console.log(null >= 0); // true, not predictable because of string comparison
        //     console.log(null <= 0); // true, not predictable because of string comparison
        
        //     console.log(5 ==="5"); // false (strict equality, no type coercion)  isme data type bhi check hota hai


// ***********************data types**************************
        //    the basis of storeing value
        // 1. primitive data types => number, bigint, string, boolean, null, undefined, symbol  ye sab call by value hota hai mtlab inme stored value directly variable 
        // me store hota hai, aur jab hum ek variable ko dusre variable me assign karte hai to value copy hoti hai, dono variable alag alag memory location pe store hote
        //  hai, isliye ek variable me change karne se dusre variable me koi effect nahi hota hai.
        
        // const id =Symbol("23820"); // unique identifier
        // console.log(id); // Symbol(23820)   
        // console.log(typeof id); // symbol;

        // const bignum = 1234567890123456789012345678901234567890n; // bigint literal
        // console.log(bignum);

        // const temperature = null; // 
        // console.log(typeof temperature); // object  

        // 2. non-primitive data types => object (array, function, date, etc.) ye sab call by reference hota hai mtlab inme stored value variable me store nahi hota hai,
        //  balki uska reference (memory address) variable me store hota hai, aur jab hum ek variable ko dusre variable me assign karte hai to reference copy hota hai,
        //  dono variable same memory location pe store hote hai, isliye ek variable me change karne se dusre variable me bhi change hota hai.

        //  const heros = ["superman", "batman", "spiderman"]; // array is a non-primitive data type

        //  let myobject = {
        //     name: "John",
        //  age: 30,
        //  city: "New York" // object is a non-primitive data type
        //       };

        //       const myfunction = function() {
        //         console.log("Hello World"); // function is a non-primitive data type
        //         // function is a first class citizen in js, mtlab hum function ko variable me store kar sakte hai, function ke argument me pass kar sakte hai, function ke return value me use kar sakte hai
        //       }

        // //type of operator => to check the data type of a variable
        // console.log(typeof heros); // object (array is a type of object)
        // console.log(typeof myobject); // object
        // console.log(typeof myfunction); // function (function is a special type of object)  
        // console.log(typeof bignum); // bigint
        // console.log(typeof id); // symbol
        // console.log(typeof temperature); // object (null is a special type of object)   

        // js is a dynamically typed language, mtlab hum variable ko declare karte time uska data type specify nahi karte hai, js automatically data type assign kar deta
        //  hai based on the value assigned to the variable.


//***************************memoery ************************* */

          //stack(primitive data types) and heap (non-primitive data types) memory allocation
          //stack memory => when a variable is assigned to another , you get a copy of the value,
          //and both variables are independent of each other, because they are stored in different memory locations.

          // heap memory => when a variable is assigned to another, you get a reference to the same value,
          //  and both variables are dependent on each other, because they are stored in the same memory location.

          // let myyoutube = "rajattiwari";
          // let anotheryoutube = myyoutube; // copy of the value is created in stack memory
          //   anotheryoutube = "rajattiwari2"; // change the value of anotheryoutube
          // console.log(anotheryoutube); // rajattiwari
          // console.log(myyoutube); // rajattiwari (myyoutube is not affected because it is stored in a different memory location)

          // let user1 = {
          //    name: "rajattiwari",
          //     age: 30
          //    };
          //    let user2 = user1; // reference to the same object is created in heap memory
          //    user2.name = "rajattiwari2"; // change the name property of user2
          //    console.log(user2.name); // rajattiwari2
          //    console.log(user1.name); // rajattiwari2 (user1 is affected because it is 
          //                            // stored in the same memory location as user2)
                                    


/************************string********************* */
          // string declaration
          //  const game = new String("football"); // string object
          //  console.log(game); // string literal
          //  console.log(typeof game); // object (string is a primitive data type, but when we create a string object using the String constructor, it becomes an object)

          // const myname = "rajattiwari";
          // const repocount = 1000;

          // console.log(myname + repocount); // rajattiwari1000 (string concatenation because of the presence of string
          // console.log(`hello my name is ${myname} and my repo count is ${repocount}`); // (``)backticks are used for template literals, which allow for string interpolation and multi-line strings

          // //uses of key value pairs in js

          // console.log(myname.length); // 11 (length property of string)
          // console.log(myname.toUpperCase()); // RAJATTIWARI (toUpperCase method of string)
          // console.log(myname.toLowerCase()); // rajattiwari (toLowerCase method of string)
          // console.log(myname.charAt(2)); // j (charAt method of string)
          // console.log(myname.indexOf("t")); // 5 (indexOf method of string, returns the index of the first occurrence of the specified value, or -1 if not found)
          // console.log(myname.includes("tti")); // true (includes method of string, returns true if the string contains the specified value, otherwise false)
          // console.log(myname.startsWith("raja")); // true (startsWith method of string, returns true if the string starts with the specified value, otherwise false)
          // console.log(myname.endsWith("wari")); // true (endsWith method of string, returns true if the string ends with the specified value, otherwise false)    

          // const newstring  = gameName.substring(0, 4); // substring method of string, returns the part of the string between the start and end indexes, or to the end of the string if the end index is omitted
          // console.log(newstring); // foot (substring from index 0 to 4, not including 4)

          // const newstring2 = gameName.slice(-6, 4); // slice method of string, returns the part of the string between the start and end indexes, or to the end of the string if the end index is omitted
          // console.log(newstring2); // ball (slice from index -6 to 4, not including 4)

          // const newstring1 = "   rajat  " ;
          // console.log(newstring1); // "   rajat  " (string with whitespace)
          // console.log(newstring1.trim()); // "rajat" (trim method of string, removes whitespace from both ends of the string) 
          // // trim starts from es5, it is used to remove whitespace from both ends of a string, but it does not change the original string, it returns a new string with the whitespace removed.      
          // // trim endsWith method of string, returns true if the string ends with the specified value, otherwise false)

          // const url = "https://www.youtube.com/channel/UC9r3qWwYjvH8sQhXyZtH7A";
          // url.replace(url.replace('uc9r', 'rajat')); // replace method of string, returns a new string with some or all matches of a pattern replaced by a replacement, the original string is not changed
          // console.log(url); // https://www.youtube.com/channel/UC9r3qWwYjvH8sQhXyZtH7A (original string is not changed)

          // console.log(url.includes("youtube")); // true (includes method of string, returns true if the string contains the specified value, otherwise false )

          // console.log(gameName.split("o")); // ["f", "tball"] (split method of string, splits a string into an array of substrings, and returns the new array, the original string is not changed 



/******************* num ans math  ***********************/

        // const score = 400 
        // const balance = new Number(100);
        // console.log(balance);  //number: 100 
        // console.log(score) //number

        // console.log(balance.toString().leangth); //3
        // console.log(balance.toFixed(2));  //100.00  ,2 tk decimal aata h

        // const othernumber = 23.89422;
        // console.log( othernumber.toPrecision(3))   // 23.9  ye value ko precise krke deti h 
        //             // Number of significant digits. Must be in the range 1 - 21, inclusive.
        //             // Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

        // const num = 100000;
        // console.log(num.toLocaleString('en-IN')); //1,00,000 ye value ko readiable banata h



        // /*************************math************************ */

        // console.log(Math);
        // console.log(Math.abs(-32));  //32
        // console.log(Math.round(4.6));  //5
        // console.log(Math.ceil(4.6));  //5  ceiling mtlb top jara sa bhi jadha hua to top lega 
        // console.log(Math.floor(4.6)); //4 lowest value leag 
        // console.log(Math.min(2,334,45,5,66,)) //2
        // console.log(Math.max(2,334,45,5,66,)) //334

        // console.log(Math.random()); // ek koi bhi random number degi 0 or 1 ke beech me 
        // console.log(Math.random()*10 + 1);  vahi number 1 or 10 ke beech me hoga 
        // console.log(Math.floor(Math.random()*10 + 1));

        // const min = 10;
        // const max =20;
        // console.log(Math.floor(Math.random() * (max-min +1)) + min) //12.3 ,14 ,15,11 ,16 mltb min10 se upr rahega ;


/**************************** data and time  ******************************/
            //js me month '0' index se start  hote h 
          // let mydate = new Date();
          // console.log(mydate);
          // console.log(mydate.toString()); // ye proper date deta h  

          // console.log(mydate.toISOString); 
          // console.log(mydate.toJSON); 
          // console.log(mydate.toLocaleDateString); 
          // console.log(mydate.toLocaleString);
          // console.log(mydate.toDateString); //
          // console.log(typeof mydate);  //obejct type

          // let mycrateddate = new Date(2029,3,12,3,5);
          // let mycrateddate = new Date("01-14-2029"); // yy-mm-dd
          // console.log(mycrateddate.toLocaleString()); //ye date deta hr ek number ko use krke 

          // let mytimestamp = Date.now() ;
          // console.log(mytimestamp);  //12343441234435  ye aayega millisecond ka kyu ki jbse date aaya h tbse leke av tk ka time h ye 
          // console.log(mycrateddate.getDate()); //ek alag value aayegi usse isko compare kr skte h

          // console.log(Date.now()/1000) ; time ko millises. se second convert kr skte h 
          // console.log(Math.floor(Date.now()/1000 )) isse decimal value nhi aayegi;

          // let newdate = new Date();   // date me kuch chahye hoo like day,year etc
          // console.log(newdate);
          // console.log(newdate.getMonth() + 1);   //+1 is liye kyu ki month 0 se start hote h
          // console.log(newdate.getDay());

          // newdate.toLocaleDateString('default',{  //ye or bhi castmise krne ke kaam aata h 
          //   weekday : "long";
          //   //etc
          // })





/*********************array************************/

        //array declare
        // const myarr = [1,2,3,4,5 ,true]; //object they store collection of multiple item , recyclable ,mix of data type ,zero base index ,they make shallow copy(properties share our refrence)
        // const myheors = ["ram","syam"]
        // const myarr2 = new Array(1,2,3,4,5);

        // console.log(myarr[1]) //2

        // //methods
        // myarr.push(6)  // 1,2,3,4,5,6
        // myarr.pop(7) //1,2,3,4,5
        // myarr.unshift(9) // 9,1,2,3,4,5 array ke start me aayega
        // myarr.shift() // 1,2,3,4,5   start ka element delet ho jayga 

        // console.log(myarr.includes(9)) //false  kya 9 h arry ke andr 
        // console.log(myarr.indexOf(3))  //4 

        // const newarr = myarr.join() // ye string me convert kr dega 

        //      // slice ,splice

        // console.log("A",myarr);  // A [1,2,3,4,5,true;
        // const myn = myarr.slice(1,3) // iska mtlb ye index 1 se leke 3 se pahale tk ke sare return kr degi //[1,2]
        // const myn = myarr.splice(1,3) //[2,3,4] but ye original array ko manuplate kr dega [1,5,true] bachega



        // const heros = ["rajat" ,"ram"]
        // const hero  = ["english" ,"hindi"]
        // heros.push(hero); // ["rajat","ram",{"english","hindi"}] // ye array ko as a element lelega;
        // console.log(heros[3][1])  //ye return karega "english";

        // heros.concat(hero); 
        // console.log(heros) // {"rajat","ram","enflish"."hindi"}

        // const newheros = [...heros , ...hero] //spread operator ye hr ek elemnt ko individual me convert kr dega or new arry return hoga jiske andr sare elemnt hoge

        // const anotherarray = [1, 2, 34, [2, 34, 5, [34, 4, 567]]];
        // const newanotherarray = anotherarray.flat(Infinity); // ye ek single arry dega jiske andr sare number hoge

        // console.log(Array.isArray("rajat")) //false
        // console.log(Array.from("rajat")) // {"r" "a" "j" "a" "t" } //array me convert krdrga 
        // console.log(Array.from({name: "rajat"})) //[] ye return karega kyu ki confuse ho jayega kiska array bnaau

        // let s = 200;
        // let d = 300;
        // let f = 400;
        // console.log(Array.of(s,d,f)) // return karega [200,300,400] 




/*************************object*********************** */

        //singleton object => ek hi object bna sakte h , literals ki trha declare krte h to singleton nhi banta h
        // construtor se hamesa singleton object banta h   // object.create

        // const mysum = Symbol('key1'); av muje is symbol ko obj me use rkna h to 
        // //object literals
        // const jsuser = { 
        //          name: "rajat"
        //          "full name": "rajat tiwari"
        //          [mysum]:"mykey1",  // ye mene symbol use kiya 
        //          age : 18;
        //          location: "jaipur";
        //          email: "rajat@12"
        //          islogged: false;
        // }
        // console.log(jsuser.email) //dot se hm hr kisi ko access nhi kr skte 
        // console.log(jsuser["email"]) 
        // console.log(jsuser[mysum]) // 'mykey1' ye symbol type ka hoga 
        // console.log(jsuser["full name"]) // rajat tiwari   , square notation hi use karege 

        // jsuser.email = "hitesh@chatgpt.com";  //ye value change krdi 
        // Object.freeze(jsuser)  // av isko koi chnage nhi kr payega 

        // jsuser.greeting = function(){
        //   console.log("hello js user");
        // }
        // console.log(jsuser.greeting())


        // jsuser.greetingto = function(){
        //   console.log(`hello js user`.at(this.email));  //backtick or this ka use krke hm object ke sare variables ko access kr skte h
        // }   // hello js user, rajat@12



        // how can i declare object by constructor

        //  const tinderuser = new  Object() // ye ek singleton object h 
        //  const tinderuser ={}  // ye non singletone h

        //   tinderuser.id = "123asd"
        //  tinderuser.name = "sunney"
        //  tinderuser.isloggedin = false 

        //  const regularuser = {    //nested object
        //   email: "some@gmail.com"
        //      fullname: {
        //       firstname: "rajat"
        //      }
        //  }
        //  console.log(regularuser.fullname.firstname)  // agr fullname na hto use hm use krte h ? ka if else ki jagh a
        
        //  //av object ko merge krna 
        //  const obj1 = {
        //       1: "a"
        //       2: "b"
        //  }
        //  const obj2 = {
        //       3: "e"
        //       4: "g"
        //  }
        // //const obj3={obj1,obj2} // but isse obj ke andr obj show karega isiliye hm
        //  //cosnt obj3 = Object.assign({},obj1 ,obj2)
        //  const obj3 = {...obj1,...obj2}  // ye sbse easy way h merge krne ka

        //  //array ke andr bahoot sare objects aate h
        //   const user = [
        //     {
        //       id:1
        //       email: "rajat@212"
        //     }
        //     {
        //       id2: 2
        //       email:"rohit323"
        //     }
        //   ]
        //   user[1].email // ye access krne ke liye h
        //   console.log(tinderuser)
        //   console.log(Object.keys(tinderuser)); // isme keys ka array retur ho jaygea like ['id','name','loggedin']
        //    console.log(Object.values(tinderuser))  // sari values aajayegi
        //    console.log(Object.entries(tinderuser)) 
        //   console.log(tinderuser.hasOwnProperty('name')); //return true; ye check krta h ki cheez h y nhi 




/****** *************************functionds********************************* */

//jo package likha h usko kisi bhi file me use krne ke liye export krte h or import krte h

          // function sayName(){
          //   console.log("rajat");
          //   console.log("rajat");
          //   console.log("rajat");
          //   console.log("rajat");
          //   console.log("rajat");
          //   console.log("rajat");
          // }
          // sayName() //function call , agr function ko call nhi krte h to kuch bhi print nhi hoga

          // function sumTwoNumbers(num1,num2){
          //   return num1 + num2;     
          // } 
          // sumTwoNumbers(2,3) //5      what happen (2,"3") => num1 = 2 , num2 = 3
          //                    //       to ans 2"3" => 23  , agr dono number h to add hoga , agr ek string h to concat hoga
          // sumTwoNumbers(2,nan) //nan  , agr ek number h to add hoga , agr ek string h to concat hoga

          // function LoginUserMessage(username = "sam"){   //ye andr sam default value h , agr username nhi h to ye use hoga,otherwise override hoga
          //    if(!username){
          //     console.log("please enter a valid username");
          //     return;
          //    }

          //    return `${username} just logged in`;
          // }
          // console.log(LoginUserMessage("rajat")); // rajat just logged in
          // console.log(LoginUserMessage()); // sam just logged in


            // function username(val1,val2, ...num1) {  // rest operator => it collects all the remaining arguments into an array
            //   return num1;                           // val1 = 1, val2 = 2, num1 = [3, 4, 5] 
            // }
            // console.log(username(1, 2, 3, 4, 5));

  // now obejct in function
          // const myuser = {
          //   id: 1,
          //   username: "rajat",
          //   email: "rajat@123",
          //   isloggedin: false
          // }
          // function myuserdetails(userdetails){
          //   console.log(`username is ${userdetails.username} and email is ${userdetails.email}`);
          // }
          // myuserdetails(myuser);



    //jesan type of function , isme hamne function ko ek variable me dala h isliye hm isko pahalea access nhhi kr skte h
          // const myuser = function(num){
          //  return num+1;
          // }
          // myuser(2); //3





/* *************************scopes*****************************  */
        // scope => where a variable is accessible in the code ,for example
          
        // function one(){
        //     const username = "rajat"; //function scope , ye variable sirf is function ke andr hi accessible hoga
        //       function two(){
        //         const website = "youtube"; //function scope , ye variable sirf is function ke andr hi accessible hoga
        //         console.log(username); // accessible , kyuki ye parent function ke andr h
        //       }
        //       // console.log(website); // not accessible , kyuki ye child function ke andr h
        //       two();
        // }
        // one(); // ye function call hoga to username print hoga , otherwise error aayega


/** ****************************this and arrow function******************************** */
        //   const user = {
        //     username : "rajat";
        //     price: 09324;

        //     welcome : function(){
        //       console.log(`${this.username} , welcome to this website`)  //this jo h current contxt ko refer krta h jo ki ek hi scope ke andr h  
          //       console.log(this);
        //     }
        //   }
        // user.welcome();
        // user.username = "sam";
        // user.welcome();          //iske output me context bdl jayega or sam name aayega 
        // console.log(this) //{} ye return krega , lekin browsr me alag hota h 


        // function chai(){ 
        //   console.log(this) //isme bahoot sari value aayegiii(global vlue,micro task etc)
        //   let usrnmae = "rajat";
        //   console.log(this.usrnmae) // undefine aagyega kyu ki function ke andr this ko use nhi kr kste 
        // }
        // chai();

        // const chai = () => {
        //   let username = "rjat";
        //   console.log(this) //{} ye aayega,arrow function ke andr 
        // }
        // chai();

        // const addtwo = (num1,num2) =>{
        //   return num1+num2;
        // }                                  // this is arrow funciton
        // console.log(addtwo(2,3))

        // const addtwo = (nums1,num2) => num1 + num2 ;  // it is implictive type
        // const addtwo = (nums1,num2) => ({username:"rajat"}) //object ke liye parenthis lagana hi padega 
     
        
        
  // /*******************IIFE(immedately invoked function expression) */

  //  (function chai(){    //named iife
  //   console.log(`HB CONNECTED`)

  //  })();  // av ye code executed hoo jayega isko kahate h iife , semicollon lagana jaruri h 
  //  // ye global scope ko spoil hone se rrookti h 

  //  //unnamed iife
  //  ((name) => {
  //   console.log(`THE RAJAT IS GOOD ${name}`);
  //  })(`boy`);
