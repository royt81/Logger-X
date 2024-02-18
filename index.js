
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
    'KD wurde wegen fehlender Daten angeschrieben',
];

const contact = document.getElementById('contact');

// const button = document.getElementById("button");
// const nameInput = document.getElementById('nameInput');
// nameInput.id = 'nameInput'

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

const eventList = document.createElement('div');
eventList.id = 'eventList';

function getFormattedDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); 
    const yyyy = today.getFullYear();

    return dd + '.' + mm + '.' + yyyy;
}
const formattedDate = getFormattedDate();

function run() {

contact.innerHTML = "";
    const workerName = nameInput.value;

	for( let i=0; i< informations.length; i++){

        const item = document.createElement('div');
        i%2 == 0 ? item.style.backgroundColor = 'lightGray' : item.style.backgroundColor = 'lightBlue';
        item.className = 'item';
        const message =  `${formattedDate} ${workerName}: ${informations[i]}`;
        item.addEventListener('click', ()=>{
            navigator.clipboard.writeText(message)    
        })

        item.innerText = message;
		eventList.appendChild(item)

	}
	contact.appendChild(eventList)
}


		