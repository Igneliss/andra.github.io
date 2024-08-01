document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById('content');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    let noBtnClicks = 0;

    noBtn.addEventListener('click', () => {
        noBtnClicks++;
        switch (noBtnClicks) {
            case 1:
                noBtn.textContent = "Ar tikrai?";
                break;
            case 2:
                noBtn.textContent = "Ar tikrai tikrai?";
                break;
            case 3:
                noBtn.textContent = "Man atrodo tu meluoji";
                break;
            default:
                noBtn.textContent = "Ne";
                noBtnClicks = 0;
        }
        yesBtn.style.transform = `scale(${1 + noBtnClicks * 0.1})`;
    });

    yesBtn.addEventListener('click', () => {
        content.innerHTML = `
            <h1>Kiek laiko tu su Ignu draugauji?</h1>
            <button class="btn light-blue" data-answer="wrong">2 mėnesius</button>
            <button class="btn light-blue" data-answer="correct">6 mėnesius</button>
            <button class="btn light-blue" data-answer="wrong">3 mėnesius</button>
        `;

        document.querySelectorAll('.btn.light-blue').forEach(button => {
            button.addEventListener('click', (event) => {
                if (event.target.getAttribute('data-answer') === 'correct') {
                    content.innerHTML = `
                        <img src="gif.gif" alt="Happy Girlfriends Day Gif">
                        <h1>Happy Girlfriends Day ❤</h1>
                    `;
                } else {
                    event.target.classList.add('red-bg');
                }
            });
        });
    });
});
