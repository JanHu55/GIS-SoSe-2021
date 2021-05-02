"use strict";
//Aufgabe1
//a)
console.log(min(-4, 3, 8, 12, 1, 16));
function min(...array) {
    let kleinsteZahl = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < kleinsteZahl) {
            kleinsteZahl = array[i];
        }
    }
    return kleinsteZahl;
}
//b)
isEven(75);
function isEven(zahl) {
    if (zahl == 0) {
        console.log("true");
    }
    else if (zahl < 0) {
        let vorzeichenWechsel = -zahl;
        isEven(vorzeichenWechsel);
        /*ohne diese Bedingung würde beim Einstzen von -1 ein Error augegeben werden,
        da negative Zahlen sonst nicht in die Wertemenge miteinbezogen werden.*/
    }
    else if (zahl == 1) {
        console.log("false");
    }
    else if (zahl > 1) {
        isEven(zahl - 2);
    }
}
let studi1 = { name: "Fred", matrikelNr: 203685, studiengang: "OMB", semester: 4 };
let studi2 = { name: "Frank", matrikelNr: 234596, studiengang: "IBM", semester: 1 };
let studi3 = { name: "Jessica", matrikelNr: 136595, studiengang: "SSB", semester: 5 };
let studiArray = [studi1, studi2, studi3];
studiArray.push({ name: "Tina", matrikelNr: 204587, studiengang: "MKB", semester: 3 });
console.log(studiArray);
function showInfo(student) {
    console.log("Name: " + student.name + ", Matrikelnummer: " + student.matrikelNr + ", Studiengang: " + student.studiengang + ", Semester: " + student.semester);
}
showInfo(studi1);
showInfo(studi2);
showInfo(studi3);
class Student {
    studiErstellung(_name, _matrikelNr, _studiengang, _semester) {
        this.name = _name;
        this.matrikelNr = _matrikelNr;
        this.studiengang = _studiengang;
        this.semester = _semester;
    }
    showInfo() {
        console.log(this.name, this.matrikelNr, this.studiengang, this.semester);
    }
}
//Aufgabe 2
//a)
let arr = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack = backwards(arr);
console.log(arr);
console.log(arrBack);
function backwards(array1) {
    let zähler = 0;
    let array2 = [];
    for (let i = array1.length - 1; i >= 0; i--) {
        array2[zähler] = array1[i];
        zähler++;
    }
    return array2;
}
//b)
console.log(join(arr, [15, 9001, -440]));
function join(array1, array2) {
    for (let i = 0; i < array2.length; i++) {
        array1.push(array2[i]);
    }
    return array1;
}
//c)
arr = split(arr, 0, 4);
console.log(arr);
console.log(split(arr, 1, 2));
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function split(array, a, b) {
    let arrayMitte = [];
    for (let i = a; i <= b; i++) {
        arrayMitte.push(array[i]);
    }
    return arrayMitte;
}
//Aufgabe 3
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
//a)
//Himmel
context.fillStyle = "lightblue";
context.fillRect(10, 10, 500, 500);
//Boden
context.fillStyle = "green";
context.fillRect(10, 500, 500, 90);
//# sourceMappingURL=script.js.map