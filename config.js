// console.log(process.argv[2])

const exec = require('child_process').exec;

// Load Json 
const json = require('./config.json' );
console.log(json, 'the json obj');


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Set Env number: \n 1. Development \n 2. Production \n Enter: ', num => {
    console.log(`selected Env : ${num}!`);
    callScript(num);
    readline.close();
  });

function callScript(num){

    if(num==1){
        exec('env-cmd -f .env.development react-scripts start', (e, stdout, stderr)=>{
            console.log(e);
            console.log(stdout);
            console.log(stdout);
        });
    }
    else if(num==2)
    {
        exec('env-cmd -f .env.production react-scripts start', (e, stdout, stderr)=>{
            console.log(e);
            console.log(stdout);
            console.log(stdout);
        });
    }
    else{
        console.log("Invalid");
    }

}