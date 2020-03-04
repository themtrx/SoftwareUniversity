let solution = (function() {
    
    let result = [];
    let numRes = 0;

    function add(vec1,vec2) {
            let [x1,x2] = vec1;
            let [y1,y2] = vec2;

            result.push(x1+y1);
            result.push(x2+y2);
        return result
    }

    function multiply (vec, num) {
        [x,y] = vec;
        result.push(x*num);
        result.push(y*num);

        return result
    }

    function length (vec) {
        [x,y] = vec;

        numRes = Math.sqrt(Math.pow(x,2)+ Math.pow(y,2));

        return numRes;
    }

    function dot(vec1,vec2) {
        let [x1,x2] = vec1;
        let [y1,y2] = vec2;

        numRes = x1*y1 + x2*y2
        return numRes
    } 

    function cross(vec1,vec2) {
        let [x1,x2] = vec1;
        let [y1,y2] = vec2;

        numRes = x1*y2 - x2*y1
        return numRes
    }

    return {
        add: add,
        multiply:multiply,
        length:length,
        dot:dot,
        cross:cross
    }
})();

console.log(solution.cross([3, 7], [1, 0]));