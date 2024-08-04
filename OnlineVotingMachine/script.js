
let votes = {
    candidate1: 0,
    candidate2: 0,
    candidate3: 0,
    candidate4: 0,
    candidate5: 0
};

function vote(candidate) {
    votes[candidate]++;
    displayResults();
}

function displayResults() {
    const resultList = document.getElementById('resultList');
    resultList.innerHTML = '';
    
    for (let candidate in votes) {
        let li = document.createElement('li');
        li.textContent = `${candidate}: ${votes[candidate]} votes`;
        resultList.appendChild(li);
    }
}

document.addEventListener('DOMContentLoaded', displayResults);
