function showContent(section) {
    let contentDiv = document.getElementById('content');
        if (section === 'projetos') {
            // Liste os nomes das imagens manualmente aqui
            let images = [
                'Resources/eservice.png',
                'Resources/itemnota.png',
                'Resources/TipodeServico.jpg',
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
        }
    } if (section === 'sobre') {
        contentDiv.innerHTML = '<h2>Sobre Mim</h2><p>Informações sobre mim...</p>';
    }


document.getElementById('Btn').addEventListener('click', function() {
    window.location.href = 'https://www.instagram.com/sua_conta/';
});

function showOverlay(img) {
    let overlayHTML = `
        <div id="overlay" onclick="hideOverlay()">
            <img src="${img}">
            <button id="close-btn" onclick="hideOverlay()">Fechar</button>
        </div>`;
    document.body.insertAdjacentHTML('beforeend', overlayHTML);
}

function hideOverlay() {
    let overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.remove();
    }
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