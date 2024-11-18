$(document).ready(function () {
    const screens = $(".screen");

    console.log(`@@  load `);


    let currentScreen = 0;

    // Функция показа нужного экрана
    const showScreen = (index) => {
        screens.hide(); // Скрываем все экраны
        screens.eq(index).show(); // Показываем только текущий экран
    };

    // Изначально показываем первый экран
    showScreen(currentScreen);

    // Логика переключения экранов при нажатии кнопок "Далее"
    $(".action-button").click(function () {
        if (currentScreen < screens.length - 1) {
            currentScreen++;
            showScreen(currentScreen);
        } else {
            alert("Спасибо за использование Nutrichat!");
        }
    });

    // Пример работы с чекбоксами (Экран 1)
    $(".experts input[type='checkbox']").change(function () {
        const selectedExperts = [];
        $(".experts input[type='checkbox']:checked").each(function () {
            selectedExperts.push($(this).parent().text().trim());
        });
        console.log("Выбранные эксперты:", selectedExperts);
    });

    // Пример работы с радиокнопками (Экран 2)
    $(".questions input[type='radio']").change(function () {
        const selectedQuestion = $(".questions input[type='radio']:checked").parent().text().trim();
        console.log("Выбранный параметр:", selectedQuestion);
    });

    // Пример отправки текста (Экран 3)
    $("textarea").on("input", function () {
        const suggestion = $(this).val();
        console.log("Предложение пользователя:", suggestion);
    });
});
