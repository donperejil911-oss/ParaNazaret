

// ============================================
// CONFIGURACIÓN DE LA HISTORIA
// ============================================
// Aquí defines toda tu historia de manera modular
// Puedes agregar tantas escenas y endings como quieras

const GAME_CONFIG = {
    // Título y configuración general
    title: "💖 Nuestra Historia de Amor 💖",
    subtitle: "Para la persona que mas amo :>",
    
    // Escena inicial
    startScene: "inicio",
    
    // Todas las escenas del juego
    scenes: {
        // ==========================================
        // ESCENA INICIAL
        // ==========================================
        inicio: {
            title: "El Comienzo",
            message: "Hola mi amor 💕\n\nHoy quiero que hoy sea un momento especial para nosotros y creé esto pensado para este dia. Cada decisión que tomes nos llevará por un camino diferente, hay 12 finales (me pashe me pashe)\n\nTenia pensado hacer de nuevo el obby de roblox pero ahora piden un documento para identificarse 😭 JAJAJA, Y buenoo espero te gustee amor #noalbullyng",
            choices: [
                {
                    text: "#sialbullyng",
                    nextScene: "primer_recuerdo"
                },
                {
                    text: "#noalbullyng",
                    nextScene: "explicacion"
                }
            ]
        },

        // ==========================================
        // RAMA: EXPLICACIÓN
        // ==========================================
        explicacion: {
            title: "Sobre Esta Aventura",
            message: "Ezooo JAJA, Esta es una pequeña aventura interactiva que hice pensando en ti.\n\nCada opción que elijas llevará a rutas diferentes, y yo te respondere con todo mi corazón.\n\nNo hay respuestas incorrectas, solo caminos diferentes hacia el mismo destino: recordarte cuánto te amo.\n\nListaaa?",
            choices: [
                {
                    text: "sí, comencemos 💖",
                    nextScene: "primer_recuerdo"
                },
                {
                    text: "Awww te amo",
                    nextScene: "momento_tierno"
                }
            ]
        },

        // ==========================================
        // RAMA: MOMENTO TIERNO
        // ==========================================
        momento_tierno: {
            title: "Un Momento Especial",
            message: "Yo también te amo, más de lo que las palabras pueden expresar.\n\nCada día contigo es un regalo. Eres mi mejor amiga, mi compañera de aventuras, mi lugar favorito en el mundo.\n\nGracias por elegirme cada día.\n\nQué te gustaría hacer ahora?",
            choices: [
                {
                    text: "Recordar nuestro primer encuentro 💫",
                    nextScene: "primer_encuentro"
                },
                {
                    text: "Pensar en nuestro futuro juntos 🌟",
                    nextScene: "futuro_juntos"
                }
            ]
        },

        // ==========================================
        // RAMA: PRIMER RECUERDO
        // ==========================================
        primer_recuerdo: {
            title: "Nuestros Recuerdos",
            message: "JAJAJA Sabes... hay tantos momentos contigo que atesoro en mi corazón.\n\nCada risa, cada broma, cada aventura... todo es especial porque es contigo.\n\nque tipo de recuerdos quieres que compartamos JSJS?",
            choices: [
                {
                    text: "Los momentos divertidos y de risas 😄",
                    nextScene: "momentos_divertidos"
                },
                {
                    text: "Los momentos románticos y especiales 💕",
                    nextScene: "momentos_romanticos"
                }
            ]
        },

        // ==========================================
        // RAMA: MOMENTOS DIVERTIDOS
        // ==========================================
        momentos_divertidos: {
            title: "Risas y Diversión",
            message: "Me encanta cuando nos reimos como lokos JAJA\n\nTu risa es mi sonido favorito en el mundo. Esos momentos donde jugamos, bromeamos y simplemente disfrutamos estar juntos son los que más feliz me hacen.\n\nContigo hasta lo más simple se vuelve una aventura increíble.\n\nY sabes qué más me encantaa?",
            choices: [
                {
                    text: "¿Qué cosa? 🤗",
                    nextScene: "revelacion_divertida"
                },
                {
                    text: "Ver un mensaje tuyo 💗",
                    nextScene: "ending_felicidad"
                }
            ]
        },

        // ==========================================
        // RAMA: MOMENTOS ROMÁNTICOS
        // ==========================================
        momentos_romanticos: {
            title: "Romance y Amor",
            message: "Cada momento romántico contigo es mágico 💕\n\nDesde nuestros tiktoks y mensajes dedicados, hasta esos momentos donde simplemento nos decimos cosas bonitas.\n\nEres el amor de mi vida, y cada día me enamoro más de ti.\n\nque significa el amor para ti JSJS?",
            choices: [
                {
                    text: "Estar juntos en las buenas y las malas",
                    nextScene: "amor_verdadero"
                },
                {
                    text: "Los pequeños detalles del día a día ✨",
                    nextScene: "detalles_amor"
                }
            ]
        },

        // ==========================================
        // RAMA: REVELACIÓN DIVERTIDA
        // ==========================================
        revelacion_divertida: {
            title: "Un Secreto",
            message: "Lo que iba a decir es que me encanta lo bien que la paso contigo. Me encanta tu humor tan....Como explicarlo? noshe JAJAJA \n\nSomos el equipo perfecto, tanto en los videojuegos como en la vida.\n\nLista para el final???",
            choices: [
                {
                    text: "Sí  ¿Qué sigue?",
                    nextScene: "ending_aventureros"
                },
                {
                    text: "Quiero que me digas algo más 💖",
                    nextScene: "ending_profundo"
                }
            ]
        },

        // ==========================================
        // RAMA: PRIMER ENCUENTRO
        // ==========================================
        primer_encuentro: {
            title: "El Día Que Todo Comenzó",
            message: "Recuerdo perfectamente la primera vez que te vi, En Natural disaster y Dead Rails JAJAJA \n\nNo sabía en ese momento que estaba conociendo a la persona con la que querría pasar el resto de mi vida.\n\nPero aquí estamos, y no cambiaría nada de nuestra historia.\n\ntu crees en el destino?",
            choices: [
                {
                    text: "Zi",
                    nextScene: "ending_destino"
                },
                {
                    text: "Vamonos a unos robloxx entonces ❤️",
                    nextScene: "ending_equipo"
                }
            ]
        },

        // ==========================================
        // RAMA: FUTURO JUNTOS
        // ==========================================
        futuro_juntos: {
            title: "Nuestro Futuro",
            message: "Cuando pienso en el futuro, siempre estás ahí a mi lado, un sueño y objetivo que tengo desde los 11; ser rico antes de los 25, ahora tengo 15 y estoy seguro de que quiero estar contigo el resto de mi vida, si estoy lejos de eso al llegar la fecha límite... (Que lo dudo pues eso sería muy feo JAJAJA) me va a entrar una depresión arrecha JAJA porque no me habré esforzado para conseguirlo.\n\nQuiero más aventuras, más risas, todo contigo.\n\nNo importa qué nos depare el futuro, sé que mientras estemos juntos, todo estará bien.\n\n¿Qué sueñas para nosotros? :>",
            choices: [
                {
                    text: "Más aventuras y viajes juntos 🗺️",
                    nextScene: "ending_aventuras"
                },
                {
                    text: "Un hogar lleno de amor y felicidad 🏡",
                    nextScene: "ending_hogar"
                }
            ]
        },

        // ==========================================
        // RAMA: AMOR VERDADERO
        // ==========================================
        amor_verdadero: {
            title: "Amor Incondicional",
            message: "Exactamente, mi amor \n\nEl amor verdadero no es solo estar juntos cuando todo es perfecto, sino elegirse mutuamente cada día, apoyarse, crecer juntos.\n\nY eso es lo que tenemos nosotros. Un amor fuerte, verdadero, que puede con todo.\n\nGracias por ser mi roca y mi refugio.",
            choices: [
                {
                    text: "Tú también eres mi refugio 🏡",
                    nextScene: "ending_refugio"
                },
                {
                    text: "Juntos somos invencibles 💅",
                    nextScene: "ending_invencibles"
                }
            ]
        },

        // ==========================================
        // RAMA: DETALLES DE AMOR
        // ==========================================
        detalles_amor: {
            title: "Los Pequeños Momentos",
            message: "Tienes toda la razón ✨\n\nSon esos pequeños momentos los que construyen algo grande: tu café por la mañana, tu sonrisa cuando llegas a casa, la forma en que dices mi nombre...\n\nCada detalle me recuerda por qué te amo tanto.\n\nY hoy quiero que sepas que esos pequeños momentos son los que más atesoro.",
            choices: [
                {
                    text: "Eso es tan hermoso 🥺",
                    nextScene: "ending_momentos"
                },
                {
                    text: "Yo también atesoro cada momento 💕",
                    nextScene: "ending_reciproco"
                }
            ]
        }
    },

    // ==========================================
    // ENDINGS (FINALES)
    // ==========================================
    // Puedes agregar tantos endings como quieras
    endings: {
        ending_felicidad: {
            title: "💕 Final: Felicidad Compartida 💕",
            message: "Yo tambien me pongo como loco a penas veo un mensaje de ti JAJA.\n\nGracias por ser mi compañera de risas, mi mejor amiga, mi todo.\n\nFeliz San Valentín, mi amor. Que este sea el primero de muchos más juntos.\n\nTe amo hoy, mañana y siempre. 💖",
            emoji: "😊💕✨"
        },

        ending_aventureros: {
            title: "Final: Maluma 🔥 ",
            message: "Somos el mejor equipo tanto en los videojuegos como en la vida.\n\nCada nivel que superamos juntos nos hace más fuertes. Cada obby imposible que pasemos es una prueba más de que juntos podemos con todo.\n\nPlayer 1 y Player 2, modo proz.\n\nTe amo, mi co-op favorita 💖  Y que bombardeen a los tierruos- (JAJAJA tenia que decirlo 💔, ezo e maloo) \n\n Creo que este es el final mas radom no she 💔",
            emoji: "🔥💕🏆"
        },

        ending_profundo: {
            title: "💝 Final: Amor Profundo 💝",
            message: "quiero que sepas es esto:\n\nEres la razón por la que creo en el amor verdadero. Eres mi presente y mi futuro. Eres mi hogar.\n\nGracias por amarme tal como soy, por crecer conmigo, por elegirme cada día.\n\nFeliz San Valentín, amor de mi vida. Esto es solo el comienzo de nuestra historia. 💖",
            emoji: "💝💕🌟"
        },

        ending_destino: {
            title: "✨ Final: Destino y Amor ✨",
            message: "Creo que el universo conspiró para que nos encontráramos.\n\nEntre millones de personas, millones de momentos posibles... nos encontramos.\n\nY ahora que te tengo, no te suelto nunca.\n\nGracias por ser mi destino. Te amo infinitamente. 💫💖",
            emoji: "✨💫💕"
        },

        ending_equipo: {
            title: "Final: Roblox",
            message: "Tienes razón, Vamonos a unos robloox 💗, No importa que juego sea, estar con tigo es lo que deseo\n\nCada decisión que tomamos juntos, cada momento que compartimos, está construyendo nuestra historia única.\n\nY qué rara pero hermosa historia estamos escribiendo\n\nFeliz San Valentín, mi amor. Sigamos escribiendo juntos. 💖",
            emoji: "💕📖"
        },

        ending_aventuras: {
            title: "🗺️ Final: Viajeros del Amor 🗺️",
            message: "El mundo es tan grande y hermoso, y quiero explorarlo todo contigo.\n\nCada lugar es mejor si estás a mi lado. Cada aventura es más emocionante si la compartimos.\n\nQue vengan mil viajes más, mil aventuras más, todas contigo.\n\nTe amooo 💖🌍",
            emoji: "🗺️✈️💕"
        },

        ending_hogar: {
            title: "🏡 Final: Nuestro Hogar 🏡",
            message: "Por eso, me esforzaré mas cada dia, por ti y nuestro futuro, aveces pienso ; ¿Vale la pena lo que hago?, ¿Lo lograré?, ¿y si no sale bien?. Luego pienso en ti y eso me motiva a seguir mejorar cada dia para conseguirlo... Y te juro que lo hare amor, se que seremos y seras una persona de gran valor mas de lo que ya eres, y cumpliras todos tus sueños.\n\n El hogar no es un lugar, es una persona. Y tu eres mi hogar.\n\nDonde estés tú, ahí quiero estar yo. Construyendo recuerdos, compartiendo sueños, creando nuestra vida juntos.\n\nGracias por ser mi hogar y mi familia.\n\nFeliz San Valentín, mi amor. 💖",
            emoji: "🏡💕✨"
        },

        ending_refugio: {
            title: "🏡 Final: Refugio Mutuo 🏡",
            message: "En tus brazos encuentro paz. En tu sonrisa encuentro alegría. En tu amor encuentro mi hogar.\n\nGracias por ser mi refugio en las tormentas y mi celebración en las victorias.\n\nSomos el refugio del otro, y eso es lo más hermoso que tenemos.\n\nTe amo profundamente. 💖",
            emoji: "🏡💕🌟"
        },

        ending_invencibles: {
            title: "Final: Poderosos 💅",
            message: "Juntos somos imparables. Juntos podemos con todo (incluso con los tocinos y los rubios, aunque sean el diablo 💔).\n\nCada desafío que enfrentamos nos hace más fuertes. Cada victoria que celebramos nos une más.\n\nTú y yo contra el mundo, mi amor.\n\nFeliz San Valentín 💖⚔️",
            emoji: "💅⚔️💕"
        },

        ending_momentos: {
            title: "✨ Final: Magia en lo Simple ✨",
            message: "Me alegra que lo veas así, porque es la verdad.\n\nLos grandes gestos son hermosos, pero son esos pequeños momentos diarios los que construyen un amor duradero.\n\nY contigo, cada momento pequeño es mágico.\n\nGracias por hacer mi vida extraordinaria. Te amo. 💖",
            emoji: "✨💕🌟"
        },

        ending_reciproco: {
            title: "💕 Final: Amor Correspondido 💕",
            message: "Saber que tú también atesoras cada momento me hace el más feliz del mundo.\n\nEsto es lo que hace nuestro amor tan especial: es mutuo, es profundo, es real.\n\nAmbos elegimos estar aquí, ambos elegimos amarnos cada día.\n\nY esa es la decisión más hermosa que he tomado. Te amo. 💖",
            emoji: "💕💖✨"
        }
    }
};

// Exportar la configuración
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GAME_CONFIG;
}