(function () {

    function iniciar() {
console.log("Entrando a iniciar...");

        try {

            const root = tour.player.wv.Xl.Xb();
            const pp = root.MainViewerPanoramaPlayer;

            const camera = pp.U.Yy.renderer.qk.getCamera();

            window.tdvCamera = camera;

            console.log("✅ CAMARA ENCONTRADA", camera);

            //=========================
            // CREAR CANVAS
            //=========================

            let canvas = document.getElementById("canvasLotes");

            if (!canvas) {

                canvas = document.createElement("canvas");
                canvas.id = "canvasLotes";

                canvas.style.position = "fixed";
                canvas.style.left = "0";
                canvas.style.top = "0";
                canvas.style.width = "100%";
                canvas.style.height = "100%";
                canvas.style.pointerEvents = "none";
                canvas.style.zIndex = "999999";

                document.body.appendChild(canvas);

            }

            const ctx = canvas.getContext("2d");

            function dibujar() {

                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                ctx.clearRect(0,0,canvas.width,canvas.height);

                // CUADRADO ROJO DE PRUEBA
                ctx.fillStyle="red";
                ctx.fillRect(100,100,20,20);

                requestAnimationFrame(dibujar);

            }

            dibujar();

        }

        catch(e){

    console.error("ERROR estado_lotes.js:", e);

    requestAnimationFrame(iniciar);

}

    }

    iniciar();

})();
