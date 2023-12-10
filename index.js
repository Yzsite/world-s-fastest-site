const element = document.getElementsByTagName("title")[0];
setInterval(function() {
  var datex=new Date();
  element.innerHTML = ("0"+datex.getHours()).slice(-2)+":"+("0"+datex.getMinutes()).slice(-2)+":"+("0"+datex.getSeconds()).slice(-2);
}, 250);
