(function () {

    function esperarTour() {

        if (typeof window.tour === "undefined") {

            console.log("Esperando tour...");

            requestAnimationFrame(esperarTour);

            return;

        }

        if (!tour.player) {

            console.log("Esperando player...");

            requestAnimationFrame(esperarTour);

            return;

        }

        alert("TOUR ENCONTRADO");

        const root = tour.player.wv.Xl.Xb();

        const pp = root.MainViewerPanoramaPlayer;

        

    }

    esperarTour();

})();
