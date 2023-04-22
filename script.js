//#region Reto cara de creeper
//Declarar la variable pantlla, y optener del DOM el id del canvas.
var pantalla = document.getElementById("pantalla");
//declarar pincel y asignarle el contexto de dibujo del canvas
var pincel = pantalla.getContext("2d");
//asignandole un color al pincel usando la propiedad fillStyle.
pincel.fillStyle = "LightGray";
//usando la funcion fillRecct(0,0,0,0); para dibujar un rectangulo en pantalla
pincel.fillRect(0, 0, 600, 400);

//Cuerpo del creeper
pincel.fillStyle = "DarkGreen"; //propiedad
pincel.fillRect(90, 90, 350, 300); //funcion
//Ojos del creeper
pincel.fillStyle = "Black"; 
pincel.fillRect(150, 150, 90, 90); 
pincel.fillRect(330, 150, 90, 90); 
//nariz del creeper
pincel.fillStyle = "Black"; 
pincel.fillRect(250, 220, 70, 100); 
//partes de la boca (2)
pincel.fillStyle = "Black"; 
pincel.fillRect(320, 260, 40,110);
//Boca 2
pincel.fillStyle = "Black"; 
pincel.fillRect(210, 260, 40,110);
//#endregion