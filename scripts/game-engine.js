

// ============================================
// GAME ENGINE - Motor del Juego
// ============================================
// Este archivo maneja toda la lógica del juego
// No necesitas modificar este archivo a menos que
// quieras agregar nuevas funcionalidades

class VisualNovelEngine {
    constructor(config) {
        this.config = config;
        this.currentScene = config.startScene;
        this.history = [];
        this.decisions = [];
        
        this.init();
    }

    // ==========================================
    // INICIALIZACIÓN
    // ==========================================
    init() {
        this.renderScene(this.currentScene);
        this.updateProgress();
    }

    // ==========================================
    // RENDERIZAR ESCENA
    // ==========================================
    renderScene(sceneId) {
        const scene = this.config.scenes[sceneId];
        const container = document.getElementById('gameContent');

        if (!scene) {
            console.error(`Escena no encontrada: ${sceneId}`);
            return;
        }

        // Guardar en historial
        this.history.push(sceneId);

        // Crear el HTML de la escena
        const sceneHTML = `
            <div class="message-box">
                <div class="scene-title">${scene.title}</div>
                ${this.formatMessage(scene.message)}
            </div>
            <div class="choices-container">
                ${this.renderChoices(scene.choices)}
            </div>
        `;

        container.innerHTML = sceneHTML;

        // Agregar event listeners a los botones
        this.attachChoiceListeners();

        // Actualizar barra de progreso
        this.updateProgress();

        // Efecto de corazones al cambiar de escena
        this.spawnHearts(3);
    }

    // ==========================================
    // FORMATEAR MENSAJE
    // ==========================================
    formatMessage(message) {
        // Convertir saltos de línea en párrafos
        const paragraphs = message.split('\n\n');
        return paragraphs.map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');
    }

    // ==========================================
    // RENDERIZAR OPCIONES
    // ==========================================
    renderChoices(choices) {
        if (!choices || choices.length === 0) {
            return '';
        }

        return choices.map((choice, index) => `
            <button class="choice-button" data-next-scene="${choice.nextScene}" data-choice-index="${index}">
                ${choice.text}
            </button>
        `).join('');
    }

    // ==========================================
    // AGREGAR LISTENERS A BOTONES
    // ==========================================
    attachChoiceListeners() {
        const buttons = document.querySelectorAll('.choice-button');
        
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const nextScene = e.target.dataset.nextScene;
                const choiceIndex = e.target.dataset.choiceIndex;
                
                // Guardar decisión
                this.decisions.push({
                    scene: this.currentScene,
                    choice: choiceIndex,
                    text: e.target.textContent.trim()
                });

                // Desactivar todos los botones temporalmente
                buttons.forEach(btn => btn.classList.add('disabled'));

                // Verificar si es un ending
                if (this.config.endings[nextScene]) {
                    setTimeout(() => this.showEnding(nextScene), 300);
                } else {
                    setTimeout(() => {
                        this.currentScene = nextScene;
                        this.renderScene(nextScene);
                    }, 300);
                }
            });
        });
    }

    // ==========================================
    // MOSTRAR ENDING
    // ==========================================
    showEnding(endingId) {
        const ending = this.config.endings[endingId];
        const container = document.getElementById('gameContent');

        if (!ending) {
            console.error(`Ending no encontrado: ${endingId}`);
            return;
        }

        const endingHTML = `
            <div class="ending-box">
                <h2>${ending.title}</h2>
                ${this.formatMessage(ending.message)}
                <div style="font-size: 3em; margin: 20px 0;">${ending.emoji}</div>
                <button class="restart-button" onclick="game.restart()">
                    🔄 Volver a Jugar
                </button>
            </div>
        `;

        container.innerHTML = endingHTML;

        // Efecto especial de corazones
        this.spawnHearts(15);

        // Actualizar progreso al 100%
        document.getElementById('progressBar').style.width = '100%';
    }

    // ==========================================
    // REINICIAR JUEGO
    // ==========================================
    restart() {
        this.currentScene = this.config.startScene;
        this.history = [];
        this.decisions = [];
        
        // Pequeña animación antes de reiniciar
        const container = document.getElementById('gameContent');
        container.style.opacity = '0';
        
        setTimeout(() => {
            this.renderScene(this.currentScene);
            container.style.opacity = '1';
        }, 300);
    }

    // ==========================================
    // ACTUALIZAR BARRA DE PROGRESO
    // ==========================================
    updateProgress() {
        const totalScenes = Object.keys(this.config.scenes).length;
        const visitedScenes = this.history.length;
        const progress = Math.min((visitedScenes / totalScenes) * 100, 100);
        
        document.getElementById('progressBar').style.width = progress + '%';
    }

    // ==========================================
    // CREAR CORAZONES FLOTANTES
    // ==========================================
    spawnHearts(count) {
        const hearts = ['❤️', '💕', '💖', '💗', '💓', '💝'];
        const container = document.getElementById('heartsContainer');

        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'floating-heart';
                heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.left = Math.random() * window.innerWidth + 'px';
                heart.style.bottom = '0px';
                heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
                
                container.appendChild(heart);

                setTimeout(() => {
                    heart.remove();
                }, 4000);
            }, i * 150);
        }
    }

    // ==========================================
    // OBTENER ESTADÍSTICAS
    // ==========================================
    getStats() {
        return {
            scenesVisited: this.history.length,
            decisionsCount: this.decisions.length,
            decisions: this.decisions,
            history: this.history
        };
    }

    // ==========================================
    // GUARDAR PROGRESO (FUNCIONALIDAD EXTRA)
    // ==========================================
    saveProgress() {
        const saveData = {
            currentScene: this.currentScene,
            history: this.history,
            decisions: this.decisions
        };
        
        localStorage.setItem('valentineGame_save', JSON.stringify(saveData));
        console.log('Progreso guardado');
    }

    // ==========================================
    // CARGAR PROGRESO (FUNCIONALIDAD EXTRA)
    // ==========================================
    loadProgress() {
        const saveData = localStorage.getItem('valentineGame_save');
        
        if (saveData) {
            const data = JSON.parse(saveData);
            this.currentScene = data.currentScene;
            this.history = data.history;
            this.decisions = data.decisions;
            
            this.renderScene(this.currentScene);
            console.log('Progreso cargado');
            return true;
        }
        
        return false;
    }
}

// ==========================================
// UTILIDADES ADICIONALES
// ==========================================

// Función para agregar efectos de sonido (si quieres implementarlo después)
function playSound(soundType) {
    // Aquí podrías agregar sonidos
    console.log(`Playing sound: ${soundType}`);
}

// Función para agregar efectos visuales adicionales
function addVisualEffect(effectType) {
    // Aquí podrías agregar más efectos visuales
    console.log(`Visual effect: ${effectType}`);
}

// ==========================================
// INICIALIZAR EL JUEGO
// ==========================================
let game;

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Crear instancia del juego
    game = new VisualNovelEngine(GAME_CONFIG);

    // Log para debugging
    console.log('🎮 Juego iniciado correctamente');
    console.log('📊 Configuración:', GAME_CONFIG);

    // Opcional: Cargar progreso guardado
    // game.loadProgress();
});

// Hacer el juego accesible globalmente para debugging
window.game = game;