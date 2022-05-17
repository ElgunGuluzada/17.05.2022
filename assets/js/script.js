// Task 1 Start
//  Bir method olsun iki parametr qebul etsin ve bu parametlerden birincisi ikinciye bolub neticeni geri qaytarsin

function Divide(num1, num2) {
    if(num2==0){
        alert("0-a bolmek olmaz")
    }
    return num1 / num2
}
console.log(Divide(150, 2));

// Task 1 End

// Task 2 Start
// Repeat deye bir method olsun ve iki parametr qebul etsin biri "word" digeri "count" yeni bu sekilde gonderilen count qeder 
// yan-yana yazdirib geri qaytarsin. Meselen: 
// Repeat ("Ha!") //Ha!
// Repeat ("Ha!", 2) //Ha!Ha!
// Repeat ("Ha!", 3) //Ha!Ha!Ha!

function Repeat(word, count = 3) {
    for (let index = 0; index < count; index++) {
        document.write(word);
    }
}
Repeat("Ha!", 3);

// Task 2 End

// Task 3 Start
// Bir method olsun gonderilen "n" sayda ededin hamisini toplayib geri qaytarsin.

function Numbers() {
    let sum = 0
    for (let index = 0; index < arguments.length; index++) {
        sum = sum + arguments[index];
    }
    return sum;
}
console.log(Numbers(5, 10, 15))

// Task 3 End

// Task 4 Start
// Sahe deye bir Method(lar) yaradilir


// Cevrenin sahesi -S = p*(r*r) (p=3)

function AreaOfCircle(r) {
    let p = 3;
    return p * r * r;
}
console.log(AreaOfCircle(5));

// Duzbucaqlinin sahesi -S = a*b
function AreaOfDuzbucaqli(a, b) {
    return a * b
}
console.log(AreaOfDuzbucaqli(5, 6));

// Ucbucaqlinin daxiline cekilmis cevrenin sahesi -S=p*r; p=(a+b+c)/2

function UcbucaginDaxilineCekilmisCevreninSahesi(a, b, c, r) {
    let p = (a + b + c) / 2;
    return p * r;
}
console.log(UcbucaginDaxilineCekilmisCevreninSahesi(5, 10, 15, 5));

// Task 4 End