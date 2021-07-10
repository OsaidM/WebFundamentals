var users = [
    {
        name: "Michael",
        age: 37
    },
    {
        name: "John",
        age: 30
    },
    {
        name: "David",
        age: 27
    }
];

// to print/log John's age
for(var key in users){
    if(users[key].name == "Michael" ){
        console.log(users[key].age);
    }
}

// to print/log the name of the first object
console.log(users[0].name);

// to print/log the name and age of each user
for(var key in users){
    console.log(users[key].name,"-",users[key].age);
}
