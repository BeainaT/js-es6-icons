const animals = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const mainContainer = document.querySelector(".container");
//ciclo per ogni elemento dell'array
animals.forEach((element) => {
	const box = document.createElement("div");
	box.classList.add("box");
	mainContainer.append(box);
	//creo tag per icone
	const icon = document.createElement("i");
	//aggiungo il valore della chiave di mio interesse come classe
	icon.classList.add(`${element.prefix}${element.name}`);
	//aggiungo classe "fa-solid" per visualizzare le icone fontawesome
	icon.classList.add("fa-solid");
	icon.innerHTML = `<span>${element.type}</span>`
	//appendo le mie icone ai box 
	box.append(icon);
		//aggiungo classi alle mie icone a cui assegnerò valori in css
		if(element.color === "orange") {
			icon.classList.add("animals_color");
		} else if (element.color === "green") {
			icon.classList.add("users_color");
		} else {
			icon.classList.add("veg_color");
		};
	//Seleziono la select nel DOM e aggiungo evento di selezione
	document.getElementById("choice").addEventListener("change", 
	function() {
		//SE il valore selezionato è "all", rimuovo la classe che in css rende display = none
		if(this.value === "all") {
			box.classList.remove("hidden");
		//ALTRIMENTI SE il valore selezionato è diverso dal valore dell'oggetto, nascondo gli elementi diversi
		} else if(this.value !== element.type) {
			box.classList.add("hidden");
		//ALTRIMENTI mostro il valore degli elementi
		} else {
			box.classList.remove("hidden");
		};
	});
}); 
