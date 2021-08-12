const data = [
    {
        name: 'Jonas',
        marks: [10, 2, 8, 4, 6]
    },
    {
        name: 'Maryte',
        marks: [3, 7, 9, 5]
    },
    {
        name: 'Petras',
        marks: [7, 7, 7]
    },
    {
        name: 'Ona',
        marks: [10, 9, 8, 7, 6]
    },
]

//console.log(data);

// PASTABA: jei kazkuri reikalavima atitinka daugiau nei vienas mokinys, spausdinti visus

// Isspausdinti mokinio varda ir pazymi, kuris turi prasciausia pazymi
// Isspausdinti mokinio varda ir pazymi, kuris turi geriausia pazymi

let minMark = 10;
let maxMark = 0;
let averageMarksList = [];

for (const { name, marks } of data) {
    let marksSum = 0;
    for (const mark of marks) {
        marksSum += mark;

        if (mark < minMark) {
            minMark = mark;
        } else if (mark > maxMark) {
            maxMark = mark;
        }
    }

    if (marks.includes(minMark)) {
        console.log(`${name} turi prasciausia pazymi => ${minMark}.`);
    }

    if (marks.includes(maxMark)) {
        console.log(`${name} turi geriausia pazymi => ${maxMark}.`);
    }
    averageMarksList.push(marksSum / marks.length);
    //console.log(averageMarksList);
}

// Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi prasciausia pazymiu vidurki
// Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi geriausia pazymiu vidurki

let minMarksAverage = 10;
let maxMarksAverage = 0;

for (let i = 0; i < averageMarksList.length; i++) {
    const average = averageMarksList[i];
    //console.log(average);
    if (average >= maxMarksAverage) {
        maxMarksAverage = average;
    }

    if (average <= minMarksAverage) {
        minMarksAverage = average;
    }
}

for (let i = 0; i < averageMarksList.length; i++) {
    const average = averageMarksList[i];

    if (average === minMarksAverage) {
        console.log(`${data[i].name} turi zemiausia vidurki => ${minMarksAverage}.`);
    }
    if (average === maxMarksAverage) {
        console.log(`${data[i].name} turi auksciausia vidurki => ${maxMarksAverage}.`);
    }
}

// Isspausdinti mokinio varda, jei jis turi pazymi 8
for (const { name, marks } of data) {
    if (marks.includes(8)) {
        console.log(`Astuoneta turi ${name}.`);
    }
}

// Isspausdinti mokinio varda, jei jis neturi pazymio 7
for (const { name, marks } of data) {
    if (marks.includes(7) === false) {
        console.log(`Septyneto neturi ${name}.`);
    }
}