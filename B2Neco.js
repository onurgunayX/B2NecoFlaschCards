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
        {
        word: "sich abkoppeln",
        preposition: "von+dat",
        example: "Er hat beschlossen, sich von der stressigen Arbeitsumgebung abzukoppeln und eine Auszeit zu nehmen.",
        translation: "to disconnect oneself, to detach oneself"
        },
        {
        word: "sich verschieben",
        preposition: "",
        example: "Der Termin hat sich um eine Stunde verschoben. Die Verantwortlichkeiten haben sich im Laufe der Zeit verschoben.",
        translation: "to shift, to move"
        },
        {
        word: "sich umstellen",
        preposition: "auf+Akk",
        example: "Nach dem Umzug müssten wir uns auf eine neue Umgebung umstellen. Der Mitarbeiter musste sich aufgrund neuer Technologien und Arbeitsabläufe umstellen.",
        translation: "to adapt, to adjust"
        },
        {
        word: "hervorrufen",
        preposition: "",
        example: "Das Bild hat starke Emotionen hervorgerufen. Die Entscheidung des Gerichts hat öffentlichen Widerstand hervorgerufen.",
        translation: "to evoke, to cause, to elicit, to induce"
        },
        {
        word: "missachten",
        preposition: "",
        example: "Er hat die Verkehrsregeln missachtet und wurde deshalb bestraft. Die Warnungen wurden leider oft missachtet.",
        translation: "to disregard, to ignore"
        },
        {
        word: "schwerwiegend",
        preposition: "",
        example: "Es gibt schwerwiegende Bedenken bezüglich der Sicherheit. Die Folgen des Unfalls waren schwerwiegend.",
        translation: "serious, significant"
        },
        {
        word: "schwächen",
        preposition: "",
        example: "Das schlechte Wetter hat die Struktur des Gebäudes geschwächt. Stress kann das Immunsystem schwächen.",
        translation: "to weaken, to diminish"
        },
        {
        word: "beeinträchtigen",
        preposition: "",
        example: "Der Lärm beeinträchtigt meine Konzentration. Die schlechte Wetterlage hat die Ernte beeinträchtigt.",
        translation: "to impair, to hinder, to affect"
        },
        {
        word: "unterschätzen",
        preposition: "",
        example: "Ich habe die Schwierigkeiten dieser Aufgabe unterschätzt. Viele Menschen unterschätzen ihr eigenes Potenzial.",
        translation: "to underestimate"
        },
        {
        word: "umsetzen",
        preposition: "",
        example: "Wir müssen die neuen Strategien in unserem Unternehmen umsetzen. Die Regierung plant, umweltfreudliche Maßnahmen umzusetzen.",
        translation: "to implement, to realize, to put into practice"
        },
        {
        word: "zwingen",
        preposition: "",
        example: "Er wurde gezwungen, ein Geständnis abzulegen. Die Umstände zwangen sie, eine Entscheidung zu treffen. Der Druck der Gesellschaft, in der sie lebt, zwingt sie dazu, einen Mann zu finden, bevor sie 30 wird.",
        translation: "to force, to compel"
        },
        {
        word: "Erfordernis",
        preposition: "",
        example: "Bewerber müssen bestimmte Erfordernisse erfüllen. Für diese Position besteht das Erfordernis eines abgeschlossenen Studiums.",
        translation: "requirement, necessity"
        },
        {
        word: "Tugend",
        preposition: "",
        example: "Die Tugend der Geduld ist eine wichtige Eigenschaft. Mut ist eine Tugend, die oft bewundert wird.",
        translation: "virtue"
        },
        {
        word: "gerecht",
        preposition: "",
        example: "Die Entscheidung des Richters war gerecht und basierte auf vorliegenden Beweisen.",
        translation: "fair, just"
        },
        {
        word: "durchaus",
        preposition: "",
        example: "Das ist durchaus eine gute Idee.",
        translation: "definitely, certainly, indeed, by all means"
        },
        {
        word: "überwinden",
        preposition: "",
        example: "Sie hat ihre Ängste überwunden und ist nun in der Lage, vor Publikum zu sprechen.",
        translation: "to overcome, to conquer"
        },
        {
        word: "wohnhaft",
        preposition: "",
        example: "Herr Müller ist wohnhaft in Berlin. Die Firma ist wohnhaft in einem Bürogebäude im Stadtzentrum. Rund ein Viertel der in der Schweiz wohnhaften Bevölkerung beteiligt sich an freiwilligen Arbeitseinsätzen.",
        translation: "residing, living, resident"
        },
        {
        word: "verrichten",
        preposition: "",
        example: "Er verrichtet seine Arbeit gewissenhaft und effizient. Der Gärtner verrichtet seine täglichen Aufgaben im Garten.",
        translation: "to carry out, to perform, to execute"
        },
        {
        word: "vorwiegend",
        preposition: "",
        example: "In diesem Stadtviertel leben vorwiegend ältere Menschen. Die Veranstaltung richtet sich vorwiegend an Familien mit Kindern. Der Film besteht vorwiegend aus dokumentarischen Aufnahmen.",
        translation: "predominantly, mainly"
        },
        {
        word: "ausschließlich",
        preposition: "",
        example: "Der Zugang zum Schwimmbad ist ausschließlich für Hotelgäste. In diesem Geschäft werden ausschließlich Bio-Produkte verkauft. Der Raum ist ausschließlich für Meetings und Besprechungen reserviert.",
        translation: "exclusively, solely"
        },
        {
        word: "Gleichstellung",
        preposition: "",
        example: "Die Gleichstellung von Frauen und Männern ist ein wichtiges Ziel der Gesellschaft.",
        translation: "equality, equal treatment"
        },
        {
        word: "Erwerbsarbeit",
        preposition: "",
        example: "Viele Menschen sind auf Erwerbsarbeit angewiesen, um ihre Lebensunterhalt zu verdienen.",
        translation: "employment"
        },
        {
        word: "Eheschließung",
        preposition: "",
        example: "Die Eheschließung fand in einer kleinen Kirche statt.",
        translation: "marriage, wedding"
        },
        {
        word: "Zuwendung",
        preposition: "",
        example: "Die Mutter schenkt ihrem Kind viel Zuwendung und Liebe. Ältere Menschen benötigen oft Zuwendung und Unterstützung um sich wohlzufinden.",
        translation: "affection, attention, devotion, care"
        },
        {
        word: "eintauchen",
        preposition: "",
        example: "Die Kinder liebten es, im Sommer ins kalte Wasser einzutauchen. Beim Lesen dieses Buches kann man in eine andere Welt eintauchen. Er eintauchte in die Arbeit und vergaß dabei die Zeit.",
        translation: "to immerse, to submerge"
        },
        {
        word: "verzaubern",
        preposition: "",
        example: "Der Magier verzauberte das Publikum mit seinen beeindruckenden Tricks.",
        translation: "to enchant, to charm, to bewitch"
        },
        {
        word: "sich befinden",
        preposition: "",
        example: "Das Restaurant befindet sich in der Innenstadt.",
        translation: "to be located, to be situated"
        },
        {
        word: "gießen",
        preposition: "",
        example: "Bitte gieß die Blumen, damit sie nicht vertrocknen.",
        translation: "to water"
        },
        {
        word: "hingegen",
        preposition: "",
        example: "Ich bevorzuge Tee, hingegen trinkt mein Bruder lieber Kaffee. Sie liebt Schokolade. Ihr Bruder hingegen bevorzugt Vanilla.",
        translation: "however, on the other hand, in contrast"
        },
        {
        word: "auf etwas ankommen",
        preposition: "",
        example: "Bei der Wahl seines Jobs kommt es nicht nur auf das Gehalt an, sondern auch darauf, ob man sich mit den Werten und Zielen des Unternehmens identifizieren kann. Wenn du Erfolg haben willst, kommt es darauf an, hart zu arbeiten und dranzubleiben.",
        translation: "to depend on, to be important, to be crucial"
        },
        {
        word: "ergreifen",
        preposition: "",
        example: "Er ergreift die Gelegenheit und nutzt sie zu seinem Vorteil. Er ergreift immer die Initiative und übernimmt Verantwortung für seine Aufgaben. Die Firma hat Maßnahmen ergriffen, um die Produktivität zu steigern.",
        translation: "to seize, to take the initiative, to take measures"
        },
        {
        word: "erschließen",
        preposition: "",
        example: "Durch den Bau der neuen Autobahn wird das abgelegene Gebiet besser erschlossen. Die Archäologen konnten aus den Funden auf dem Gelände wichtige Informationen über die antike Zivilisation erschließen. Durch intensive Recherche und Analyse konnte der Detektiv schließlich den Fall erschließen.",
        translation: "to open up, to make accessible, to develop, to understand"
        }
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
