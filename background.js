document.addEventListener("DOMContentLoaded", () => {
  function setTime(){
    fetch("http://worldclockapi.com/api/json/est/now").then((response)=>response.json()).then(function(data){
      var date=data.currentDateTime.split("T");
      var time=data.currentDateTime.split("T")[1].split("-");
      document.getElementById("date").innerHTML=`${date[0]}`;
      document.getElementById("time").innerHTML=`${time[0]}`;
    })
  }
  setTime()
  var timer = setInterval(setTime,1000);
});
