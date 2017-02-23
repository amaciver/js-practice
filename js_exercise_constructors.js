function Cat(name, owner){
  this.name = name;
  this.owner = owner;
};

Cat.prototype.cuteStatement= function(){
  console.log(`${this.owner} loves ${this.name}`);
};

let coolKat = new Cat("Cool Kat", "Me", "HEY");
let niceKat = new Cat("Nice Kat", "You");
let fatKat = new Cat("Fat Kat", "Us");

// coolKat.cuteStatement();
// fatKat.cuteStatement();
// niceKat.cuteStatement();

Cat.prototype.cuteStatement = function(){
  console.log(`Everyone loves ${this.name}`);
}

// coolKat.cuteStatement();
// fatKat.cuteStatement();
// niceKat.cuteStatement();

Cat.prototype.meow = function(){
  console.log(`MEOOOOOW`);
}

coolKat.meow();

coolKat.meow = function(){
  console.log(`yo.`);
}

coolKat.meow();
fatKat.meow();
