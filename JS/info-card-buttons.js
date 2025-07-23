document.querySelectorAll('.toggler').forEach(button => {
        button.addEventListener('click', () => {
            const infoCard = button.closest('.info-card');
            const content = infoCard.querySelector('.content-container');
            const bannerwrapper = infoCard.querySelector('.banner-wrapper');
            const bannerH1 = bannerwrapper.querySelector('h1');
            const pointer = infoCard.querySelector('.pointer');
            const textcontainer = infoCard.querySelector('.text-container');

            infoCard.classList.toggle('expanded');
            button.classList.toggle('used');
            pointer.classList.toggle('visible');

            setTimeout(function(){
                content.classList.toggle('visible');
                bannerwrapper.classList.toggle('visible');
            }, 600);

            setTimeout(function(){
                bannerH1.classList.toggle('visible');
            }, 1000);
            
            setTimeout(function(){
                textcontainer.classList.toggle('grow');
            }, 1800);
        });
    });