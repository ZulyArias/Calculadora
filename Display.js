class Display {
    constructor(DisplayvalorANT, DisplayvalorACT) {
        this.DisplayvalorANT = DisplayvalorANT;
        this.DisplayvalorACT = DisplayvalorACT;
        this.calculador = new Calculadora();
        this.valorANT = '';
        this.valorACT = '';
        this.TIPOperacion = undefined;
        this.signos = {
            sumar: '+',
            restar: '-',
            multiplicar: 'x',
            dividir: '/',
        }
    }

    borrarTODO() {
        this.valorACT = '';
        this.valorANT = '';
        this.TIPOperacion = undefined;
        this.imprimirVALORES();
    }

    computar(TIPOperacion) {
        this.TIPOperacion !== 'igual' && this.calcular();
        this.TIPOperacion = TIPOperacion;
        this.valorANT = this.valorACT || this.valorANT;
        this.valorACT = '';
        this.imprimirVALORES();

    }

    agregarNumero(numero) {
        this.valorACT = this.valorACT.toString() + numero.toString();
        this.imprimirVALORES();
    }

    imprimirVALORES() {
        this.DisplayvalorACT.textContent = this.valorACT;
        this.DisplayvalorANT.textContent = `${this.valorANT} ${this.signos[this.TIPOperacion] || ''}`;
    }

    calcular(){
        const valorANT = parseFloat(this.valorANT);
        const valorACT = parseFloat(this.valorACT);
        
        if (isNaN(valorACT) || isNaN(valorANT)) return;
        this.valorACT = this.calculador[this.TIPOperacion](valorANT, valorACT);
    }
}

