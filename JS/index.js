
var quote = [`“Be yourself; everyone else is already taken.”
― Oscar Wilde `, `“So many books, so little time.”
― Frank Zappa ` , `“A room without books is like a body without a soul.”
― Marcus Tullius Cicero ` , `“You only live once, but if you do it right, once is enough.”
― Mae West `, `“Don’t walk in front of me… I may not follow
Don’t walk behind me… I may not lead
Walk beside me… just be my friend”
― Albert Camus ` , `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”
― Maya Angelou ` , `“It is better to be hated for what you are than to be loved for what you are not.”
― Andre Gide, Autumn Leaves `, `“Without music, life would be a mistake.”
― Friedrich Nietzsche, Twilight of the Idols `, `“We accept the love we think we deserve.”
― Stephen Chbosky, The Perks of Being a Wallflower `, `“Live as if you were to die tomorrow. Learn as if you were to live forever.”
― Mahatma Gandhi `]


function addQuote() { // 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 * // 10 
           //  To  integer       decimal           fixed
    var numbers = Math.floor(Math.random() * (quote.length))
    document.getElementById('demo').innerHTML = quote[numbers];
}