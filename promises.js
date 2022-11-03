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
function deletePost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            
            if(posts.length>0){
                resolve(posts.pop());

            }else{
                reject('Array is empty now');
            }
        },3000);
    })
}
createPost({title:'post three', body:'this is post three'})
.then(()=>{
    getPost();
    deletePost().then(()=>{
        getPost();
        deletePost().then(()=>{
            getPost();
            deletePost().then(()=>{
                createPost({title:'post four', body:'this is post four'})
                getPost();
                deletePost().then(()=>{
                    getPost();
                    deletePost().then(()=>{})
                    .catch((err)=>{
                        console.log('Inside catch block',err)
                    })
                })
                
            })
        })
    })
})
.catch(err=>console.log(err));
