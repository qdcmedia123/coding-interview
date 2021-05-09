interface Users<T> {
	email: string;
	phone: T;
}

type PhoneString = Users<string>;
const UserPhoneString: PhoneString = {
	email: "bharatrose1@gmail.com",
	phone: "34345345",
};

type PhoneNumber = Users<number>;
const UserPhoneNumber: PhoneNumber = {
	email: "bharatrose1@gmail.com",
	phone: 34534535,
};

enum Countries {
	UAE,
	USA,
}

interface UserAddress extends Users<T> {
	country: T;
}
