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
//a) 
/*b)
Zeile 3: Zuerst wird der String "Alles" der Variablen x zugewiesen.
Zeile 4: Nun wird x in der Konsole augegeben.
Zeile 5: Die Funktion func1 wird aufgerufen dafür springt das Programm in Zeile 11 und führt dieses aus, indem es "Klar?" auf der Konsole ausgibt.
Zeile 6: In der Konsole wird "Logo" ausgegeben.
*/
function a2() {
    let i = 9;
    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}
a2();
/*Aufgabe 2
In der Konsole werden alle zahlen von 9 bis 0 augegeben.
Während das Program do ausführt wird das i was zunächst den Wert 9 hat augegeben. Anschließend wird i ein neuer Wert zugewiesen, welcher i-1 ist.
Das wäre in der ersten do-Schleife der Wert 8.
In der while-Schleife wird das das Stoppen der schleifendurchgänge bewerkstelligt, indem die Schleife beendet wird, wenn der i-Wert unter 0 fällt.
*/
//# sourceMappingURL=script.js.map