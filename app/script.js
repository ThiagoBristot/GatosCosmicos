function showContent(section) {
    let contentDiv = document.getElementById('content');
    if (section === 'projetos') {
        /*fetch('/get_images')
            .then(response => response.json())
            .then(data => {
                let imagesHTML = '<h2>Projetos</h2><div class="image-grid">';
                data.images.forEach((img, index) => {
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
            });*/
        let imagesHTML = '<h2>Projetos</h2><div class="image-grid">';
        const img = 'https://drive.google.com/file/d/1paxDuthXB4B_uAZ7zl5JkAsFfjfKLwAG/view'
        imagesHTML += `
            <div class="image-item">
                <img src="${img}" onclick="showOverlay('${img}')">
            </div>`;
        if ((index + 1) % 3 === 0) {
            imagesHTML += '<div class="clear"></div>';
        }
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