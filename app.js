const correctAns = ['A', 'A', 'B', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result')
form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    for (let i = 0; i < userAns.length; i++) {
        if (correctAns[i] === userAns[i]) {
            score += 25;
        }
    }
    scrollTo(0, 0);

    result.classList.remove('d-none');
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (score === output) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10)
})