(function () {

    function obtenerCamera() {

        if (
            typeof window.tour === "undefined" ||
            !tour.player ||
            !tour.player.wv
        ) {
            return null;
        }

        try {

            return tour.player.wv
                .Xl
                .Xb()
                .MainViewerPanoramaPlayer
                .U
                .Yy
                .renderer
                .qk
                .getCamera();

        } catch (e) {

            return null;

        }

    }

    let canvas = document.createElement("canvas");

    canvas.id = "canvasLotes";

    canvas.style.position = "fixed";
    canvas.style.left = "0";
    canvas.style.top = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "999999";

    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    function render() {

        requestAnimationFrame(render);

        const camera = obtenerCamera();

        if (!camera) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        ctx.clearRect(0,0,canvas.width,canvas.height);

        camera.updateMatrixWorld(true);

        // Solo para comprobar que la cámara existe
        ctx.fillStyle="lime";

        ctx.font="20px Arial";

        ctx.fillText(
            "CAMARA OK",
            20,
            40
        );

    }

    render();

})();
