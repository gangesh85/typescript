// //string datatype
// const fName: string = 'Gangesh';
// console.log(fName);


// // number dataType
// const value: number = 10;
// console.log(value)


// // boolean dataType
// const isValid: boolean = true;
// console.log(isValid)


// // undefined dataType
// let variable: undefined;
// console.log(variable)


// // null dataType
// let value: null= null;
// console.log(value)


// // object dataType
// let object: {name: string} = {name: 'Deepesh'}
// console.log(object)


// // array dataType
// const array: { name: string }[] = [{ name: 'Kunal' }, { name: 'Chaitanya' }, { name: 'Deepesh' }]
// console.log(array)


// // tuple dataType
// const tuple: [string, number, boolean] = ['Kunal', 11, true]
// console.log(tuple)


// // any dataType
// let value: any = 'YourName'
// value = 24
// console.log(value)


// // unknown dataType
// let value: unknown = 'Gangesh';
// if (typeof value == 'string') {
//     value = value.toUpperCase()
// }
// console.log(value)


// // void dataType
// function someFunction(): void {
//     console.log('Nothing will return from this function.')
// }
// someFunction()

function exception(): never {
    throw new Error('Your error message')
}

try {
    console.log(exception())
} catch (err) {
    console.log(err.message)
}