function getData(url, callback) {
   let xhr = new XMLHttpRequest();
 
   xhr.onreadystatechange = function () {
     if (xhr.readyState === 4 && xhr.status === 200) {
       let responseJson = xhr.response;
       let response = JSON.parse(responseJson);
       callback(response, xhr.status);
     } else if (xhr.readyState === 4) {
       callback(xhr.statusText, xhr.status);
     }
   };
   xhr.timeout = 10000;
   xhr.open("get", url);
 
   xhr.send();
 }