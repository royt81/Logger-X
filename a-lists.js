

//Logger




// the order list // 

const informations = [
    [""],
    ['WP E01',"Neuer WP mit E01, fristgerecht, bis zu 6 Wochen rückwirkend."],
    ['WP E03, 10 WT',"Neuer WP mit E03 fristgerecht laut 10 Werktage."],
    ['WP E03, 17 WT',"Neuer WP mit E03 fristgerecht laut 17 Werktage."],
    ['WP E03, 10/17 WT (Vattenfall)',"neuer WP mit E03, da Vattenfall laut 10/ 17 Werktagefrist."],
    ['WP ZD2',"Neuer WP mit ZD2, fristgerecht, bis zu 6 Wochen rückwirkend."],
    ['KD angeschrieben.',"KD wurde wegen fehlender Daten angeschrieben."],
    ['KD informiert',"KD wurde angeschrieben und Informiert."],
    ["KD ist bereits in delivery.","KD ist bereits in delivery."],
    ['KD erneut angeschrieben',"KD wurde erneut angeschrieben, da keine Antwort."],
    ["KD widerrufen/ gekündigt.","KD hat selbst widerrufen/ gekündigt."],
    ['Kunde nicht erreicht, Ereignis erledigt',"Kunde wurde nicht erreicht, daher Ereignis auf erledigt gesetzt und Ereignis zum Versand des Ablehnungsschreibens angelegt."],
    ["ans Invoice weitergeleitet.","wurde ans Invoice zur Korrektur weitergeleitet."],
    ['Zählerverwechslung',"Hier liegt eine Zählerverwechslung vor. KD ist seit dem XX.XX.XXXX in delivery. Daher E01 fristgerecht, bis zu 6 Wochen rückwirkend."],
    ["erfolgloser Wechsel, KD nicht erreicht.","erfolgloser Wechsel, KD wurde nicht erreicht."],
    ["erfolgloser Wechsel, 6 abgelehnte WPs.","erfolgloser Wechsel, 6 abgelehnte WPs."],
    ["Sophia über SLP zu RLM Kunde per Mail informiert.","Sophia über SLP zu RLM Kunde per Mail informiert."],
    ['KD teilt ZS mit', `KD teilt ZS mit. 
ZN: 
Datum: 
ZS:`]
];

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

// const needWantOptions = [
//   ['<want/got>'],
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
//   'Dein Wideruf',
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

const dailyClosing = [
  `Ich wünsche dir eine schöne Woche`,
  `Ich wünsche dir eine schöne Woche`,
  `Ich wünsche dir einen schönen Tag`,
  `Ich wünsche dir einen schönen Tag`,
  `Ich wünsche dir einen schönen Tag`,
  `Ich wünsche dir ein schönes Wochenende`,
  `Ich wünsche dir ein schönes Wochenende`,
]
const dayToday = (new Date().getDay());


const need = [
  ['JV', `Bitte teile mir deinen neuen, gewünschten Jahresverbrauch mit. Ich werde ihn im System aktualisieren.`],
  ['pay bill', `Bitte überweise die Rechnungsnummer XXX auf die folgende IBAN mit dem folgenden Verwendungszweck.`],
  ['ZS', `Gerne kannst du mir deinen Zählerstand als Antwort auf diese E-Mail mitteilen.`],
  ['IBAN', 'Bitte teile mir deine neue IBAN mit.'],
  ['ZF', `Kannst du uns bitte ein Bild von deinem Zähler schicken?`],
  ['ZF & ÜP', `Bitte teile mir ein Bild deines Zählers und eine Kopie des Übergabeprotokolls mit.`],
  ['Kontoausz.', `Bitte teile mir die Kontoauszüge für den XXXX und XXXX Abschläge.`],
  ['email', `Wenn du deine E-Mail-Adresse bei uns ändern möchtest, teile mir bitte die neue gewünschte E-Mail-Adresse mit.`],
  ['bestätige Kü.', `Bitte bestätige mir, dass du deinen Vertrag bei uns zum XX.XX.2024 kündigen möchtest.`],
  ['IBAN z. SEPA', `Falls du dein SEPA-Mandat bei uns aktivieren möchtest, kannst du mir gerne deine IBAN mitteilen.`],

]
const got = [
  ['Rechnungsadresse', `Ich habe deine Rechnungsadresse bei uns aktualisiert.`],
  ['info FA', `Ich habe diese Informationen von dir an meine Fachabteilung weitergeleitet. Sobald ich eine Rückmeldung erhalte, melde ich mich zeitnah bei dir.`],
  ['info MP', `Ich habe diese Information an unseren Marktpartner weitergeleitet. Sobald ich Rückantwort habe, melde ich mich zeitnah bei dir.`],
  ['ZS', `Ich habe die von dir angegebenen Zählerstände an unseren Marktpartner weitergeleitet.`],

]
const betreff = [
  'betreff',
  ['Unser Gespräch', 'Unser Gespräch'],
  ['Dein Wechsel', 'Dein Wechsel zu Rabot-Charge'],
  ['Deine Anfrage', 'Deine Anfrage'],
  ['Anfrage', 'Anfrage'],
  ['Dein Wideruf', 'Dein Wideruf V/K'],
  ['Deine Kündigung', 'Deine Kündigung V/K'],
  ['Rechnungsk.', 'Rechnungskorrektur'],
]
const regarding = [
  'regarding',
  ['Unser Gespräch', 'Unser Gespräch'],
  ['Dein Wechsel', 'Dein Wechsel zu Rabot-Charge'],
  ['Deine Anfrage', 'Deine Anfrage'],
  ['Anfrage', 'Anfrage'],
  ['Dein Wideruf', 'Dein Wideruf V/K'],
  ['Deine Kündigung', 'Deine Kündigung V/K'],
  ['Rechnungsk.', 'Rechnungskorrektur'],
]
const templates = [
  ['nette Gespräch', `Hallo {%customer.firstName,fallback=%},
    
vielen Dank für das nette Gespräch.
        
Solltest du weitere Fragen haben, komme gerne auf mich zu. Deine Email landet direkt bei mir und ich würde mich dann sofort bei dir melden.
        ​
${dailyClosing[dayToday]}.`],
        
        ['deine Anfrage', `Hallo {%customer.firstName,fallback=%},
        
vielen Dank für deine Anfrage.
Bitte entschuldige unsere späte Rückmeldung, wir haben derzeit ein erhöhtes Mailaufkommen.​
        ​
Solltest du weitere Fragen haben, komme gerne auf mich zu. Deine E-Mail landet direkt bei mir und ich würde mich dann sofort bei dir melden.
        
${dailyClosing[dayToday]}.`],
      ['FA', `Hallo {%customer.firstName,fallback=%},
        
ich habe eine Rückantwort aus der Fachabteilung erhalten.
          
          
${dailyClosing[dayToday]}.`
  ]
]
const cancellation = [
  ['cancellation'],
  ['Kündigung', `Hallo {%customer.firstName,fallback=%},
  
vielen Dank für deine Anfrage.
  ​
Hiermit bestätigen wir dir den Eingang deiner Kündigung.
  
Deine Kundennummer lautet: XXXXX
Deine Vertragsnummer lautet: XXXXXX
  
Du erhältst innerhalb von 6 Werktagen eine Kündigungsbestätigung.
  
​Ich wünsche dir einen tollen Tag.`],
  
  ['Widerrufs', `Hallo {%customer.firstName,fallback=%},
  
vielen Dank für deine Anfrage.
  ​
Hiermit bestätigen wir dir den Eingang deines Widerrufs.
  
Deine Kundennummer lautet: XXXXX
Deine Vertragsnummer lautet: XXXXXX
  
Du erhältst innerhalb von 6 Werktagen eine Widerrufsbestätigung.
  
Ich wünsche dir einen tollen Tag.`]
]

// const textBuilderSectionsList = [
//   ['quick notes', [need, got]],
//   ['templates', [betreff, templates, cancellation]],
// ]

const tBAdding = [
  ['late', 'sorry im late'],
  ['reccomand', 'plese say nice stuff'],
  ['call me!', 'call me']
]

const contentSectionList = [
  ['need', need],
  ['got', got],
  ['extra', tBAdding]
]
const addingSectionList = [
  ['late', 'Bitte entschuldige unsere späte Rückmeldung, wir haben derzeit ein erhöhtes Mailaufkommen.​']
]

const theSentence = '';

const templatesList = [
  ['bereff', betreff],
  ['templates', templates], 
  ['cancellation', cancellation]
];
 
theSentence.theFirstLine = '`Hallo {%customer.firstName,fallback=%},';
theSentence.theSecondLine = 'vielen Dank für das nette Gespräch.'; 
