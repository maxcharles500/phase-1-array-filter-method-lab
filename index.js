// Code your solution here
/*function findMatching(arr, string) {
   let newArr = []
    if (arr.toLowerCase() === string.toLowerCase()) {
        return newArr = newArr.push(arr)
    }
}

drivers.filter (findMatching(drivers, string)) */

const findMatching = (driverArray, driver) => {
    //iterate over array
    //return array that matches string driver
    //
    return driverArray.filter(human => {
        //check where human === driver
        //case insensit6ive ? make all onecase
        return human.toLowerCase() === driver.toLowerCase()
    })

}

const fuzzyMatch = (driverArray, firstLetters) => {

    return driverArray.filter(driver => {
        const testLength = firstLetters.length
        return driver.slice(0, testLength).toLowerCase() === firstLetters.toLowerCase()
    })
}

const matchName = (driverArray, driver) => {

    return driverArray.filter(driverObj => {

        return driverObj.name === driver
    })
}