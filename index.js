
// the order list // 

const informations = [
    "",
    "Neuer WP mit E01 6 Wochen Frist",
    "Neuer WP mit ZD2 6 Wochen Frist",
    'neuer WP mit E03 zum laut 10 Werktagefrist.',
    'Neuer WP mit E03 fristgerecht laut 17 Werktage',
    'KD wurde wegen fehlender Daten angeschrieben',
    'KD wurde erneut angeschrieben, da keine Antwort',
    'KD wurde angeschrieben und Informiert', 
    'KD hat widerrufen/ gekündigt',
    'KD wurde nicht erreicht, daher Ereignis geschlossen.',
    '7 abgelehnte WP, daher Ereignis geschlossen.',
    'KD wurde wegen fehlender Daten angeschrieben',
    'Zählerfoto, ÜP und Kündigungsbestätigung vom AV liegen im Archiv.'
];

// the input department // 
const contact = document.getElementById('contact');

const nameInput = document.createElement('input');
nameInput.id = 'nameInput';
nameInput.placeholder = 'Your initials...'
nameInput.className = 'contactObject';

const button = document.createElement('button');
button.id = 'button'; 
button.className = 'contactObject';
button.innerText = 'SUBMIT';
button.addEventListener('click', run);
contact.addEventListener('keydown', (event)=>{
  if (event.defaultPrevented){
    return;
  }
  switch (event.key){
    case "Enter":
      run();
      break;
      default:
        return;
  }
  event.preventDefault();
},
true,
)

contact.appendChild(nameInput);
contact.appendChild(button);

// == END == input department // 

// the date department // 

const today = new Date();
console.log(today)
function getFormattedDate(date) {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); 
    const yyyy = date.getFullYear();
    return dd + '.' + mm + '.' + yyyy;
}
const dateToday = getFormattedDate(today);
console.log(dateToday)

function getFormattedDateForAPI(date) {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); 
    const yyyy = date.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
}
const dateAPI = getFormattedDateForAPI(today);
console.log(dateAPI.toString())

const sixWeeksAgo = new Date();
sixWeeksAgo.setDate(sixWeeksAgo.getDate() - (6 * 7));

async function getOldTime(gap) {
  const today = new Date();

  function getFormattedDateForAPI(date) {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  }

  const dateAPI = getFormattedDateForAPI(today);

  const url = `https://business-days-work-days-calculator.p.rapidapi.com/api/v1/get_result?state=DE&work_days=${gap}&start_date=${dateAPI}&options=0`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3a36f5e67amshd9016e2e18744aap1f3a91jsn9aad55a7fab2',
      'X-RapidAPI-Host': 'business-days-work-days-calculator.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    function formatDate(inputDate) {
      const date = new Date(inputDate);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    }

    const formattedDate = formatDate(result); 
    console.log('Formatted Date:', formattedDate);

    return formattedDate;
  } catch (error) {
    console.error(error);
    return null; 
  }
}

async function main() {
  const formattedDateValue = await getOldTime(17);
  console.log('Formatted Date Value to use elsewhere:', formattedDateValue);
  //return formattedDateValue;
  const seventeenDays = await getOldTime(18)
  const tenDays = await getOldTime(11)

  const oldDate = document.createElement('div'); 
  oldDate.id = 'oldDate'; 
  oldDateText = `
  6 weeks: ${getFormattedDate(sixWeeksAgo)}
  +17 days: ${seventeenDays}
  +10 days: ${tenDays}
  `;

  oldDate.innerText = oldDateText
  contact.appendChild(oldDate);

}





// event list and old date department // 
const eventList = document.createElement('div');
eventList.id = 'eventList';


// == END == event list and old date department // 


function run() {

  contact.innerHTML = "";
  const workerName = nameInput.value;

	for( let i=0; i< informations.length; i++){

        const item = document.createElement('div');
        i%2 == 0 ? item.style.backgroundColor = 'lightGray' : item.style.backgroundColor = 'lightBlue';
        item.className = 'item';
        const message =  `${dateToday} ${workerName}: ${informations[i]}`;
        item.addEventListener('click', ()=>{
            navigator.clipboard.writeText(message);
        })
        item.innerText = message;
		eventList.appendChild(item);
	}
	contact.appendChild(eventList);
  main(); 

}

console.log(getFormattedDate(sixWeeksAgo));
