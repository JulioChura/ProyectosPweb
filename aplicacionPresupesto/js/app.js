const ingresos = [
    new Ingreso("Salario", 2100),
    new Ingreso("Venta coche", 1500)
];

const egresos = [
    new Egreso("Renta departamento", 900),
    new Egreso("Ropa", 400)
];

let cargarApp = () => {
    cargarCabecero();
}

let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById("presupuesto").innerHTML = presupuesto;


}

let totalIngresos = () => {
    let totalIngresos = 0;
    ingresos.forEach( ingreso => {
        totalIngresos = totalIngresos + ingreso.valor;
    })
    return totalIngresos;
}

let totalEgresos = () => {
    let totalEgresos= 0;
    egresos.forEach( egreso => {
        totalEgresos = totalEgresos + egreso.valor;
    })
    return totalEgresos;
    
}
console.log(totalEgresos);