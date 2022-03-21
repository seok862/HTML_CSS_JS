const todayDiv = document.getElementById(`today`)
const timeDiv = document.getElementById(`time`)

function getTime(){
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth()+1;
    let date = now.getDate();
  
    let hour = now.getHours();
    let minu = now.getMinutes();
    let seco = now.getSeconds();
    
    month = month < 10 ? `0${month}` : month ;
    date = date < 10 ? `0${date}` : date ;
    hour = hour < 10 ? `0${hour}` : hour ;
    minu = minu < 10 ? `0${minu}` : minu ;
    seco = seco < 10 ? `0${seco}` : seco ;


    todayDiv.textContent = `${year}년 ${month}월 ${date}일`
    timeDiv.textContent = `${hour}:${minu}:${seco}`
}

getTime();
setInterval(getTime,1000)

