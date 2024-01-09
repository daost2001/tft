document.addEventListener('DOMContentLoaded', () => {
    const championClasses = [
      { name: 'Ahri', traits: ['KDA', 'Spellweaver'] },
      { name: 'Akali KDA', traits: ['Breakout','KDA', 'Executioner'] },
      { name: 'Akali True Damage', traits: ['Breakout','True-Damage', 'Executioner']},
      { name: 'Amumu', traits: ['Emo', 'Guardian'] },
      { name: 'Annie', traits: ['Emo', 'Spellweaver'] },
      { name: 'Aphelios', traits: ['Heartsteel', 'Rapidfire'] },
      { name: 'Bard', traits: ['Jazz', 'Dazzler'] },
      { name: 'Blitzcrank', traits: ['Disco', 'Sentinel'] },
      { name: 'Corki', traits: ['8-bit', 'Big-Shot'] },
      { name: 'Caitlyn', traits: ['8-bit', 'Rapidfire'] },
      { name: 'Ekko', traits: ['True-Damage', 'Sentinel','Spellweaver' ] },
      { name: 'Evelynn', traits: ['KDA', 'Crowd-Diver'] },
      { name: 'Ezreal', traits: ['Heartsteel', 'Big-Shot'] },
      { name: 'Garen', traits: ['8-bit', 'Sentinel'] },
      { name: 'Gnar', traits: ['Pentakill','Mosher', 'Superfan'] },
      { name: 'Gragas', traits: ['Disco','Bruiser', 'Spellweaver']},
      { name: 'Illaoi', traits: ['ILLBEATS', 'Bruiser'] },
      { name: 'Jax', traits: ['EDM', 'Mosher'] },
      { name: 'Jhin', traits: ['Maestro', 'Big-Shot'] },
      { name: 'Jinx', traits: ['Punk', 'Rapidfire'] },
      { name: "Ksante", traits: ['Heartsteel', 'Sentinel'] },
      { name: "Kaisa", traits: ['KDA', 'Big-Shot'] },
      { name: 'Karthus', traits: ['Pentakill', 'Executioner' ] },
      { name: 'Katarina', traits: ['Country', 'Crowd-Diver'] },
      { name: 'Kayle', traits: ['Pentakill', 'Edgelord'] },
      { name: 'Kayn', traits: ['Heartsteel', 'Wildcard', 'Edgelord'] },
      { name: 'Kennen', traits: ['True-Damage','Guardian', 'Superfan'] },
      { name: 'Lillia', traits: ['KDA','Sentinel', 'Superfan']},
      { name: 'Lucian', traits: ['Jazz', 'Rapidfire'] },
      { name: 'Lulu', traits: ['Hyperpop', 'Spellweaver'] },
      { name: 'Lux', traits: ['EDM', 'Dazzler'] },
      { name: 'Miss Fortune', traits: ['Jazz', 'Big-Shot'] },
      { name: 'Mordekaiser', traits: ['Pentakill', 'Sentinel'] },
      { name: 'Nami', traits: ['Disco', 'Dazzler'] },
      { name: 'Neeko', traits: ['KDA', 'Guardian','Superfan' ] },
      { name: 'Olaf', traits: ['Pentakill', 'Bruiser'] },
      { name: 'Pantheon', traits: ['Punk', 'Guardian'] },
      { name: 'Poppy', traits: ['Emo', 'Mosher'] },
      { name: 'Qiyana', traits: ['True-Damage','Crowd-Diver'] },
      { name: 'Riven', traits: ['8-bit','Edgelord']},
      { name: 'Samira', traits: ['Country', 'Executioner'] },
      { name: 'Senna', traits: ['True-Damage', 'Rapidfire'] },
      { name: 'Seraphine', traits: ['KDA', 'Spellweaver'] },
      { name: 'Sett', traits: ['Heartsteel', 'Bruiser', 'Mosher'] },
      { name: "Sona", traits: ['Mixmaster', 'Spellweaver'] },
      { name: "Tahm Kench", traits: ['Country', 'Bruiser'] },
      { name: 'Taric', traits: ['Disco', 'Guardian'] },
      { name: 'Thresh', traits: ['Country', 'Guardian'] },
      { name: 'Twisted Fate', traits: ['Disco', 'Dazzler'] },
      { name: 'Twitch', traits: ['Punk', 'Executioner'] },
      { name: 'Urgot', traits: ['Country', 'Mosher'] },
      { name: 'Vex', traits: ['Emo', 'Executioner'] },
      { name: "Vi", traits: ['Punk', 'Mosher'] },
      { name: "Viego", traits: ['Pentakill', 'Edgelord'] },
      { name: 'Yasuo', traits: ['True-Damage', 'Edgelord' ] },
      { name: 'Yone', traits: ['Heartsteel', 'Edgelord' ,'Crowd-Diver'] },
      { name: 'Yorick', traits: ['Pentakill', 'Mosher', 'Guardian'] },
      { name: 'Zac', traits: ['EDM', 'Bruiser' ] },
      { name: 'Zed', traits: ['EDM', 'Crowd-Diver'] },
      { name: 'Ziggs', traits: ['Hyperpop', 'Dazzler'] },
      // Add more champion classes as needed
    ];

const traitGoals = {
    '8-bit': { levels: [2, 4, 6]},
    'Country': { levels: [3, 5, 7]},
    'Disco': { levels: [3,4, 5, 6]},
    'EDM': { levels: [2,3,4, 5]},
    'Emo': { levels: [2, 4, 6]},
    'Heartsteel': { levels: [3, 5, 7, 10]},
    'Hyperpop': { levels: [1, 2, 3, 4]},
    'ILLBEATS': { levels: [1]},
    'Jazz': { levels: [2, 3, 4]},
    'KDA': { levels: [3, 5, 7, 10]},
    'Maestro': { levels: [1]},
    'Mixmaster': { levels: [1]},
    'Pentakill': { levels: [3, 5, 7, 10]},
    'Punk': { levels:[2, 4, 6]},
    'True-Damage': { levels: [2, 4, 6, 9]},
    'Wildcard': { levels: [3, 5, 7]},
    "Big-Shot": { levels: [2, 4, 6]},
    'Bruiser': { levels: [2, 4, 6]},
    'Breakout': { levels: [1]},
    'Crowd-Diver': { levels: [2, 4, 6]},
    'Dazzler': { levels: [2, 4, 6]},
    'Edgelord': { levels: [3, 5, 7]},
    'Executioner': { levels: [2, 4, 6]},
    'Guardian': { levels: [2, 4, 6]},
    'Mosher': { levels: [2, 4, 6]},
    'Rapidfire': { levels: [2, 4, 6]},
    'Sentinel': { levels: [2, 4, 6, 8]},
    'Spellweaver': { levels: [3, 5, 7, 10]},
    'Superfan': { levels: [3,4,5]},
};

const traitCounts = {}; // Object to store trait counts

let draggedElement = null;
let originalHex = null;



const hexBoard = document.getElementById('hexBoard');

hexBoard.addEventListener('mousedown', (event) => {
    event.preventDefault();
    const hexCell = event.target.closest('.hex-cell');

    if (hexCell && hexCell.hasChildNodes()) {
        draggedElement = hexCell.firstChild;
        originalHex = hexCell;

        draggedElement.style.position = 'absolute';
        document.body.appendChild(draggedElement);

        const initialX = event.clientX;
        const initialY = event.clientY;

        const offsetX = initialX - hexCell.getBoundingClientRect().left;
        const offsetY = initialY - hexCell.getBoundingClientRect().top;

        handleMouseMove(initialX, initialY, offsetX, offsetY);

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }
});

function handleMouseMove(event) {
    if (draggedElement) {
        const x = event.clientX;
        const y = event.clientY;

        draggedElement.style.left = `${x}px`;
        draggedElement.style.top = `${y}px`;

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }
}

function handleMouseUp(event) {
    event.preventDefault();
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);

    if (draggedElement) {
        const hoveredHex = event.target.closest('.hex-cell');

        document.body.removeChild(draggedElement);

        

        if (hoveredHex && !hoveredHex.hasChildNodes() && originalHex !== hoveredHex) {
            originalHex.style.backgroundImage = hoveredHex.style.backgroundImage
            hoveredHex.appendChild(draggedElement);
            hoveredHex.addEventListener('contextmenu', removeChampionFromHex);
            const championImageSrc = draggedElement.querySelector('img').src;
            hoveredHex.style.backgroundImage = `url('${championImageSrc}')`;
            hoveredHex.style.backgroundSize = 'cover';
            hoveredHex.style.backgroundPosition = 'center';
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);


        } else if(hoveredHex &&  originalHex !== hoveredHex){
            const hoveredImage = hoveredHex.style.backgroundImage;
            var hoveredChild = hoveredHex.firstChild
            hoveredHex.replaceChild(draggedElement,hoveredHex.firstChild);
            hoveredHex.addEventListener('contextmenu', removeChampionFromHex);
            const championImageSrc = draggedElement.querySelector('img').src;
            hoveredHex.style.backgroundImage = `url('${championImageSrc}')`;
            hoveredHex.style.backgroundSize = 'cover';
            hoveredHex.style.backgroundPosition = 'center';
            originalHex.style.backgroundImage=hoveredImage;
            originalHex.appendChild(hoveredChild);
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);

        }
        else {
            originalHex.appendChild(draggedElement);
        }

        draggedElement.style.position = ''; // Reset position style
        draggedElement = null;
        originalHex = null;
    }
}

// Display champion classes on the webpage
const championClassesList = document.getElementById('championClassesList');
  
championClasses.forEach((championClass) => {
    // Create a box element for each champion
    const championBox = document.createElement('div');
    championBox.classList.add('champion-box');
    
    // Create an image element for the champion
    const imageElement = document.createElement('img');
    imageElement.src = `images/${championClass.name}.png`; // Adjust the path
    
    // Create a heading element for champion name
    const nameHeading = document.createElement('h2');
    nameHeading.textContent = championClass.name;
    
    // Create a paragraph element for champion traits
    const traitsParagraph = document.createElement('p');
    traitsParagraph.textContent = `${championClass.traits.join(', ')}`;
    
    // Append name, image, and traits to the champion box
    championBox.appendChild(nameHeading);
    championBox.appendChild(imageElement);
    championBox.appendChild(traitsParagraph);

    // Add click event listener to move champion to the first open hex
    championBox.addEventListener('click', () => moveChampionToHex(championBox));

    // Check if the parent node is a hex-cell before adding the contextmenu event listener
    if (championBox.parentNode && championBox.parentNode.classList.contains('hex-cell')) {
        championBox.addEventListener('contextmenu', removeChampionFromHex);
        Array.from(championBox.children).forEach(child => {
            if (child !== championBox.querySelector('.champion-image')) {
                child.style.visibility = 'hidden';
            }
        });
    }
    
    // Append the champion box to the list
    championClassesList.appendChild(championBox);
});
      
function moveChampionToHex(championBox) {
    const hexBoard = document.getElementById('hexBoard');
    const hexCells = hexBoard.getElementsByClassName('hex-cell');
    let isChampionAlreadyPresent = false;
    const championImageSrc = championBox.querySelector('img').src;

    // Check if the champion is already present in the hex board
    const clonedChampionBox = championBox.cloneNode(true);
    clonedChampionBox.style.visibility = 'hidden'; // Make the cloned node invisible
    Array.from(hexCells).forEach(hexCell => {
        if (hexCell.firstChild && hexCell.firstChild.isEqualNode(clonedChampionBox)) {
            isChampionAlreadyPresent = true;
        }
    });
        
    // Find the first open hexagonal cell
    for (let i = 0; i < hexCells.length; i++) {
        if (hexCells[i].className!='hex-cell last'){
            if (!hexCells[i].hasChildNodes()) {
                hexCells[i].style.backgroundImage = `url('${championImageSrc}')`
                hexCells[i].style.backgroundSize = 'cover';
                hexCells[i].style.backgroundPosition = 'center';
                
                hexCells[i].replaceChildren(clonedChampionBox);

                hexCells[i].addEventListener('contextmenu', removeChampionFromHex);
                // Update trait counts when a champion is added
                const championTraits = championBox.querySelector('p').textContent.split(', ');

                if (!isChampionAlreadyPresent) {
                    updateTraitCounts(championTraits);
                    updateTraitsColumn();
                    recommendChampions();
                }
                break;
            }
          }
        }
}
function removeChampionFromHex(event) {
    event.preventDefault();
    const hexCell = event.currentTarget;
      
    // Check if the hex contains a champion
    if (hexCell.hasChildNodes()) {
        const championElement = hexCell.firstChild;
        const championTraits = championElement.querySelector('p').textContent.split(', ');
        const championClass = championElement.querySelector('h2').textContent;
      
        hexCell.removeChild(championElement);
        hexCell.style.backgroundImage = null;
      
        // Update trait counts when a champion is removed only if it was the last one of its class
        if (isLastChampionOfItsClass(championClass)) {
            updateTraitCounts(championTraits, true);
        }
        updateTraitsColumn();
        removeRecommendationsForChampion(championClass);
        recommendChampions();
        }
}
function updateTraitCounts(traits, decrease) {
    traits.forEach(trait => {
        traitCounts[trait] = (traitCounts[trait] || 0) + (decrease ? -1 : 1);
    });
}
function isLastChampionOfItsClass(championClass) {
    const hexBoard = document.getElementById('hexBoard');
    const hexCells = hexBoard.getElementsByClassName('hex-cell');
    
    for (let i = 0; i < hexCells.length; i++) {
        if (hexCells[i].firstChild && hexCells[i].firstChild.querySelector('h2').textContent === championClass) {
            return false; // There is at least one more champion of the same class in the hex board
        }
    }
    return true; // The removed champion was the last one of its class
}
    

function updateTraitsColumn() {
    const traitsColumn = document.getElementById('traitsColumn');

    // Create an array of trait objects with trait name and count
    const traitArray = Object.keys(traitCounts).map(trait => ({ trait, count: traitCounts[trait] }));

    // Sort the array by count in descending order
    traitArray.sort((a, b) => b.count - a.count);

    // Clear the existing traits
    traitsColumn.innerHTML = '';

    // Display traits in the column with counts
    traitArray.forEach(({ trait, count }) => {
        if (traitCounts[trait] > 0) {
            const traitElement = document.createElement('div');
            traitElement.classList.add('trait');

            // Determine the goal for the current trait (if applicable)
            const goal = traitGoals[trait];
            const goalText = goal ? `${goal.levels.join('/')}` : '';

            // Check if a goal has been reached and apply highlighting
            const highlightedGoal = goal ? getHighlightedGoal(count, goal.levels) : null;

            // Create an image element for the trait icon
            const traitIcon = document.createElement('img');
            traitIcon.src = `images/${trait}.png`; // Adjust the path to your trait icons
            traitIcon.alt = trait; // Set alt text for accessibility

            // Create a span element for the trait name and count
            const traitName = document.createElement('span');
            traitName.textContent = `${trait} ${count}  (${goalText})`;

            if (highlightedGoal !== null) {
                traitElement.classList.add(`goal-reached-${highlightedGoal}`);
            }

            // Append the image and span elements to the trait element
            traitElement.appendChild(traitIcon);
            traitElement.appendChild(traitName);

            traitsColumn.appendChild(traitElement);
        }
    });
}
function getHighlightedGoal(count, levels) {
    for (let i = levels.length - 1; i >= 0; i--) {
        if (count >= levels[i]) {
            return i+1;
        }
    }
    return null;
}
function recommendChampions() {
    const recommendationsList = document.getElementById('recommendationsList');
    recommendationsList.innerHTML = ''; // Clear existing recommendations

    // Loop through each trait in the trait column
    const traitColumn = document.getElementById('traitsColumn');
    const traitItems = traitColumn.children;
    for (let i = 0; i < traitItems.length; i++) {
        const trait = traitItems[i].textContent.split(' ')[0].trim(); // Extract trait name

        // Check if the trait exists in traitGoals
        if (trait in traitGoals) {
            const currentCount = traitCounts[trait] || 0;
            const levels = traitGoals[trait].levels;

            // Check if there's a next goal and recommend champions to reach it
            const nextGoal = levels.find(level => level > currentCount);
            if (nextGoal !== undefined) {
                const championsForTrait = findChampionsForTrait(trait, nextGoal);

                console.log(`Recommended for ${trait}: ${championsForTrait.join(', ')}`);
                // Display recommendations in the list if there are champions to recommend
                if (championsForTrait.length > 0) {
                    const recommendationItem = document.createElement('div');
                    recommendationItem.innerHTML  = `${trait}: ${championsForTrait.join(', ')}<br><br>`;
                    recommendationsList.appendChild(recommendationItem);
                }
            }
        }
    }
}
  
function findChampionsForTrait(trait, goal) {
    console.log(traitGoals[trait].levels);
    // Your logic to find champions based on the trait and goal
    // For example, you can search through your championClasses array
    // and return champions that have the specified trait and are not already in the hex board
    const champions = championClasses
        .filter(champion => champion.traits.includes(trait))
        .map(champion => champion.name)
        .filter(championName => !isChampionInHex(championName));

    // Calculate the current count and additional count needed to reach or exceed the goal
    const currentCount = traitCounts[trait] || 0;
    const additionalCountNeeded = goal - currentCount;

    console.log(`Trait: ${trait}, Goal: ${goal}, Champions: ${champions.join(', ')}`);
    // Return all possible recommended champions if adding one more would reach the goal
    return additionalCountNeeded === 1 ? champions : [];
}
  
  function isChampionInHex(championName) {
    // Your logic to check if a champion is already in the hex board
    // Return true if the champion is already in the hex board, otherwise false
    const hexBoard = document.getElementById('hexBoard');
    const hexCells = hexBoard.getElementsByClassName('hex-cell');
  
    for (let i = 0; i < hexCells.length; i++) {
      if (hexCells[i].firstChild && hexCells[i].firstChild.querySelector('h2').textContent === championName) {
        return true; // The champion is already in the hex board
      }
    }
  
    return false; // The champion is not in the hex board
  }
  function removeRecommendationsForChampion(championClass) {
    const recommendationsList = document.getElementById('recommendationsList');
    const recommendationItems = recommendationsList.children;

    for (let i = recommendationItems.length - 1; i >= 0; i--) {
        const trait = recommendationItems[i].textContent.split(':')[0].trim();

        // Check if the trait exists in traitGoals
        if (trait in traitGoals) {
            const traitChampions = findChampionsForTrait(trait, traitGoals[trait].levels[0]);

            if (traitChampions.includes(championClass)) {
                recommendationsList.removeChild(recommendationItems[i]);
            }
        }
    }
}
  
});