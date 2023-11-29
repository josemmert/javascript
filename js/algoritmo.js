//crear un algoritmo con pseudocodigo con las instrucciones para armar un sandwich de miga
/**precondiciones */
//paso 1: pedir si tiene pan, de no tenerlo, mandar a comprarlo
//paso 2: pedir los ingredientes que quiere en su sandwich
//paso 3: pedir al menos 5 ingredientes

/**ingredientes: 
 * pan de miga
 * lechuga
 * jamon
 * queso
 * huevo
 * pollo
 * tomate
 * ternera
 * mayonesa
 * mostaza
 * ketchup
 * 
 * */


let panDeMiga=prompt('¿Tiene pan de miga? (si/no)')
let ingrediente
let cantidadIngredientes=0

if (panDeMiga==='si') {
    
    while (cantidadIngredientes<=5) {
        prompt('Ingrese ingredientes para su sandwich')
        switch (ingrediente) {
            case jamon:
                prompt('Ingrese el siguiente ingrediente de su sandwich. Usted tiene actualmente ' + cantidadIngredientes + ' de 5')
                console.log('su sandwich tiene jamon');
                break;
        
            default:
                console.log('ingrese un ingrediente valido');
                break;
        }
        cantidadIngredientes++
    }
} else {
    console.log('Compre el Pan de miga');
}