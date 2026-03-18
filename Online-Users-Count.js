let users=[{online:true}, {online:false},{online:true},{online:true}];
let count=0;

 for(let u of users) if(u.online) count++
 console.log(count,"online hai")

//  output==> 3 online hai