var pet = {
    name: "poppy",
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

play: function () {
    if(this.happiness < 100){
        this.happiness += 20;
        console.log(this.name + " have fun  playing and is now happy by " + this.happiness + "%");
    }else{
        console.log(this.name + " is already happy.");
    }
}

