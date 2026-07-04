(function () {

    function esperarTour() {

        if (
            typeof tour === "undefined" ||
            !tour.player ||
            !tour.player.wv
        ) {
            requestAnimationFrame(esperarTour);
            return;
        }

        try {

            const root = tour.player.wv.Xl.Xb();
            const pp = root.MainViewerPanoramaPlayer;
            const camera = pp.U.Yy.renderer.qk.getCamera();

            window.tdvCamera = camera;
            window.tdvPlayer = pp;

            console.log("CAMARA ENCONTRADA");
            console.log(camera);

        } catch (e) {

            requestAnimationFrame(esperarTour);

        }

    }

    esperarTour();

})();
