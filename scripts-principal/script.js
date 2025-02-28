function configurarTrocaDeMidia(containerSelector, imgSelector, videoSelector) {
    const container = document.querySelector(containerSelector);
    const img = document.querySelector(imgSelector);
    const video = document.querySelector(videoSelector);

    container.addEventListener('mouseenter', () => {
        img.style.display = 'none';
        video.style.display = 'block';
        video.play();
    });

    container.addEventListener('mouseleave', () => {
        video.style.display = 'none';
        img.style.display = 'block';
        video.pause();
        video.currentTime = 0;
    });
}

configurarTrocaDeMidia(".apresentacao-projetos__projetos-web__ilustracao-login", "#t1", "#t2" )
configurarTrocaDeMidia(".apresentacao-projetos__projetos-web__ilustracao-tcc", "#tt1", "#tt2" )
configurarTrocaDeMidia(".apresentacao-projetos__projetos-mobile__ilustracao-sympla", "#tm1", "#tm2" )