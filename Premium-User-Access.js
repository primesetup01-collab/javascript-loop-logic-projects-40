let users=[{name:"Ali",ispremium:true},{name:"Raj",ispremium:false}];

for(let u of users){
    if(u.ispremium)
        console.log("welcome",u.name)
}

// output :==> Welcome Ali