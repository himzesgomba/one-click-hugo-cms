window.$(() => {
    window.$('.gallery-image').on('click', function () {
        const images = JSON.parse(this.dataset.images);
        window.$(this).lightGallery({
            dynamic: true,
            dynamicEl: images.map(function (e) {
                const subHtml =  e.price ? `<h4>${e.price}</h4><p>${e.description}</p>` : null;
                 return {src: e.img, 
                    thumb: e.thumb, 
                    subHtml: subHtml};
                }),
            thumbnail: true,
            rotate: false,
            zoom: false,
            download: false,
            fullScreen: false,
            share: false,
        });
        return false;
    });

    window.$('.static-image-grid').lightGallery();
});