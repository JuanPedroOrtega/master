console.log("************** DELIVERABLE 05 *********************");
// 5 Slot Machine
// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda.
// Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.
// Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que
// representarán el estado de las 3 ruletas.
//  El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:
// "Congratulations!!!. You won <número de monedas> coins!!";
//  y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina.
// En caso contrario deberá mostrar otro mensaje:
// "Good luck next time!!".
var SlotMachine = /** @class */ (function () {
    function SlotMachine() {
        this.coins = 0;
    }
    SlotMachine.prototype.play = function () {
        this.coins++;
        var won = this.getRandomBoolean() && this.getRandomBoolean() && this.getRandomBoolean();
        if (won) {
            console.log("Congratulations!!! You won ".concat(this.coins, " coins!!"));
            this.coins = 0;
        }
        else {
            console.log("Good luck next time!!");
        }
    };
    SlotMachine.prototype.getRandomBoolean = function () {
        return Math.random() >= 0.5;
    };
    return SlotMachine;
}());
var machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
