const names = [
    { firstName: "Abheeth", lastName : "Kotelawala" },
    { firstName: "Harith", lastName : "Kotelawala" },
    ];

function getNames() {
    setTimeout(() => {
        let output = '';

        names.forEach((name, index) => {
            output += 
            `
            <li>${name.firstName} ${name.lastName}</li>
            <p>Via Async/Await</p>
            <hr/>
            `;
        });

        document.body.innerHTML = output;
    }, 1000);
}

function createName(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            names.push(name);
            resolve();
            // If there's an error we can use reject
            // reject('Error!!!');
        }, 2000);
    });
}

//Async/ Await
async function init(){
    await createName({ firstName: "Sriwanth", lastName : "Kotelawala" });
    getNames();
    return this;
}

// Async/ Await with fetch
async function getUsers(){
    debugger;
    // const response  = await fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(json=>console.log("json",json));
    const response  = await fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(json=>console.log("json",json));
    // const data = await response.json();
    // console.log(response);
}

init();
getUsers();