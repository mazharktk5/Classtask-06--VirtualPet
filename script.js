var pet = {
    name: "poppy",
    type: "cat",
    age: 4,
    happiness:50,
    hunger: 30, 
    
    
    feed: function () {
        if(this.hunger > 20){
            this.hunger -= 20;
            alert(`${this.name} had been fed his hunger is now ${this.hunger}.`);
        }else{
            alert(`${this.name} is already full of food.`);
            
        }
    },
    
    play: function () {
        if(this.happiness < 100){
            this.happiness += 20;
            alert(`${this.name} had fun playing! Happiness level is now ${this.happiness}.`);
        }else{
            
            alert(`${this.name} is already very happy.`);
        }
    },
    
    agePet: function (){
        this.age += 1;
        this.hunger += 10;
        this.happiness -= 5;
        if(this.hunger > 100){
            this.hunger = 100;
        }
        if(this.happiness < 0){
            this.happiness = 0;
        }
        
         alert(`${this.name} is now ${this.age} years old. Happiness is ${this.happiness} and hunger is ${this.hunger}.`);
    },
    
};

function getInfo(){
    var action = prompt("What do you want (feed,play,agePet)");
    if(action === "feed"){
        pet.feed();
    }else if(action === "play"){
        pet.play();
    } else if(action === "agePet"){
        pet.agePet();
    } else{
        alert("Invalid action.");
    }

}

getInfo();





