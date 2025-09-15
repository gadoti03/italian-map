// Definisci un oggetto con gli ID dei path e i link corrispondenti
const regionLinks = {
    "piemonte": "https://github.com/gadoti03/",
    "lombardia": "https://github.com/gadoti03/",
    "sardegna": "https://github.com/gadoti03/",
    "sicilia": "https://github.com/gadoti03/",
    "campania": "https://github.com/gadoti03/",
    "lazio": "https://github.com/gadoti03/",
    "abruzzo": "https://github.com/gadoti03/",
    "molise": "https://github.com/gadoti03/",
    "aosta": "https://github.com/gadoti03/",
    "emilia": "https://github.com/gadoti03/",
    "marche": "https://github.com/gadoti03/",
    "umbria": "https://github.com/gadoti03/",
    "puglia": "https://github.com/gadoti03/",
    "toscana": "https://github.com/gadoti03/",
    "liguria": "https://github.com/gadoti03/",
    "friuli": "https://github.com/gadoti03/",
    "basilicata": "https://github.com/gadoti03/",
    "veneto": "https://github.com/gadoti03/",
    "calabria": "https://github.com/gadoti03/",
    "trentino": "https://github.com/gadoti03/",
    "bolzano": "https://github.com/gadoti03/"
};http://fsse.civis.bz.it/fse

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