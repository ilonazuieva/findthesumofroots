function roots(a,b,c){

    let d = (b ** 2) - 4 * a * c;

    if (d < 0 ) {
        return null;
    }

    if (d == 0) {
        return (-b ) / (2 * a) * 2;
    }

    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);


    return +(x1 + x2).toFixed(2);

}
//https://www.codewars.com/kata/57d448c6ba30875437000138/solutions/javascript