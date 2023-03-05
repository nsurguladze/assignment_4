
//დავუშვათ გვინდა ობიექტიდან წავიკითხოთ შემდეგი ველი: user.banks[2].address.city. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს user ობიექტს და დააბრუნებს city-ს. გამოიყენეთ destructuring. თუ ასეთი ველი არ არსებობს უნდა დაბრუნდეს undefined.

const user = {
    banks: ["", "", ""]
}

const { address: {city} = {}} = user;

console.log(city);





