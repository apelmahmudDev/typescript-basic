const obj = { width: 10, height: 10 };
const area = obj.width * obj.heigth; // after hover showing error

console.log(3 / []); // after hover showing the error

let helloCountry = "Hello Bangladesh";

// interface
interface User {
	name: string;
	age: number;
	id: number;
}

const user: User = {
	name: "Milo",
	age: 33,
	id: 334,
};

const userInfo = (name: string, age: number, id: number) => {
	return `${name} is ${age} year's old and  id ${id}`;
};
