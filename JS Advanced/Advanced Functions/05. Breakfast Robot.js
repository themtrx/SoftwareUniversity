function solve () {
// save ingredients we need in object
    let ingreds = {
        apple: {
            carbohydrate: 1,
            flavour: 2 
        },
        lemonade:{
            carbohydrate: 10,
            flavour:20
        },
        burger:{
            carbohydrate: 5,
            fat:7,
            flavour:3
        },
        eggs:{
            protein:5,
            fat:1,
            flavour:1
        },
        turkey:{
            protein: 10,
            carbohydrate: 10,
            fat:10,
            flavour: 10
        }
    }
//save when we restock
    let obj = {
        protein:0,
        carbohydrate:0,
        fat:0,
        flavour:0
    }

//restock function
    function restockAndRep (args){

        [mainCommand, command, quant] = args.split(' '); //split arguments to array
        quant = Number(quant);

        if(mainCommand === 'restock') { //return success when adding ingreds and increment obj key values
            obj[command] += quant;
            return 'Success';
        }else if (mainCommand === 'report') { // return what we have on obj
            return `protein=${obj.protein} carbohydrate=${obj.carbohydrate} fat=${obj.fat} flavour=${obj.flavour}`;
        }

        let recepie = command;
        return prep(recepie,quant); // if we have to cook pass what we should cook and how many to prepare function

    }

    function prep(recep, quant) { // prepare function

        function needetIngred(ingredNeed, ingredHave) { // predicate function that will tell if we have enought ingreds from specific type
                let need = ingredNeed*quant;

                if(need>ingredHave) {
                    return true;
                }else {
                    return false;
                }
        }

        switch (recep) { // check how many ingreds we need for specific recepie
            case 'apple': {
                if (needetIngred(ingreds.apple.carbohydrate, obj.carbohydrate)){
                    return err('carbohydrate');
                }else if (needetIngred(ingreds.apple.flavour, obj.flavour)){
                    return err('flavour');
                }
                break;
            }
            case 'lemonade': {
                if (needetIngred(ingreds.lemonade.carbohydrate, obj.carbohydrate)){
                    return err('carbohydrate');
                }else if (needetIngred(ingreds.lemonade.flavour, obj.flavour)){
                    return err('flavour');
                }
                break;
            }
            case 'burger':{
                if (needetIngred(ingreds.burger.carbohydrate, obj.carbohydrate)){
                    return err('carbohydrate');
                }else if (needetIngred(ingreds.burger.fat, obj.fat)) {
                    return err('fat');
                }else if (needetIngred(ingreds.burger.flavour, obj.flavour)){
                    return err('flavour');
                }
                break;
            }
            case 'eggs':{
                if (needetIngred(ingreds.eggs.protein, obj.protein)){
                    return err('protein');
                }else if (needetIngred(ingreds.eggs.fat, obj.fat)) {
                    return err('fat');
                }else if (needetIngred(ingreds.eggs.flavour, obj.flavour)){
                    return err('flavour');
                }
                break;
            }
            case 'turkey':{
                if (needetIngred(ingreds.turkey.protein, obj.protein)){
                    return err('protein');
                }else if (needetIngred(ingreds.turkey.carbohydrate, obj.carbohydrate)) {
                    return err('carbohydrate');
                }else if (needetIngred(ingreds.turkey.fat, obj.fat)) {
                    return err('fat');
                }else if (needetIngred(ingreds.turkey.flavour, obj.flavour)){
                    return err('flavour');
                }
                break;
            }
            default:
                break;
        }

        return cook(recep,quant);
    }

    function err(str){ // if we dont have enough from any ingredient error is returned
        return `Error: not enough ${str} in stock`;
    }

    function cook(meal, num){ // if we have all needed ingredients we will cook them and make a meal
    let needProducts = Object.keys(ingreds[meal]) // give me ingreds that we need for that meal
                            .forEach((el) => {
                                obj[el] -= ingreds[meal][el] * num; // obj[el] is ingredients that we have on stock. Substract from them ingredient multiplicated with number of meals we need.
                            })
        return 'Success'
    }
    return restockAndRep;

}


let me = solve();

me("restock flavour 50");  // Success
me("restock carbohydrate 50");  // Success
me("prepare lemonade 2");


