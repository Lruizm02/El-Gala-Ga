//Loading..... 
function mostrarboton() {
    document.getElementById("elboton").style.display = "none";
    document.getElementById("miCanvas").style.display = "none";
}

setTimeout(function(){
    document.getElementById("elboton").style.display = "inline";
    document.getElementById("miCanvas").style.display = "inline";
    document.getElementById("loader").style.display = "none";
    }, 4000);

 //Ejecutar Funcion   
setTimeout(mostrarboton(), 200000);


//Boton iniciar
window.onload = function(){
    var canvas = document.getElementById("miCanvas");
    if(canvas && canvas.getContext){
        var ctx = canvas.getContext("2d");
        if(ctx){

            //Descripcion de Nombre 
            // Consnante L
            ctx.lineWidth = 10;
            ctx.strokeStyle = "red";
            ctx.fillStyle = "red";
            ctx.beginPath();
            //Vertical
            ctx.moveTo(140,10);
            ctx.lineTo(140,110);
            //Horizontal
            ctx.moveTo(140,105);
            ctx.lineTo(190,105);
            ctx.stroke();
            
            // Vocal E
            ctx.lineWidth = 10;
            ctx.strokeStyle = "gray";
            ctx.fillStyle = "red";
            ctx.beginPath();
            //Vertical
            ctx.moveTo(200,10);
            ctx.lineTo(200,110);
            //Horizontal
            ctx.moveTo(200,15);
            ctx.lineTo(250,15);
            ctx.moveTo(200,60);
            ctx.lineTo(250,60);
            ctx.moveTo(200,105);
            ctx.lineTo(250,105);    
            ctx.stroke();        
            
            //Vocal O
            ctx.lineWidth = 10;
            ctx.strokeStyle = "gray";
            ctx.fillStyle = "red";
            ctx.beginPath();
            //Vertical
            ctx.moveTo(260,35);
            ctx.lineTo(260,82);
            ctx.moveTo(310,35);
            ctx.lineTo(310,82);
            ctx.stroke();  

            ctx.lineWidth = 10;
            ctx.strokeStyle = "gray";
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.arc(285,39,25, 1*Math.PI,0*Math.PI,false);
            ctx.arc(285,82,25, 0*Math.PI,1*Math.PI,false);
            ctx.stroke();  

            // Consnante N
            ctx.lineWidth = 10;
            ctx.strokeStyle = "gray";
            ctx.fillStyle = "red";
            ctx.beginPath();
            //Vertical
            ctx.moveTo(325,10);
            ctx.lineTo(325,110);
            ctx.moveTo(375,10);
            ctx.lineTo(375,110);
            //Diagonal
            ctx.moveTo(325,15);
            ctx.lineTo(375,105);
            ctx.stroke();  


            //Vocal A
            ctx.lineWidth = 10;
            ctx.strokeStyle = "gray";
            ctx.fillStyle = "red";
            ctx.beginPath();
            //Diagonal
            ctx.moveTo(417,10);
            ctx.lineTo(390,110);
            ctx.lineJoin = "round";
            ctx.moveTo(414,10);
            ctx.lineTo(440,110);
            //Horizontal
            ctx.moveTo(400,60);
            ctx.lineTo(430,60);
            ctx.stroke();  

            //Consonante R
            ctx.lineWidth = 10;
            ctx.strokeStyle = "gray";
            ctx.fillStyle = "red";
            ctx.beginPath();
            //Vertical
            ctx.moveTo(455,10);
            ctx.lineTo(455,110);
            //Horizontal
            ctx.moveTo(455,65);
            ctx.lineTo(475,65);
            ctx.moveTo(455,15);
            ctx.lineTo(475,15);
            //Diagonal
            ctx.moveTo(468,63);
            ctx.lineTo(505,110);
            ctx.stroke();  
            //Curvas
            ctx.lineWidth = 10;
            ctx.strokeStyle = "gray";
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.arc(475,40,25, 1.5*Math.PI,0.5*Math.PI,false);
            ctx.stroke(); 

            //Consonante D
            ctx.lineWidth = 10;
            ctx.strokeStyle = "gray";
            ctx.fillStyle = "red";
            ctx.beginPath();
            //Vertical
            ctx.moveTo(520,30);
            ctx.lineTo(520,90);

            //Horizontal
            ctx.moveTo(515,15);
            ctx.lineTo(555,15);
            ctx.moveTo(515,105);
            ctx.lineTo(555,105); 
            ctx.stroke();  
            //Curvas
            ctx.lineWidth = 10;
            ctx.strokeStyle = "gray";
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.arc(550,39,24, 1.5*Math.PI,0*Math.PI,false);
            ctx.arc(550,82,24, 0*Math.PI,0.5*Math.PI,false);
            ctx.stroke(); 

            //Vocal O
            ctx.lineWidth = 10;
            ctx.strokeStyle = "red";
            ctx.fillStyle = "red";
            ctx.beginPath();
            //Vertical
            ctx.moveTo(590,35);
            ctx.lineTo(590,82);
            ctx.stroke();
            //Curvas
            ctx.lineWidth = 10;
            ctx.strokeStyle = "red";
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.arc(615,39,25, 1*Math.PI,0*Math.PI,false);
            ctx.arc(615,82,25, 0*Math.PI,1*Math.PI,false);
            ctx.stroke(); 

        //Imagen
        var imagen = new Image();
            //
            function procesaImagen(){
                ctx.drawImage(imagen,700,5);
                ctx.drawImage(imagen,-430,5);             
            }
            //
            imagen.src = "imagenes/ladrillo.png";
            imagen.onload = function(e){
                procesaImagen();
            }    

        //boton
            //ctx.arc (x, y, radio, startAngle, endAngle, antihorario);
            //Descripcion de lineas
            ctx.lineWidth = 10;
            ctx.strokeStyle = "yellow";
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.arc(403,320,60, 0, 2*Math.PI,true);
            ctx.stroke();
            ctx.lineWidth = 10;
            ctx.strokeStyle = "red";
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.arc(350,320,40, 0, 2*Math.PI,true);
            ctx.stroke();
            ctx.lineWidth = 10;
            ctx.strokeStyle = "red";
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.arc(456,320,40, 0, 2*Math.PI,true);
            ctx.stroke();
            ctx.lineWidth = 10;
            ctx.strokeStyle = "gray";
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.arc(250,320,20, 0, 2*Math.PI,true);
            ctx.stroke();
            ctx.lineWidth = 10;
            ctx.strokeStyle = "gray";
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.arc(556,320,20, 0, 2*Math.PI,true);
            ctx.stroke();
        } else {
            alert("Error al crear tu contexto");    
        }
    }
}