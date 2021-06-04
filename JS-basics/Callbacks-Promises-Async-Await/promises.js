
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