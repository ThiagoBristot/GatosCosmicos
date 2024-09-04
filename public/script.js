function showContent(section) {
    let contentDiv = document.getElementById('content');
    if (section === 'projetos') {
        let images = [
            'Resources/-1ntcx.jpg',
            'Resources/20211220_001724.jpg',
            'Resources/20230206_162217.jpg',
            'Resources/qtw1ix.jpg'
        ];
        let imagesHTML = '<div class="background">';'<h2>Projetos</h2><div class="image-grid"></div>';
        images.forEach((img, index) => {
            imagesHTML += `
                <div class="image-item">
                    <img src="${img}" onclick="showOverlay('${img}')">
                </div>`;
        });
        imagesHTML += '</div>';
        contentDiv.innerHTML = imagesHTML;
    } else if (section === 'sobre') {
        contentDiv.innerHTML = '<h2>Sobre Mim</h2><p>Informações sobre mim...</p>';
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

function generateStar() {
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
});