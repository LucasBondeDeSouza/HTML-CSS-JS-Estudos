function HouseKeeper(yearsOfExperience, name, cleaningRepertorie) {
    this.yearsOfExperience = yearsOfExperience
    this.name = name
    this.cleaningRepertorie = cleaningRepertorie

    this.clean = function () {
      console.log('Cleaning in progress...')
    }
}

var houseKeeper1 = new HouseKeeper(12, 'James', ['bedroom'])

houseKeeper1.clean() // Cleaning in progress...