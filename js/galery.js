const arr1 = ["'Квітучий сад' Самчук Ольга",
    "'Трамвайчик' Колос Ганна",
    "'Вранішній настрій' Колос Ганна",
    "'Дощ Виходить' Анатолій Ранок",
    "'Кури' Самчук Ольга",
    "'Лани' Колос Ганна",
    "'Лелека' Колос Ганна",
    "'Зимовий день' Рибак Сергій",
    "'Спекотний день.Човни' Чічіков Андрій",
    "'Пасіка' автор невідомий",
    "'Туманний ранок' автор невідомий",
    "'Світанок, пейзаж' Порхоменко Олексій"]
const arr2 = document.querySelectorAll("h4")
const arr3 = document.querySelectorAll('.why_lease-item-photo');
const arr4 = ['/images/pz1.jpg',
    '/images/pz2.jpg',
    '/images/pz3.jpg',
    '/images/pz4.jpg',
    '/images/pz5.jpg',
    '/images/pz6.jpg',
    '/images/pz7.jpg',
    '/images/pz8.jpg',
    '/images/pz9.jpg',
    '/images/pz10.jpg',
    '/images/pz11.jpg',
    '/images/pz12.jpg']
for (var i = 0; i < arr3.length; i++) {
    arr3[i].src = arr4[i]
    arr2[i].textContent = arr1[i]
}
document.getElementById("f1").style.color = "black";
document.getElementById("f2").style.color = "aquamarine";
document.getElementById("f3").style.color = "aquamarine";

function Scenery(event) {
    event.preventDefault();
    const arr1 = ["'Квітучий сад' Самчук Ольга",
        "'Трамвайчик' Колос Ганна",
        "'Вранішній настрій' Колос Ганна",
        "'Дощ Виходить' Анатолій Ранок",
        "'Кури' Самчук Ольга",
        "'Лани' Колос Ганна",
        "'Лелека' Колос Ганна",
        "'Зимовий день' Рибак Сергій",
        "'Спекотний день.Човни' Чічіков Андрій",
        "'Пасіка' автор невідомий",
        "'Туманний ранок' автор невідомий",
        "'Світанок, пейзаж' Порхоменко Олексій"]
    const arr2 = document.querySelectorAll("h4")
    const arr3 = document.querySelectorAll('.why_lease-item-photo');
    const arr4 = ['/images/pz1.jpg',
        '/images/pz2.jpg',
        '/images/pz3.jpg',
        '/images/pz4.jpg',
        '/images/pz5.jpg',
        '/images/pz6.jpg',
        '/images/pz7.jpg',
        '/images/pz8.jpg',
        '/images/pz9.jpg',
        '/images/pz10.jpg',
        '/images/pz11.jpg',
        '/images/pz12.jpg']
    for (var i = 0; i < arr3.length; i++) {
        arr3[i].src = arr4[i]
        arr2[i].textContent = arr1[i]
    }
    document.getElementById("f1").style.color = "black";
    document.getElementById("f2").style.color = "aquamarine";
    document.getElementById("f3").style.color = "aquamarine";
}

function Still_life(event) {
    event.preventDefault();
    const arr1 = ["'Нічна осінь' Шульга Денис",
        "'Смугастий натюрморт' Мельниченко Олег",
        "'Сало' Крамаренко Валентина",
        "'Натюрморт з хлібом' Валерія Пономарчук",
        "'Бургер і кола' Захарчук Євгенія",
        "'Соняшники та кавун' Таращук Денис",
        "'Гроанат та виноград' Васильєв Володимир",
        "'Півонії та полуниця' Гнатюк Катерина",
        "'Волошки та полуниця' Микитюк Поліна",
        "'Яблука' Галина Шевченко",
        "'Український натюрморт' Діана Васильчук",
        "'Калина' Олена Середа"]
    const arr2 = document.querySelectorAll("h4")
    const arr3 = document.querySelectorAll('.why_lease-item-photo');
    const arr4 = ['/images/nt1.jpg',
        '/images/nt2.jpg',
        '/images/nt3.jpg',
        '/images/nt4.jpg',
        '/images/nt5.jpg',
        '/images/nt6.jpg',
        '/images/nt7.jpg',
        '/images/nt8.jpg',
        '/images/nt9.jpg',
        '/images/nt10.jpg',
        '/images/nt11.jpg',
        '/images/nt12.jpg']
    for (var i = 0; i < arr3.length; i++) {
        arr3[i].src = arr4[i]
        arr2[i].textContent = arr1[i]
    }
    document.getElementById("f1").style.color = "aquamarine";
    document.getElementById("f2").style.color = "black";
    document.getElementById("f3").style.color = "aquamarine";
}

function Abstraction(event) {
    event.preventDefault();
    const arr1 = ["'Радуга над Києвом' Тарас Броварчук",
        "'Багряна осінь' Всеволод Захарчук",
        "'Зимовий Париж' Таращук Марія",
        "'Кихвський міст' Павлюк Марія",
        "'Вечірній Нью-Йорк' Кравченко Олена",
        "'Види Києва' Лисенко Тимофій",
        "'Зимовий Хрещатик' Вадим Мірошниченко",
        "'Міст метро' Федір Захарчук",
        "'Андрієвський узвіз' Кравченко Надія",
        "'Маріїнський палац' Оксана Антоненко",
        "'Дощ на Хрещатику' Ілля Панасюк",
        "'Майдан' Броваренко Всеволод"]
    const arr2 = document.querySelectorAll("h4")
    const arr3 = document.querySelectorAll('.why_lease-item-photo');
    const arr4 = ['/images/ab1.jpg',
        '/images/ab2.jpg',
        '/images/ab3.jpg',
        '/images/ab4.jpg',
        '/images/ab5.jpg',
        '/images/ab6.jpg',
        '/images/ab7.jpg',
        '/images/ab8.jpg',
        '/images/ab9.jpg',
        '/images/ab10.jpg',
        '/images/ab11.jpg',
        '/images/ab12.jpg']
    for (var i = 0; i < arr3.length; i++) {
        arr3[i].src = arr4[i]
        arr2[i].textContent = arr1[i]
    }
    document.getElementById("f1").style.color = "aquamarine";
    document.getElementById("f2").style.color = "aquamarine";
    document.getElementById("f3").style.color = "black";
}


