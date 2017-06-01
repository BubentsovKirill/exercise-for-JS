//*******************МАССИВЫ*****************************//

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
// while(number <= 999999){
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


