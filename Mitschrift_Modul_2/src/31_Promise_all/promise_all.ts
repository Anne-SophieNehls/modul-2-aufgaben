//!bsP1 

function doHomwork(name: string, timeInMilliSeco: number): Promise<string> {
    return new Promise((resolve, reject)=>{
        if(timeInMilliSeco === 0){
            reject("homwork durantion must be bigger than 0sec")
        }
        setTimeout(()=>{
            resolve(`${name} has finisched homework`)
        }, timeInMilliSeco)
    })
}

const alicieHomework = doHomwork("Alice", 3000)
const  steveHomwork= doHomwork("steve", 9000)
const  nanaHomwork= doHomwork("nana", 8000)

// ! Promise All
Promise.all([alicieHomework, steveHomwork, nanaHomwork])
    .then((resp: [string, string, string])=>{
        resp.forEach((result: string) =>{
            console.log(result)
        })
    }).catch((error)=> console.error(error))


    //! beipeil 2
function taskManager(taskName: string, employee: string, time: number, done: boolean): Promise<string> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        if(!done){
            reject(`the Task is still not done by ${employee} `)
        } else {
            resolve(`${taskName} is done by ${employee}`)
        }
    }, time)

    })
}

//! beispiel 3

type IceCream ={
    id: number,
    name: string, 
    details?: string,
    price: number
}

const localIceCream: IceCream[] = [
    {id: 1, name: "vannilla", price: 1.5}
    {id: 2, name: "schoki", price: 2.5}
]

const onlineIceCream: IceCream[] = [
    {id: 3, name: "straberry", price: 1.5}
    {id: 4, name: "mango", price: 2.5}
]

const getAllLocalIce = (): Promise<IceCream[]> => {
    return new Promise((resolve)=>
    setTimeout(()=> {
        resolve(localIceCream)
    }, 2000))
}

const getAllOnlineIce = (): Promise<IceCream[]> => {
    return new Promise((resolve)=>
    setTimeout(()=> {
        resolve(onlineIceCream)
    }, 2000))
}

Promise.all([getAllLocalIce(), getAllOnlineIce()])
    .then((resp: IceCream[], IceCream[])=>{
        console.log(resp);
        const local = resp[0]
        const online = resp[1]
        console.log(local)
        console.log(online)
        const allIceCreams = [...local, ...online]
        console.log(allIceCreams)
        allIceCreams.forEach((ice: IceCream)=>{
            console.log(ice)
        })


    })