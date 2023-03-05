

//დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს ნებისმიერ ობიექტს და დააბრუნებს იგივე მნიშვნელობების მქონე ახალ(განსხვავებულ) ობიექტს. გაითვალისწინე, რომ თუ ობიექტში კიდევ სხვა ობიექტებია იმათი ასლებიც უნდა შეიქმნას. გამოიყენეთ (...) ოპერატორი.


const user1 = {
    name1: "Me",
    address1: {
        country: "France"
    },
    skills: ["Javascript", "Python"]
}

const user2 = {
    ...user1,
    address1: {
        ...user1.address1
    },
    skills: [...user1.skills]
    
}

console.log(user2.skills)