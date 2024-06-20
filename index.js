
// the input department // shortcutsTable
const contact = document.getElementById('contact');

const nameInput = document.createElement('input');
nameInput.id = 'nameInput';
nameInput.className = 'shadow';
nameInput.placeholder = 'Your initials...';
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
    //console.log('Formatted Date:', formattedDate);

    return formattedDate;
  } catch (error) {
    console.error(error);
    return null; 
  }
}
function run() {

  contact.innerHTML = "";
  
  declareSections();  
  setUpOldDaysList();
  //runShortcuts();
  createLinkList();
  //runBoredText();
  germanPhoneticAlphabet();
  //singHaiku();
  creatCopyPasteList();
  createMPCalculator();
}

function declareSections(){

  const MPCalculator = document.createElement('div');
  const placeHolderOldDates = document.createElement('div');
  // const placeholderBoredtext = document.createElement('div');
  const germanPhoneticAlphabet = document.createElement('div');
  const shortcutsTable = document.createElement('div');
  const eventList = document.createElement('div');
  const rightSideContact = document.createElement('div');
  const leftSideContact = document.createElement('div');

  MPCalculator.id = 'MPCalculator'; 
  eventList.id = 'eventList';
  shortcutsTable.id = 'shortcutsTable';
  rightSideContact.id = 'rightSideContact';
  leftSideContact.id = 'leftSideContact';
  placeHolderOldDates.id = 'oldDate';
  // placeholderBoredtext.id = 'placeholderBoredtext';
  germanPhoneticAlphabet.id = 'germanPhoneticAlphabet';

  rightSideContact.appendChild(germanPhoneticAlphabet);
  rightSideContact.appendChild(placeHolderOldDates);
  rightSideContact.appendChild(shortcutsTable);                                              
  rightSideContact.appendChild(MPCalculator);                                              

  leftSideContact.appendChild(eventList);

  contact.appendChild(leftSideContact);
  contact.appendChild(rightSideContact);
  // contact.appendChild(placeholderBoredtext);

}
function createMPCalculator(){

  const MPCalculator = document.getElementById('MPCalculator');
  MPCalculator.innerHTML = '';

  const warnningLabel = document.createElement('div');
  const inputElements = document.createElement('div'); 
  const calculate = document.createElement('div'); 

  const endPrice = document.createElement('input'); 
  const basePrice = document.createElement('input'); 
  const workPrice = document.createElement('input');

  warnningLabel.id = 'warnningLabel';
  warnningLabel.innerText = 'Achtung: Diese Werte sind nur für Fixpreis-Tarifkunden geeignet';
  inputElements.id = 'inputElements';
  calculate.id = 'calculate';
  calculate.innerText = 'Calculate';
  calculate.addEventListener('click', ()=>{
    runMPCalculation();
  })

 //MPCalculator.addEventListener()
  endPrice.className = 'MPCalculatorInput';
  endPrice.id = 'endPrice';
  basePrice.className = 'MPCalculatorInput';
  basePrice.id = 'basePrice';
  workPrice.className = 'MPCalculatorInput';
  workPrice.id = 'workPrice'; 

  endPrice.placeholder = 'Desired monthly price in €';
  basePrice.placeholder = 'Base Price in €'; 
  workPrice.placeholder = 'Work Prices in ¢';

  inputElements.appendChild(endPrice); 
  inputElements.appendChild(basePrice); 
  inputElements.appendChild(workPrice); 

  MPCalculator.appendChild(warnningLabel);
  MPCalculator.appendChild(inputElements);
  MPCalculator.appendChild(calculate);
}

function runMPCalculation(){

  const mwst = 1.19; 

  const inputElements = document.getElementById('inputElements');
  const calculate = document.getElementById('calculate');

  const endPrice = document.getElementById('endPrice'); 
  const basePrice = document.getElementById('basePrice');
  const workPrice = document.getElementById('workPrice');

  const valueWork = parseGermanNumber(workPrice.value);
  const valueBase = parseGermanNumber(basePrice.value);
  const valueEnd = parseGermanNumber(endPrice.value.replace(/[^0-9]/g, '')); 

  function parseGermanNumber(value) {
    let sanitizedString = value.replace(/[^0-9,\.]/g, '');
    sanitizedString = sanitizedString.replace(/\./g, '');
    sanitizedString = sanitizedString.replace(',', '.');
    return parseFloat(sanitizedString);
  }

  const result = ((valueEnd - (valueBase * mwst))/((valueWork / 100) * mwst)) * 12
  //work-price+base-price
  inputElements.innerHTML = `Annual Consumption: ${Math.round(result)} kWh`;
  calculate.innerText = 'Run Again';
  calculate.addEventListener('click', ()=>{
    createMPCalculator()
  })
  console.log(result);

}

async function setUpOldDaysList() {
  const sixWeeksAgo = new Date();
  sixWeeksAgo.setDate(sixWeeksAgo.getDate() - (6 * 7));

  const formattedDateValue = await getOldTime(17);
  const seventeenDays = await getOldTime(18);
  const tenDays = await getOldTime(11);

  const oldDate = document.getElementById('oldDate'); 

  const dateUnitSixWeeks = document.createElement('div');
  dateUnitSixWeeks.className = 'dateUnit';
  dateUnitSixWeeks.innerText = `6 weeks: ${getFormattedDate(sixWeeksAgo)}`
  dateUnitSixWeeks.addEventListener('click', ()=>{navigator.clipboard.writeText(getFormattedDate(sixWeeksAgo));})

  const plusSeventeen = document.createElement('div');
  plusSeventeen.className = 'dateUnit';
  plusSeventeen.innerText = `+17 days: ${seventeenDays}`
  plusSeventeen.addEventListener('click', ()=>{navigator.clipboard.writeText(seventeenDays);})

  const plusTen = document.createElement('div');
  plusTen.className = 'dateUnit';
  plusTen.innerText = `+10 days: ${tenDays}`
  plusTen.addEventListener('click', ()=>{navigator.clipboard.writeText(tenDays);})

  oldDate.appendChild(dateUnitSixWeeks)
  oldDate.appendChild(plusSeventeen)
  oldDate.appendChild(plusTen)

  const rightSideContact = document.getElementById('rightSideContact');
  rightSideContact.appendChild(oldDate);
}

function germanPhoneticAlphabet(){
  const germanPhoneticAlphabet = document.getElementById('germanPhoneticAlphabet');
  germanPhoneticAlphabet.innerText = 'German Phonetic';

  germanPhoneticAlphabet.addEventListener('mouseover', ()=>{
  const phoneticList = document.createElement('div');
  phoneticList.id = 'phoneticList';
  const dFA = document.createElement('img');
  dFA.id = 'dFA';
  dFA.src = './favicon/DFA2.png?v=1';
  phoneticList.appendChild(dFA);
  contact.appendChild(phoneticList);
  })
  germanPhoneticAlphabet.addEventListener('mouseout', ()=>{
  contact.removeChild(phoneticList);
})
}

function creatCopyPasteList(){

  const eventList = document.getElementById('eventList');
  const workerName = nameInput.value.toUpperCase();

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
}

function runShortcuts() {

  console.log('shortcut level 1')

  const rightSideContact = document.getElementById('rightSideContact'); 

  const s     = document.createElement('div');
  s .id = 's';

  function createShortcutButton(name, language, phone){
    const shortcutButton = document.createElement('div');
    shortcutButton.className = 'shortcutButton';
    shortcutButton.innerText = name;
    shortcutButton.language = language;
    shortcutButton.phone = phone;
    s        .appendChild(shortcutButton);

    const date = new Date();
    const dayToday = date.getDay();
    //console.log(dayToday)

    const openning = `
    Hallo {%customer.firstName,fallback=%},
    Vielen Dank für deine Anfrage.
    Bitte entschuldige die verspätete Rückmeldung, wir haben derzeit ein erhöhtes Mailaufkommen.`

    const closingMonday = `
    Ich wünsche dir eine schöne Woche
    `

    const closingWE = `
    Ich wünsche dir ein schönes Wochenende
    `

    const closingNormalDay = `
    Ich wünsche dir einen schönen Tag
    `

    const telefonNote = `
    Hallo {%customer.firstName,fallback=%},

    Vielen Dank für das nette Gespräch
    `

    // English // 



    const closingMondayEnglish = `
    I wish you a great week
    `

    const closingWEEnglish = `
    I wish you a great weekend
    `

    const closingNormalDayEnglish = `
    I wish you a great day
    `

    const telefonNoteEnglish = `
      Hello {%customer.firstName,fallback=%},

      thank you for the nice chat.
      `

    const openningEnglish = `
    Hello {%customer.firstName,fallback=%},
    thank you for your message.
    Please forgive our late response, we are dealing with a heavy email loud at the moment`

    shortcutButton.copiText = 
    `
    ${shortcutButton.language == 'en' && !shortcutButton.phone ? openningEnglish 
    : shortcutButton.language == 'de' && !shortcutButton.phone ? openning
    : shortcutButton.language == 'en' && shortcutButton.phone ? telefonNoteEnglish
    : shortcutButton.language == 'de' && shortcutButton.phone ? telefonNote 
    : 'error: no opening found'}

    ${shortcutButton.language == 'en' && dayToday == 1 ? closingMondayEnglish  
    : shortcutButton.language == 'en' && dayToday == 5 ? closingWEEnglish
    : shortcutButton.language == 'en' ? closingNormalDayEnglish
    : shortcutButton.language == 'de' && dayToday == 1 ? closingMonday
    : shortcutButton.language == 'de' && dayToday == 5 ? closingWE
    : shortcutButton.language == 'de' ? closingNormalDay
    : 'error: no closing tag found'} 
    `

    shortcutButton.addEventListener('click', ()=>{
      navigator.clipboard.writeText(shortcutButton.copiText);
    })

  }

  const openningEnglish = createShortcutButton('Opening English', 'en', false);
  const openningDeutsch = createShortcutButton('Opening German', 'de', false);
  const openningEnglishPhone = createShortcutButton('English-Phone', 'en', true);
  const openningDeutschPhone = createShortcutButton('German-Phone', 'de', true);

  rightSideContact.appendChild(s  );
}

function createLinkList() {

  const shortcutsTable = document.getElementById('shortcutsTable');
  
  buildLink();
  function buildLink() {
    const linkList = [
      ['https://cockpit.rabot-charge.de/search', 'Cockpit'],
      ['https://secure.helpscout.net/', 'Helpscout'],
      ['https://www.rabot-charge.de/?utm_source=google&utm_medium=cpc&utm_campaign=DE_ACT_Search_Brand&gad_source=1&gclid=EAIaIQobChMItq-WzvHIggMV1BGLCh14_A_LEAAYASAAEgLQ6PD_BwE', 'Rabot-Charge Homepage'],
      ['https://www.check24.de/strom-gas/rabot-charge/', 'Check24 Rabot-Charge'],
      ['https://www.rabot-charge.de/waermepumpentarif/', 'waermepumpentarif'],
      ['https://www.iban-rechner.de/iban_validieren.html', 'IBAN Calculator'],
      ['https://bdew-codes.de/Codenumbers/BDEWCodes/CodeOverview', 'BDEW-Codes'],
      ['https://www.bundesnetzagentur.de/DE/Home/home_node.html', 'Bundesnetzagentur']
    ];

    for(let i=0; i<linkList.length; i++){
      const link = document.createElement('div');
      link.className = 'link-element';
      const linkName = linkList[i][1];
      const linkAdrress = linkList[i][0];
      link.innerText = linkName;
      link.addEventListener('click', ()=>{
        window.open(linkAdrress, '_blank');
      })
      shortcutsTable.appendChild(link);
    }
  }
}

async function runBoredText(){

  const placeholderBoredtext = document.getElementById('placeholderBoredtext');

  fetch('http://www.boredapi.com/api/activity/')
  .then(response => {
    if (!response.ok) {
      throw new Error('');
    }
    return response.json();
  })
  .then(data => {
    const activity = data.activity;
    placeholderBoredtext.innerText= data.activity;
    console.log(activity); 
  })
  .catch(error => {
    console.error('Things go bad!:', error);
  });
};
async function singHaiku(){
  //Haiku

  const url = 'https://claude-3-haiku-ai.p.rapidapi.com/';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '3a36f5e67amshd9016e2e18744aap1f3a91jsn9aad55a7fab2',
      'X-RapidAPI-Host': 'claude-3-haiku-ai.p.rapidapi.com'
    },
    body: JSON.stringify({
      model: 'claude-3-haiku-20240307',
      messages: [
        {
          role: 'user',
          content: 'Hello'
        }
      ]
    })
  };

  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch haiku');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
}

// fizzbuzz()
function fizzbuzz(){
  const resoult = [];
  const min = 1;
  const max = 100;
  for(let i=min; i<max; i++){
    i%3 == 0 && i%5 == 0 ? resoult.push('FizzBuzz') : i%3 == 0 ? resoult.push('Fizz') : i%5 == 0 ? resoult.push('Buzz') : resoult.push(i)
  }
  console.log(...resoult);
}