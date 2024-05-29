function HouseKeeper(yearsOfExperience, name, cleaningRepertorie) {
    this.yearsOfExperience = yearsOfExperience
    this.name = name
    this.cleaningRepertorie = cleaningRepertorie
}

var houseKeeper1 = new HouseKeeper(9, 'Tom', ['lobby', 'bedroom'])

console.log(houseKeeper1)
/*
HouseKeeper {
  yearsOfExperience: 9,
  name: 'Tom',
  cleaningRepertorie: [ 'lobby', 'bedroom' ]
}
*/

console.log(houseKeeper1.name) // Tom