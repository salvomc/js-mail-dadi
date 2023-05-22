
let listaMail = ['salvatore@boolean.com', 'eugeniu@boolean.com', 'emanuele@boolean.com', 'davide@boolean.com', 'francesco@boolean.com'];
let mail = prompt('Inserire la mail che vuoi cercare');
let flag = false;

for(let i=0; i<listaMail.length; i++)
    {
        if(listaMail[i].toLowerCase() === mail.toLowerCase())
            {
            flag = true;
            }
    }

if(flag === true)
    {
    console.log('Email trovata');
    }
    else{
        console.log('Email non trovata');
        }