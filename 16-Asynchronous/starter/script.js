'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


const renderError = function(msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);

}

/* 
const getCountryData = function(country) {
//////////////////////////////////////
const request = new XMLHttpRequest();  // old school way
request.open('GET', `https://restcountries.com/v2/name/${country}`)
request.send();

request.addEventListener('load', function() {
    const [data] = JSON.parse(this.responseText);
    console.log(data);


const html = `
<article class="country">
<img class="country__img" src="${data.flag}" />
<div class="country__data">
  <h3 class="country__name">${data.name}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
  <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
  <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
</div>
</article>`;

countriesContainer.insertAdjacentHTML('beforeend', html);
countriesContainer.style.opacity = 1;
});
};
getCountryData('portugal');
getCountryData('usa');
getCountryData('germany'); */







/* 
const renderCountry = function(data, className = '') {
    
    const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
    </article>`;
    
    countriesContainer.insertAdjacentHTML('beforeend', html);


};

const getCountryAndNeighbor = function(country) {
    //////////////////////////////////////
    // AJAX call country 1
    const request = new XMLHttpRequest();  // old school way
    request.open('GET', `https://restcountries.com/v2/name/${country}`)
    request.send();
    
    request.addEventListener('load', function() {
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        /// Render country 1
        renderCountry(data);
    
        // Get neighbor country (2)
        const neighbor = data.borders?.[0];
        
        if (!neighbor) return;
        
        /// Render country 2
        const request2 = new XMLHttpRequest();  // old school way
        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`)
        request2.send();
        
        request2.addEventListener('load', function() {
            const data2 = JSON.parse(this.responseText);
            console.log(data2);
            renderCountry(data2, 'neighbour');

        })
    });
};
 
 
        // FETCH 
        const getJSON = function(url, errorMsg = `Something went wrong.`) {
            return fetch(url).then(response => {
                if(!response.ok) throw new Error(`${errorMsg} (${response.status})`);
                return response.json();
            });
        };
*/

/*
        const getCountryData = function (country) {
            getJSON(`https://restcountries.com/v2/name/${country}`, '-- Country not found. --')
            .then(data => {
              renderCountry(data[0]);
              const neighbor = data[0].borders?.[0];
              if (!neighbor) throw new Error('No neighbors found!');
              return getJSON(`https://restcountries.com/v2/alpha/${neighbor}`, '-- Border country not found!!! ---')
            })
            .then(data => renderCountry(data, 'neighbour'))
            .catch(err => {
                renderError(`[Oh snap! GENERIC ERROR: ${err.message}]`);
            })
            .finally(() => {
                countriesContainer.style.opacity = 1;
            })
            };
 
            btn.addEventListener('click', function() {
                getCountryData('australia');
            }); */
            //getCountryData('raven');

// CODING CHALLENGE #1:

const whereAmI = function(lat,lon) {
    return fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}`)
        .then((response) =>  response.json())
        .then((data) => console.log(`You are in ${data.address.city}, ${data.address.country}`))
        .catch(err => console.log(err))
};


console.log(`Final: `, whereAmI(52.508,13.381));

//https://geocode.xyz/${lat},${lng}?geoit=json
// https://geocode.xyz/52.508,13.381?geoit=json


        