let sum = parseFloat(localStorage.getItem('sum')) || 0;
let count = parseInt(localStorage.getItem('count')) || 0;
updateAverage();

document.getElementById('numberInput').addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        let number = parseFloat(this.value);
        if (number >= 1 && number <= 10) {
            sum += number;
            count++;
            localStorage.setItem('sum', sum.toString());
            localStorage.setItem('count', count.toString());
            updateAverage();
            this.value = '';
        }
    }
});

function updateAverage() {
    if (count > 0) {
        let average = sum / count;
        let roundedAverage = Math.round(average);
        let stars = '';
        for (let i = 0; i < roundedAverage; i++) {
            stars += '★';
        }
        document.getElementById('averageDisplay').innerHTML = '<div class="star-container"><div class="star">' + stars + '</div></div>';
    }
}


