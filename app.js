// Function to assign event listeners to elements
function assignEventListeners(taikiId, shutudouId, jyoukyouId, tdId) {
    const taiki = document.getElementById(taikiId);
    const shutudou = document.getElementById(shutudouId);
    const jyoukyou = document.getElementById(jyoukyouId);
    const td = document.getElementById(tdId);

    taiki.addEventListener('click', () => {
        jyoukyou.innerHTML = '待機中';
        td.style.backgroundColor = 'white';
    });

    shutudou.addEventListener('click', () => {
        jyoukyou.innerHTML = '出動中';
        td.style.backgroundColor = '#ff0000';
    });
}

// Loop to assign event listeners to elements with common prefixes
for (let i = 1; i <= 8; i++) {
    const taikiId = `_${i}_a`;
    const shutudouId = `_${i}_b`;
    const jyoukyouId = `jyoukyou_0${i}`;
    const tdId = `td_0${i}`;
    
    assignEventListeners(taikiId, shutudouId, jyoukyouId, tdId);
}
