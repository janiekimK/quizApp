# quizApp
Abschlussprojekt Modul 347

Das Backend besteht aus einer simplen Quizz App welche ich zu Anfang mit einem JSON file gemacht habe, dieses jedoch dann zu einer SQLite DB ändern wollte.
Die Dependencies werden automatisch installiert, die Tabellen und Datenbank werden auch automatisch erstellt.
Da es gemäss den Dokumentaionen von Docker nur möglich ist jeweils einen postCreateCommand auszuführe, habe ich ein Bash File erstellt, welches mehrere Commands ausführt.


Das Backend wird automatisch zum Frontend verbunden, jedoch ist es leider nicht möglich das Frontend auf dem localhost:3000 zum laufen zu bringen, da ich den Server nicht automatisch zum laufen brachte.
