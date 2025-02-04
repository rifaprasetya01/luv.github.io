const envelope = document.getElementsByClassName("envelope")[0];

const messageEl = document.getElementsByClassName("message")[0]

const canvas = document.getElementsByClassName("stars")[0]
const ctx = canvas.getContext("2d");

// Set ukuran canvas agar full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Membuat array untuk menyimpan bintang
const stars = [];
const numStars = 100; // Jumlah bintang

for (let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * canvas.width,  // Posisi X acak
        y: Math.random() * canvas.height, // Posisi Y acak
        baseX: Math.random() * canvas.width, // Posisi awal X
        baseY: Math.random() * canvas.height, // Posisi awal Y
        radius: Math.random() * 2 + 1,    // Ukuran bintang
        opacity: Math.random(),           // Opacity awal acak
        flickerSpeed: Math.random() * 0.02 + 0.01, // Kecepatan kelap-kelip
        floatSpeed: Math.random() * 0.5 + 0.2, // Kecepatan gerakan mengambang
        floatOffset: Math.random() * Math.PI * 2 // Offset unik untuk gelombang
    });
}

// Fungsi menggambar bintang dengan efek kelap-kelip dan ombang-ambing
function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Bersihkan canvas

    const time = Date.now() * 0.001; // Waktu untuk animasi

    stars.forEach(star => {
        // Hitung pergerakan mengambang dengan fungsi sinus
        star.x = star.baseX + Math.sin(time * star.floatSpeed + star.floatOffset) * 12;
        star.y = star.baseY + Math.cos(time * star.floatSpeed + star.floatOffset) * 12;

        // Gambar bintang
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`; // Warna putih dengan opacity
        ctx.fill();
        
        // Efek kelap-kelip dengan mengubah opacity
        star.opacity += star.flickerSpeed * (Math.random() > 0.5 ? 1 : -1);
        
        // Batasi opacity agar tidak terlalu redup atau terlalu terang
        if (star.opacity > 1) star.opacity = 1;
        if (star.opacity < 0.1) star.opacity = 0.1;
    });

    requestAnimationFrame(drawStars); // Loop animasi
}

// Mulai animasi bintang
drawStars();



envelope.addEventListener("click", function(){
  const textHBD = envelope.getElementsByClassName("text-hbd")[0]
  const partTop = envelope.getElementsByClassName("part-top")[0]
  const char = envelope.getElementsByClassName("content")[0]
  const heart = envelope.getElementsByClassName("heart")[0]
  
  const lettersTop = envelope.querySelectorAll(".text-hbd .top span")
  
  const lettersBottom = envelope.querySelectorAll(".text-hbd .bottom span")
  
  animateText(lettersTop)
  animateText(lettersBottom)
  
  messageEl.classList.add("die");
  heart.classList.add("open")
  setTimeout(() => {
    partTop.classList.add("open")
  }, 550)
  setTimeout(() => {
    char.classList.add("open")
    textHBD.classList.add("open")
    document.getElementsByClassName("balloons")[0].classList.add("open");
  }, 800)
  setTimeout(() => {
    messageEl.innerHTML = "Scroll down"
    messageEl.classList.remove("die")
    document.body.style.overflow = "auto"
  }, 2000)
})

const btnTrigger = document.getElementsByClassName("click-me")[0]
const header = document.getElementsByClassName("header")[0]
const paragraph1 = document.getElementsByClassName("teks")[0]
const paragraph2 = document.getElementsByClassName("teks")[1]
const paragraph3 = document.getElementsByClassName("teks")[2]
const footer = document.getElementsByClassName("footer")[0]

const content2 = {
  header: "Dear My Luv Luv",
  teks1: "My beb tercinta. Selamat ulang tahun. Mulai hari ini, usia kamu sudah bertambah satu tahun.",
  teks2: "Kamu hebat bisa bertahan sampai sejauh ini, selama ini. Aku bangga banget punya pacar yang engga cuma cantik, tapi juga kuat dan tahan banting.",
  teks3: "Love you beb. Jangan menyerah dan teruslah semangat. Walau mungkin dunia engga berpihak kepada kamu, tapi aku yakin kamu akan kuat jalanin semuanya. Karena kamu Intan, yang cantik dan sangat kuat.",
  footer: "From Your Boyfriend"
}

btnTrigger.addEventListener("click", () => {
  btnTrigger.style.display = "none";
  
  document.getElementsByClassName("char-2")[0].classList.add("show-up")
  
  const speed = 10;
  typeEffect(header, content2.header, speed)
  
  setTimeout(() => {
    typeEffect(paragraph1, content2.teks1, speed)
  }, 300)
  
 setTimeout(() => {
   typeEffect(paragraph2, content2.teks2, speed)
 }, content2.teks1.length * speed + 500)
 
 setTimeout(() => {
   typeEffect(paragraph3, content2.teks3, speed)
 }, content2.teks2.length * speed + 1600)
 
 setTimeout(() => {
   typeEffect(footer, content2.footer, speed)
 }, 5500)
  
 setTimeout(() => {
   const canvas2 = document.getElementsByClassName("love-particles")[0]
const ctx2 = canvas2.getContext("2d");

// Set ukuran canvas agar full screen
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

// Array untuk menyimpan love
const loves = [];
const numLoves = 10; // Jumlah love yang muncul setiap detik

// Fungsi untuk membuat love baru
function createLove() {
    loves.push({
        x: Math.random() * canvas2.width, // Posisi acak di sumbu X
        y: canvas2.height + 10, // Mulai dari bawah layar
        size: Math.random() * 20 + 10, // Ukuran love
        speed: Math.random() * 2 + 1, // Kecepatan naik
        opacity: 1, // Opacity awal (full terlihat)
        fadeSpeed: Math.random() * 0.02 + 0.005 // Kecepatan memudar
    });
}

// Fungsi menggambar love berbentuk hati
function drawLove(x, y, size, opacity) {
    ctx2.fillStyle = `rgba(255, 0, 0, ${opacity})`; // Warna merah dengan opacity
    ctx2.beginPath();
    ctx2.moveTo(x, y);
    ctx2.bezierCurveTo(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
    ctx2.bezierCurveTo(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
    ctx2.fill();
}

// Fungsi animasi untuk love
function animateLove() {
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height); // Bersihkan canvas

    // Loop melalui semua love
    for (let i = loves.length - 1; i >= 0; i--) {
        const love = loves[i];

        // Update posisi love ke atas
        love.y -= love.speed;
        love.opacity -= love.fadeSpeed; // Kurangi opacity untuk efek memudar

        // Gambar love
        drawLove(love.x, love.y, love.size, love.opacity);

        // Hapus love yang sudah menghilang
        if (love.opacity <= 0) {
            loves.splice(i, 1);
        }
    }

    requestAnimationFrame(animateLove); // Loop animasi
}

// Mulai animasi love
animateLove();

// Tambahkan love baru setiap 100ms
setInterval(createLove, 100);
 }, 800)
})









function animateText(letters) {
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.color = "hotpink"
            setTimeout(() => {
                letter.style.color = "#1c1f2b"
            }, 500);
        }, index * 300);
    });

    setTimeout(() => animateText(letters), letters.length * 300 + 500); // Loop ulang
}

function typeEffect(element, text, speed) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}