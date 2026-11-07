console.log("hello");





// class Customer {
//     name;
//     age;
//     address;

//     constructor(name, age, address) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }

// }
// let customer1 = new Customer("John Doe", 30, "123 Main St, Anytown, USA");
// let customer2 = new Customer("Jane Smith", 25, "456 Elm St, Othertown, USA");

// console.log(customer1);
// console.log(customer2);

// let Customer = {
//     name: "John Doe",
//     age: 30,
//     address: "123 Main St, Anytown, USA",
// }

// console.log(Customer);


let CustomerList = [
    {
        name: "Saman Kumara",
        age: 30,
        address:"Colombo, Sri Lanka",
        itemsDetails: [
            {
                BillNumber: "0001",
                item : [
                    {
                        itemName: "Item 1",
                        itemPrice: 100,
                    },
                    {
                        itemName: "Item 2",
                        itemPrice: 200,
                    }
                ]
            }
    
        ]
    },
    {
        name: "Nimal Perera",
        age: 25,
        address:"Kandy, Sri Lanka"
    },
    {
        name: "Sunil Silva",
        age: 35,
        address:"Galle, Sri Lanka"
    },
    {
        name: "Rajitha Fernando",
        age: 40,
        address:"Matara, Sri Lanka"
    },
    {
        name: "Samantha Perera",
        age: 30,
        address:"Colombo, Sri Lanka"
    }
]

console.log(CustomerList);
console.log(CustomerList[0].items[0].itemName);