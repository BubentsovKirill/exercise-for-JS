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
//все счасливые билеты 6 значные символы
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
//цикл для сверки значений
// var number = 0;
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
//         resultLeft +=numberLeft[i]
//     }
//     for(var i = 0; i < numberRight.length; i++){
//         resultRight +=numberRight[i]
//     }
//     if(resultLeft == resultRight){
//         console.log(getZero(number))
//     }
// }


//8


