document.addEventListener("DOMContentLoaded", () => {
    const emojis = [
        { code: '&#128511', decimal: '128511' },
        { code: '&#128535', decimal: '128535' },
        { code: '&#128514', decimal: '128514' },
        { code: '&#128530', decimal: '128530' },
        { code: '&#128544', decimal: '128544' },
        { code: '&#128517', decimal: '128517' },
        { code: '&#128518', decimal: '128518' },
        { code: '&#128510', decimal: '128510' },
        { code: '&#128520', decimal: '128520' },
        { code: '&#128509', decimal: '128509' },
        { code: '&#128522', decimal: '128522' },
        { code: '&#128523', decimal: '128523' },
        { code: '&#128524', decimal: '128524' },
        { code: '&#128516', decimal: '128516' },
        { code: '&#128526', decimal: '128526' },
        { code: '&#128550', decimal: '128550' }
  
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
