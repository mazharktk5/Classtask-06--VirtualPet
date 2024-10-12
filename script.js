var pet = {
    name: "pety",
    type: "cat",
    age: 4,
    happiness:50,
    hunger: 30,  
}

feed: function () {
    if(this.hunger > 20){
        this.hunger -= 20;
        console.log(this.name + " has been fed and is now hungry by " + this.hunger + "%");
    }else{
        console.log(this.name + " is already full of food.");
    }
}

