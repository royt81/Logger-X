// the order list // 

const informations = [
    "",
    "Neuer WP mit E03 fristgerecht laut 10 Werktage.",
    "Neuer WP mit E03 fristgerecht laut 17 Werktage.",
    "neuer WP mit E03, da Vattenfall laut 10/ 17 Werktagefrist.",
    "KD wurde wegen fehlender Daten angeschrieben.",
    "KD wurde angeschrieben und Informiert.",
    "Neuer WP mit ZD2, fristgerecht, bis zu 6 Wochen rückwirkend.",
    "Neuer WP mit E01, fristgerecht, bis zu 6 Wochen rückwirkend.",
    "KD ist bereits in delivery.",
    "KD wurde erneut angeschrieben, da keine Antwort.",
    "KD hat selbst widerrufen/ gekündigt.",
    "Kunde wurde nicht erreicht, daher Ereignis auf erledigt gesetzt und Ereignis zum Versand des Ablehnungsschreibens angelegt.",
    "wurde ans Invoice zur Korrektur weitergeleitet.",
    "Hier liegt eine Zählerverwechslung vor. KD ist seit dem XX.XX.XXXX in delivery. Daher E01 fristgerecht, bis zu 6 Wochen rückwirkend.",
    "erfolgloser Wechsel, KD wurde nicht erreicht.",
    "erfolgloser Wechsel, 6 abgelehnte WPs.",
    "Sophia über SLP zu RLM Kunde per Mail informiert.",
    "KD teilt ZS mit. ZN: Datum: ZS:"
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

