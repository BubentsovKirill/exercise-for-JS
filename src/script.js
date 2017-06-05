//*******************ARRAY*****************************//

//1
//найти общие делители у чисел
// function getDividers(number){
//     var result = [];
//     for(var i = 0; i <= number; i++){
//         if(number % i == 0){
//             result.push(i)
//         }
//     }
//     return result
// }
// function func(number1, number2){
//     var allDividers = getDividers(number1).concat(getDividers(number2));
//     var result = [];
//     NextInput:
//         for(var i = 0; i < allDividers.length;i++){
//             if(number1 % allDividers[i] == 0 && number2 % allDividers[i] == 0){
//                 var provedResult = allDividers[i];
//                 for(var j = 0; j < result.length; j++){
//                     if(result[j] == provedResult) continue NextInput;
//                 }
//                 result.push(provedResult);
//             }
//         }
//     return result;
// }
// console.log(func(30, 60));

//2
//разбиение массива на подмассивы
// var arr =  [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function dividerArr(arr, divider){
//     var newArr = [];
//     for(var i = 0; i < arr.length; i++){
//         if(i % divider == 0){
//             если условие верно добавляем пустой подмассив
//             newArr.push([]);
//         }
//         newArr[newArr.length-1].push(arr[i]);
//     }
//     return newArr
// }
// console.log(dividerArr(arr, 4));

//3
//проверка на наличие класса в строке и добавление его если нету
// var str = 'menu open close';
// function addClass(str, cls){
//     var arr = str.split(' ');
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] === cls) return;
//         если true - то след элемент массива
//     }
//     arr.push(cls);
//     var str = arr.join(' ');
//     return str
// }
// console.log(addClass(str, 'get'));
// console.log(addClass(str, 'get'));

//4
//удаление класса из строки
// var str = 'menu open close';
// function removeClass(str, cls){
//     var arr = str.split(' ');
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] == cls){
//             arr.splice(i,1);
//              удаляем из массива класс
//         }
//     }
//     var str = arr.join(' ');
//     return str;
// }
// console.log(removeClass(str,'close'));
// console.log(removeClass(removeClass(str,'close'),'open'));

//5
//если класс есть - удаляем, если нету - добавляем
// var str = 'menu open close';
// function toggleClass(str, cls){
//     var arr = str.split(' ');
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] == cls){
//             arr.splice(i,1);
//             удаляем
//         }
//         else{
//             arr.push(cls);
//             прибавляем
//         }
//     }
//     var str = arr.join(' ');
//     return str;
// }
// console.log(toggleClass(str,'get'));
// console.log(toggleClass(str,'menu'));

//6
//возвращает множественное или единственное число существительного
// var arr = ['яблоко', 'яблока', 'яблок'];
// function returnNoun(number, arr){
//     switch(number){
//         case 1:{
//             console.log(number + ' ' + arr[0])
//         }
//         break;
//         case 2:
//         case 3:
//         case 4:{
//             console.log(number + ' ' + arr[1])
//         }
//         break;
//         case (number):{
//             console.log(number + ' ' + arr[2])
//         }
//         break;
//         default:{}
//     }
// }
// returnNoun(555,arr); ///555 яблок

//7
//все счастливые билеты с 6 значными номерами
//функция для преобразования числа к нужному формату
// function getZero(number){
//     var length = number.toString().length;
//     if(length == 1){
//         return '00000' + number;
//     }
//     else if(length == 2){
//         return '0000' + number;
//     }
//     else if(length == 3){
//         return '000' + number;
//     }
//     else if(length == 4){
//         return '00' + number;
//     }
//     else if(length == 5){
//         return '0' + number;
//     }
//     else{
//         return number.toString()
//     }
// }
// цикл для сверки значений
// var number = 0;
// var result = [];
// while(number > 999999){
//     number++;
//     var arr = getZero(number).slice('');
//     var numberLeft = [];
//     var numberRight = [];
//     for(var i = 0; i < arr.length;i++){
//         if(i < 3){
//             numberLeft.push(+arr[i])
//         }
//         else{
//             numberRight.push(+arr[i])
//         }
//     }
//     var resultLeft = 0;
//     var resultRight = 0;
//     for(var i = 0; i < numberLeft.length; i++){
//         resultLeft += numberLeft[i]
//     }
//     for(var i = 0; i < numberRight.length; i++){
//         resultRight += numberRight[i]
//     }
//     if(resultLeft == resultRight){
//         result.push(getZero(number))
//     }
// }
// console.log(result);

//8
//перемешать массив в случайном порядке
// var arr = [1,2,3,4,5,6,7,8,9,10];
// function shuffle(arr){
//     arr.sort(function(a,b){
//         return Math.random() - 0.5;
//     });
//     console.log(arr)
// }
// shuffle(arr);

//9
//перемещать символы строки в случайном порядке
// var str = 'lorem ipsum dolores';
// function strShuffle(str){
//     var arr = str.split('');
//     arr.sort(function(a,b){
//         return Math.random() - 0.5
//     })
//     var str = arr.join('');
//     console.log(str);
// }
// strShuffle(str);

//10
//удалить дубли из массива
// var arr = [1,2,3,4,5,5,6,6,7,8,9,10];
// function union(arr){
//     var result = [];
//     NextInput:
//     for(var i = 0; i < arr.length; i++){
//         var val = arr[i];
//         for(var j = 0; j < result.length; j++){
//             if(result[j] == val){
//                 continue NextInput;
//             }
//         }
//         result.push(val)
//     }
//     return result;
// }
// console.log(union(arr));

//11
// вернуть элементы встречающиеся в каждом массиве - ??????? xз как сделать
// var arr1 = [1, 2, 3];
// var arr2 = [101, 2, 1, 10];
// var arr3 = [2,1];
// function union(arr1,arr2,arr3) {
//     var result = [];
//     var arr = [];
//     for(var i = 0; i < arguments.length; i++){
//         var array = arguments[i];
//         for(var j = 0; j < array.length; j++){
//            var elem = array[i]
//            if(array.indexOf(elem) !== -1){
//                arr.push(elem)
//            }
//         }
//     }
//     NextInput:
//     for(var z = 0; z < arr.length; z++){
//         var promElem = arr[z];
//         for(var q = 0; q < result.length; q++){
//             if(result[q] !== promElem) continue NextInput;
//             result.push(promElem);
//         }
//     }
//     return result;
// }
// console.log(union(arr1,arr2,arr3));

//12
//вывести определенное количество первых символов строки
// var str = 'lorem ipsun';
// function cut(str, number){
//     if(number == undefined){
//         number = 10;
//     }
//     var arr = str.split('');
//     for(var i = 0; i < number; i++){
//         arr.unshift(arr[0]);
//     }
//     var str2 = arr.join('');
//     return str2;
// }
// console.log(cut(str,12));

//13
//среднее арефметическое елементов массива
// var arr = [1,2,3,4,5,6,7,8,9,10];
// function getSumArifmetic(arr){
//     var result = 0;
//     for(var i = 0; i < arr.length; i++){
//         result += arr[i];
//     }
//     return result/i;
// }
// console.log(getSumArifmetic(arr));

//14
//создать новый массив с квадратами значений
// var arr = [1,2,3,4,5,6,7,8,9,10];
// var newArr = [];
// arr.forEach(function(item){
//     newArr.push(item * item)
// });
// console.log(newArr);

//15
//создать массив с квадратами значений через map
// var arr = [1,2,3,4,5,6,7,8,9,10];
// var square = arr.map(function(item){
//     return item * item
// });
// console.log(square);

//16
//проверить массив на то что все элементы больше 0
//что в нем есть отрицательные числа
// var arr = [1,2,3,4,5,6,7,8,9,10,-10,-20];
// function isPositive(number){
//     return number > 0
// }
// console.log(arr.every(isPositive)); //false
// console.log(arr.some(isPositive)); //true

//17
//оставить в массиве только отрицательные числа
// var arr = [1,2,3,4,-2,-3,33,-13];
// for(var i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//         arr.splice(i,1);
//         i--
//     }
// }
// console.log(arr);

//18
//оставить только четные числа
// var arr = [1,2,3,4,5,6,7,8,9,10,12,13,14,16,17,18];
// for(var i = 0; i < arr.length; i++){
//     if(arr[i] % 2 !== 0){
//         arr.splice(i,1);
//         i--
//     }
// }
// console.log(arr);

//19
//Оставить в массиве строки которые больше 5 символов
// var arr = ['lorem', 'Kirill', 'yes', 'no', 'kilimadjara'];
// var newArr = arr.filter(function(item){
//     return item.length > 5;
// })
// console.log(newArr);

//20
//оставить только подмасивы
// var arr = [1,[1,2],3,[3,4]];
// for(var i = 0 ; i < arr.length; i++){
//     if((typeof arr[i]) !== 'object'){
//         arr.splice(i,1);
//         i--
//     }
// }
// console.log(arr);

//21
//подсчитать количество отрицательных символов в массиве
// var arr = [1,-1,2,-3,3,3,4,5,6,-3,-4,-6];
// var counter = 0;
// for(var i = 0; i < arr.length; i++){
//     if(arr[i] < 0){
//         counter++
//     }
// }
// console.log(counter);

//22
//найти суммы чисел массива через REDUCE;
// var arr = [1,2,3,4,5,6,7,8,9,10];
// var result = arr.reduce(function(sum, current){
//     return sum + current
// },0);
// console.log(result);

//23
//найти сумму элементов массива до 0;
// var arr = [1,2,0,1,2,3];
// var result = 0;
// for(var i = 0 ; i < arr.length; i++){
//     if(arr[i] == 0) break;
//     result += arr[i]
// }
// console.log(result);

//24
//найти сумму элементов массива после 0;
// var arr = [1,2,0,1,2,3];
// arr.reverse();
// var result = 0;
// for(var i = 0 ; i < arr.length; i++){
//     if(arr[i] == 0) break;
//     result += arr[i]
// }
// console.log(result);

//25
//узнать сколько надо сложить с начала массива чисел чтобы получилось больше 10
// var arr = [1,2,3,4,5,6,7,8,9,10];
// var counter = 0;
// var result = 0;
// for(var i = 0; i < arr.length; i++){
//     counter++;
//     if(result > 10){
//         console.log(counter);
//         break;
//     }
//     result += arr[i];
//     console.log(result);
// }

//26
//оставить положительные числа и затем извлечь корень из них
// var arr = [1,2,3,5,-6,-22,-223,11,43445,33,-22];
// var newArr = [];
// for(var i = 0 ; i < arr.length; i++){
//     if(arr[i] < 0){
//         arr.splice(i,1);
//         i--;
//     }
//     else{
//         newArr.push(Math.sqrt(arr[i]))
//     }
// }
// console.log(newArr);


//******************************************DOM**********************************
//1
//поменять текс тега по нажатию на клавишу
// var button = document.querySelector('button');
// var span = document.querySelector('span');
// button.addEventListener('click',function(){
//     span.innerHTML = '!!!';
// });

//2
//менять span на b не изменяя текста
// var button = document.querySelector('button');
// var span = document.querySelector('span');
// button.addEventListener('click', function(){
//     var text = span.textContent;
//     span.remove();
//     var b = document.createElement('b');
//     b.innerHTML = text;
//     document.body.appendChild(b);
// })

//3
//заменить текс обзацев на index в соответствии с вызовом
// var button = document.querySelector('button');
// var elems = document.querySelectorAll('p');
// console.log(elems);
// button.addEventListener('click', function(){
//     for(var i = 0; i < elems.length; i++){
//         elems[i].innerHTML = i + 1;
//     }
// });

//4
//вывести значения input
// var button = document.querySelector('button');
// var input = document.querySelector('input');
// button.addEventListener('click', function () {
//     var text = input.value;
//     result.innerHTML = text;
//     input.value = '';
// });

//5
//содержимое input возвести в квадрат
// var button = document.querySelector('button');
// var input = document.querySelector('input');
// button.addEventListener('click', function(){
//    var value = +input.value;
//    result.innerHTML = value * value;
// });

//6
//поменяться значениями в input
// var button = document.querySelector('button');
// var input1 = document.getElementById('input1');
// var input2 = document.getElementById('input2');
// button.addEventListener('click', function(){
//     var text1 = input1.value;
//     var text2 = input2.value;
//     input1.value = text2;
//     input2.value = text1;
// });

//7
//изменить текст на кнопке
// var button = document.querySelector('input');
// button.addEventListener('click', function(){
//     button.value = 'some text'
// });

//8
//поменять цвет текста в input
// var button = document.querySelector('button');
// var input = document.querySelector('input');
// button.addEventListener('click', function(){
//     input.style.color  = 'red';
// });

//9
//заблокировать разблокировать ввод в input
// var block = document.querySelectorAll('button')[0];
// var unblock = document.querySelectorAll('button')[1];
// var input = document.querySelector('input');
// block.addEventListener('click', function(){
//     input.disabled = true;
// })
// unblock.addEventListener('click', function(){
//     input.disabled = false;
// })

//10
//добавить класс и удалить класс
// var div = document.getElementById('test');
// div.classList.add('www', 'eee');
// console.log(div.classList);
// div.classList.remove('www');
// console.log(div.classList);


//11
//проверка наличия класса
// var div = document.querySelector('div');
// for(var i = 0; i < div.classList.length; i++){
//     if(div.classList[i] == 'test'){
//         console.log('yes');
//     }
//     else{
//         console.log('no')
//     }
// }

//12
//проверить класс если нету добавить, если нет удалить
// var div = document.getElementById('result');
// for(var i = 0; i < div.classList.length; i++){
//     if(div.classList[i] == 'test1'){
//         div.classList.remove('test1')
//         i--
//     }
//     else{
//         div.classList.add('test1')
//     }
// }
// console.log(div.classList);

//13
//вывести все классы и узнать их количество;
// var div = document.querySelector('div');
// var counter = 0
// for(var i = 0; i < div.classList.length; i++){
//     counter++
//     console.log(div.classList[i]);
// }
//
// console.log(counter);

//14
//добавить слили к элементу через cssText
// var div = document.querySelector('div');
// div.style.cssText = 'background: red; height: 30px';

//15
//по клику на тег вывести его название
// var div = document.querySelector('div');
// div.addEventListener('click', function(){
//     console.log(div.tagName)
// });

//16
//по клику вывести названия тега в нижнем регистре
// var div = document.querySelector('div');
// div.addEventListener('click', function(){
//     console.log(div.tagName.toLowerCase());
// });

//17
//добавить название тега в нижнем регистре
// var elems = document.querySelectorAll('.www');
// console.log(elems);
// for(var i = 0; i < elems.length; i++){
//     var span = document.createElement('span');
//     span.innerHTML = elems[i].tagName.toLowerCase();
//     elems[i].appendChild(span);
// }

//18
//вставить li в конец ol;
// var ol = document.querySelector('ol');
// var li = document.createElement('li');
// li.innerHTML = 'test3';
// ol.appendChild(li);

// 19
// встать данные массива в список
// var arr = [1,2,3,4,5,6,7,8,9,0];
// var list = document.querySelector('ul');
// for(var i = 0; i < arr.length; i++){
//     var li = document.createElement('li');
//     li.innerHTML = arr[i];
//     list.appendChild(li);
// }

// 20
// создать div с p, данные из массива
// var arr = [1,2,3,4,5,6,7,8,9,0];
// var div = document.createElement('div');
// var body = document.querySelector('body');
// body.appendChild(div);
// for(var i = 0 ; i < arr.length; i++){
//     var p = document.createElement('p');
//     p.innerHTML = arr[i];
//     div.appendChild(p)
// }
//
// 21
// вставить перед элементом другой элемент
// var div = document.querySelector('div');
// var p = document.querySelector('p');
// var newP = document.createElement('p');
// newP.innerHTML = 'new P';
// div.insertBefore(newP,p);

//22
//вставить новый элемент перед p и повесить на него событие;
// var div = document.querySelector('div');
// var p = document.querySelector('p');
// var newP = document.createElement('p');
// newP.innerHTML = 'new P';
// div.insertBefore(newP,p);
// newP.addEventListener('click', function(){
//     newP.style.background = 'red';
// });

//23
//найти первого потомка и покрасить его в какой нить цвет
// var ul = document.querySelector('ul');
// var children = ul.children;
// for(var i = 0; i < children.length; i++){
//     if(i == 0){
//         children[i].style.color = 'red';
//     }
// }

//24
//найти последнего потомка и покрасить его в какой нить цвет
// var ul = document.querySelector('ul');
// ul.lastElementChild.style.color = 'red';

//25
//найти всех потомком и добавить им текст в конце
// var list = document.querySelector('ul');
// var children = list.children;
// for(var i = 0 ; i < children.length; i++){
//     var span = document.createElement('span');
//     span.innerHTML = ' !!!';
//     children[i].appendChild(span);
// }

//26
//найти соседа сверху и добавить ему текс
// var elem = document.querySelectorAll('li')[1];
// var prevElem = elem.previousElementSibling;
// prevElem.style.color = 'red';

//27
//найти соседа снизу и добавить ему текст
// var elem = document.querySelectorAll('li')[1];
// var nextElem = elem.nextElementSibling;
// nextElem.style.color = 'red';

//28
//найти соседа снизу и его соседа снизу
// var elem = document.querySelectorAll('li')[0];
// var therdElem = elem.nextElementSibling.nextElementSibling;
// therdElem.style.color = 'red';

//29
//найти родителя и покрасить его в какой нить цвет
// var p = document.querySelector('p');
// var parent = p.parentElement;
// parent.style.background = 'red';

//30
//найти родителя, найти потомком родителя, изменить цвет текста
// var elem = document.querySelectorAll('li')[0];
// var parent = elem.parentElement;
// var children = parent.children;
// for(var i = 0; i < children.length; i++){
//     children[i].style.color = 'red';
// }

//31
//по нажатию на кнопку удалить его последнего потомка
// var list = document.querySelector('ul');
// var lastChild = list.lastElementChild;
// var button = document.querySelector('button');
// button.addEventListener('click',function(){
//     lastChild.remove()
// });

//32
//клонировать елмент и вставить его в конец блока
// var parent  =  document.getElementById('parent');
// var elem = document.getElementsByClassName('elem')[0];
// var clone = elem.cloneNode(true);
// parent.appendChild(clone);

//33
//найти всех родителей;
// var elem = document.querySelector('li');
// console.log(elem);
// var parent = elem.parentNode.parentNode.parentNode.parentNode;
// console.log(parent);

//34
//вывести толщину границы
// var div = document.querySelector('div');
// console.log(div.clientTop);

//35
//вывести ширину и толщину елемента
// var div = document.querySelector('div');
// console.log(div.offsetWidth);
// console.log(div.offsetHeight);

//36
//размер элента без границы но с падингом
// var div = document.querySelector('div');
// console.log(div.clientWidth);
// console.log(div.clientHeight);

//37
//получить высоту и ширину элемента без учета границы и отступов
//getComputedStyle - получим обьект стилей элемента
// var div = document.querySelector('div');
// var style = getComputedStyle(div);
// console.log(style.width);
// console.log(style.height);

//38
//узнать на сколько был прокручен body
// var button = document.querySelector('button');
// var body = document.querySelector('body');
// button.addEventListener('click', function(){
//     console.log(body.scrollTop);
// });

//39
//узнать на сколько элемент прокручен ввлево
// var body = document.querySelector('body');
// var button  = document.querySelector('button');
// button.addEventListener('click', function(){
//    console.log(body.scrollLeft);
// });

//40
//по нажатию прокрутить страницу на заданную высоту или в самый конец
// var body = document.querySelector('body');
// var button = document.querySelector('button');
// button.addEventListener('click', function(){
//     body.scrollTop = body.scrollHeight;
// });

//41
//по нажатию на кнопку прокрутить страницу на определенное расстояние
// var body = document.querySelector('body');
// body.style.height = '2000px';
// var button = document.querySelector('button');
// button.addEventListener('click', function(){
//    body.scrollTop = body.scrollTop + 400
// });

//42
//прокрутить до определенного элемента чтобы он был в top страницы
// document.querySelector('body').style.height = '3000px';
// var p = document.querySelector('p');
// var button = document.querySelector('button');
// button.addEventListener('click', function(){
//    p.scrollIntoView(top);
// });

//43 ??????????????
// по нажатию на кнопку проверить прокручена страница до самого низа, если да прокрутить на 100px от top
// var body = document.querySelector('body');
// var button = document.querySelector('button');
// body.style.height = '2000px';
// console.log(body.style.height);
// console.log(body.scrollTop);
// button.addEventListener('click', function(){
//     if(body.scrollHeight == body.height){
//         body.scrollTop = 100;
//     }
// });






//**************************FUNCTION************************//

//**************************Interval and Timer****************//

//1
//запустить счетчик по клику на клавишу
// var button = document.querySelector('button');
// var result = document.getElementById('result');
// var counter = 0;
// function go(){
//     setInterval(function(){
//        result.innerHTML = counter++
//     }, 1000)
// }
// button.addEventListener('click', go);

//2
//запутить и остановить счетчик
// var runBtn = document.getElementById('run');
// var stopBtn  = document.getElementById('stop');
// var result = document.getElementById('result');
// var counter = 0;
//
// function go(){
//     run.disabled = true;
//     stopBtn.disabled = false;
//     window.timeId = setInterval(function(){
//         result.innerHTML = counter++
//     },1000)
// }
// function stop(){
//     runBtn.disabled = false;
//     stopBtn.disabled = true;
//     window.clearInterval(window.timeId);
// }
// runBtn.addEventListener('click',go);
// stopBtn.addEventListener('click',stop);

// 3
// сделать часы
// var result = document.getElementById('result');
// setInterval(function(){
//     var now = new Date();
//     var formDate = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
//     result.innerHTML = formDate
// }, 1000);

//4
//таймер обратного отчета
// var value = 10;
// var result = document.getElementById('result');
// var button = document.querySelector('button');
// button.addEventListener('click',secondMetr);
// function secondMetr(){
//    function interval(){
//        if(value == 0){
//             clearInterval(intervalId)
//             button.remove();
//             var newP = document.createElement('p');
//             newP.innerHTML = "end";
//             document.body.appendChild(newP)
//        }
//        result.innerHTML = value;
//        value--;
//    }
//    var intervalId = setInterval(interval, 300);
// }

//5
//слидер
// var img = document.querySelector('img');
// var z = 0;
// function func(){
//     if( z == undefined || z == 3){
//         z = 0
//     }
//     z = z + 1;
//     img.src = z + '.png'
// }
// var interval = setInterval(func,1000);

//6
//карусель c остановкой
// var imgs = document.querySelectorAll('img');
// var button = document.querySelector('button');
// var stop = document.getElementById('stop')
// imgs[0].src = '1.png';
// imgs[1].src = '2.png';
// imgs[2].src = '3.png';
// button.addEventListener('click', function(){
//     function func(){
//         var tmp = imgs[0].src;
//         imgs[0].src = imgs[1].src;
//         imgs[1].src = imgs[2].src;
//         imgs[2].src = tmp
//     }
//     window.interval = window.setInterval(func, 2000);
// });
// stop.addEventListener('click', function(){
//     window.clearInterval(window.interval);
// });

//7
// таймер до полуночи
// function timer(time){
//     var hours = document.getElementById('hours');
//     var minuts = document.getElementById('minuts');
//     var seconds = document.getElementById('seconds');
//     var now = new Date();
//     var midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 0, 0, 0);
//     var diff = Math.floor((midnight - now)/1000);
//     var houseRemain = Math.floor(diff/(60*60));
//     var minutsReamin = Math.floor((diff-houseRemain*60*60)/60);
//     var secondsRemain = Math.floor(diff%60);
//     hours.innerHTML = addZero(houseRemain);
//     minuts.innerHTML = addZero(minutsReamin);
//     seconds.innerHTML = addZero(secondsRemain);
//
// }
// //добавить нули
// function addZero(num){
//     if(num <=9) return '0'+num;
//     else return num;
// }
// var interval = setInterval(timer, 1000);


//практические задачи;
//калькулятрор
//для сложения чисел ввиде строк используем eval
// var buttons  = document.getElementsByClassName('button');
// var display = document.querySelector('input');
// var str = '';
// for(var i = 0; i < buttons.length; i++){
//     addEvent(buttons[i])
// }
// function addEvent(button){
//     button.addEventListener('click', function(){
//         var type = button.getAttribute('data-type');
//         if(type === '='){
//             str = eval(str);
//             display.value = str;
//             return
//         }
//         else if( type === 'c'){
//             str = ''
//         }
//         else{
//             str += type
//         }
//         display.value = str;
//     })
// }

//***************************************ES6 Class**************************************//

// class Task{
//     constructor(title = Task.getDefaultTitle()){
//         this.title = title;
//         this._done = false;
//         Task.count +=1;
//     }
//
//     complete(){
//         this._done = true;
//     }
//     get done(){
//         return this._done === true ? 'выполнено' : 'невыполнено';
//     }
//     //static method
//     static getDefaultTitle(){
//         return 'задача'
//     }
// }
//
// //статическое свойтво для класса
// Task.count = 0;
//
// let task = new Task('clear room');
// task.complete();
// console.log(task.done);


//