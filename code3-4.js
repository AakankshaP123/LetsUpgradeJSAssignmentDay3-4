let obj=[
    {
    name: "Aakanksha",
    age: 20,
    country: "India",
    hobbies: ["Reading","dancing"],
    },

    {
     name: "Sanket",
    age: 15,
    country: "America",
    hobbies: ["Acting","dancing"],
    },

    {
        name: "Avanti",
       age: 50,
       country: "India",
       hobbies: ["Reading","Writing"],
    },  
]

console.log("............Elements of an Array.............");

for(i=0;i<3;i++){
  console.log(obj[i]);
}
console.log("\n");
console.log("...........Elements having age less than 30............");

for(i=0;i<3;i++){
    if(obj[i].age < 30){
        console.log(obj[i]);
    }
}
console.log("\n");
console.log("...........Elements having country India..........");

for(i=0;i<3;i++){
    if(obj[i].country == "India"){
        console.log(obj[i]);
    }
}