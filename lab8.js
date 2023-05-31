function showDate() {
    let out1 = document.getElementById('current-date1');
    let today1 = new Date();
    out1.innerHTML = 'Дата и время для русской локали: ' + today1.toLocaleString('ru-RU');

    let out2 = document.getElementById('current-date2');
    let today2 = new Date();
    out2.innerHTML = 'Дата и время для локали ЮАР: ' + today2.toLocaleString('ns-ZA');

    let out3 = document.getElementById('current-date3');
    let today3 = new Date();
    out3.innerHTML = 'Дата и время для локали Египта: ' + today3.toLocaleString('ar-EG');

    let out4 = document.getElementById('current-date4');
    let today4 = new Date();
    out4.innerHTML = 'Дата и время для греческой локали: ' + today4.toLocaleString('el-GR');

    let out5 = document.getElementById('current-date5');
    let today5 = new Date();
    out5.innerHTML = 'Дата и время для пакистанской локали: ' + today5.toLocaleString('ur-PK');

    let out6 = document.getElementById('current-date6');
    let today6 = new Date();
    out6.innerHTML = 'Дата и время для китайской локали: ' + today6.toLocaleString('zh');
    
}

function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    let Count_Days = document.getElementById('Count_Days');
    Count_Days.innerHTML = "Количество дней с даты рождения: " + daysCount;
}

function clear_date() {
    let inputDate = document.querySelector('input[type=date]');
    let Count_Days = document.getElementById('Count_Days');

    inputDate.value = '';
    Count_Days.innerHTML = '';
}