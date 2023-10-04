document.addEventListener('DOMContentLoaded', function(){
    
    var botonCalcular= document.getElementById('calcularBtn');
    
    botonCalcular.addEventListener('click',function(){
    
    calcularPromedio();
    });
});
function calcularPromedio(){
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);
    var promedio= (nota1 + nota2 + nota3)/3;
    document.getElementById('promedio').textContent = promedio.toFixed(2);
}