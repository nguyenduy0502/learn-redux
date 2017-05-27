const Employee = [
    { name: 'Nguyen Duy', edu: "IT" },
    { name: 'Dinh Hieu', edu: "Tester" },
    { name: 'Huyen Trang', edu: "Designer" }
];
export default () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(Employee);
            //reject("Loi get data");
        }, 3000)
    })
}