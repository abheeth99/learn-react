
const names = [
    { firstName: "Abheeth", lastName: "Kotelawala" },
    { firstName: "Harith", lastName: "Kotelawala" },
];

function getNames() {
    setTimeout(() => {
        let output = '';

        names.forEach((name, index) => {
            output +=
                `
                <li>${name.firstName} ${name.lastName}</li>
                <p>Via promises</p>
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

createName({ firstName: "Sriwanth", lastName: "Kotelawala" })
    .then(getNames)
    .catch(err => console.log(err));


// Promise all

const promise1 = Promise.resolve(3);
const promise2 = "Just a value";
const promise3 = Promise.reject('Error!!!');
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
  console.log("Promise all with one rejection",values)
}).catch(err => console.log(err));
// console -> Error!!!

// Note! If one promise gets rejected, then promise all will reject immediately.
// To handle that we can handle each behaviour like this,

Promise.all([
    promise1.catch(err=>console.log(err)), 
    promise2,
    promise3.catch(err=>console.log(err)), 
    promise4.catch(err=>console.log(err))]).then((values) => {
    console.log("Promise all with one rejection",values)
  });

// console ->
// 0: 3
// 1: "Just a value"
// 2: undefined
// 3: "foo"