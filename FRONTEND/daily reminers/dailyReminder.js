document.addEventListener("DOMContentLoaded", () => {
    const quotes = [
        "The only way to do great work is to love what you do. – Steve Jobs",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
        "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
        "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
        "It does not matter how slowly you go as long as you do not stop. – Confucius",
        "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
        "Opportunities don't happen, you create them. – Chris Grosser",
        "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis"
    ];

    const quoteText = document.getElementById("quoteText");
    const newQuoteButton = document.getElementById("newQuoteButton");

    // Function to display a random quote
    function displayRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.textContent = quotes[randomIndex];
    }

    // Display a random quote when the page loads
    displayRandomQuote();

    // Change quote when the button is clicked
    newQuoteButton.addEventListener("click", displayRandomQuote);
});
