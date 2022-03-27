window.onload = function () {
    var valor1;
    var valor2;

    var cuenta;
    var resultado = document.getElementById('resultado');
    var borrar = document.getElementById('borrar');



    function paso() {
        resultado.textContent = "";
    }

    function BorrarTodo() {
        eliminar.addEventListener ("click", () =>{
            Swal.fire({
                title: '¿Estás seguro de borrar todo?',
                text: "Una vez hecho esto, no podras revertirlo",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, borrar'
              }).then((result) => {
                if (result.isConfirmed) {
                    resultado.textContent = "";
                    valor1 = 0;
                    valor2 = 0;
                    cuenta = "";
                  Swal.fire(
                    '¡Borrado!',
                    'Los numeros fueron borrados con éxito',
                    'success'
                  )
                }
              })
        })
    }

    function total() {
        var res = 0;
        switch (cuenta) {
            case "+":
                res = parseFloat(valor1) + parseFloat(valor2);
                break;
            case "-":
                res = parseFloat(valor1) - parseFloat(valor2);
                break;
            case "*":
                res = parseFloat(valor1) * parseFloat(valor2);
                break;
            case "/":
                res = parseFloat(valor1) / parseFloat(valor2);
                break;
        }
        BorrarTodo();
        resultado.textContent = res;
    }

    uno.onclick = function (numero) {
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function (numero) {
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function (numero) {
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function (numero) {
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function (numero) {
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function (numero) {
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function (numero) {
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function (numero) {
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function (numero) {
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function (numero) {
        resultado.textContent = resultado.textContent + "0";
    }
    eliminar.onclick = function (op) {
        BorrarTodo();
    }
    suma.onclick = function (op) {
        valor1 = resultado.textContent;
        cuenta = "+";
        paso();
    }
    resta.onclick = function (op) {
        valor1 = resultado.textContent;
        cuenta = "-";
        paso();
    }
    multiplicacion.onclick = function (op) {
        valor1 = resultado.textContent;
        cuenta = "*";
        paso();
    }
    division.onclick = function (op) {
        valor1 = resultado.textContent;
        cuenta = "/";
        paso();
    }
    igual.onclick = function (op) {
        valor2 = resultado.textContent;
        total();
    }

}