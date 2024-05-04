// write a javascript function that accept a number as a parameter and check wheter
//it is prime or not using recursion

function isPrimeNumber(n: number){
    function isPrime(num: number){
        if(num === 1 || num === 2){
            return `${n} is a prime number.`
    }
    if (n % num === 0){
        return `${n} is not a prime number.`;
    }
    return isPrime(num - 1);
}
return isPrime(n - 1);

}
 console.log(isPrimeNumber(0));//false
 console.log(isPrimeNumber(1));//false
 console.log(isPrimeNumber(67));//true