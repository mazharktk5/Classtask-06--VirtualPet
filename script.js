
var petName = prompt("Whats your pet name?")
var petType = prompt("Whats your pet type?")
var petAge = parseInt(prompt("How old is your pet?"))
var petHappiness =parseInt( prompt("How happy is your pet?"))
var petHunger = parseInt (prompt("How hungry is your pet?"))








var pet = {
    name: petName,
    type: petType,
    age: petAge,
    happiness:petHappiness,
    hunger: petHunger, 
    
    
    feed: function () {
        if(this.hunger > 20){
            this.hunger -= 20;
            if(this.hunger < 0){
                this.hunger = 0;
            }
            alert(`${this.name} had been fed his hunger is now ${this.hunger}.`);
        }else{
            alert(`${this.name} is already full of food.`);
            
        }
    },
    
    play: function () {
        if(this.happiness < 100){
            this.happiness += 20;
            if(this.happiness > 100){
                this.happiness = 100;
            }
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
    var action = prompt("What do you want\n1.feed\n2.play\n3.agePet\n4.quit\n");
    if(action === "1"){
        pet.feed();
    }else if(action === "2"){
        pet.play();
    } else if(action === "3"){
        pet.agePet();
    }else  if(action === "4"){
        alert("Thanks for caring your pet")
    }else{
        alert("invalid action")
    }
   

}

getInfo();





