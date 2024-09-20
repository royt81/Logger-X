

//Logger




// the order list // 

const informations = [
    ['',""],
    ['WP E01',"Neuer WP mit E01, fristgerecht, bis zu 6 Wochen rückwirkend."],
    ['WP E03 10 WT',"Neuer WP mit E03 fristgerecht laut 10 Werktage."],
    ['WP E03 17 WT',"Neuer WP mit E03 fristgerecht laut 17 Werktage."],
    ['WP E03 10/17 WT (Vattenfall)',"neuer WP mit E03, da Vattenfall laut 10/ 17 Werktagefrist."],
    ['WP ZD2',"Neuer WP mit ZD2, fristgerecht, bis zu 6 Wochen rückwirkend."],
    ['KD angeschrieben',"KD wurde wegen fehlender Daten angeschrieben."],
    ['KD informiert',"KD wurde angeschrieben und Informiert."],
    ['KD erneut angeschrieben',"KD wurde erneut angeschrieben, da keine Antwort."],
    ['KD bereits in delivery',"KD ist bereits in delivery."],
    ['KD widerrufen/ gekündigt',"KD hat selbst widerrufen/ gekündigt."],
    ['KD nicht erreicht - Ereignis erledigt',"Kunde wurde nicht erreicht, daher Ereignis auf erledigt gesetzt und Ereignis zum Versand des Ablehnungsschreibens angelegt."],
    ['an Invoice',"wurde ans Invoice zur Korrektur weitergeleitet."],
    ['Zählerverwechslung',"Hier liegt eine Zählerverwechslung vor. KD ist seit dem XX.XX.XXXX in delivery. Daher E01 fristgerecht, bis zu 6 Wochen rückwirkend."],
    ['erfolgloser WP, KD nicht erreicht',"erfolgloser Wechsel, KD wurde nicht erreicht."],
    ['6 abgelehnte WPs',"erfolgloser Wechsel, 6 abgelehnte WPs."],
    ['Sophia über SLP zu RLM informiert',"Sophia über SLP zu RLM Kunde per Mail informiert."],
    ['KD teilt ZS mit',`KD teilt ZS mit. 
ZN: 
Datum: 
ZS:`],
];

const linkList = [
    ['https://cockpit.rabot-charge.de/search', 'Cockpit'],
    ['https://secure.helpscout.net/', 'Helpscout'],
    ['https://www.rabot-charge.de/?utm_source=google&utm_medium=cpc&utm_campaign=DE_ACT_Search_Brand&gad_source=1&gclid=EAIaIQobChMItq-WzvHIggMV1BGLCh14_A_LEAAYASAAEgLQ6PD_BwE', 'Rabot-Charge Homepage'],
    ['https://www.check24.de/strom-gas/rabot-charge/', 'Check24 Rabot-Charge'],
    ['https://www.rabot-charge.de/waermepumpentarif/', 'Wärmepumpentarif'],
    ['https://www.iban-rechner.de/iban_validieren.html', 'IBAN Calculator'],
    ['https://bdew-codes.de/Codenumbers/BDEWCodes/CodeOverview', 'BDEW-Codes'],
    ['https://www.bundesnetzagentur.de/DE/Home/home_node.html', 'Bundesnetzagentur']
  ];

// const openning = `
// Hallo {%customer.firstName,fallback=%},
// Vielen Dank für deine Anfrage.
// Bitte entschuldige die verspätete Rückmeldung, wir haben derzeit ein erhöhtes Mailaufkommen.`

// const closingMonday = `
// Ich wünsche dir eine schöne Woche
// `

// const closingWE = `
// Ich wünsche dir ein schönes Wochenende
// `

// const closingNormalDay = `
// Ich wünsche dir einen schönen Tag
// `

// const telefonNote = `
// Hallo {%customer.firstName,fallback=%},

// Vielen Dank für das nette Gespräch
// `

// // English // 



// const closingMondayEnglish = `
// I wish you a great week
// `

// const closingWEEnglish = `
// I wish you a great weekend
// `

// const closingNormalDayEnglish = `
// I wish you a great day
// `

// const telefonNoteEnglish = `
//   Hello {%customer.firstName,fallback=%},

//   thank you for the nice chat.
//   `

// const openningEnglish = `
// Hello {%customer.firstName,fallback=%},
// thank you for your message.
// Please forgive our late response, we are dealing with a heavy email loud at the moment`


// // Textbuilder / new

// const open = [

// ]

// const ichBraucheWantOptions = [
//   ['<want/ichHabe>'],
//   ['JV'],
//   ['ZS'],
//   ['ÜP'],
//   ['ZF'],
//   ['ZF & ÜP'],
//   ['IBAN'],
//   ['Kontoauszug']
// ]

// const whatsTheProblem = [
  


// ]

// const headlines = [
//   'Unser Gespräch',
//   'Dein Wechsel zu Rabot-Charge',
//   'Deine Anfrage',
//   'Anfrage',
//   'Dein Widerruf',
//   'Deine Kündigung'
// ]
// const quickCopyPaste = [
//   'Das Thema wurde bereits mit eiem Kollegen besprochen',
  
// ]
const heute = new Date();
const datum = getDatum(heute)
console.log(datum)
function getDatum() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(today.getDate()).padStart(2, '0');
  return `${day}.${month}.${year}`;
}

const salesText = `
<b>Hello</b>,<br>

<p>vielen Dank für das freundliche Gespräch und das Interesse an einer Belieferung durch Rabot Charge.<br>
Anbei finden Sie einige unverbindliche Informationen zu einem Tarif bei uns.<br></p>

Ihre Angaben:<br>
<ul>
<li>PLZ: <b>EINTRAGEN</b></li>
<li>Jahresverbrauch: <b>EINTRAGEN</b> kWh</li>
</ul>

<p>Tagesaktueller <b>${datum}</b> Preis brutto: <b>PREISEINTRAGEN</b> ct/kWh (Preis gilt für den 1. Monat, danach dynamisch)<br>
Vertragslaufzeit: 1 Monat, wenn nicht gekündigt wird, Verlängerung um einen weiteren Monat<br>
Grundpreis: <b>PREIS</b> (enthält unsere Servicegebühr in Höhe von 4,99 €, sowie die Netz- und Messstellengebühr)<br></p>
<p><b>Gesamtpreis</b> im ersten Monat (danach dynamisch): <b>PREISEINTRAGEN €</b><br></p>

<p><i>Wie rechnen wir ab?</i><br>
Wir arbeiten mit einem <strong>dynamischen Preismodell.</strong> Das heißt, dass wir Ökostrom zu besonders günstigen Zeiten<br>
verbrauchsgerecht an der Strombörse Leipzig einkaufen. Den dort erzielten Preis geben wir direkt an unsere Kunden weiter.<br> 
Da der Börsenstrompreis aus diversen Gründen, z.B. wetterbedingt, schwanken kann, schwanken auch deine Abschläge.<br></p>

<p>Die Abschläge werden mit einem zweimonatigen Versatz erstellt. Das bedeutet, dass der Abschlag für Juli mit den Preisen aus Mai berechnet wird. 
Die Abschlagszahlungen funktionieren wie eine Vorauszahlung. Immer dann, wenn Sie oder Ihr Netzbetreiber uns einen Zählerstand mitteilen,<br> 
erstellen wir automatisiert eine Zwischenabrechnung. Die bereits geleisteten Zahlungen werden dann mit dem tatsächlichen Verbrauch verrechnet,<br> 
wodurch es eventuell zu einer Nachzahlung oder der Auszahlung eines Guthabens kommt.<br></p>
Die Preisentwicklung lässt sich in unserer App verfolgen.<br>
<p>Gerne können Sie einen Vertrag eigenständig über unsere <a href="https://www.rabot-charge.de/tarife/"> Webseite </a> abschließen. Alternativ können wir einen Termin für eine 
Beratung oder einen Vertragsabschluss vereinbaren. Nutzen Sie zur Buchung den folgenden <a href="https://meet.brevo.com/rabot-charge-30min-l-zimmermann"> Link.</a><br><br></p>

Ich wünsche Ihnen einen wunderbaren Tag. Wir freuen uns auf Sie.<br>`;


const greatingTextBuilder = 'Text - Builder';

const dailyClosingDE = [
  `Ich wünsche dir eine tolle Woche`,
  `Ich wünsche dir eine wunderbare Woche`,
  `Ich wünsche dir einen großartigen Tag`,
  `Ich wünsche dir einen fantastischen Tag`,
  `Ich hoffe, du hast einen schönen Tag`,
  `Ich wünsche dir ein tolles Wochenende`,
  `Ich wünsche dir ein entspanntes Wochenende`,
];

const dailyClosingEN = [
  `Have a great week`,
  `Wishing you a wonderful week`,
  `Have a great day`,
  `Wishing you a fantastic day`,
  `Hope you have a wonderful day`,
  `Have a great weekend`,
  `Wishing you a relaxing weekend`,
];
let closingList = dailyClosingDE;
const todayNumber = (new Date().getDay());
const dailyClosing = closingList[todayNumber];


/*
function dailyClosingToday(){
  const today = (new Date().getDay());thank
  const dailyClosing = closingList[today];
  console.log(dailyClosing)

  return dailyClosing; contentSectionList
}*/
//const closingLine = dailyClosingToday();

  //const dayToday = (new Date().getDay());theSecondLineNow


//const dayToday = (new Date().getDay());//contentSectionList

const iNeed = [
  ['Ann. consumption', `Please let me know your new desired annual consumption. I will update it in the system.`],
  ['Meter reading', `You are welcome to provide me with your meter reading in response to this email.`],
  ['IBAN', 'Please provide me with your new IBAN.'],
  ['Meter pic', `Please provide me with a picture of your meter.`],
  ['ZF & ÜP', `Please provide me with a picture of your meter and a copy of the handover protocol.`],
  ['Bank statements.', `Please provide me with the bank statements for the XXXX and XXXX payments.`],
  ['Email', `If you would like to change your email address with us, please provide me with the new desired email address.`],
  ['Confirm termination.', `Please confirm that you would like to cancel your contract with us as of XX.XX.2024.`],
  ['Confirm cancellation.', `Please confirm that you would like to withdraw your contract with us as of XX.XX.2024.`],
  ['IBAN 4 SEPA', `If you would like to activate your SEPA mandate with us, please provide me with your IBAN.`],
]
const ichBrauche = [
  ['JV', `Bitte teile mir deinen neuen, gewünschten Jahresverbrauch mit. Ich werde ihn im System aktualisieren.`],
  ['ZS', `Gerne kannst du mir deinen Zählerstand als Antwort auf diese E-Mail mitteilen.`],
  ['IBAN', 'Bitte teile mir deine neue IBAN mit.'],
  ['ZF', `Bitte teile mir ein Bild von deinem Zähler mit.`],
  ['ZF & ÜP', `Bitte teile mir ein Bild deines Zählers und eine Kopie des Übergabeprotokolls mit.`],
  ['Kontoausz.', `Bitte teile mir die Kontoauszüge für den XXXX und XXXX Abschläge.`],
  ['Email', `Wenn du deine E-Mail-Adresse bei uns ändern möchtest, teile mir bitte die neue gewünschte E-Mail-Adresse mit.`],
  ['bestätige Kündigung.', `Bitte bestätige mir, dass du deinen Vertrag bei uns zum XX.XX.2024 kündigen möchtest.`],
  ['bestätige Widerruf.', `Bitte bestätige mir, dass du deinen Vertrag bei uns zum XX.XX.2024 kündigen möchtest.`],
  ['IBAN z. SEPA', `Falls du dein SEPA-Mandat bei uns aktivieren möchtest, kannst du mir gerne deine IBAN mitteilen.`],
]
//let theContentLineList = ichBrauche;

const ichHabe = [
  ['Rechnungsadresse', `Ich habe deine Rechnungsadresse in unserem System aktualisiert.`],
  ['Info FA', `Ich habe deine Informationen an die zuständige Fachabteilung weitergeleitet. Sobald ich eine Rückmeldung erhalte, werde ich mich umgehend bei dir melden.`],
  ['Info MP', `Ich habe diese Informationen an unseren Marktpartner weitergeleitet. Sobald ich eine Rückmeldung erhalte, werde ich dich zeitnah informieren.`],
  ['Neue WP', `Ich habe eine neue Anmeldung für dich eingeleitet und hoffe, dass alles reibungslos verläuft. Sobald der Netzbetreiber unsere Anmeldung bestätigt, erhältst du deinen Stromliefervertrag. Momentan ist von deiner Seite aus keine weitere Aktion erforderlich.`],
  ['ZS', `Ich habe die von dir gemeldeten Zählerstände an unseren Marktpartner weitergeleitet.`],
];
const IHave = [
  ['Billing Address', `I have updated your billing address in our system.`],
  ['Info to Department', `I have forwarded your information to the relevant department. As soon as I receive feedback, I will get back to you promptly.`],
  ['Info to Partner', `I have forwarded this information to our market partner. Once I receive a response, I will inform you promptly.`],
  ['New Enrollment', `I have initiated a new enrollment for you and hope everything goes smoothly. Once the network operator confirms our enrollment, you will receive your electricity supply contract. No further action is required from your side at this time.`],
  ['Meter Readings', `I have forwarded the meter readings you provided to our market partner.`],
];


const betreff = [
  'Betreff',
  ['Unser Gespräch', 'Unser Gespräch'],
  ['Dein Wechsel', 'Dein Wechsel zu Rabot-Energy'],
  ['Deine Anfrage', 'Deine Anfrage'],
  ['Anfrage', 'Anfrage'],
  ['Dein Widerruf', 'Dein Widerruf V/K'],
  ['Deine Kündigung', 'Deine Kündigung V/K'],
  ['Rechnungsk.', 'Rechnungskorrektur'],
]
const regarding = [
  'regarding',
  ['Our Conversation', 'Our Conversation'],
  ['Your Change', 'Your Change to Rabot-Energy'],
  ['Your Inquiry', 'Your Inquiry'],
  ['Inquiry', 'Inquiry'],
  ['Your Cancellation', 'Your Cancellation V/K'],
  ['Your Termination', 'Your Termination V/K'],
  ['Invoice Corr.', 'Invoice Correction'],
]
const vorlage = [
  'Vorlage',
  [runIcon('img/telephone.png'), `Hallo {%customer.firstName,fallback=%},
    
vielen Dank für das nette Gespräch.
        
Solltest du weitere Fragen haben, komme gerne auf mich zu. Deine Email landet direkt bei mir und ich würde mich dann sofort bei dir melden.
        ​
${dailyClosing}.`],
        
        [runIcon('img/email.png'), `Hallo {%customer.firstName,fallback=%},
        
vielen Dank für deine Anfrage.
Bitte entschuldige unsere späte Rückmeldung, wir haben derzeit ein erhöhtes Mailaufkommen.​
        ​
Solltest du weitere Fragen haben, komme gerne auf mich zu. Deine E-Mail landet direkt bei mir und ich würde mich dann sofort bei dir melden.
        
${dailyClosing}.`],
      [runIcon('img/accounting.png'), `Hallo {%customer.firstName,fallback=%},
        
ich habe eine Rückantwort aus der Fachabteilung erhalten.
          
          
${dailyClosing}.`
  ]
]
function runIcon(path){
  const icon = `<img class= "templateIcon" src="${path}" alt="Telphon Icon">`
  return icon;
}
const template = [
  'templates',
  [runIcon('img/telephone.png'), `Hello {%customer.firstName,fallback=%},
    
Thank you for the nice conversation.
        
If you have any further questions, feel free to reach out to me. Your email will land directly with me and I would get back to you immediately.
        
${dailyClosing}.`],
        
  [runIcon('img/email.png'), `Hello {%customer.firstName,fallback=%},
        
Thank you for your inquiry.
Please excuse our late response, we currently have an increased volume of emails.
        
If you have any further questions, feel free to reach out to me. Your email will land directly with me and I would get back to you immediately.
        
${dailyClosing}.`],
      
  [runIcon('img/accounting.png'), `Hello {%customer.firstName,fallback=%},
        
I have received a response from the specialist department.
          
          
${dailyClosing}.`
  ]
]
const stornierung = [
  ['stornierung'],
  ['Kündigung', `Hallo {%customer.firstName,fallback=%},
  
vielen Dank für deine Anfrage.
  ​
Hiermit bestätigen wir dir den Eingang deiner Kündigung.
  
Deine Kundennummer lautet: XXXXX
Deine Vertragsnummer lautet: XXXXXX
  
Du erhältst innerhalb von 6 Werktagen eine Kündigungsbestätigung.
  
​Ich wünsche dir einen tollen Tag.`],
  
  ['Widerruf', `Hallo {%customer.firstName,fallback=%},
  
vielen Dank für deine Anfrage.
  ​
Hiermit bestätigen wir dir den Eingang deines Widerruf.
  
Deine Kundennummer lautet: XXXXX
Deine Vertragsnummer lautet: XXXXXX
  
Du erhältst innerhalb von 6 Werktagen eine Widerrufsbestätigung.
  
Ich wünsche dir einen tollen Tag.`]
]
const cancellation = [
  ['cancellation'],
  ['Termination', `Hello {%customer.firstName,fallback=%},
  
Thank you for your inquiry.

We hereby confirm the receipt of your termination.

Your customer number is: XXXXX
Your contract number is: XXXXXX

You will receive a termination confirmation within 6 working days.

I wish you a great day.`],
  
  ['Revocation', `Hello {%customer.firstName,fallback=%},
  
Thank you for your inquiry.

We hereby confirm the receipt of your revocation.

Your customer number is: XXXXX
Your contract number is: XXXXXX

You will receive a revocation confirmation within 6 working days.

I wish you a great day.`]
]
const secondLineDE = [
  'vielen Dank für das nette Gespräch.',
  'vielen Dank für deine Anfrage.',
  `vielen Dank für deine Anfrage.
Bitte entschuldige unsere späte Rückmeldung, wir haben derzeit ein erhöhtes Mailaufkommen.​`,
  'ich habe eine Rückantwort aus der Fachabteilung erhalten.'
];
const secondLineEN = [
  'Thank you for the nice conversation.',
  'Thank you for your inquiry.',
  `Thank you for your inquiry.
Please excuse our late response, we currently have an increased volume of emails.`,
  'I have received a response from the specialist department.'
];
let theSecondLineList = secondLineDE; 

// const textBuilderSectionsList = [
//   ['quick notes', [ichBrauche, ichHabe]],
//   ['vorlage', [betreff, vorlage, stornierung]],
// ]

//vorlage stornierung theSecondLineList


// const tBAddingDE = [
//   ['ruf uns',`Gerne kannst du uns bei weiteren Fragen telefonisch kontaktieren.
// Wir sind von Mo - Fr zwischen 9:00 und 17:00 Uhr unter 040 593622030 erreichbar.`],
//   ['-4,99',`Als kleines Dankeschön werden wir deine Servicegebühr für den Monat XXX in Höhe von 4,99 € erlassen.`],
//   ['feedback',`Wir würden uns sehr freuen, wenn du uns eine Bewertung hinterlassen würdest. 
// Hier ist der Link dazu: https://de.trustpilot.com/review/rabot-charge.de.
// Dein Feedback ist uns wichtig!`],
//   ['Code', `Mit dem Empfehlungscode CWZBIYS bekommst du 50 € Gutschrift für jeden Vertrag, den du über unsere Webseite unterschreibst.`],
//   ['freut mich!', `Das freut mich zu hören. Wenn du noch weitere Fragen hast, zögere bitte nicht, uns zu kontaktieren.`]
// ]

const tBAddingEN = [
  ['call us', `Feel free to contact us by phone if you have any further questions. 
We are available from Monday to Friday between 9:00 AM and 5:00 PM at 040 593622030.`],
  ['-€4.99', 'As a small token of appreciation, we will waive your service fee of €4.99 for the month of XXX.'],
  ['feedback', `We would greatly appreciate it if you could leave us a review. 
Here’s the link: https://de.trustpilot.com/review/rabot-charge.de. 
Your feedback is important to us!`],
  ['referral code', 'With the referral code CWZBIYS, you will receive a €50 credit for each contract you sign through our website.'],
  ['glad to hear it!', 'I’m glad to hear that! If you have any further questions, please don’t hesitate to contact us.']
];
const tBAddingDE = [
  ['ruf uns an', `Gerne kannst du uns bei weiteren Fragen telefonisch kontaktieren. 
Wir sind von Montag bis Freitag zwischen 9:00 und 17:00 Uhr unter 040 593622030 erreichbar.`],
  ['-4,99 €', `Als kleines Dankeschön erlassen wir dir die Servicegebühr für den Monat XXX in Höhe von 4,99 €.`],
  ['feedback', `Wir würden uns sehr freuen, wenn du uns eine Bewertung hinterlassen würdest. 
Hier ist der Link dazu: https://de.trustpilot.com/review/rabot-charge.de. 
Dein Feedback ist uns wichtig!`],
  ['Empfehlungscode', 'Mit dem Empfehlungscode CWZBIYS erhältst du eine Gutschrift von 50 € für jeden Vertrag, den du über unsere Webseite abschließt.'],
  ['das freut mich!', 'Das freut mich zu hören! Falls du noch weitere Fragen hast, zögere bitte nicht, uns zu kontaktieren.']
];
let tBAddingList = tBAddingDE;

const contentSectionListEN = [
   ['I need', iNeed],
   ['I got', IHave],
   ['Extra', tBAddingEN]
]
const contentSectionListDE = [
  ['ich brauche', ichBrauche],
  ['ich habe', ichHabe],
  ['Extra', tBAddingDE]
]
let contentSectionList = contentSectionListDE; 

const telNoteList = [
  ['test'],
  ['NKD', `G: NKD wollte Informationen über unseren Tarif und den Wechsel zu uns haben.`],
  ['Kollegen besprochen', 'G: Das Thema wurde bereits mit eiem Kollegen besprochen'],
  ['WP Status', 'G: KD rief an, um den Status seiner WP zu erfahren'],
  ['Früher anfangen', `G: KD wollte früher bei uns anfangen.
V: KD verlangt nach SoKü von AV, Vertrag bei uns widerrufen und ein neuer Vertrag schlissen.`],
]

const lateDE = [
  ['Verspätete Antwort', 'Bitte entschuldige die verspätete Rückmeldung. Aufgrund eines erhöhten E-Mail-Aufkommens kommt es derzeit zu Verzögerungen.']
];
const lateEN = [
  ['Late Response', 'We apologize for the delayed response. Due to a high volume of emails, there are currently delays.']
];
let isLate = lateDE; 

let vorlageList = [
  ['Bereff', betreff],
  ['Vorlage', vorlage], 
  ['Stornierung', stornierung],
  ['Phone notes', telNoteList]
];
let templatesList = [
  ['Regarding', regarding],
  ['Templates', template],
  ['Cancellation', cancellation]
]


let theFirstLineEN = `Hello {%customer.firstName,fallback=%},`;
let theFirstLineDE = `Hallo {%customer.firstName,fallback=%},`;

let templatesNow = vorlageList;
let templateSectionName = 'Vorlage';

let theTB = '';
let theFirstLine = theFirstLineDE;
let theSecondLine = theSecondLineList[0]; 
let isLateLine = ''; 
let theContentLine = ''; 
let theClosingLine = dailyClosing;
let extra = ``; 

let englishSectionName = 'to English'
