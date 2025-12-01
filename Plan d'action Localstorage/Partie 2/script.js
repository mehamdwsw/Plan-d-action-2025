let data=[1,2,3,4,5,6,7,8,9];
let datae=['sad','sdfsdf','wrwr','fdgvd','sdf','dgfsd','gfc','gfh','hjhg'];
let datad=['sad','sdfsdf','wrwr','5555555555555555','sdf','dgfsd','gfc','gfh','hjhg'];


localStorage.setItem("name",data);
localStorage.setItem("fff",data);
localStorage.setItem("ddd",datae);
localStorage.setItem("ggg",datad);
let i=0
for(i=0;i<localStorage.length;i++){
    const key = localStorage.key(i);
    console.log(localStorage.getItem(key));
}
    
    
