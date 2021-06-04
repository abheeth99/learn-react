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
            <p>Via callback</p>
            <hr/>
            `;
        });

        document.body.innerHTML = output;
    }, 1000);
}

function createName(name, callback) {
    setTimeout(() => {
        names.push(name);
        callback();
    }, 2000);
}

createName({ firstName: "Sriwanth", lastName : "Kotelawala" }, getNames);