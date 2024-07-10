function calculateAverage() {

    let subject1 = parseFloat(document.getElementById('subject1').value);
    let subject2 = parseFloat(document.getElementById('subject2').value);
    let subject3 = parseFloat(document.getElementById('subject3').value);


    let average = (subject1 + subject2 + subject3) / 3;

    document.getElementById('averageResult').value = average.toFixed(2);
}
