function calc() {
    let a = +m1.value, b = +m2.value, c = +m3.value, d = +m4.value, e = +m5.value;
    let total = a + b + c + d + e;
    let per = total / 5;
    let grade = 'Fail';
    if (per >= 90) grade = 'A';
    else if (per >= 75) grade = 'B';
    else if (per >= 50) grade = 'C';
    out.innerHTML = 'Total: ' + total + '<br>Percentage: ' + per + '%<br>Grade: ' + grade;
}