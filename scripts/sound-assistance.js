function speakInstruction(message) {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(message);
      const voices = window.speechSynthesis.getVoices();
      utterance.voice = voices.find(voice => voice.name === "Google Nederlands (Female)");
      utterance.lang = 'nl-NL';
      utterance.rate = 0.75;
      window.speechSynthesis.speak(utterance);
    } else {
      console.warn('Text-to-Speech is not available in this browser.');
    }
  }

  window.addEventListener('load', () => {
    // Ik heb dit even uit gezeg moet later weer aan
  });