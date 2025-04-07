document.addEventListener('DOMContentLoaded', function() {
    // Kelime veritabanı
    const words = [
        {
            word: "sich abkoppeln",
            preposition: "von+dat",
            example: "Er hat beschlossen, sich von der stressigen Arbeitsumgebung abzukoppeln und eine Auszeit zu nehmen.",
            translation: "to disconnect oneself, to detach oneself"
        },
        // Buraya daha fazla kelime ekleyebilirsiniz
    ];
    
    // DOM elementleri
    const flashcard = document.getElementById('flashcard');
    const wordTitle = document.getElementById('wordTitle');
    const preposition = document.getElementById('preposition');
    const example = document.getElementById('example');
    const translation = document.getElementById('translation');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const flipBtn = document.getElementById('flipBtn');
    const currentCardElement = document.getElementById('currentCard');
    const totalCardsElement = document.getElementById('totalCards');
    const progressBar = document.getElementById('progressBar');
    const shuffleBtn = document.getElementById('shuffleBtn');
    const easyBtn = document.getElementById('easyBtn');
    const mediumBtn = document.getElementById('mediumBtn');
    const hardBtn = document.getElementById('hardBtn');
    
    // Durum değişkenleri
    let currentIndex = 0;
    let isFlipped = false;
    let wordList = [...words];
    
    // Zorluk seviyelerine göre kelime grupları
    let easyWords = [];
    let mediumWords = [];
    let hardWords = [];
    
    // LocalStorage'dan zorluk seviyelerini yükle
    function loadDifficultyLevels() {
        const savedEasy = localStorage.getItem('easyWords');
        const savedMedium = localStorage.getItem('mediumWords');
        const savedHard = localStorage.getItem('hardWords');
        
        easyWords = savedEasy ? JSON.parse(savedEasy) : [];
        mediumWords = savedMedium ? JSON.parse(savedMedium) : [];
        hardWords = savedHard ? JSON.parse(savedHard) : [];
    }
    
    // Zorluk seviyelerini kaydet
    function saveDifficultyLevels() {
        localStorage.setItem('easyWords', JSON.stringify(easyWords));
        localStorage.setItem('mediumWords', JSON.stringify(mediumWords));
        localStorage.setItem('hardWords', JSON.stringify(hardWords));
    }
    
    // Başlangıç ayarları
    function init() {
        loadDifficultyLevels();
        totalCardsElement.textContent = wordList.length;
        updateCard();
        updateProgressBar();
    }
    
    // Kartı güncelle
    function updateCard() {
        const currentWord = wordList[currentIndex];
        wordTitle.textContent = currentWord.word;
        preposition.textContent = currentWord.preposition;
        example.textContent = currentWord.example;
        translation.textContent = currentWord.translation;
        currentCardElement.textContent = currentIndex + 1;
        
        // Önceki/sonraki butonlarını güncelle
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === wordList.length - 1;
        
        // Kartı ön yüze çevir
        isFlipped = false;
        flashcard.classList.remove('flipped');
    }
    
    // İlerleme çubuğunu güncelle
    function updateProgressBar() {
        const progress = ((currentIndex + 1) / wordList.length) * 100;
        progressBar.style.width = `${progress}%`;
    }
    
    // Kartı çevir
    function flipCard() {
        flashcard.classList.toggle('flipped');
        isFlipped = !isFlipped;
    }
    
    // Sonraki karta geç
    function nextCard() {
        if (currentIndex < wordList.length - 1) {
            currentIndex++;
            updateCard();
            updateProgressBar();
        }
    }
    
    // Önceki karta dön
    function prevCard() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCard();
            updateProgressBar();
        }
    }
    
    // Kelimeleri karıştır
    function shuffleWords() {
        wordList = [...words].sort(() => Math.random() - 0.5);
        currentIndex = 0;
        updateCard();
        updateProgressBar();
    }
    
    // Mevcut kelimeyi zorluk seviyesine ekle
    function addToDifficultyLevel(level) {
        const currentWord = wordList[currentIndex].word;
        
        // Önce diğer zorluk seviyelerinden kaldır
        easyWords = easyWords.filter(word => word !== currentWord);
        mediumWords = mediumWords.filter(word => word !== currentWord);
        hardWords = hardWords.filter(word => word !== currentWord);
        
        // Seçilen zorluk seviyesine ekle
        if (level === 'easy') {
            easyWords.push(currentWord);
        } else if (level === 'medium') {
            mediumWords.push(currentWord);
        } else if (level === 'hard') {
            hardWords.push(currentWord);
        }
        
        saveDifficultyLevels();
        
        // Görsel geri bildirim
        const btn = level === 'easy' ? easyBtn : level === 'medium' ? mediumBtn : hardBtn;
        btn.classList.add('active');
        setTimeout(() => {
            btn.classList.remove('active');
            nextCard();
        }, 300);
    }
    
    // Event listeners
    flashcard.addEventListener('click', flipCard);
    flipBtn.addEventListener('click', flipCard);
    nextBtn.addEventListener('click', nextCard);
    prevBtn.addEventListener('click', prevCard);
    shuffleBtn.addEventListener('click', shuffleWords);
    
    easyBtn.addEventListener('click', () => addToDifficultyLevel('easy'));
    mediumBtn.addEventListener('click', () => addToDifficultyLevel('medium'));
    hardBtn.addEventListener('click', () => addToDifficultyLevel('hard'));
    
    // Klavye kısayolları
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevCard();
        } else if (e.key === 'ArrowRight') {
            nextCard();
        } else if (e.key === ' ' || e.key === 'Spacebar') {
            flipCard();
            e.preventDefault(); // Sayfanın aşağı kaymasını engelle
        }
    });
    
    // Uygulamayı başlat
    init();
});