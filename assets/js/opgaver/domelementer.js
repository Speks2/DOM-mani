/* DOMcelementer */



/* Opgave 1.1
Du skal finde elementet med id="redFigure" og console logge det.
Du skal finde elementet med id="yellowFigure" og console logge det. 
*/

// din kode her
let = document.getElementById('redFigure'); {
    console.log('red figure');
   
}
let = document.getElementById('yellowFigure'); {
    console.log('yellow figure');
   
}

/* opgave 1.2
Du skal ændre baggrundsfarve på de to elementer du har fundet i opgave 1.1
farven på elementerne skal være blå. brug evt. elelement.style.backgroundColor
*/

// din kode her
let = document.getElementById('redFigure'); {
    console.log('red figure');
    let elements = document.getElementsByClassName('myFigure'); 
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'blue'; 
      }  
}
let = document.getElementById('yellowFigure'); {
    console.log('yellow figure');
    let elements = document.getElementsByClassName('myFigure'); 
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = 'blue'; 
    } 
   
}

/* opgave 2.1
Du skal oprette følgende HTML elementer i Elementet med id opgaveTwo.
- et h2 med teksten: Opgave 2.1 løsning
- et p med teksten: Jeg har løst opgave 2.1
*/


// din kode her
let element = document.getElementById('domeelementer.html'); {
    let elements = document.getElementsByClassName('h2'); 
    let = document.getElementsByClassName('p'); 
    console.log('Jeg har løst opgave 2.1?');
}


// opgave 3 liveHTML lists
/* opgave 3.1
Du skal finde alle elementer med klassen purpleFigures og console logge resultatet
*/

// din kode her
let elements = document.getElementsByClassName('purpleFigures'); {
    elementsArray.forEach.element('purpleFigures'); {
         console.log(element);
    } 
}

/* opgave 3.2
Du skal finde alle elementer med klassen purpleFigures og bruge array.from() til at konvertere listen
til et array hvor du kan bruge map funktionen til at ændre baggrundsfarven til rød.
array.from beskrivelse HER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/

// din kode her
let = document.getElementsByClassName('purpleFigures'); {
    let elementsArray = Array.from(elements);
   
    elementsArray.map(element => {
  element.style.backgroundColor = 'red';
});
}

/* opgave 3.3
Brug din array til at ændre h3 elementets, inden i purpleFigures, tekst til RED. du kan bruge
myElement.children[0].innerHTML til at ændre 1. child elements inner html.
*/


// din kode her
let = document.getElementsByClassName('purpleFigures'); {
    let elementsArray = Array.from(elements);
    
}

elementsArray.forEach(element => {
  let h3Element = element.children[1]; 
  if (h3Element && h3Element.tagName === 'h3') { 
    h3Element.innerHTML = 'RED'; 
  }
});



/* opgave 4
opret DOM elementer i elementet med id opgaveFour, udfra data objectet myData.
Du skal vælge element tags der giver mening i forbindelse med HTML5 semantisk tagging.
Fyld dine elementers innerHtML eller andre atributter med dine data
*/

const myData = {
    name: 'tiger',
    image: 'assets/img/standard_tiger.jpg',
    description: 'En tiger er et stort, katteagtig rovdyr med orange og sort striber i pelsen og skarpe tænder og kløer.'
};


// din kode her
function createElementsFromData(myData) {
    const container = document.getElementById('opgaveFour');
    const article = document.createElement('article');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h1.textContent = data.title;
    p.textContent = data.description;

    article.appendChild(h1);
    article.appendChild(p);
    container.appendChild(article);
  }
  createElementsFromData(myData);
  

    
  
  



