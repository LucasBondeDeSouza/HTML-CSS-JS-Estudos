function lifeInWeeks(age) {

    /************Don't change the code above************/

    //Write your code here.
    anosRestantes = 90 - age

    days = anosRestantes * 365
    weeks = anosRestantes * 52
    months = anosRestantes * 12

    return `You have ${days} days, ${weeks} weeks, and ${months} months left.`

    /*************Don't change the code below**********/
}

console.log(lifeInWeeks(56))