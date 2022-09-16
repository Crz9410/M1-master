
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.
<!-- // declara o define una variable opcional mente iniciandola con un valor // -->
```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // = 10;
  console.log(a); // = 8;
  var f = function(a, b, c) {
    b = a;
    console.log(b); // = 9;
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // = 10;
}
c(8,9,10);
console.log(b); // = 10;
console.log(x); // = 1;
```

```javascript
console.log(bar); // = undefiend;
console.log(baz); // = error;
foo(); //= 'Hola'
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);// = "Tony"
```

```javascript
var instructor = "Tony";
console.log(instructor); // = "Tony"
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // = "Franco"
   }
})();
console.log(instructor); // = "Tony"
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // = "The Flash"
    console.log(pm); // = "Reverse Flash"
}
console.log(instructor); // = "Tony"
console.log(pm);// = "Franco"
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // = 2
"2" * "3" // = 6
4 + 5 + "px" // = "9px"
"$" + 4 + 5 // = "$45"
"4" - 2 // =  2
"4px" - 2 // = NaN
7 / 0 // = infinity
{}[0] // = undefiend
parseInt("09") // = 9
5 && 2 // = 2
2 && 5 // = 5
5 || 0 // = 5
0 || 5 // = 5
[3]+[3]-[10] // = 23 // se suman los dos 3 como estan en corchetes queda = [33]-[10] despues le quitamos el 10 el resultado es = 23
3>2>1 // = false
[] == ![] // true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // = undefiend;  por que esta no esta definida 
   console.log(foo()); // = 2 por hosting 

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack; // = como no se cumple el (if() por que es false el elemento llamado food) no se crea el contexto por que no entra al if.
}

getFood(false);
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname; 
      }
   }
};

console.log(obj.prop.getFullname()); //= 'Aurelio De Rosa'

var test = obj.prop.getFullname; // = vacio por que no se declara la funcion 

console.log(test()); // = undefiend
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
// } se muestra enla consola en el orden de (1, 4, 3, 2) por que despues del console.log (1), tenemos dos setTimeout que nos dan un tiempo de espera en 2 de (1000) y en 3 de (0), mientras que en 1 y 4 entramos directo sin esperar nada.

printing();
```
