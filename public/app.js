document.addEventListener('DOMContentLoaded', () => {
const championClasses = [
    { name: 'Ahri', traits: ['KDA', 'Spellweaver'] ,cost: "4"},
    { name: 'Akali KDA', traits: ['Breakout','KDA', 'Executioner'] ,cost: "4"},
    { name: 'Akali True Damage', traits: ['Breakout','True-Damage', 'Executioner'],cost: "4"},
    { name: 'Amumu', traits: ['Emo', 'Guardian'] ,cost: "3" },
    { name: 'Annie', traits: ['Emo', 'Spellweaver'] ,cost: "1" },
    { name: 'Aphelios', traits: ['Heartsteel', 'Rapidfire'] ,cost: "2" },
    { name: 'Bard', traits: ['Jazz', 'Dazzler'] ,cost: "2" },
    { name: 'Blitzcrank', traits: ['Disco', 'Sentinel'],cost: "4" },
    { name: 'Corki', traits: ['8-bit', 'Big-Shot'],cost: "1"  },
    { name: 'Caitlyn', traits: ['8-bit', 'Rapidfire'],cost: "4" },
    { name: 'Ekko', traits: ['True-Damage', 'Sentinel','Spellweaver' ] ,cost: "3" },
    { name: 'Evelynn', traits: ['KDA', 'Crowd-Diver'] ,cost: "1" },
    { name: 'Ezreal', traits: ['Heartsteel', 'Big-Shot'],cost: "4" },
    { name: 'Garen', traits: ['8-bit', 'Sentinel'] ,cost: "2" },
    { name: 'Gnar', traits: ['Pentakill','Mosher', 'Superfan'] ,cost: "2" },
    { name: 'Gragas', traits: ['Disco','Bruiser', 'Spellweaver'],cost: "2" },
    { name: 'Illaoi', traits: ['ILLBEATS', 'Bruiser'] ,cost: "5" },
    { name: 'Jax', traits: ['EDM', 'Mosher'] ,cost: "2" },
    { name: 'Jhin', traits: ['Maestro', 'Big-Shot'],cost: "5"  },
    { name: 'Jinx', traits: ['Punk', 'Rapidfire'] ,cost: "1" },
    { name: "Ksante", traits: ['Heartsteel', 'Sentinel'] ,cost: "1" },
    { name: "Kaisa", traits: ['KDA', 'Big-Shot'] ,cost: "2" },
    { name: 'Karthus', traits: ['Pentakill', 'Executioner' ],cost: "4" },
    { name: 'Katarina', traits: ['Country', 'Crowd-Diver'],cost: "2"  },
    { name: 'Kayle', traits: ['Pentakill', 'Edgelord'] ,cost: "2" },
    { name: 'Kayn', traits: ['Heartsteel', 'Wildcard', 'Edgelord'],cost: "5"  },
    { name: 'Kennen', traits: ['True-Damage','Guardian', 'Superfan'] ,cost: "1" },
    { name: 'Lillia', traits: ['KDA','Sentinel', 'Superfan'],cost: "1" },
    { name: 'Lucian', traits: ['Jazz', 'Rapidfire'],cost: "5"  },
    { name: 'Lulu', traits: ['Hyperpop', 'Spellweaver'],cost: "3"  },
    { name: 'Lux', traits: ['EDM', 'Dazzler'],cost: "3"  },
    { name: 'Miss Fortune', traits: ['Jazz', 'Big-Shot'],cost: "3"  },
    { name: 'Mordekaiser', traits: ['Pentakill', 'Sentinel'],cost: "3"  },
    { name: 'Nami', traits: ['Disco', 'Dazzler'] ,cost: "1" },
    { name: 'Neeko', traits: ['KDA', 'Guardian','Superfan' ],cost: "3"  },
    { name: 'Olaf', traits: ['Pentakill', 'Bruiser'] ,cost: "1" },
    { name: 'Pantheon', traits: ['Punk', 'Guardian'] ,cost: "2" },
    { name: 'Poppy', traits: ['Emo', 'Mosher'],cost: "4" },
    { name: 'Qiyana', traits: ['True-Damage','Crowd-Diver'] ,cost: "5" },
    { name: 'Riven', traits: ['8-bit','Edgelord'],cost: "3" },
    { name: 'Samira', traits: ['Country', 'Executioner'],cost: "3"  },
    { name: 'Senna', traits: ['True-Damage', 'Rapidfire'] ,cost: "2" },
    { name: 'Seraphine', traits: ['KDA', 'Spellweaver'] ,cost: "2" },
    { name: 'Sett', traits: ['Heartsteel', 'Bruiser', 'Mosher'],cost: "3"  },
    { name: "Sona", traits: ['Mixmaster', 'Spellweaver'] ,cost: "5" },
    { name: "Tahm Kench", traits: ['Country', 'Bruiser'] ,cost: "1" },
    { name: 'Taric', traits: ['Disco', 'Guardian'] ,cost: "1" },
    { name: 'Thresh', traits: ['Country', 'Guardian'] ,cost: "4"},
    { name: 'Twisted Fate', traits: ['Disco', 'Dazzler'],cost: "4" },
    { name: 'Twitch', traits: ['Punk', 'Executioner'],cost: "2"  },
    { name: 'Urgot', traits: ['Country', 'Mosher'] ,cost: "3" },
    { name: 'Vex', traits: ['Emo', 'Executioner'],cost: "3"  },
    { name: "Vi", traits: ['Punk', 'Mosher'] ,cost: "1" },
    { name: "Viego", traits: ['Pentakill', 'Edgelord'],cost: "4" },
    { name: 'Yasuo', traits: ['True-Damage', 'Edgelord' ] ,cost: "1" },
    { name: 'Yone', traits: ['Heartsteel', 'Edgelord' ,'Crowd-Diver'],cost: "3"  },
    { name: 'Yorick', traits: ['Pentakill', 'Mosher', 'Guardian'] ,cost: "5" },
    { name: 'Zac', traits: ['EDM', 'Bruiser' ],cost: "4" },
    { name: 'Zed', traits: ['EDM', 'Crowd-Diver'],cost: "4" },
    { name: 'Ziggs', traits: ['Hyperpop', 'Dazzler'],cost: "5" },
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
let headlinerTrait = null;
let headlinerChampion = null;


// Display champion classes on the webpage
const championClassesList = document.getElementById('championList');  
orderByName()
const filterBar = document.getElementById("champions-filter");

const nameFilter = document.createElement('div');
nameFilter.classList.add("filter")
nameFilter.classList.add("highlight")
nameFilter.innerText = "Name"
nameFilter.addEventListener('click', () => orderByName());


const costFilter = document.createElement('div');
costFilter.classList.add("filter")
costFilter.innerText = "Cost"
costFilter.addEventListener('click', () => orderByCost());

const originFilter = document.createElement('div');
originFilter.classList.add("filter")
originFilter.innerText = "Origin"
originFilter.addEventListener('click', () => orderByOrigin());

const classFilter = document.createElement('div');
classFilter.classList.add("filter")
classFilter.innerText = "Class"
classFilter.addEventListener('click', () => orderByClass());

filterBar.appendChild(nameFilter)
filterBar.appendChild(costFilter)
filterBar.appendChild(originFilter)
filterBar.appendChild(classFilter)

const hexBoard = document.getElementById('hexBoard');

hexBoard.addEventListener('mousedown', (event) => {
    event.preventDefault();
    const hexCell = event.target.closest('.hex-cell');

    if (hexCell && hexCell.hasChildNodes()) {
        draggedElement = hexCell.firstChild;
        draggedElement.style.visibility = 'visible';
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
        const championTraits = draggedElement.querySelector('p').textContent.split(', ');
        const championClass = draggedElement.querySelector('h2').textContent;
        document.body.removeChild(draggedElement);

        if (hoveredHex && !hoveredHex.hasChildNodes() && originalHex !== hoveredHex) {
            originalHex.style.cursor = null
            hoveredHex.style.cursor = "pointer"
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
        else if(hoveredHex == originalHex){
            originalHex.appendChild(draggedElement);

        }
        else {
            originalHex.style.cursor = null
            originalHex.style.backgroundImage = null
            if(draggedElement.querySelector('h2').textContent == headlinerChampion){
                setHeadliner(null,null);
            }
            displayHeadliner();
        }

        draggedElement.style.position = ''; // Reset position style
        draggedElement = null;
        originalHex = null;
        if (isLastChampionOfItsClass(championClass)) {
            updateTraitCounts(championTraits, true);
        }
        updateTraitsColumn()
        recommendChampions();
    }
}
      
function moveChampionToHex(championBox) {
    const hexBoard = document.getElementById('hexBoard');
    const hexCells = hexBoard.getElementsByClassName('hex-cell');
    let isChampionAlreadyPresent = false;
    const championImageSrc = championBox.querySelector('img').src;
    const headlinerList = document.getElementById('headlinerList');

    // Check if the champion is already present in the hex board
    const clonedChampionBox = championBox.cloneNode(true);
    clonedChampionBox.classList.add("hex");
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
                hexCells[i].style.cursor = "pointer"
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
                    if(!headlinerList.firstChild){
                        displayHeadliner();
                    }
                    else if(headlinerList.firstChild.className !== "headliner-info-container"){
                        displayHeadliner();
                    }
                    else{
                    }
                }
                break;
            }
          }
        }
}
function removeChampionFromHex(event) {
    event.preventDefault();
    const hexCell = event.currentTarget;
    hexCell.style.cursor = null;
      
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
            removeChampionBox(championClass)
        }
        if (championClass == headlinerChampion){
            setHeadliner(null,null);
        }
        updateTraitsColumn();
        recommendChampions();
        displayHeadliner()
        }
}
function updateTraitCounts(traits, decrease) {
    traits.forEach(trait => {
        traitCounts[trait] = (traitCounts[trait] || 0) + (decrease ? -1 : 1);
    })
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
            traitElement.id=trait;

            // Determine the goal for the current trait (if applicable)
            const goal = traitGoals[trait];
            const goalText = goal ? `${goal.levels.join(' > ')}` : '';

            // Check if a goal has been reached and apply highlighting
            const highlightedGoal = goal ? getHighlightedGoal(count, goal.levels) : null;

            // Create an image element for the trait icon
            const traitIcon = document.createElement('img');
            traitIcon.classList.add('traitIcon');
            if (highlightedGoal !== null) {
                traitIcon.classList.add(`goal-reached-${highlightedGoal}`);
            }
            traitIcon.src = `images/${trait}.png`; // Adjust the path to your trait icons
            traitIcon.alt = trait; // Set alt text for accessibility

            // Create a span element for the trait name and count
            const traitName = document.createElement('div');
            traitName.classList.add("trait-name")
            traitName.textContent = `${trait}`;

            const traitCount = document.createElement('div');
            traitCount.classList.add("trait-count")
            traitCount.textContent = ` ${count} `;

            const traitText = document.createElement('div');
            traitText.classList.add("trait-text")
            traitText.textContent = ` ${goalText} `;
            
   

            // Append the image and span elements to the trait element
            traitElement.appendChild(traitIcon);
            traitElement.appendChild(traitCount);
            const traitinfo = document.createElement('div');
            traitinfo.classList.add("trait-info")
            traitinfo.appendChild(traitName);
            traitinfo.appendChild(traitText);
            traitElement.appendChild(traitinfo);

            if (trait==headlinerTrait){
                traitElement.classList.add("headliner");
            }

            traitsColumn.appendChild(traitElement);
        }
        if (!traitsColumn.firstChild) {
            traitsColumn.innerHTML = '<div class = "traitsPlaceholder">Traits will be dynamically added here</div>';
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
        if (traitItems[i].lastChild.firstChild){
            const trait = traitItems[i].lastChild.firstChild.innerHTML; // Extract trait name

                // Check if the trait exists in traitGoals
                if (trait in traitGoals) {
                    const currentCount = traitCounts[trait] || 0;
                    const levels = traitGoals[trait].levels;

                    // Check if there's a next goal and recommend champions to reach it
                    const nextGoal = levels.find(level => level > currentCount);
                    if (nextGoal !== undefined) {
                        const championsForTrait = findChampionsForTrait(trait, nextGoal);

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
    if (!recommendationsList.firstChild){
        recommendationsList.innerHTML = '<div class= "recommendationsPlaceholder" >Champions will be recommended here depending on what your team needs</div>';
    }
}
  
function findChampionsForTrait(trait, goal) {
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


function displayHeadliner() {
    const championNames = championClasses.map(champion => champion.name);
    const uniqueChampionsList = championNames.filter(championName => isChampionInHex(championName));
    const headliner = document.getElementById('headlinerList');

    // Clear existing content
    headliner.innerHTML = '';

    // Create a champion box for each unique champion
    uniqueChampionsList.forEach(championName => {
        const championClass = championClasses.find(champion => champion.name === championName);
    
        // Create a box element for the champion
        const championBox = document.createElement('div');
        championBox.classList.add('champion-box');
        championBox.id = championClass.name;

        // Create an image element for the champion
        const imageElement = document.createElement('img');
        imageElement.classList.add("championImage");
        imageElement.src = `images/${championClass.name}.png`; // Adjust the path

        // Create a heading element for champion name
        const nameHeading = document.createElement('h2');
        nameHeading.textContent = championClass.name;

        // Create a paragraph element for champion traits
        const traitsParagraph = document.createElement('p');
        traitsParagraph.textContent = `${championClass.traits.join(', ')}`;

        // Add click event listener to display champion and traits
        championBox.addEventListener('click', () => displayHeadlinerInfo(championClass));

        // Append name, image, and traits to the champion box
        championBox.appendChild(nameHeading);
        championBox.appendChild(imageElement);
        championBox.appendChild(traitsParagraph);
        championBox.classList.add(`cost-${championClass.cost}`)
        headliner.appendChild(championBox);
    });
    const headlinerContainer = document.getElementById('headlinerContainer');
    if (!headliner.firstChild){
        console.log("empty")
        headliner.innerHTML = '<div class = "headliner-placeholder">Add units to the board to designated one as your headliner</div>'
    }
    headlinerContainer.style.overflowY="scroll";
}

// Function to remove a champion box by champion name
function removeChampionBox(championName) {
    const headlinerList = document.getElementById('headlinerList');
        // Find and remove the champion box with the specified champion name
        const championBoxToRemove = document.getElementById(championName);
        if (championBoxToRemove) {
            headlinerList.removeChild(championBoxToRemove);
        }
}

function displayHeadlinerInfo(championClass) {
    const championInfoBox = document.getElementById('headlinerList');
    setHeadliner(null,championClass.name)
    
    // Clear existing content
    championInfoBox.innerHTML = '';

    const headlinerInfo = document.createElement('div');
    headlinerInfo.classList.add("headliner-info-container");
    championInfoBox.appendChild(headlinerInfo)

        const exit = document.createElement('button');
        exit.classList.add("headliner-exit")
        exit.textContent = "x";
        exit.addEventListener('click', () => displayHeadliner());
        exit.addEventListener('click', () => setHeadliner(null,null));


        // Create elements for champion info
        const nameHeading = document.createElement('h2');
        nameHeading.classList.add("headliner-name");
        nameHeading.textContent = championClass.name;

        const imageElement = document.createElement('img');
        imageElement.classList.add("headliner-image");
        imageElement.src = `images/${championClass.name}.png`; // Adjust the path

        // Append elements to the champion info box
        headlinerInfo.appendChild(exit);
        headlinerInfo.appendChild(nameHeading);
        headlinerInfo.appendChild(imageElement);

        const headlinerTraits = document.createElement('div');
        headlinerTraits.classList.add("headliner-trait-container")
        championClass.traits.forEach(championTrait => {
            if (championTrait!=("Breakout")&& championTrait!=("ILLBEATS") &&championTrait!=("Maestro") &&championTrait!=("Mixmaster")&&championTrait!=("Wildcard")){
                const trait = document.createElement('p');
                trait.classList.add("headliner-trait")
                trait.textContent = championTrait;
                trait.addEventListener('click', () => setHeadliner(championTrait,championClass.name));
                headlinerTraits.appendChild(trait);
            }
        })
        headlinerInfo.appendChild(headlinerTraits);
        const headlinerContainer = document.getElementById('headlinerContainer');
        headlinerContainer.style.overflowY="hidden";

}

function setHeadliner(trait,champion){
    traitCounts[headlinerTrait] = traitCounts[headlinerTrait] -1;

    headlinerTrait = null;
    if (champion!=null){
        headlinerChampion = champion;
        if (trait!=null){
            headlinerTrait = trait;
            traitCounts[trait] = traitCounts[trait] + 1;
            const headlinerTraitElement = document.getElementById(trait);
        }
    }
    // Update the traits column on the webpage
    updateTraitsColumn();
    recommendChampions();
}
function createChampionBox(championClass){
    const championBox = document.createElement('div');
        championBox.classList.add('champion-box');
        
        // Create an image element for the champion
        const imageElement = document.createElement('img');
        imageElement.classList.add("championImage");
        imageElement.src = `images/${championClass.name}.png`; // Adjust the path
        
        // Create a heading element for champion name
        const nameHeading = document.createElement('h2');
        nameHeading.textContent = championClass.name;
        
        // Create a paragraph element for champion traits
        const traitsParagraph = document.createElement('p');
        traitsParagraph.textContent = `${championClass.traits.join(', ')}`;
    
        const cost = document.createElement('span');
        cost.textContent = `${championClass.cost}`;
        
        // Append name, image, and traits to the champion box
        championBox.appendChild(nameHeading);
        championBox.appendChild(imageElement);
        championBox.appendChild(traitsParagraph);
        championBox.appendChild(cost);
        championBox.addEventListener('click', () => moveChampionToHex(championBox));
        if (championBox.parentNode && championBox.parentNode.classList.contains('hex-cell')) {
            championBox.addEventListener('contextmenu', removeChampionFromHex);
            Array.from(championBox.children).forEach(child => {
                if (child !== championBox.querySelector('.champion-image')) {
                    child.style.visibility = 'hidden';
                }
            });
        }
        championBox.classList.add(`cost-${championClass.cost}`)
        // Append the champion box to the list
        return championBox;
}
function orderByName(){
    championClasses.sort((a, b) => a.name.localeCompare(b.name));
    championClassesList.innerHTML = '';

    championClasses.forEach((championClass) => {
        const championBox = createChampionBox(championClass)
        championClassesList.appendChild(championBox);
    })

}
function orderByCost(){
    championClasses.sort((a, b) => a.cost - b.cost);
    championClassesList.innerHTML = '';

    championClasses.forEach((championClass) => {
        const championBox = createChampionBox(championClass)
        championClassesList.appendChild(championBox);
    })
}
function orderByClass() {
    championClasses.sort((a, b) => a.cost - b.cost);
    championClassesList.innerHTML = '';

    let start = false;  // Flag to start processing after 'Big-Shot'

    for (const traitName in traitGoals) {
        if (start) {
            // Create a line to display the trait name
            const traitLine = document.createElement('div');
            traitLine.classList.add("champion-traitline");
            traitLine.textContent = `Trait: ${traitName}`;
            championClassesList.appendChild(traitLine);

            championClasses.forEach((championClass) => {
                // Check if the champion has the current trait
                if (championClass.traits.includes(traitName)) {
                    // Display the champion
                    const championBox = createChampionBox(championClass)
                    championClassesList.appendChild(championBox);
                }
            });
        }

        if (traitName === 'Wildcard') {
            start = true;
        }
    }
}
function orderByOrigin(){
    championClasses.sort((a, b) => a.cost - b.cost);
    championClassesList.innerHTML = '';
    for (const traitName in traitGoals) {
        if (traitName === 'Big-Shot') {
            break;
        }
        // Create a line to display the trait name
        const traitLine = document.createElement('div');
        traitLine.classList.add("champion-traitline");

        traitLine.textContent = `Trait: ${traitName}`;


        championClassesList.appendChild(traitLine);
        championClasses.forEach((championClass) => {
            // Check if the champion has the current trait
            if (championClass.traits.includes(traitName)) {
                // Display the champion
                const championBox = createChampionBox(championClass)
                championClassesList.appendChild(championBox);
            }
        })
    }
}
// Add click event listener to all divs with the class 'filter'
const filters = document.querySelectorAll('.filter');
filters.forEach(div => {
    div.addEventListener('click', function () {
        highlightDiv(div);
    });
});

// Function to highlight the clicked div and unhighlight the others
function highlightDiv(clickedDiv) {
    // Remove 'highlight' class from all divs
    filters.forEach(div => {
        div.classList.remove('highlight');
    });

    // Add 'highlight' class to the clicked div
    clickedDiv.classList.add('highlight');
}

});