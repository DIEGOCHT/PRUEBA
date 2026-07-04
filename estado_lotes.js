(function () {

    function esperarTour() {

        if (
            typeof window.tour === "undefined" ||
            !tour.player ||
            !tour.player.wv
        ) {
            requestAnimationFrame(esperarTour);
            return;
        }

        const root = tour.player.wv.Xl.Xb();
        const pp = root.MainViewerPanoramaPlayer;
        const camera = pp.U.Yy.renderer.qk.getCamera();
window.root3dv = root;
window.pp3dv = pp;
window.cam3dv = camera;

        //==============================
        // Canvas
        //==============================

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

        const punto = new THREE.Vector3(0, 0, -20);

        function dibujar() {

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            ctx.clearRect(0,0,canvas.width,canvas.height);

            camera.updateMatrixWorld(true);

            const p = punto.clone().project(camera);

            const x = (p.x * 0.5 + 0.5) * canvas.width;
            const y = (-p.y * 0.5 + 0.5) * canvas.height;

            ctx.beginPath();
            ctx.arc(x, y, 12, 0, Math.PI * 2);
            ctx.fillStyle = "red";
            ctx.fill();

            requestAnimationFrame(dibujar);

        }

        dibujar();

    }

    esperarTour();

})();
