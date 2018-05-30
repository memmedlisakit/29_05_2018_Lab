// let obj = {};
// let obj2 = new Object();


// let arr = [];
// let arr2 = new Array();


// function Constcructor(){
// 	this.name = "nesede";
// }

// let a = new Constcructor();
// let b = new a.__proto__.constructor();



// function Car(_marka){
// 	this.marka = _marka;
// 	this.ehtiyatHisseleri = ["motor", "teker", "qapi"];             // incorrect
// 	this.motor = {
// 		tekerSayi:4,												// incorrect
// 		motorGucu:2000,
// 	},
// 	this.sayMarka = function(){
// 		console.log(this.marka);
// 	}
// }

// Car.prototype.model = "Sunny";
// // Car.prototype.ehtiyatHisseleri = ["motor", "teker", "qapi"];  // correct
// // Car.prototype.motor = {
// // 	tekerSayi:4,												// correct
// // 	motorGucu:2000,
// // }

// let n  = new Car("Sunny");
// let t  = new Car("Camry");


// function Student(_name, _surname){
// 	this.name = _name;
// 	this.surname = _surname;
// 	// this.fullInfo = function(){
// 	// 	console.log(this.name+"  "+this.surname);    //  t: 527.35791015625ms
// 	// }
// }



// Student.prototype.fullInfo = function(){
// 	console.log(this.name+"  "+this.surname);    // t: 490.429931640625ms
// }

// // let students = [];

// // console.time("t"); 
// // for(var a = 0; a < 2000000; a++){
// // 	students.push(new Student("sfdds", "sdfsdg"));
// // }
// // console.timeEnd("t");


// let e = new Student("Elnur", "Soltanov");
// let n = new Student("Nicat", "Eliyev");



// Number.prototype.factorial = function(){
// 	console.log(this ** this);
// }

// String.prototype.iterate = function(){
// 	for (let a of this) {
// 		console.log(a);
// 	}
// }

// Object.prototype.sayHello = function(){
// 	alert(this);
// }

// Object.prototype.factorial = function(){
// 	console.log(this ** this);
// }




let User = {
	_name:null,
	_surname:null,
	_email:null,
	info: function(){
		console.log(this._name + " " + this._surname);
	},
	get name(){
		console.log(this._name);
	},
	set name(val){
		this._name = val;
	},
	get email(){
		console.log(this._email);
	},
	set email(val){
		if(val.indexOf("@") == -1){
			return;
		}
		this._email = val;
	}
}


let elnur = {
	__proto__:User,
	_name:"Elnur",
	_surname:"Soltanov",
}
let orxan = {
	__proto__:elnur,
	_name:"Orxan",
	_surname:"Ferecov",
}


Object.defineProperty(elnur, "_name", {enumerable:false})
Object.defineProperty(elnur, "_email", {configurable:false})
 

// elnur.__proto__.__proto__ = null;










