// Definisci un oggetto con gli ID dei path e i link corrispondenti
const regionLinks = {
    "piemonte": "https://servizi.regione.piemonte.it/catalogo/fascicolo-sanitario",
    "lombardia": "https://www.fascicolosanitario.regione.lombardia.it/",
    "sardegna": "https://fse.sardegnasalute.it/",
    "sicilia": "https://www.regione.sicilia.it/istituzioni/regione/strutture-regionali/assessorato-salute/dipartimento-pianificazione-strategica/altri-contenuti/fascicolo-sanitario-elettronico",
    "campania": "https://sinfonia.regione.campania.it/",
    "lazio": "https://www.salutelazio.it/fascicolo-sanitario-elettronico1",
    "abruzzo": "https://sanita.regione.abruzzo.it/fse",
    "molise": "https://fse.regione.molise.it/",
    "aosta": "https://www.fse.vda.it/fse-home/home.html",
    "emilia": "https://www.fascicolo-sanitario.it/fse/;jsessionid=251B6E5CEFFC2AF92B89F4CD580E6013?0",
    "marche": "https://fse.sanita.marche.it/",
    "umbria": "http://www.regione.umbria.it/it/salute/sanita-digitale/fascicolosanitario",
    "puglia": "https://www.sanita.puglia.it/infofse",
    "toscana": "http://fascicolosanitario.regione.toscana.it/",
    "liguria": "https://www.fascicolosanitario.liguria.it/fselig/;jsessionid=JB5b4M3HWxbJ7VcBrcZb-nM-IFLoVI-c4G5q6gUK.FSEP02?0",
    "friuli": "https://sesamo.sanita.fvg.it/sesamo/#/index",
    "basilicata": "https://www.salute.basilicata.it/servizi-agli-assistiti/fascicolo-sanitario-elettronico/",
    "veneto": "https://sanitakmzerofascicolo.it/",
    "calabria": "https://www.fascicolosanitario.regione.calabria.it/",
    "trentino": "https://trec.trentinosalute.net/",
    "bolzano": "http://fsse.civis.bz.it/fse"
};

// Funzione per aggiungere interattività ai path
document.querySelectorAll('path.regione').forEach(path => {
    path.addEventListener('click', function () {
        const regionId = this.id;
        const url = regionLinks[regionId];
        if (url) {
        window.open(url, '_blank'); // Apre il link in una nuova scheda
        }
    });
});