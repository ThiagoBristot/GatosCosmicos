function showContent(section) {
    let contentDiv = document.getElementById('content');
    if (section === 'projetos') {
        let images = [
            'Resources/-1ntcx.jpg',
            'Resources/20211220_001724.jpg',
            'Resources/20230206_162217.jpg',
            'Resources/qtw1ix.jpg'
        ];
        
        let imagesHTML = '<h2>Projetos</h2><div class="image-grid">';
        images.forEach((img, index) => {
            imagesHTML += `
                <div class="image-item">
                    <img src="${img}" onclick="showOverlay('${img}')">
                </div>`;
            if ((index + 1) % 3 === 0) {
                imagesHTML += '<div class="clear"></div>';
            }
        });
        imagesHTML += '</div>';
        contentDiv.innerHTML = imagesHTML;
    } else if (section === 'sobre') {
        contentDiv.innerHTML = '<h2>Sobre Mim</h2><p>Informações sobre mim...</p>';
        } 
    else if (section === 'contato') {
        contentDiv.innerHTML = '<a href="https://www.instagram.com/sua_conta/" target="_blank" id="Btn"><button onclick="showContent("contato")" class="Btn"><svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512" class="svgIcon"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg><span class="text">Instagram</span></button></a>'
        }
}

document.getElementById('Btn').addEventListener('click', function() {
    window.location.href = 'https://www.instagram.com/sua_conta/';
});

function showOverlay(imgSrc) {
    const overlay = document.getElementById('overlay');
    const overlayImg = document.getElementById('overlay-img');
    overlayImg.src = imgSrc;
    overlay.style.display = 'flex';
}

function closeOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

/*function generateStar() {
    const starsContainer = document.getElementById('stars-container');
    const star = document.createElement('div');
    star.className = 'stars';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.width = Math.random() * 2 + 'px';
    star.style.height = star.style.width;
    starsContainer.appendChild(star);

    // Remover a estrela depois que ela sai da tela para não sobrecarregar a memória
    setTimeout(() => {
        starsContainer.removeChild(star);
    }, 20000); // Duração da animação (20 segundos) antes de remover a estrela
}

document.addEventListener('DOMContentLoaded', () => {
    // Gera estrelas continuamente a cada 50ms
    setInterval(generateStar, 50);
});*/

window.onload = function() {
    let images = document.querySelectorAll('.image-item img');
    let minHeight = Math.min(...Array.from(images).map(img => img.naturalHeight));

    images.forEach(img => {
        img.style.height = minHeight + 'px';
        img.style.width = 'auto'; // Mantém a proporção original
    });
};