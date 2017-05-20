const Employee = [
    { name: 'Nguyen', age: 36 },
    { name: 'Dinh', age: 24 },
    { name: 'Trang', age: 44 }
];
export default () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(Employee);
            //reject("Loi get data");
        }, 3000)
    })
}