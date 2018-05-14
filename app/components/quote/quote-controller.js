function QuoteController(){

	var qs = new QuoteService()

	qs.getQuote(function(quote){
		var template = `
		<h2>${quote.quote} ~${quote.author}</h2>

		`
		console.log('What is the quote', quote)
		document.getElementById("quote").innerHTML = template
	})
}
