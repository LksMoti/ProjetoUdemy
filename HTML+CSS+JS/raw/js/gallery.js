var overlay = document.querySelector('.jl-overlay');
var frameImage = document.querySelector('.jl-gallery-frame-image');
var frameContainer = document.querySelector('.jl-gallery-frame-container');
var galleryImages = document.querySelectorAll('.jl-thumb-box');
var closeGallery = document.querySelectorAll('.jl-toggle-gallery');
var btnNext = document.querySelector('.jl-item-next');
var btnPrev = document.querySelector('.jl-item-prev');
var currCounter = document.querySelector('.jl-current-slide');
var totalCounter = document.querySelector('.jl-total-slide');
var skeletonLoading = document.querySelector('.jl-skeleton-loading')

var postGallery = document.querySelector('.jl-post-gallery');
var postGalleryHeight = postGallery.clientHeight;
postGallery.style.height = (postGalleryHeight - 270) + 'px';

//Counter formater
var counterFormater = function(n) {
    if (n < 10) {
        return '0' + n;
    } else {
        return n;
    }
}

totalCounter.innerHTML = counterFormater(galleryImages.length);
//skeleton loading
const skeletonAnim = function(imagem) {
    var myImage = new Image();
    myImage.src = imagem;
    myImage.addEventListener('load', function() {
        skeletonLoading.classList.add('jl-fade-out');
        setTimeout(function() {
            skeletonLoading.style.display = 'none';
        }, 2000);
    });
}

//open gallery modal
const getImagesSrc = function() {
    for (var i = 0; i < galleryImages.length; i++) {
        galleryImages[i].addEventListener('click', function() {
            var imageSrc = this.querySelector('img').getAttribute('data-src');
            var itemNum = this.querySelector('img').getAttribute('data-item');

            skeletonLoading.style.display = 'flex';

            frameImage.setAttribute('src', imageSrc);
            frameImage.setAttribute('data-index', itemNum);

            overlay.classList.add('jl-is-open');
            frameContainer.classList.add('jl-is-open');

            currCounter.innerHTML = counterFormater(itemNum);

            skeletonAnim(imageSrc);

        });
    }

}
getImagesSrc();

for (var c = 0; c < closeGallery.length; c++) {
    closeGallery[c].addEventListener('click', function() {
        overlay.classList.remove('jl-is-open');
        frameContainer.classList.remove('jl-is-open');
    })
}


const nextItem = function() {

    //identificamos o item atual no frame
    var currItemNum = frameImage.getAttribute('data-index');
    //definimos o numero do proximo item
    var nextItemNum = parseInt(currItemNum) + 1;


    //fazemos o loop e identificamos qual item faz macth com o proximo item
    for (var n = 0; n < galleryImages.length; n++) {
        var item = galleryImages[n].querySelector('img');
        var itemNum = parseInt(item.getAttribute('data-item'));

        if (itemNum === nextItemNum) {
            //capturamos o data-src
            var nextSrc = item.getAttribute('data-src');
            var nextIndex = item.getAttribute('data-item');

            skeletonLoading.style.display = 'flex';

            //passamos o data-src para a tag de img frame
            frameImage.setAttribute('src', nextSrc);
            frameImage.setAttribute('data-index', nextIndex);

            currCounter.innerHTML = counterFormater(nextIndex);

            skeletonAnim(nextSrc);
        }
    }
}
btnNext.addEventListener('click', function() {
    nextItem();
})


const prevItem = function() {

    //identificamos o item atual no frame
    var currItemNum = frameImage.getAttribute('data-index');
    //definimos o numero do proximo item
    var prevItemNum = parseInt(currItemNum) - 1;


    //fazemos o loop e identificamos qual item faz macth com o proximo item
    for (var p = 0; p < galleryImages.length; p++) {
        var item = galleryImages[p].querySelector('img');
        var itemNum = parseInt(item.getAttribute('data-item'));

        if (itemNum === prevItemNum) {
            //capturamos o data-src
            var prevSrc = item.getAttribute('data-src');
            var prevIndex = item.getAttribute('data-item');

            skeletonLoading.style.display = 'flex';

            //passamos o data-src para a tag de img frame
            frameImage.setAttribute('src', prevSrc);
            frameImage.setAttribute('data-index', prevIndex);

            currCounter.innerHTML = counterFormater(prevIndex);

            skeletonAnim(prevSrc);
        }
    }
}
btnPrev.addEventListener('click', function() {
    prevItem();
})