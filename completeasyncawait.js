console.log('person1:shows ticket');
console.log('person2:shows ticket');
const promisewifebringingtickets=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('ticket');
    }, 3000);
});
/*promisewifwbringingtickets.then((t)=>{
    console.log(`person3: shows ${t}`);
});
console.log('person4:shows ticket');
console.log('person5:shows ticket');*/
const getPopcorn=promisewifebringingtickets.then((t)=>{
    console.log('wife:i have tickets with me')
    console.log('husband: we should go in');
    console.log('wife:no i am hungry');
    return new Promise ((resolve,reject)=>resolve(`${t} popcorn`));
});
const getButter= getPopcorn.then((t)=>{
    console.log('husband:i got some popcorn');
    console.log('husband:we should go in');
    console.log('wife: i need butter on my popcorn');
    return new Promise((resolve,reject)=>resolve(`${t} butter`));
});
const getcolddrinks=getButter.then((t)=>{
    console.log('wife:honey i need colddrink');
    console.log('husband:sure my dear');
    return new Promise((resolve,reject)=>resolve(`${t} colddrink`));
});
getcolddrinks.then((t)=>console.log(t));
console.log('person4:shows ticket');
console.log('person5:shows ticket')


console.log('person1:shows ticket');
console.log('person2:shows ticket');
const preMovie=async()=>{
    const promisewifebringingtickets=new Promise((resolve,reject)=>{
        setTimeout(() => resolve('ticket'), 3000);
    });
    const getPopcorn=new Promise((resolve,reject)=>resolve('popcorn'));
    const addbutter=new Promise ((resolve,reject)=>resolve('butter'));
    const getcolddrinks= new Promise((resolve,reject)=>resolve('coolderink'));
    let ticket = await promisewifebringingtickets;
    console.log('wife:i have tickets with me')
    console.log('husband: we should go in');
    console.log('wife:no i am hungry');
    let popcorn= await getPopcorn;
    console.log('husband:i got some popcorn');
    console.log('husband:we should go in');
    console.log('wife: i need butter on my popcorn');
    let butter= await addbutter;
    console.log('husband:i got butter on popcorn');
    console.log('husband:anything else darling');
    console.log('wife: thankyou');
    console.log('husband:we should go in');
    let cooldrink= await getcolddrinks;
    console.log('wife:honey i need colddrink');
    console.log('husband:sure my dear');
    return ticket;
    

}
preMovie().then((m)=>console.log(`person3: show ${m}`));
console.log('person4:shows ticket');
console.log('person5:shows ticket')



const preMovie=async()=>{
    const promisewifebringingtickets=new Promise((resolve,reject)=>{
        setTimeout(() => resolve('ticket'), 3000);
    });
    const getPopcorn=new Promise((resolve,reject)=>resolve('popcorn'));
    const addbutter=new Promise ((resolve,reject)=>resolve('butter'));
    const getcolddrinks= new Promise((resolve,reject)=>resolve('coolderink'));
    let ticket = await promisewifebringingtickets;
    let [popcorn,butter,colddrink] = await Promise.all([getPopcorn,addbutter,getcolddrinks]);
    console.log (`${popcorn},${butter},${colddrink}`);
    return ticket;

}
preMovie().then((m)=>console.log(`person3: show ${m}`));
console.log('person4:shows ticket');
console.log('person5:shows ticket');



async function createPost(){
    const a=1;
    const createpost= await Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt:new Date().getTime()});
            const  error=false;
            if(!error){
                resolve();

            }else{
                reject('error:something went wrong')
            }
            
        },1000);
    })
}
console.log(createPost);
async function deletePost(){
    const a=1;
    const deletepost= await Promise((resolve,reject)=>{
        setTimeout(() => {
            
            if(posts.length>0){
                resolve(posts.pop());

            }else{
                reject('Array is empty now');
            }
        },3000);
    })
}
console.log(deletePost);