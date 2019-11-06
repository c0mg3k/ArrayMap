function Customer(firstName, lastName, age, favoriteFood, username, password, ssn) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.username = username;
    this.password = password;
    this.ssn = ssn;
    this.favoriteFood = favoriteFood;
}
// function CustomerDTO(firstName, lastName, username, favoriteFood) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.username = username;
//     this.favoriteFood = favoriteFood;
// }

let Christopher = new Customer(`Chris`, `Goeller`, 27, `Roast Beef`, `CoolGuyFresh`, `Password123`, 876443212);
let Anthony = new Customer(`Anthony`, `Barbareaa`, 49, `Chicken`, `ChickenLover`, `ShhhDontTell!`, 306329183);
let John = new Customer(`John`, `Karsten`, 51, `Chicken`, `JohnnieBoy23`, `SuperSaiyanSecret`, 110360025);
let Anne = new Customer(`Anne`, `Jacobson`, 44, `Chicken`, `LilOrphanAnnie`, `BigStageActress`, 452121336);
let Allie = new Customer(`Allie`, `Stephenson`, 12, `Candy`, `CandyLover1337`, `1337h4x0r`, 247796585);

const customers = [Christopher, Anthony, John, Anne, Allie];
