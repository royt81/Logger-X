
// the input department // shortcutsTable//dateToday
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
//console.log(today)

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
  createLinkList();
  //runBoredText();
  germanPhoneticAlphabet();
  //singHaiku();
  creatCopyPasteList();
  createMPCalculator();
  //createTextBuilder();
}

function declareSections(){

  const textBuilder = document.createElement('div');
  const MPCalculator = document.createElement('div');
  const placeHolderOldDates = document.createElement('div');
  // const placeholderBoredtext = document.createElement('div');
  const germanPhoneticAlphabet = document.createElement('div');
  const shortcutsTable = document.createElement('div');
  const eventList = document.createElement('div');
  const rightSideContact = document.createElement('div');
  const leftSideContact = document.createElement('div');

  textBuilder.id = 'textBuilder';
  MPCalculator.id = 'MPCalculator'; 
  eventList.id = 'eventList';
  shortcutsTable.id = 'shortcutsTable';
  rightSideContact.id = 'rightSideContact';
  leftSideContact.id = 'leftSideContact';
  placeHolderOldDates.id = 'oldDate';
  germanPhoneticAlphabet.id = 'germanPhoneticAlphabet';

  rightSideContact.appendChild(germanPhoneticAlphabet);
  rightSideContact.appendChild(placeHolderOldDates);
  rightSideContact.appendChild(shortcutsTable);                                              
  rightSideContact.appendChild(MPCalculator);                                              
  rightSideContact.appendChild(textBuilder);                                              

  leftSideContact.appendChild(eventList);

  contact.appendChild(leftSideContact);
  contact.appendChild(rightSideContact);
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
  warnningLabel.innerText = 'Achtung: Diese Werte sind nur für Fixpreis-Kunden geeignet!';
  inputElements.id = 'inputElements';
  calculate.id = 'calculate';
  calculate.innerText = 'Calculate';
  calculate.addEventListener('click', ()=>{
    runMPCalculation();
  })

  endPrice.className = 'MPCalculatorInput';
  endPrice.id = 'endPrice';
  basePrice.className = 'MPCalculatorInput';
  basePrice.id = 'basePrice';
  workPrice.className = 'MPCalculatorInput';
  workPrice.id = 'workPrice'; 

  endPrice.placeholder = 'MP 100 €';
  basePrice.placeholder = 'GP 8,45 €'; 
  workPrice.placeholder = 'AP 22,74 ¢';

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

  if(workPrice.value == '' || valueBase.value == '' || valueEnd.value == ''){
    
    const calculate = document.getElementById('calculate');
    const inputElements = document.getElementById('inputElements');
    inputElements.innerText = 'Please fill all the fields'
    calculate.innerText = 'Try Again';
    calculate.removeEventListener('click', ()=>{
    runMPCalculation();
    })
    calculate.addEventListener('click', ()=>{
    createMPCalculator()
    })
    return;
  }
  function parseGermanNumber(value) {
    let sanitizedString = value.replace(/[^0-9,\.]/g, '');
    sanitizedString = sanitizedString.replace(/\./g, '');
    sanitizedString = sanitizedString.replace(',', '.');
    return parseFloat(sanitizedString);
  }

  const result = ((valueEnd - (valueBase * mwst))/((valueWork / 100) * mwst)) * 12
  inputElements.innerHTML = `Annual Consumption: ${Math.round(result)} kWh`;
  calculate.innerText = 'Run Again';
  calculate.removeEventListener('click', ()=>{
    runMPCalculation();
  })
  calculate.addEventListener('click', ()=>{
    createMPCalculator()
  })
  console.log(`((${valueEnd} - (${valueBase} * 1,19))/((${valueWork}/100) * 1,19))* 12 = ${result}`);

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
    const message =  `${dateToday} ${workerName}: ${informations[i][1]}`;
    const name = `${dateToday} ${workerName}: ${informations[i][0]}`;
    item.addEventListener('click', ()=>{
      navigator.clipboard.writeText(message);
    })
    item.innerText = name;
    eventList.appendChild(item);

  }
  const salesbutton = document.createElement('div');
    salesbutton.classList.add('item');
    salesbutton.id = 'salesbutton';
    salesbutton.innerText = 'SALES';

    salesbutton.addEventListener('click', async () => {
      const blob = new Blob([salesText], { type: 'text/html' });
      const clipboardItem = new ClipboardItem({ 'text/html': blob });

      try {
        await navigator.clipboard.write([clipboardItem]);
        console.log('Content copied to clipboard');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    });

    eventList.appendChild(salesbutton);
}

function createLinkList() {

  const shortcutsTable = document.getElementById('shortcutsTable');
  
 // buildLink();
 // function buildLink() {
    
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
  //}
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
}

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

function createTextBuilder(){

  const textBuilder = document.getElementById('textBuilder');
  textBuilder.classList.add('textBuilder'); 
  textBuilder.innerText = greatingTextBuilder;

  textBuilder.addEventListener('click', ()=>{
    textBuilder.innerHTML = '';
    runTextBuilder();
  })
}
function runTextBuilder(){
  
  const textBuilder = document.getElementById('textBuilder');
  textBuilder.classList.add('textBuilderExpend')
  createTextBuilderSections()
}
function createTextBuilderSections(){
  const textBuilder = document.getElementById('textBuilder');

  const closeButton = makeTBSection('closeButton');
  closeButton.addEventListener('click',(event)=>{
    event.stopPropagation();
    shotdownTB();
  })

  const isEnglish = makeTBSection('to-English');
  isEnglish.addEventListener('click',()=>{
    isEnglish.innerHTML = '';
    runEnglishSection();
  })

  const sLSection = makeTBSection('second-line');
  sLSection.addEventListener('mouseenter',()=>{
    sLSection.innerHTML = '';
    runSecondLineSection();
  })

  const content = makeTBSection('content');
  content.addEventListener('mouseenter',()=>{
    content.innerHTML = '';
    runContentSection();
  })

  content.addEventListener('mouseleave',()=>{
    content.classList.remove('contentSectionExpend')
    content.innerHTML = '';
    content.innerText = 'content'
  })
  
  const addings = makeTBSection('addings');
  addings.addEventListener('mouseenter',()=>{
    addings.innerHTML = '';
    runAddingsSection();
  })
  addings.addEventListener('mouseleave', ()=>{
    addings.classList.remove('addingSectionExpend');
  })

  const runButton = makeTBSection('run');
  runButton.addEventListener('click',(event)=>{
    event.stopPropagation();
    runTBButton();
  })

  const templates = makeTBSection('templates');
  templates.addEventListener('mouseenter',()=>{
    templates.innerHTML = '';
    runTemplatesSection();
  })
  templates.addEventListener('mouseleave', ()=>{
    templates.classList.remove('templatesSectionExpent')
  })

  textBuilder.appendChild(closeButton);
  textBuilder.appendChild(isEnglish);
  textBuilder.appendChild(sLSection);
  textBuilder.appendChild(content);
  //textBuilder.appendChild(addings);
  textBuilder.appendChild(runButton);
  textBuilder.appendChild(templates);
}

function makeTBSection(name){
  const section = document.createElement('div');
  section.classList.add('textBuilderSection');
  section.id = name;
  section.innerText = name
  section.addEventListener('mouseleave', ()=>{
    section.innerHTML = name;
  })
  return section;
}
function shotdownTB(){
  const textBuilder = document.getElementById('textBuilder');
  //textBuilder.style.background = 'pink';
  textBuilder.innerHTML = greatingTextBuilder; 
  textBuilder.classList.remove('textBuilderExpend');
  //textBuilder.className = 'textBuilder';
  //console.log('TB is closed') 
}

function runEnglishSection(){
  const section = document.getElementById('to-English');
}

function runSecondLineSection(){
  const section = document.getElementById('second-line');

  const phone = runSecondLineSubSection('phone');
  const mail = runSecondLineSubSection('mail');
  const fachabt = runSecondLineSubSection('FA');

  section.appendChild(phone);
  section.appendChild(mail);
  section.appendChild(fachabt);
}
function runSecondLineSubSection(name){
  const subSection = document.createElement('div');
  subSection.classList.add('secondLineSubSection');
  subSection.innerText = name;
  return subSection
}

function runContentSection(){

  const section = document.getElementById('content');
  section.classList.add('contentSectionExpend');

  for( let i=0; i<contentSectionList.length; i++){

    const cSSID = `cSSID${i}`;

    const contentSectionSubSection = document.createElement('div');
    contentSectionSubSection.id = cSSID;
    contentSectionSubSection.classList.add('contentSectionSubSection');
    contentSectionSubSection.innerText = contentSectionList[i][0];
    contentSectionSubSection.addEventListener('mouseenter', ()=>{
      runCSSExpendList(cSSID, i);
    })
    contentSectionSubSection.addEventListener('mouseleave', ()=>{
      contentSectionSubSection.classList.remove('cSSSExpend');
      contentSectionSubSection.innerHTML = contentSectionList[i][0];
      contentSectionSubSection.style.height = '90%';
      contentSectionSubSection.style.margin = '0'; 
    })

    section.appendChild(contentSectionSubSection);
  }
}
function runCSSExpendList(cSSID, listID){
  const subSection = document.getElementById(cSSID);
  subSection.innerHTML = ''; 
  subSection.classList.add('cSSSExpend');
  subSection.style.height =`${(contentSectionList[listID][1].length * 5)}vh`;
  subSection.style.margin =`${(contentSectionList[listID][1].length * 5)/2}vh 0 0 0`;

  for( let i=0; i<contentSectionList[listID][1].length; i++){

    const subSectionItem = document.createElement('div');
    subSectionItem.classList.add('CSSItem')
    subSectionItem.innerText = contentSectionList[listID][1][i][0]

    subSection.appendChild(subSectionItem);
  }
}

function runAddingsSection(){
  const section = document.getElementById('addings');
  section.classList.add('addingSectionExpend');
}//disabled

function runTBButton(){
  const textBuilder = document.getElementById('textBuilder');
  textBuilder.classList.remove('textBuilderExpend');
  textBuilder.innerHTML = '';

  shotdownTB()
  console.log('run button')
}

function runTemplatesSection(){
  const section = document.getElementById('templates');
  section.classList.add('templatesSectionExpent')

  for(let i=0; i<templatesList.length; i++){
    const temlateSectionID = `tempID${i}`;

    const tempSSection = document.createElement('div');
    tempSSection.id = temlateSectionID;
    tempSSection.classList.add('tempSSection');
    tempSSection.innerText = contentSectionList[i][0];
    tempSSection.addEventListener('mouseenter', ()=>{
      runTemplateExpendList(temlateSectionID, i);
    })
    tempSSection.addEventListener('mouseleave', ()=>{
      tempSSection.classList.remove('cSSSExpend');
      tempSSection.innerHTML = contentSectionList[i][0];
      tempSSection.style.height = '90%';
      tempSSection.style.margin = '0'; 
    })

    section.appendChild(tempSSection);
  }
}
function runTemplateExpendList(temlateSectionID, listID){
  const subSection = document.getElementById(temlateSectionID);
  subSection.innerHTML = ''; 
  subSection.classList.add('templateExpend');
  subSection.style.height =`${(contentSectionList[listID][1].length * 5)}vh`;
  subSection.style.margin =`0 0 ${(contentSectionList[listID][1].length * 5)/2}vh 0`;

  for( let i=0; i<contentSectionList[listID][1].length; i++){

    const subSectionItem = document.createElement('div');
    subSectionItem.classList.add('CSSItem')
    subSectionItem.innerText = contentSectionList[listID][1][i][0]

    subSection.appendChild(subSectionItem);
  }
}

console.log(dayToday)

//const dailyEnding = 

///


