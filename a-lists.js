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

