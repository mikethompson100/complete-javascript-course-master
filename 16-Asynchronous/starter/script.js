'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//////////////////////////////////////
const request = new XMLHttpRequest();  // old school way
request.open('GET', "https://restcountries.com/v2/name/portugal")
request.send();

request.addEventListener('load', function() {
    console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);
})











