
function aboutMe(){ 
    $.get("/users/1/about-me",function(data, status){alert(data);
    });
   }
 function postAlert(){
    $.post("/newpost",function(data, status){
       alert("Posted on your timeline");});
    }
function initailize(){
   $.get("/users/1/feed'" ,function(data,status){
      console.log(data);
       })};
      
