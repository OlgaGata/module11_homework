/*Задание 1.
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
При выполнении задания необходимо учесть, что массив может содержать не только числа,
но и, например, знаки, null и так далее.
На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название,
вызовите функцию, проанализируйте синтаксис.*/

function getLengthArray(array)
{
    let lengthArray = 0;
    return array.length;
}

function getQuantityEvenElements(array)
{
    let evenElements = 0;
    for (let i = 0; i < array.length; i++)
    {
        if ((typeof array[i] === 'number') && (array[i] === array[i]))
        {
            if (array[i] !== 0)
            {
                if ((array[i] % 2 == 0) && (array[i] != null))
                {
                    evenElements++;
                }
            }
        }
    }
    return evenElements;
}

function getQuantityOddElements(array)
{
    let oddElements = 0;
    for (let i = 0; i < array.length; i++)
    {
        if ((typeof array[i] === 'number') && (array[i] === array[i]))
        {
            if (array[i] !== 0)
            {
                if ((array[i] % 2 > 0) && (array[i] != null))
                {
                    oddElements++;
                }
            }
        }
    }
    return oddElements;
}

function  getQuantityZeroElements(array)
{
    let zeroElements = 0;
    for (let i = 0; i < array.length; i++)
    {
        if ((typeof array[i] === 'number') && (array[i] === array[i]))
        {
            if (array [i] == 0)
            {
                zeroElements++;
            }
        }
    }
    return zeroElements;
}

let arr = [0,1,2,3,4,5,6,7,8,9,1,23,20,'123yui','dd',null,'+',0,0,1,2];
console.log("Lenght of array = ", getLengthArray(arr));
console.log("Quantity even elements of array = ", getQuantityEvenElements(arr));
console.log("Quantity odd elements of array = ", getQuantityOddElements(arr));
console.log("Quantity zero elements of array = ", getQuantityZeroElements(arr));