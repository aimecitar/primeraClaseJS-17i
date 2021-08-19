let contador = 1000;
while (contador <= 100) {
  document.write("Elemento " + contador + "<br>");
  contador++;
}

//do while hacer ... mientras (se cumple la condicion)
/*
do{
  codigo ejecutable
} while(condicion){
}
*/

/*let Elemento = 100;
do {
  document.write("Elemento do-while " + Elemento + "<br>");
  Elemento--;
} while (Elemento >= 1);
*/

//estructura for

/*
  for(crear la variable; condición - lo que esaba en while entre parentesis -; incremento de la variable);

*/

for (let i = 100; i >= 1; i--) {
  document.write("elemento for " + i + "<br>");
}
