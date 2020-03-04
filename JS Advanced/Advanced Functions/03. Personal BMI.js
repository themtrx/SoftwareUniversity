function solve () {
    [InpName,InpAge,InpWeight,InpHeight] = arguments;
    
    let obj = {
        name: InpName,
        personalInfo: {
            age:InpAge,
            weight: InpWeight,
            height: InpHeight
        },
        BMI: null,
        status: ''
    }


    obj.BMI = Math.round(obj.personalInfo.weight/Math.pow((obj.personalInfo.height/100),2));

        if(obj.BMI<18.5){
            obj.status += 'underweight';
        }
        else if (obj.BMI<25){
            obj.status+= 'normal';
        }else if (obj.BMI<30){
            obj.status+='overweight';
        }else if (obj.BMI>=30){
            obj.status+='obese';
        }

        if(obj.status === 'obese') {
            obj.recommendation = 'admission required';
        }
    
    return obj;
    

}
solve('Peter', 29, 75, 182);