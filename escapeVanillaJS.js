document.addEventListener("DOMContentLoaded", () => {
    // Corrected the Element ID
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
              // Corrected the element ID
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    document.getElementById("solveRoom2").addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'async']);//Add 'async'
        
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        
        const commonConcepts = findIntersection(jsConcepts, reactConcepts); //changed js concept to reactConcept
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    //
    document.getElementById("solveRoom3").addEventListener("click", async () => { //added async
     const response = await fetch('directions.json'); 
     const directions = await response.json();
     const message = await navigateLabyrinth(directions); //await the asychronous
     document.getElementById("room3Result").innerHTML = message;
    });
});   

function findMostRecentBook(books) {  //changed the greater than sign
    return books.reduce((mostRecent, book) => new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent);
}

function findIntersection(setA, setB) {
    
    const intersection = new Set([...setA].filter(item => setB.has(item)));
    return intersection ;
}

async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}

