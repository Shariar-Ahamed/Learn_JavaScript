// while loop

let num = 0;

while (num < 5) {
    console.log("Hello World : ", num); // Hello World : 0, Hello World : 1, Hello World : 2, Hello World : 3, Hello World : 4
    console.log(num); // 0 1 2 3 4
    num++;
    
    // num += 1;
    // num = count + 1;
    // num += 2;
    // num = count + 2;
}

// {
//[console.log("Hello World : " + num);]
// [console.log("Hello World : ", num);]
// এক কথায় বললে ভাই:

// ✅ **দুটাই ঠিক**, তবে

// * `,` (comma) দিলে 👉 **value ও type স্পষ্ট বোঝা যায়**
// * `+` (plus) দিলে 👉 **সবকিছু string এ রূপান্তর হয়**

// 👉 **Debug করার জন্য `,` ভালো**,
// 👉 **Message বানানোর জন্য `+` ভালো** 😎💯
//}



let i = 1;

while (i <= 15) {
    console.log(i); // 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
    i++;
}