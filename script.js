const quotes = [
    `"Unfortunately, the clock is ticking...  
    The hours are going by. The past increases, the future recedes.  
    Possibilities decreasing, regrets mounting.  

    Do you understand?"`,

    `"Lost time is never found again." — Benjamin Franklin`,

    `"You may delay, but time will not." — Benjamin Franklin`,

    `"A year from now, you may wish you had started today." — Karen Lamb`,

    `"The trouble is, you think you have time." — Buddha`,

    `"Time waits for no one." — Folklore`,

    `"Time flies over us, but leaves its shadow behind." — Nathaniel Hawthorne`,

    `"Time is what we want most but what we use worst." — William Penn`,

    `"Don’t watch the clock; do what it does. Keep going." — Sam Levenson`,

    `"The two most powerful warriors are patience and time." — Leo Tolstoy`,

    `"You may delay, but time will not." — Benjamin Franklin`,

    `"They always say time changes things, but you actually have to change them yourself." — Andy Warhol`,

    `"Time is the most valuable thing a man can spend." — Theophrastus`,

    `"Time is what we want most, but what we use worst." — William Penn`,

    `"The future depends on what we do in the present." — Mahatma Gandhi`,

    `"The best time to plant a tree was 20 years ago. The second best time is now." — Chinese Proverb`,

    `"Don’t count the days, make the days count." — Muhammad Ali`,

    `"You can't make up for lost time. You can only do better in the future." — Ashley Ormon`,

    `"Your time is limited, so don’t waste it living someone else’s life." — Steve Jobs`,

    `"Time is a great healer, but a poor beautician." — Lucille S. Harper`,

    `"You don't have to be great to start, but you have to start to be great." — Zig Ziglar`,

    `"Time is a great teacher, but unfortunately it kills all its pupils." — Louis Hector Berlioz`,

    `"It is not length of life, but depth of life." — Ralph Waldo Emerson`,

    // Add more quotes here...
];

function getQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = quotes[randomIndex];
}

document.addEventListener("DOMContentLoaded", getQuote);
document.getElementById("refresh").addEventListener("click", getQuote);
