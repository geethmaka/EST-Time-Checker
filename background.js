document.addEventListener("DOMContentLoaded", () => {
  function setTime(){
    fetch("https://worldtimeapi.org/api/timezone/EST").then((response)=>response.json()).then(function(data){
      var date=data.datetime.split("T")[0];
      var time=data.datetime.split("T")[1].split(".");
      document.getElementById("date").innerHTML=`${date}`;
      document.getElementById("time").innerHTML=`${time[0]}`;
    })
  }
  setTime()
  var timer = setInterval(setTime,1000);
});
