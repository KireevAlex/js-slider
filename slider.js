function Slider() {
    this.imagesUrls = [];
    this.currentImageIndex = 0;
    this.showPrevBtn = null;
    this.showNextfBtn = null;
    this.slideImage = null;
    this.start = function (elId) {
        var that = this;

        var elSelector = '#' + elId;
        var el = document.querySelector(elSelector);

        this.showPrevBtn = el.querySelector('.show-prev-btn'),
            this.showNextfBtn = el.querySelector('.show-next-btn'),
            this.slideImage = el.querySelector('.slideImg'),

            //добавляем событие 
            this.showPrevBtn.addEventListener('click', function (e) {
                that.onShowPrevBtnClic(e);
            });
            this.showNextfBtn.addEventListener('click', function (e) {
            that.onShowNextBtnClic(e);
            });

        // создаем массив изображений
        this.imagesUrls.push('https://cdn2.autocentre.ua/wp-content/uploads/2018/11/img-8098.jpg?resize=770x440');
        this.imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQL3T0Sjhl-XwsJ3MuGboA5CDwuxKTMk4vW8WVxxKtq27OjgVRy');
        this.imagesUrls.push('https://autoiwc.ru/images/audi/audi-rs7_1.jpg');
        this.imagesUrls.push('https://www.pvsm.ru/images/2020/01/13/5-fich-JavaScript-bez-kotoryh-ya-ne-mog-by-pisat-kod-perevod.jpeg');

        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = true;
    };
    this.onShowPrevBtnClic = function (e) {
        this.currentImageIndex--;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showNextfBtn.disabled = false;

        //disable prev button if need
        if (this.currentImageIndex === 0) {
            this.showPrevBtn.disabled = true;
        }
    };

    this.onShowNextBtnClic = function (e) {
        this.currentImageIndex++;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = false;

        //disable next button if need
        if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
            this.showNextfBtn.disabled = true;
        }
    };
}



