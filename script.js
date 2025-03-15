document.addEventListener("DOMContentLoaded", () => {
    // Animasi scroll (fade-in saat di-scroll)
    const sections = document.querySelectorAll(".slide-up");

    const scrollAnimation = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight * 0.8;

            if (sectionTop < triggerPoint) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", scrollAnimation);
    scrollAnimation(); // Jalankan sekali di awal untuk memeriksa posisi awal

    // Animasi hover di navigasi
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.2)";
            link.style.transition = "transform 0.3s ease";
        });

        link.addEventListener("mouseout", () => {
            link.style.transform = "scale(1)";
        });
    });

    // Efek ketik otomatis di header
    const typingText = document.querySelector("header p");
    const words = ["Mahasiswa Teknik Informatika", "Web Developer", "Tech Enthusiast"];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    // Ubah kecepatan di sini
    const typingSpeed = 150; // Kecepatan mengetik (ms)
    const erasingSpeed = 50; // Kecepatan menghapus (ms)
    const delayBetweenWords = 1500; // Jeda sebelum hapus teks (ms)
    
    const typeEffect = () => {
        const currentWord = words[wordIndex];
    
        if (!isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
    
            if (charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(typeEffect, delayBetweenWords); // Tunggu sebelum mulai menghapus
                return;
            }
        } else {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
    
            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length; // Pindah ke kata berikutnya
            }
        }
    
        setTimeout(typeEffect, isDeleting ? erasingSpeed : typingSpeed);
    };
    
    typeEffect();
    


    const eraseEffect = () => {
        if (charIndex > 0) {
            typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseEffect, 50);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 500);
        }
    };

    typeEffect();
});

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const items = Array.from(track.children);
    
    // Gandakan isi slider agar tidak ada celah kosong
    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });
});
