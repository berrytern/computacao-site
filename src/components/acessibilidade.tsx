import React, { useState, useEffect, useRef } from 'react';

export function AccessibilityWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [fontSize, setFontSize] = useState(100);
    const [highContrast, setHighContrast] = useState(false);
    const [isReading, setIsReading] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [readingRate, setReadingRate] = useState(() => {
        return parseFloat(localStorage.getItem('accessibility-reading-rate')) || 1.0;
    });
    
    // Referências para controlar o estado da leitura
    const textContentRef = useRef('');
    const currentPositionRef = useRef(0);
    const speechSynthesisRef = useRef(null);
    
    // Aplicar mudanças ao documento
    useEffect(() => {
        document.documentElement.style.fontSize = `${fontSize}%`;
        
        if (highContrast) {
            document.body.classList.add('accessibility-high-contrast');
        } else {
            document.body.classList.remove('accessibility-high-contrast');
        }
    }, [fontSize, highContrast]);

    // Salvar a velocidade de leitura no localStorage
    useEffect(() => {
        localStorage.setItem('accessibility-reading-rate', readingRate.toString());
    }, [readingRate]);
    
    // Limpar a síntese de fala quando o componente for desmontado
    useEffect(() => {
        return () => {
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    // Função para obter uma voz feminina em português
    const getFemalePortugueseVoice = () => {
        if (!('speechSynthesis' in window)) return null;
        
        const voices = window.speechSynthesis.getVoices();
        
        // Prioridade 1: Voz feminina em português brasileiro
        let voice = voices.find(v => 
            (v.name.toLowerCase().includes('female') || 
             v.name.toLowerCase().includes('feminina') ||
             v.name.toLowerCase().includes('mulher')) && 
            (v.lang === 'pt-BR')
        );
        
        // Prioridade 2: Qualquer voz feminina em português
        if (!voice) {
            voice = voices.find(v => 
                (v.name.toLowerCase().includes('female') || 
                 v.name.toLowerCase().includes('feminina') ||
                 v.name.toLowerCase().includes('mulher')) && 
                (v.lang.startsWith('pt'))
            );
        }
        
        // Prioridade 3: Qualquer voz em português brasileiro
        if (!voice) {
            voice = voices.find(v => v.lang === 'pt-BR');
        }
        
        // Prioridade 4: Qualquer voz em português
        if (!voice) {
            voice = voices.find(v => v.lang.startsWith('pt'));
        }
        
        // Fallback: primeira voz disponível
        if (!voice && voices.length > 0) {
            voice = voices[0];
        }
        
        return voice;
    };

    // Função para dividir o texto em segmentos menores para melhor controle
    const splitTextIntoChunks = (text, chunkSize = 200) => {
        const chunks = [];
        const sentences = text.split(/(?<=\.|\?|\!)\s+/);
        let currentChunk = '';
        
        for (const sentence of sentences) {
            if ((currentChunk + sentence).length > chunkSize) {
                chunks.push(currentChunk);
                currentChunk = sentence;
            } else {
                currentChunk += (currentChunk ? ' ' : '') + sentence;
            }
        }
        
        if (currentChunk) {
            chunks.push(currentChunk);
        }
        
        return chunks;
    };

    // Função para iniciar a leitura do conteúdo
    const startReading = (resumeFromPosition = 0) => {
        if (!('speechSynthesis' in window)) return;
        
        // Cancelar qualquer leitura em andamento
        window.speechSynthesis.cancel();
        
        // Se estamos iniciando uma nova leitura (não continuando)
        if (resumeFromPosition === 0) {
            // Obter o conteúdo principal
            const mainContent = document.querySelector('main');
            if (!mainContent) {
                console.error('Elemento main não encontrado');
                return;
            }
            
            textContentRef.current = mainContent.textContent;
        }
        
        // Dividir o texto em chunks para melhor controle
        const textChunks = splitTextIntoChunks(textContentRef.current);
        
        // Encontrar o chunk correto para iniciar/continuar
        let startChunkIndex = 0;
        let accumulatedLength = 0;
        
        for (let i = 0; i < textChunks.length; i++) {
            if (accumulatedLength + textChunks[i].length >= resumeFromPosition) {
                startChunkIndex = i;
                break;
            }
            accumulatedLength += textChunks[i].length;
        }
        
        // Função para ler os chunks sequencialmente
        const readChunks = (index) => {
            if (index >= textChunks.length) {
                console.log(isPaused, isReading)
                // Leitura concluída
                setIsReading(false);
                setIsPaused(false);
                currentPositionRef.current = 0;
                return;
            }
            
            const chunk = textChunks[index];
            const utterance = new SpeechSynthesisUtterance(chunk);
            utterance.lang = 'pt-BR';
            utterance.rate = readingRate;
            
            // Selecionar voz feminina em português
            const femaleVoice = getFemalePortugueseVoice();
            if (femaleVoice) {
                utterance.voice = femaleVoice;
            }
            
            // Atualizar a posição atual
            currentPositionRef.current = accumulatedLength + 
                (index > startChunkIndex ? 0 : resumeFromPosition - accumulatedLength);
            
            // Quando terminar de ler este chunk, passar para o próximo
            utterance.onend = () => {
                currentPositionRef.current += chunk.length;
                if (!isPaused) {
                    readChunks(index + 1);
                }
            };
            
            // Armazenar a referência para controle
            speechSynthesisRef.current = {
                utterance,
                chunkIndex: index,
                textChunks
            };
            
            // Iniciar leitura deste chunk
            window.speechSynthesis.speak(utterance);
        };
        console.log(isPaused, isReading)
        // Iniciar a leitura a partir do chunk correto
        readChunks(startChunkIndex);
        setIsReading(true);
        setIsPaused(false);
    };

    // Função para pausar/continuar a leitura
    const togglePause = () => {
        if (!('speechSynthesis' in window) || !isReading) return;
        
        if (!isPaused || isReading) {
            // Pausar a leitura
            window.speechSynthesis.cancel();
            setIsPaused(true);
        } else {
            // Continuar a leitura de onde parou
            startReading(currentPositionRef.current);
            setIsPaused(false);
        }
    };

    // Função para parar a leitura
    const stopReading = () => {
        if (!('speechSynthesis' in window)) return;
        
        window.speechSynthesis.cancel();
        setIsReading(false);
        setIsPaused(false);
        currentPositionRef.current = 0;
        speechSynthesisRef.current = null;
    };

    // Função para alterar a velocidade de leitura
    const handleRateChange = (newRate) => {
        // Limitar a velocidade entre 0.5 e 2.0
        const clampedRate = Math.max(0.5, Math.min(2.0, newRate));
        setReadingRate(clampedRate);
        
        // Se estiver lendo, atualizar a velocidade
        if (isReading && !isPaused) {
            const currentPosition = currentPositionRef.current;
            stopReading();
            setTimeout(() => {
                startReading(currentPosition);
            }, 50);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <button 
                className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
                aria-label="Opções de acessibilidade"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            </button>
            
            {isOpen && (
                <div 
                    className="absolute bottom-16 right-0 bg-white p-4 rounded-lg shadow-xl border w-64" 
                    role="dialog"
                    aria-label="Opções de acessibilidade"
                >
                    <h3 className="font-bold mb-4 text-lg" id="accessibility-title">Acessibilidade</h3>
                    
                    <div className="mb-4">
                        <label htmlFor="font-size" className="block mb-2 font-medium">Tamanho da fonte:</label>
                        <div className="flex items-center">
                            <button 
                                onClick={() => setFontSize(Math.max(100, fontSize - 10))}
                                className="px-3 py-1 bg-gray-200 rounded-l hover:bg-gray-300 transition"
                                aria-label="Diminuir fonte"
                            >
                                A-
                            </button>
                            <span className="px-3 py-1 bg-gray-100 text-center flex-1">{fontSize}%</span>
                            <button 
                                onClick={() => setFontSize(Math.min(200, fontSize + 10))}
                                className="px-3 py-1 bg-gray-200 rounded-r hover:bg-gray-300 transition"
                                aria-label="Aumentar fonte"
                            >
                                A+
                            </button>
                        </div>
                    </div>
                    
                    <div className="mb-4">
                        <label className="flex items-center cursor-pointer">
                            <input 
                                type="checkbox" 
                                checked={highContrast}
                                onChange={() => setHighContrast(!highContrast)}
                                className="mr-2 h-4 w-4"
                                id="high-contrast"
                            />
                            <span className="font-medium">Alto contraste</span>
                        </label>
                    </div>
                    
                    {/* Controle de velocidade de leitura */}
                    <div className="mb-4">
                        <label htmlFor="reading-rate" className="block mb-2 font-medium">Velocidade de leitura:</label>
                        <div className="flex items-center">
                            <button 
                                onClick={() => handleRateChange(readingRate - 0.1)}
                                className="px-3 py-1 bg-gray-200 rounded-l hover:bg-gray-300 transition"
                                aria-label="Diminuir velocidade"
                                disabled={readingRate <= 0.5}
                            >
                                -
                            </button>
                            <span className="px-3 py-1 bg-gray-100 text-center flex-1">
                                {readingRate.toFixed(1)}x
                            </span>
                            <button 
                                onClick={() => handleRateChange(readingRate + 0.1)}
                                className="px-3 py-1 bg-gray-200 rounded-r hover:bg-gray-300 transition"
                                aria-label="Aumentar velocidade"
                                disabled={readingRate >= 2.0}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    
                    {/* Controles de leitura */}
                    <div className="flex space-x-2">
                        {!isReading ? (
                            <button 
                                onClick={() => {setIsPaused(false);startReading(0)}}
                                className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition flex items-center justify-center"
                                aria-label="Iniciar leitura"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                                Iniciar leitura
                            </button>
                        ) : (
                            <>
                                <button 
                                    onClick={togglePause}
                                    className="flex-1 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition flex items-center justify-center"
                                    aria-label={isPaused ? "Continuar leitura" : "Pausar leitura"}
                                >
                                    {isPaused ? (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                            </svg>
                                            Continuar
                                        </>
                                    ) : (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            Pausar
                                        </>
                                    )}
                                </button>
                                <button 
                                    onClick={stopReading}
                                    className="flex-1 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition flex items-center justify-center"
                                    aria-label="Parar leitura"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                                    </svg>
                                    Parar
                                </button>
                            </>
                        )}
                    </div>
                    
                    <div className="mt-4 text-xs text-gray-500">
                        Use as teclas Tab e Enter para navegar pelo site usando o teclado.
                    </div>
                </div>
            )}
        </div>
    );
}