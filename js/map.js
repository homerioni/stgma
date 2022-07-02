ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.735383, 37.701646],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            // balloonContent: 'Description'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-icon.png',
            // Размеры метки.
            iconImageSize: [150, 150],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-75, -75]
        });

    myMap.geoObjects.add(myPlacemark);
});