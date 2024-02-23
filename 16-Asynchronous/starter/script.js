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
            }); 
            //getCountryData('raven');

// CODING CHALLENGE #1:

/* const whereAmI = function(lat,lon) {
    return fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}`)
        .then(function(response) { 
            if(response.status === 403) throw new Error('[[ 403 ERROR ]]');
            return response.json()
        })
        .then(function(data) {
        console.log(`You are in ${data.address.city}, ${data.address.country}`)
        return getCountryData(data.address.country);
        })   
        .catch(err => console.log(`ERR: `, err))
};


console.log(`Final: `, whereAmI(-33.933, 18.474)); */

//https://geocode.xyz/${lat},${lng}?geoit=json
// https://geocode.xyz/52.508,13.381?geoit=json

/* console.log("Test start");
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log('resp1: ', res));
console.log('Test end');

Promise.resolve('Resolved promise 2').then(res=>{
    for (let i=0; i< 10000000000; i++) {};
    console.log('resp2: ', res);
}); */
/* 
const lotteryPromise = new Promise(function(resolve, reject) {
    console.log(`Lottery draw is happening...`);
    setTimeout(function(){
        let z = Math.random();
        if(z >= 0.5) {
            resolve("You win!!!");  // Sets promise to fullfilled status
            // The result of the promise gets passed into the resolve() function so it can be passed to 
            // the then handler.
        } else {
            reject('You lose your money. :( ');
        }
    },2000)
}); */

//lotteryPromise.then(result => console.log(result)).catch(err=> console.error(err));

/* lotteryPromise.then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.error(err);
  }); */

/// Promisifying SetTimeout
/* const wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

wait(5)
    .then(() => {
    console.log(`I waited for 5 seconds`);
    return wait(2);
  })
  .then(() => console.log('I waited for 2 seconds.'))
 */

//Promise.resolve('ABC').then(x=>console.log(x));
//Promise.reject(new Error('Problem!')).catch(x=>console.error(x));

/*const aPromise = new Promise(function(resolve, reject) {
        let z = Math.random();
        console.log(z);
        if(z >= 0.5) {
            resolve("You win!!!"); 
        } else {
            reject(new Error("You lose your money. :( "));
        }
});*/

//console.log(aPromise.then((e)=> console.log(e)).catch(err=> console.error(err)));
/* console.log(
  aPromise
    .then(function(e) {
      console.log(e);
    })
    .catch(function(err) {
      console.error(err);
    })
); */


/// Promisifying SetTimeout
/* const request = fetch('https://restcountries.com/v2/alpha/esp');
console.log(request);

const getCountryData = function(country) {
    fetch(`https://restcountries.com/v2/alpha/${country}`)
    .then(function(response){
        console.log(response);
    })
    .catch((err)=> console.log("ERR: ", err));
};

getCountryData('esp'); */

/* const lotteryPromise = new Promise(function (resolve, reject) {
    fetch(`https://restcountries.com/v2/name/esp`)
    .then(function(response) {
        //console.log(response);
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch( (error) => {
         console.log("ERROR!!! - ", error);
    });
});

console.log(lotteryPromise); */

/*   .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });
 */


/* const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.jsonn",
  ).then((response) => {
    console.log("!response= ", response);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data[0].name);
    })
    .catch((error) => {
      console.error(`Could not get products: ${error}`);
    }); */

/*     const fetchPromise1 = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
      );
      const fetchPromise2 = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
      );
      const fetchPromise3 = fetch(
        "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
      );
      
      Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
        .then((responses) => {
          for (const response of responses) {
            console.log(`${response.url}: ${response.status}`);
          }
        })
        .catch((error) => {
          console.error(`Failed to fetch: ${error}`);
        }); */

        
/* const lotteryPromise = new Promise(function(resolve, reject) {
    console.log("Lottery draw is happening.");
    setTimeout(function() {
        if(Math.random() >= 0.5) {
            resolve('You win!');
        }
        else {
            reject(new Error('You lost your money.'));
        }
    }, 2000);
});

lotteryPromise.then(res=>console.log(res)).catch(err=>console.error(err)); */

/* lotteryPromise.then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.error(err);
  });  */

/// Promisifying SetTimeout
 /* const wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

wait(5)
  .then(() => {
    console.log(`I waited for 5 seconds`);
    return wait(2);
  })
  .then(() => {
    console.log(`I waited for 2 seconds`);
    return wait(2);
  })
  .then(() => {
    console.log(`I waited for 2 seconds`);
    return wait(2);
  })
  .then(() => {
    console.log(`I waited for 2 seconds`);
  });

  Promise.resolve('abc').then(x => console.log(x));
  Promise.reject(new Error('Problem!')).catch(x => console.error(x));
  console.error(x); */

/* navigator.geolocation.getCurrentPosition(
  position => console.log(position), 
  err => console.error(err)
  );
console.log('Getting position'); */

let getPosition = function() {
  return new Promise(function(resolve,reject) {
/*     navigator.geolocation.getCurrentPosition(
      position => resolve(position), 
      err => reject(err)
      ); */
      navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

//getPosition().then(pos => console.log(pos));

const whereAmI = function() {
  getPosition()
  .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
console.log(lat, long);
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
  .then(res => {
    if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);

     return res.json();
  })
  .then(data => {
    console.log(data);
    console.log(`You are in ${data.city}, ${data.country}`);

    return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
  })
  .then(res => {
    if (!res.ok) throw new Error(`Country not found (${res.status})`);

    return res.json();
  })
  .then(data => renderCountry(data[0]))
  .catch(err => console.error(`${err.message}`));
};

btn.addEventListener('click', whereAmI);

