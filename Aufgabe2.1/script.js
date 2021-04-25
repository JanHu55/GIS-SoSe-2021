"use strict";
//Aufgabe1 - Basics
function a1() {
    let x = "Alles";
    console.log(x);
    func2();
    console.log(x);
    func1();
    console.log(x + "Logo!");
}
a1();
function func1() {
    console.log("Klar?");
}
function func2() {
    console.log("Gute!");
}
/*a)
Möglich sind alle Variablennamen jedoch ist var obsolet da sie globale Variablen überschreibt.
*/
/*b)
Zeile 3: Zuerst wird der String "Alles" der Variablen x zugewiesen.
Zeile 4: Nun wird x in der Konsole augegeben.
Zeile 5: Die Funktion func1 wird aufgerufen dafür springt das Programm in Zeile 11 und führt dieses aus, indem es "Klar?" auf der Konsole ausgibt.
Zeile 6: In der Konsole wird "Logo" ausgegeben.
*/
/*
function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while( i > 0);
}

a2();
*/
/*Aufgabe 2
In der Konsole werden die Werte von 9 bis 1 ausgegeben.
Während das Program do ausführt wird das i was zunächst den Wert 9 hat augegeben. Anschließend wird i ein neuer Wert zugewiesen, welcher i-1 ist.
Das wäre in der ersten do-Schleife der Wert 8.
In der while-Schleife wird das das Stoppen der schleifendurchgänge bewerkstelligt, indem die Schleife beendet wird, wenn der i-Wert unter 0 fällt.
*/
//Aufgabe 4
/*
let x: string = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);

function func1(y: string): void{
    y = "Bla";
    console.log(y);
}

function func2(): void{
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void{
    x = "Test";
}
*/
/*a) Zunächst wird der Variablen x der String "Hallo" zugewiesen.
Dann wird Sie in der Konsole augegeben.
Dann wird die der Variablen in der Funktion func1 der neue String "Bla" zugewiesen und ausgegeben.
Anschließend wird wieder der String "Hallo" ausgegeben. Er wurde lediglich in func1 von der lokalen Variablen überschrieben und ist außerhalb der Funktion weiterhin die globale Variable.
In der Nächsten Funktion wird der Variablen der String "Blubb" zugeteilt und anschließend ausgegeben.
In der letzen Funktion wird der Variablen der String "Test" zugeteilt und in der letzen Konsolenausgabe ausgegeben.
In der letzten Funktion wurde die Globale Variable überschrieben, weswegen  die letzte Konsolenausgabe den Wert aus der vorherigen Funktion ausgibt.

b) Eine lokale variable existiert nur in der Funktion in der sie erzeugt wird und wird von anderen Funktionen nicht erkannt.
Eine lokale Variable ist Funktionsübergreifend und kann ebenso in anderen Funktionen genutzt werden.
In Funktionen können Variablen deklariert und überschrieben werden. Diese werden dann durch die Main-Klasse aufgerufen.
Normale Variablen können sich innerhalb aber auch außerhalnb dieser Funktionen befinden. Funktionen werden eher verwendet, wenn der Inhalt der Funktion häufiger verwendet wird.
*/
//Aufgabe 5
//a)
multiply(3, 4);
function multiply(a, b) {
    let ergebnis = a * b;
    console.log(ergebnis);
}
//b)
function maxNumber(a, b) {
    if (a > b) {
        console.log(a);
    }
    else {
        console.log(b);
    }
}
//c)
/*
let i: number = 1, zaehler: number = 0;
while (i <= 100) {
    i++;
    zaehler += i;
}
console.log(zaehler);
*/
//d)
/*
for (var i: number = 0; i < 10; i++) {
    let randomNumber: number = Math.random() * 100;
    console.log(randomNumber);
}
*/
//e)
/*
factorial(5);
function factorial(n: number): void {
    let result: number = 1;
    if (n < 1) {
        console.log("1");
    } else {
        for (var i = 1; i <= n; i++) {
            result = result * i;
        }
        console.log(result);
    }
}
*/
//f)
/*
function leapyear (): void {
    for (var i = 1900; i <= 2021; i++) {
        if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
            console.log(i);
        }
    }
}
*/
//Aufgabe6
//a)
/*
let raute: string = "#", symbol: string = "#";
console.log(raute);
for (var i = 2; i < 8; i++) {
    raute += symbol;
    console.log(raute);
}
*/
//b)+c)
/*
for (var i = 1; i < 100; i++) {
    if (i % 5 == 0 &&  % 3 == 0) {
        console.log("FizzBuzz");
    } else if (i % 5 == 0 && i % 3 != 0) {
        console.log("Buzz");
    } else if (i % 3 == 0){
        console.log("Fizz");
    } else {
        console.log(i);
    }
}
*/
//d)+e)
schach(10, 20);
function schach(hight, width) {
    for (let i = 0; i < hight; i++) {
        let line = " ";
        for (let k = 0; k < width; k++) {
            if ((i + k + 1) % 2 == 0) {
                line += "#";
            }
            else {
                line += " ";
            }
        }
        console.log(line);
    }
}
//# sourceMappingURL=script.js.map