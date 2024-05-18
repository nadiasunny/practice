import HungerButton from './hungry-btn';

const myApp = 'nads-app';
//component is func that returns UI element, can take in custom arg(prop)
function Header({title}) {
  console.log(title);
  return (<h1>{title}</h1>);
}

export default function LandingPage() {
  const foods = ['Banana', 'Yogurt', 'Pasta', 'Mac & Cheese'];
          
  return (
     <container>
        <Header title="ReactParty"/> 
          <ul>
            {foods.map((food) => (
              <li key={food}>{food}</li>
            ))}
          </ul>
          <HungerButton />
      </container>
          );
        }
     


// <!--  IMPERATIVE JS CODE
//         // // create a new paragraph element
//         // const paragraph = document.createElement('p');

//         // //create a text node for the p element
//         // const text = 'A, B, C!';
//         // const paraContent = document.createTextNode(text);

//         // //append text to paragraph
//         // paragraph.appendChild(paraContent);

//         // //place p elem inside div
//         // myApp.appendChild(paragraph) -->