
// the order list // 

const informations = [
    "Neuer WP mit E01 6 Wochen Frist",
    "Neuer WP mit ZD2 6 Wochen Frist",
    'neuer WP mit E03 zum laut 10 Werktagefrist.',
    'Neuer WP mit E03 fristgerecht laut 17 Werktage',
    'KD wurde wegen fehlender Daten angeschrieben',
    'KD wurde erneut angeschrieben, da keine Antwort',
    'KD wurde angeschrieben und Informiert', 
    'KD hat widerrufen/ gekündigt',
    'KD wurde nicht erreicht, daher Ereignis geschlossen.',
];

const contact = document.getElementById('contact');

// the input department // 
const nameInput = document.createElement('input');
nameInput.id = 'nameInput';
nameInput.placeholder = 'Your initials...'
nameInput.className = 'contactObject';

const button = document.createElement('button');
button.id = 'button'; 
button.className = 'contactObject';
button.innerText = 'SUBMIT';
button.addEventListener('click', run);

contact.appendChild(nameInput);
contact.appendChild(button);

// == END == input department // 

// the date department // 

const today = new Date();
function getFormattedDate(date) {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); 
    const yyyy = date.getFullYear();

    return dd + '.' + mm + '.' + yyyy;
}
const dateToday = getFormattedDate(today);

const sixWeeksAgo = new Date();
sixWeeksAgo.setDate(sixWeeksAgo.getDate() - (6 * 7));

const plusSeventeenDay = new Date();
plusSeventeenDay.setDate(plusSeventeenDay.getDate() + (17 * 1.4));

const plusTenDaysAgo = new Date();
plusTenDaysAgo.setDate(plusTenDaysAgo.getDate() + (10 * 1.4));

// == END == date department // 

// event list and old date department // 
const eventList = document.createElement('div');
eventList.id = 'eventList';

const oldDate = document.createElement('div'); 
oldDate.id = 'oldDate'; 
oldDateText = `
(Please confirm with the Fristlieste)
6 weeks: ${getFormattedDate(sixWeeksAgo)}`;
oldDate.innerText = oldDateText

console.log(getFormattedDate(plusSeventeenDay));
console.log(getFormattedDate(plusTenDaysAgo));

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
            navigator.clipboard.writeText(message)    
        })
        item.innerText = message;
		eventList.appendChild(item)
	}
	contact.appendChild(eventList)
    contact.appendChild(oldDate)
}

console.log(sixWeeksAgo)
console.log(getFormattedDate(plusSeventeenDay))
console.log(getFormattedDate(plusTenDaysAgo))
		
