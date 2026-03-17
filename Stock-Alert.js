let items=[{name:"Pen",quantity:5},{name:"Book",quantity:0}];
for(let i of items){
 console.log(i.quantity===0?"Out of Stock":"Available");
}