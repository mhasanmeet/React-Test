//our code
const getFullName = (fname, lname) =>{
    return `${fname} ${lname}`
}

//given actual output 
const actualFullName = getFullName("Mahmudul", "Hasan")

//given expected output
const expectedFullName = "Mahmudul Hasan"

//test if actual Full name and expected full name is matched 
if (actualFullName !== expectedFullName){
    throw new Error(`${actualFullName} is not matched with ${expectedFullName}`)
}
