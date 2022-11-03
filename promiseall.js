const posts=[
    {title:'post one', body:'this is post one', createdAt: new Date().getTime()},
    {title:'post two', body:'this is post two', createdAt: new Date().getTime()}
];

function getPost(){
    setTimeout(()=>{
        let output="";
        posts.forEach((post,index)=>{
            output+=`<li>${post.title} -last updated${(new Date().getTime() - post.createdAt)/1000}seconds ago</li>`;
        });
        
        document.body.innerHTML=output;
    },1000);
    
}

function createPost(post){
    return new Promise((resolve, reject)=>{
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
const promise1 =Promise.resolve('helloworld');
const promise2 =10;
const promise3 =new Promise((resolve,reject)=>setTimeout(resolve,2000,'goodbye'));
Promise.all([promise1,promise2,promise3]).then(values =>console.log(values));
f

