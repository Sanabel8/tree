
alert(" welcome on my tree website");



var favirateTree =prompt ("what's your favirate tree color? plz choose between red or pink");
var paperColor1 ="pink";
var paperColor2 = "red"; 
 
var totalPictures = " "; 
 var Picture = " ";


 if (favirateTree == paperColor1){

  Picture = ('<img src ="https://th.bing.com/th/id/OIP.18CfLnDkYF-3lo1E0dWOMgAAAA?pid=ImgDet&w=221&h=165&c=7&dpr=1.25">')
 }
 else if(favirateTree == paperColor2){

  Picture = ('<img src ="https://live.staticflickr.com/8476/8096973901_0f3a7eb093_b.jpg">')

 }else {
     alert("choose red or pink");
 }



 while (favirateTree != "pink" && favirateTree != paperColor2){
    favirateTree = prompt ("choose pink or red ");
 }


var numberOfPicture = prompt (" plz inter number of picture ");
 
 for (var i = 0; i < numberOfPicture ; i++ ){ 
  
  console.log ("number of picture is " + i );

  totalPictures+=Picture
   }

 document.write(totalPictures);