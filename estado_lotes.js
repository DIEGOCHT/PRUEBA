alert("estado_lotes.js cargado");
// =====================================================
// MOTOR DE LOTES PARA 3DVISTA
// Proyecto ASSTURIAS
// Versión 1.0
// =====================================================

"use strict";

const EstadoLotes = {

    canvas:null,

    ctx:null,

    player:null,

    ancho:0,

    alto:0,

    iniciado:false,

    lotes:[]

};
// =====================================================
// ESPERAR HASTA QUE 3DVISTA ESTÉ LISTO
// =====================================================

(function esperar(){

    if(
        typeof tour==="undefined" ||
        !tour.player
    ){

        requestAnimationFrame(esperar);

        return;

    }

    const p=tour.player.getById("MainViewerPanoramaPlayer");

    if(!p){

        requestAnimationFrame(esperar);

        return;

    }

    EstadoLotes.player=p;

    iniciarMotor();

})();
// =====================================================
// INICIAR MOTOR
// =====================================================

function iniciarMotor(){

    if(EstadoLotes.iniciado){

        return;

    }

    EstadoLotes.iniciado=true;

    crearCanvas();

    cargarLotePrueba();

    requestAnimationFrame(loopMotor);

}
// =====================================================
// CREAR CANVAS
// =====================================================

function crearCanvas(){

    EstadoLotes.canvas=document.createElement("canvas");

    EstadoLotes.canvas.id="canvasLotes";

    EstadoLotes.canvas.style.position="fixed";

    EstadoLotes.canvas.style.left="0";

    EstadoLotes.canvas.style.top="0";

    EstadoLotes.canvas.style.width="100%";

    EstadoLotes.canvas.style.height="100%";

    EstadoLotes.canvas.style.pointerEvents="none";

    EstadoLotes.canvas.style.zIndex="999999";

    document.body.appendChild(EstadoLotes.canvas);

    EstadoLotes.ctx=EstadoLotes.canvas.getContext("2d");

    resizeCanvas();

    window.addEventListener("resize",resizeCanvas);

}

function resizeCanvas(){

    EstadoLotes.ancho=window.innerWidth;

    EstadoLotes.alto=window.innerHeight;

    EstadoLotes.canvas.width=EstadoLotes.ancho;

    EstadoLotes.canvas.height=EstadoLotes.alto;

}
// =====================================================
// CARGAR LOTE DE PRUEBA
// =====================================================

function cargarLotePrueba(){

    EstadoLotes.lotes=[{

        nombre:"PRUEBA",

        puntos:[

            [-85.04888875263237,-54.7102581111818],

            [-70.41364840554282,-53.010437284280314],

            [-62.81332497978119,-60.72314262092043],

            [-81.76594053506787,-63.96328706377697]

        ],

        color:"rgba(255,0,0,0.35)",

        borde:"red"

    }];

}
// =====================================================
// LOOP PRINCIPAL
// =====================================================

function loopMotor(){

    EstadoLotes.ctx.clearRect(

        0,

        0,

        EstadoLotes.ancho,

        EstadoLotes.alto

    );

    dibujarPuntoPrueba();

    requestAnimationFrame(loopMotor);

}
// =====================================================
// DIBUJAR PUNTO DE PRUEBA
// =====================================================

function dibujarPuntoPrueba(){

    const yaw=EstadoLotes.player.get("yaw");

    const pitch=EstadoLotes.player.get("pitch");

    const hfov=EstadoLotes.player.get("actualHFOV");

    const vfov=hfov*(EstadoLotes.alto/EstadoLotes.ancho);

    const lote=EstadoLotes.lotes[0];

    const centro=lote.puntos[0];

    const dx=centro[0]-yaw;

    const dy=centro[1]-pitch;

    const x=

        EstadoLotes.ancho/2+

        (dx/hfov)*EstadoLotes.ancho;

    const y=

        EstadoLotes.alto/2+

        (dy/vfov)*EstadoLotes.alto;

    EstadoLotes.ctx.beginPath();

    EstadoLotes.ctx.arc(

        x,

        y,

        10,

        0,

        Math.PI*2

    );

    EstadoLotes.ctx.fillStyle="red";

    EstadoLotes.ctx.fill();

}
