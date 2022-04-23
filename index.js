//document.querySelector(".selector") - повертає перший елемент який відповідає селектору переданому в аргумент
//document.querySelectorAll(".selector") - повертає масив елементів які відповідає селектору переданому в аргумент
//(будьякий елемент).innerHtml - міняє html елемента
//(будьякий елемент).append - додає до елемента
//document.createElement("div") - повертає новостворений елемент типу який переданий в якості парамету

//Вставити зображення в блок "mainTable__image"




//- За допомогою маніпуляцій DOM змінити title та текст в блоці "mainTable__header".
document.title = "МІЙ ДІМ"


const textElement = document.querySelector('.mainTable__header');
const textElementContent = textElement.innerHtml;
console.log(textElementContent);
textElement.innerHTML = "<p>ГАТНЕ - село в Україні, у Фастівському районі Київської області<p>" +
                        "<p>У селі було знайдено скелет мамонта, що зараз перебуває на експозиції,<p>" +
                        "що зараз перебуває на експозиції в Палеонтологічному музеї в м. Києві"




const contentElement = document.querySelector('.mainTable__content');
const contentElementContent = contentElement.innerHtml;
console.log(contentElementContent);
contentElement.innerHTML = "<p>Історична дата утворення села — <u><b>1169 рік</b></u><p>"+
"<p>У <u><b>1926 році</b></u> в селі було створено артіль<p>"+
"<p>У <u><b>1929 році</b></u> було оголошено суцільну колективізацію<p>"+
"<p>В липні-вересні <u><b>1941 року</b></u>, на основному напрямку наступу військ Вермахту кипіли бої. Хутір 4 рази переходив з рук в руки, піддавався бомбардуванням, пережив окупацію<p>" +
"<p><u><b>3 березня 2022 року</b></u> російські війська завдали потужного авіаудару по селу <p>"




