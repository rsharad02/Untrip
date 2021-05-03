// //getting all required elements
//  const searchWrapper = document.querySelector(".search-input");
//  const inputBox = searchWrapper.querySelector("input");
//  const suggBox = searchWrapper.querySelector(".autocom-box");

//  //if user presses any key and releases

//  inputBox.onkeyup = (e) => {
//      let userData = e.target.value;      //user entered data
//      let emptyArray = [];
//      if(userData) {
//          emptyArray = suggestions.filter((data)=>{
             
//              //filtering array value and user char to lowercase and returning 
//              //only those words/sentences which starts with user entered character
             
//              return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
//          });
//          emptyArray = emptyArray.map((data)=>{
//              return data = '<li>'+ data +'</li>';
//          });
//          console.log(emptyArray);
//          searchWrapper.classList.add("active");
//      }else{

//      }
//      showSuggestions(emptyArray);

//  }

//  function showSuggestions(list){
//      let listData;
//      if(!list.length){

//      }
//      else{
//          listData = list.join('')
//      }
//      suggBox.innerHTML = listData;
//  }
