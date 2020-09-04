function cgp(x) {
    x[0]=x[0] * 4;
    x[1]=x[1] * 4;
    x[2]=x[2] * 3;
    x[3]=x[3] * 3;   
 }
scores = [52, 30 ,11 ,60]
gradeScores =[];
scores.forEach(score => {
    if (score <= 39 && score >= 0) {
        score = 1
    }
    else if (score <= 49 && score >= 40) {
        score = 2
    }
    else if (score <= 59 && score >= 50) {
        score = 3
    }
    else if (score <= 69 && score >= 60) {
        score = 4
    }
    else if (score <= 100 && score >= 70) {
        score = 5
    }
    else {
        score = 0;
    }
    console.log(score);
    gradeScores.push(score)
});
cgp(gradeScores);
let cgpa = 0;
gradeScores.forEach(element => {
    cgpa = cgpa + element;
});
console.log(scores);
console.log(gradeScores);
console.log(cgpa);