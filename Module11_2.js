/*Задание 2.
Написать функцию, которая принимает на входе любое число (но не больше 1 000),
определяет, является ли оно простым, и выводит простое число или нет.
Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
*/

function definePrimeNumber(num)
{
    let i = 2;
    let j = 0;
    let result;
    while ((Math.pow(i,2) <= num ) && (j !== 1))
    {
        if (num % i === 0)
        {
            j = 1;
        }
        else
        {
            i++;
        }
    }
    if (j === 1)
    {
        result = 'Entered number is composite number';
    }
    else
    {
        result = 'Entered number is prime number';
    }

    return result;
}

let x = 5;

if ((typeof x == "number") && (x == x))
{
    if ((x < 1000) && (x != 0) && (x != 1))
    {
        console.log(definePrimeNumber(x));
    }
    else if ((x == 0) || (x == 1))
    {
        console.log(x,"is not prime number");
    }
    else
    {
        console.log("entered number > 1000");
    }
}
else
{
    console.log("Entered value is not number");
}
