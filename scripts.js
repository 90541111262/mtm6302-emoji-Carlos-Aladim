document.addEventListener("DOMContentLoaded", () => {
    const emojis = [
        { code: '&#128512', decimal: '128512' },
        { code: '&#128513', decimal: '128513' },
        { code: '&#128514', decimal: '128514' },
        { code: '&#128515', decimal: '128515' },
        { code: '&#128516', decimal: '128516' },
        { code: '&#128517', decimal: '128517' },
        { code: '&#128518', decimal: '128518' },
        { code: '&#128519', decimal: '128519' },
        { code: '&#128520', decimal: '128520' },
        { code: '&#128521', decimal: '128521' },
        { code: '&#128522', decimal: '128522' },
        { code: '&#128523', decimal: '128523' },
        { code: '&#128524', decimal: '128524' },
        { code: '&#128525', decimal: '128525' },
        { code: '&#128526', decimal: '128526' },
        { code: '&#128527', decimal: '128527' }
  
    ];
    
    const emojiGallery = document.getElementById('emoji-gallery');

    emojis.forEach(emoji => {
        const emojiItem = document.createElement('div');
        emojiItem.classList.add('emoji-item');
        emojiItem.innerHTML = `
            <span>${emoji.decimal}</span>
            <code>${emoji.code}</code>
        `;
        emojiGallery.appendChild(emojiItem);
    });
});
