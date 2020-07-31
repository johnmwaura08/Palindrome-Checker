function palindrome(str) {

        //removes non-alphanumerics 

    const newString = str.replace(/[_\W]/g, "");

    return isPalindrome(newString);
}

const isPalindrome = (str) => {

    return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}

// console.log(palindrome("_eye")); returns true;
// console.log(palindrome("race car")); returns true;
// console.log(palindrome("never odd or even")); returns true;
// console.log(palindrome("1 eye for of 1 eye.")); returns false;

