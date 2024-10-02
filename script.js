let currentPage = 1;
const totalPages = document.querySelectorAll('.page').length; // Otomatis menghitung total halaman

document.querySelector('.next-page').addEventListener('click', () => {
    if (currentPage < totalPages) {
        document.querySelector(`#page${currentPage}`).style.transform = 'rotateY(-180deg)';
        currentPage++;
        applyTypewriterEffect(`#page${currentPage} h1`, 100);
        applyTypewriterEffect(`#page${currentPage} p`, 150);
    }
});

document.querySelector('.prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        document.querySelector(`#page${currentPage}`).style.transform = 'rotateY(0deg)';
        applyTypewriterEffect(`#page${currentPage} h1`, 100);
        applyTypewriterEffect(`#page${currentPage} p`, 150);
    }
});

// Fungsi untuk membuat efek Typewriter
function applyTypewriterEffect(selector, speed) {
    const element = document.querySelector(selector);
    const text = element.textContent;
    element.textContent = ''; // Kosongkan teks
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            element.textContent += text.charAt(i); // Tambahkan huruf satu per satu
            i++;
            setTimeout(typeWriter, speed); // Waktu jeda antar huruf
        }
    }

    typeWriter(); // Mulai efek typewriter
}

// Fungsi untuk membuat partikel salju
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    // Ukuran partikel salju acak
    const size = Math.random() * 10 + 5 + 'px';
    snowflake.style.width = size;
    snowflake.style.height = size;

    // Posisi horizontal acak
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    
    // Kecepatan jatuh acak
    const duration = Math.random() * 5 + 5 + 's';
    snowflake.style.animationDuration = duration;

    // Tambahkan elemen ke body
    document.body.appendChild(snowflake);

    // Hapus elemen setelah animasi selesai
    setTimeout(() => {
        snowflake.remove();
    }, parseFloat(duration) * 1000); // Hapus setelah animasi selesai
}

// Buat partikel salju secara terus menerus
setInterval(createSnowflake, 200); // Setiap 200ms buat salju baru

const audioElement = document.querySelector('audio');
const playPauseIcon = document.getElementById('playPauseIcon');

// Event listener for play/pause button
playPauseIcon.addEventListener('click', () => {
    if (audioElement.paused) {
        audioElement.play();
        playPauseIcon.classList.remove('fa-play');
        playPauseIcon.classList.add('fa-pause');
    } else {
        audioElement.pause();
        playPauseIcon.classList.remove('fa-pause');
        playPauseIcon.classList.add('fa-play');
    }
});