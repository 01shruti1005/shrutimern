//1 to 10

//Recursive function
const printTill10 = (i) => {
    if (i<=10) {    //11 <= 10
        console.log (i);   //1
        i++   //11
        printTill10 (i)  //11
    }
}

printTill10 (1)

