//1 to 10

//Recursive function
const printTill10 = (i) => {
    if (i<=10) {    //11 <= 10
        console.log (i);   //1
        i++   //11
        printTill10 (i)  //11
    }
}

//printTill10 (1)


let cat = [
    {
           title: "Motors, tools and DIY",
           children: [
            { title: "Electric Bikes", children: null},
            { title: "Standard Bikes", children: null},
            { title: "Scooters", children: null},

           ],
    },
];
let dotData =[
    {
        title:"Chapter 1",
        section:[
            {
                title:"Section 1.1",
                section: [
                    {title: "Section 1.1.1", section:null},
                    {title: "Section 1.1.2", section: null},
                    {title: "Section 1.1.3", section: null}
                ]
            }
        ]
    },
    {
        title:"Chapter 2",
        section:[
            {
                title:"Section 2.1",
                section: null
            }
        ]
    },
    {
        title:"Chapter 3",
        section:[
            {
                title:"Section 3.1",
                section: [
                    {title: "Section 3.1.1", section: null}
                ]
            },
            {
                title:"Section 3.2", section: null
            },
            {
                title:"Section 3.2",section: [
                    {title:"Section 3.2.1", section: null}
                ]
            }
        ]
    }
]

const printSec =(secdata , indent =1)=>{
    if(secdata){
        for (let data of secdata){
            console.log('\t'.repeat(indent),data.title)
            printSec(data.section, indent+1);
        }
    }
}

for(let sec1 of dotData){
    console.log(sec1.title);
    printSec(sec1.section);
}



