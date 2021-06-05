// Local storage

localStorage.setItem("name","Abheeth");
//Overwrite
localStorage.setItem("name","AbheethK");

console.log(localStorage.getItem("name"));

localStorage.removeItem("name");

console.log(localStorage.getItem("name"));

localStorage.clear();

// Session storage

sessionStorage.setItem("name","Harith");
//Overwrite
sessionStorage.setItem("name","HarithK");

console.log(sessionStorage.getItem("name"));

sessionStorage.removeItem("name");

console.log(localStorage.getItem("name"));

sessionStorage.clear();


// Cookies

document.cookie = 'name=Sriwanth; expires=' + new Date(2022,1, 1).toUTCString();

document.cookie = 'lastName=K; expires=' + new Date(2022,1, 1).toUTCString();

console.log("cookies : ",document.cookie);