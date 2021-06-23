
let BtoG = ['somu', 'virat', 'rohit', 'jadeja', 'somu', 'virat', 'rohit', 'jadeja', 'somu', 'virat', 'rohit', 'jadeja', 'jadeja', 'somu', 'virat', 'rohit', 'jadeja', 'jadeja', 'somu', 'virat', 'rohit', 'jadeja', 'jadeja', 'somu', 'virat', 'rohit', 'jadeja', 'jadeja', 'somu', 'virat', 'rohit', 'jadeja'];

let MtoG = ['somu', 'virat', 'rohit', 'jadeja', 'somu', 'virat', 'rohit', 'jadeja', 'somu', 'virat', 'rohit', 'jadeja', 'jadeja', 'somu', 'virat', 'rohit', 'jadeja', 'jadeja', 'somu', 'virat', 'rohit', 'jadeja', 'jadeja', 'somu', 'virat', 'rohit', 'jadeja', 'jadeja', 'somu', 'virat', 'rohit', 'jadeja'];

let PtoG = ['somu', 'virat', 'rohit', 'jadeja', 'somu', 'virat', 'rohit', 'jadeja', 'somu', 'virat', 'rohit', 'jadeja', 'jadeja', 'somu', 'virat', 'rohit', 'jadeja', 'jadeja', 'somu', 'virat', 'rohit', 'jadeja', 'jadeja', 'somu', 'virat', 'rohit', 'jadeja', 'jadeja', 'somu', 'virat', 'rohit', 'jadeja'];


// async await

async function checkAvailability()
{
    
    let promise = new Promise(function (resolve, reject)
    {
        
        setInterval(function () {
            

            if (BtoG.length < 5)
        {
            resolve("train1 is available");
        }
        else if (MtoG.length < 5)
        {
            resolve("train2 is available");
        }
        else if (PtoG.length < 5)
        {
            resolve("train3 is available");
        }
            

        }, 1000)
        
        
    })

    let res = await promise
        console.log('res:',res);


}

function cancelTicket()
{

    let canceling1 = Math.ceil(Math.random() * 5);
    let canceling2 = Math.ceil(Math.random() * 5);
    let canceling3 = Math.ceil(Math.random() * 5);

    setInterval(function () {  BtoG.pop(); },canceling1*1000)
    setInterval(function () {  MtoG.pop(); },canceling2*1000)
    setInterval(function () {  PtoG.pop(); },canceling3*1000)

    // let range=Math.floor(Math.random()*3)

    // if (range == 1) {
    //     PtoG.pop();
    // }
    // else if (range == 2) {
    //     BtoG.pop();
    // } else if (range == 0)
    // {
    //    MtoG.pop(); 
    // }
    
    
    

    console.log( "cancelation",BtoG,PtoG,MtoG);
    
}

 setInterval(cancelTicket,1000);