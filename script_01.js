
/***** Erinnerung: Arrays *******/

// let arr;
// arr = ["Ich","bin","Max"];
// output(arr);
// output(arr[2]);
// output("------------");

//output(arr[1])

/***** Objekte 1 Daten/Funktionen *******/


// output(person);
// output(person.firstName);

// const txt = "ich bin " + person.firstName + " " +
//                 person.famiylName + person.selary[0] + 
//                 person.Permission + " p.a .";

// output(txt);


/***** Objekte 2 - Hierarchie *******/

const baikal =  {
                        value: "10m" ,
                        deep:   {
                                        deeper:{
                                                geepest: "das licht ist - 1642m !"
                                        }


                        }

                };

output(baikal.value);
output(baikal.deep.deeper.geepest);

/** Ausgabe */
function output(outputData) {
        console.log(outputData);
}