alert("1. Archivo cargado");

(function(){

    alert("2. Entró a la función");

    console.log("2. Entró a la función");

    function iniciar(){

        alert("3. Entró a iniciar");

        console.log("3. Entró a iniciar");

        try{

            alert("4. Antes de root");

            const root = tour.player.wv.Xl.Xb();

            alert("5. Root OK");

            const pp = root.MainViewerPanoramaPlayer;

            alert("6. Player OK");

            const camera = pp.U.Yy.renderer.qk.getCamera();

            alert("7. Cámara OK");

            console.log(camera);

        }

        catch(e){

            alert("ERROR:\n\n"+e);

            console.error(e);

        }

    }

    iniciar();

})();
