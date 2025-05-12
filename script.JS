const inputElement = document.getElementById("inputSearch");
const btnElement = document.getElementById("btnSearch");
const p1Element = document.getElementById("P1");
const p2Element = document.getElementById("P2");
const p3Element = document.getElementById("P3");

let City = "";

btnElement.addEventListener("click", ()=> {
    City = inputElement.value.trim();
    Weather(City);
})

async function Weather(City) {

const Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=fad19e78361f2a5e8d6ca10a2c2be7f8`);

const Data = await Response.json();

p3Element.innerHTML = ` ${Data.weather[0].description}`;
p2Element.innerHTML = `${Data.main.pressure}`;
p1Element.innerHTML = `${Data.main.temp}`;

}

Weather();
