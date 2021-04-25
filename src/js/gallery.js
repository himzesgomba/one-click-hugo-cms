window.$(() => {
    window.$('.gallery-image').on('click', function () {
        const images = JSON.parse(this.dataset.images);
        window.$(this).lightGallery({
            dynamic: true,
            dynamicEl: images.map(function (e) { 
                 return {src: e.img, 
                    thumb: e.thumb, 
                    subHtml: `<h4>${e.price}</h4><p>${e.description}</p>`};
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
});
