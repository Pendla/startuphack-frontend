angular.module('API', [])

.factory('apiFactory', apiFactory);

apiFactory.$inject = ['$http'];

function apiFactory ($http) {
  var apiBase = "http://46.191.97.59:8080/";
  //var apiBase = "172.25.35.73:8080/"

  function getApiBase () {
    return apiBase;
  }

  /* user requests */

  function getArticles(){
    return $http.get(apiBase + 'search', {
      params: {
        searchQuery: "hej",
        index: 2,
        count: 5
      }
    });
  }

  var dummydata =
  [{"id":1,"article_name":"Clindamycin - Benzoyl Peroxide","article_price":"$8.06","seller_name":"Angela","seller_rating":1,"avatar":"https://robohash.org/temporeautnon.png?size=50x50\u0026set=set1"},
  {"id":2,"article_name":"Nighttime sleep aid","article_price":"$4.47","seller_name":"Marilyn","seller_rating":0,"avatar":"https://robohash.org/accusamusutrerum.jpg?size=50x50\u0026set=set1"},
  {"id":3,"article_name":"Olanzapine","article_price":"$1.10","seller_name":"Roy","seller_rating":4,"avatar":"https://robohash.org/officiisquamnon.bmp?size=50x50\u0026set=set1"},
  {"id":4,"article_name":"ANCOBON","article_price":"$8.39","seller_name":"Keith","seller_rating":1,"avatar":"https://robohash.org/fugiatquiiste.png?size=50x50\u0026set=set1"},
  {"id":5,"article_name":"Nystatin","article_price":"$9.40","seller_name":"Jane","seller_rating":2,"avatar":"https://robohash.org/quiaquodharum.bmp?size=50x50\u0026set=set1"},
  {"id":6,"article_name":"Bupivacaine Hydrochloride","article_price":"$3.78","seller_name":"Ashley","seller_rating":4,"avatar":"https://robohash.org/voluptatemnihilvitae.png?size=50x50\u0026set=set1"},
  {"id":7,"article_name":"Dermaquest Skin Therapy Post-Skin Resurfacing Balm","article_price":"$9.07","seller_name":"Jerry","seller_rating":0,"avatar":"https://robohash.org/veritatisnihilofficia.bmp?size=50x50\u0026set=set1"},
  {"id":8,"article_name":"Aceon","article_price":"$0.03","seller_name":"Jesse","seller_rating":4,"avatar":"https://robohash.org/fugasedea.jpg?size=50x50\u0026set=set1"},
  {"id":9,"article_name":"NESTABS DHA","article_price":"$3.43","seller_name":"Margaret","seller_rating":0,"avatar":"https://robohash.org/maximeipsumaut.jpg?size=50x50\u0026set=set1"},
  {"id":10,"article_name":"Ofloxacin","article_price":"$9.19","seller_name":"Jane","seller_rating":3,"avatar":"https://robohash.org/doloraliquidmodi.bmp?size=50x50\u0026set=set1"},
  {"id":11,"article_name":"Progena","article_price":"$5.31","seller_name":"Johnny","seller_rating":1,"avatar":"https://robohash.org/enimadquo.png?size=50x50\u0026set=set1"},
  {"id":12,"article_name":"Sulfamethoxazole and Trimethoprim","article_price":"$3.37","seller_name":"Raymond","seller_rating":5,"avatar":"https://robohash.org/fugiatestut.jpg?size=50x50\u0026set=set1"},
  {"id":13,"article_name":"Dexamethasone","article_price":"$5.70","seller_name":"Jeremy","seller_rating":2,"avatar":"https://robohash.org/consequaturautemquis.png?size=50x50\u0026set=set1"},
  {"id":14,"article_name":"Tolnaftate","article_price":"$6.97","seller_name":"Louis","seller_rating":5,"avatar":"https://robohash.org/nihilminusnobis.bmp?size=50x50\u0026set=set1"},
  {"id":15,"article_name":"BELLADONNA","article_price":"$0.55","seller_name":"Gloria","seller_rating":1,"avatar":"https://robohash.org/expeditautiusto.bmp?size=50x50\u0026set=set1"},
  {"id":16,"article_name":"PreNatal 19","article_price":"$5.55","seller_name":"Eric","seller_rating":4,"avatar":"https://robohash.org/laboriosamducimusfuga.bmp?size=50x50\u0026set=set1"},
  {"id":17,"article_name":"Jencycla","article_price":"$6.05","seller_name":"Fred","seller_rating":4,"avatar":"https://robohash.org/automnisodit.bmp?size=50x50\u0026set=set1"},
  {"id":18,"article_name":"Phenazopyridine Hydrochloride","article_price":"$4.43","seller_name":"Christine","seller_rating":5,"avatar":"https://robohash.org/esserepellenduseum.jpg?size=50x50\u0026set=set1"},
  {"id":19,"article_name":"Econazole Nitrate","article_price":"$6.43","seller_name":"Marilyn","seller_rating":1,"avatar":"https://robohash.org/laborumetsapiente.png?size=50x50\u0026set=set1"},
  {"id":20,"article_name":"Metformin Hydrochloride","article_price":"$4.51","seller_name":"Wayne","seller_rating":2,"avatar":"https://robohash.org/consequatureumrerum.png?size=50x50\u0026set=set1"},
  {"id":21,"article_name":"Hydrogen Peroxide","article_price":"$3.62","seller_name":"Russell","seller_rating":0,"avatar":"https://robohash.org/sequiquitempore.bmp?size=50x50\u0026set=set1"},
  {"id":22,"article_name":"dawnmist","article_price":"$8.26","seller_name":"Jean","seller_rating":3,"avatar":"https://robohash.org/quiquiet.jpg?size=50x50\u0026set=set1"},
  {"id":23,"article_name":"Lisinopril","article_price":"$0.44","seller_name":"Randy","seller_rating":5,"avatar":"https://robohash.org/consequaturcupiditatesit.png?size=50x50\u0026set=set1"},
  {"id":24,"article_name":"Ampicillin","article_price":"$3.83","seller_name":"Eugene","seller_rating":5,"avatar":"https://robohash.org/numquametofficiis.bmp?size=50x50\u0026set=set1"},
  {"id":25,"article_name":"Western Ragweed","article_price":"$3.72","seller_name":"Charles","seller_rating":3,"avatar":"https://robohash.org/repellatidhic.jpg?size=50x50\u0026set=set1"},
  {"id":26,"article_name":"ZINC OXIDE","article_price":"$5.25","seller_name":"Thomas","seller_rating":2,"avatar":"https://robohash.org/voluptatemculpavoluptatem.png?size=50x50\u0026set=set1"},
  {"id":27,"article_name":"Lidocaine Hydrochloride","article_price":"$8.49","seller_name":"Ralph","seller_rating":2,"avatar":"https://robohash.org/utenimmolestiae.bmp?size=50x50\u0026set=set1"},
  {"id":28,"article_name":"Indigestion With Nausea","article_price":"$6.29","seller_name":"Carol","seller_rating":3,"avatar":"https://robohash.org/atexnam.bmp?size=50x50\u0026set=set1"},
  {"id":29,"article_name":"Quetiapine fumarate","article_price":"$0.04","seller_name":"Doris","seller_rating":5,"avatar":"https://robohash.org/magnamlaudantiumest.bmp?size=50x50\u0026set=set1"},
  {"id":30,"article_name":"Upper Respiratory Staph Strep Combo","article_price":"$5.17","seller_name":"Julie","seller_rating":2,"avatar":"https://robohash.org/eaullamexercitationem.bmp?size=50x50\u0026set=set1"},
  {"id":31,"article_name":"Fluticasone Propionate","article_price":"$4.71","seller_name":"Susan","seller_rating":3,"avatar":"https://robohash.org/recusandaeeteos.png?size=50x50\u0026set=set1"},
  {"id":32,"article_name":"SINGULAIR","article_price":"$8.72","seller_name":"Carl","seller_rating":4,"avatar":"https://robohash.org/consequunturadipisciomnis.jpg?size=50x50\u0026set=set1"},
  {"id":33,"article_name":"ED A-HIST","article_price":"$7.35","seller_name":"Anne","seller_rating":0,"avatar":"https://robohash.org/harumautet.bmp?size=50x50\u0026set=set1"},
  {"id":34,"article_name":"Phentermine Hydrochloride","article_price":"$9.37","seller_name":"Nicholas","seller_rating":2,"avatar":"https://robohash.org/temporemodifugit.bmp?size=50x50\u0026set=set1"},
  {"id":35,"article_name":"CLORAZEPATE DIPOTASSIUM","article_price":"$4.65","seller_name":"Jimmy","seller_rating":5,"avatar":"https://robohash.org/eligendiblanditiisprovident.jpg?size=50x50\u0026set=set1"},
  {"id":36,"article_name":"Metalogin","article_price":"$1.70","seller_name":"Heather","seller_rating":1,"avatar":"https://robohash.org/quisetadipisci.png?size=50x50\u0026set=set1"},
  {"id":37,"article_name":"Fluoxetine","article_price":"$4.54","seller_name":"Judy","seller_rating":5,"avatar":"https://robohash.org/eumesseofficia.jpg?size=50x50\u0026set=set1"},
  {"id":38,"article_name":"Oxygen","article_price":"$8.56","seller_name":"Maria","seller_rating":1,"avatar":"https://robohash.org/etsapientehic.png?size=50x50\u0026set=set1"},
  {"id":39,"article_name":"PROLONG 101","article_price":"$7.92","seller_name":"Jimmy","seller_rating":3,"avatar":"https://robohash.org/ininquia.bmp?size=50x50\u0026set=set1"},
  {"id":40,"article_name":"Calcitriol","article_price":"$1.88","seller_name":"Catherine","seller_rating":1,"avatar":"https://robohash.org/nobisatquedoloribus.jpg?size=50x50\u0026set=set1"},
  {"id":41,"article_name":"Locoid","article_price":"$5.79","seller_name":"Wanda","seller_rating":0,"avatar":"https://robohash.org/solutaquiexercitationem.bmp?size=50x50\u0026set=set1"},
  {"id":42,"article_name":"Ibuprofen","article_price":"$6.57","seller_name":"Nicole","seller_rating":1,"avatar":"https://robohash.org/atquipossimus.bmp?size=50x50\u0026set=set1"},
  {"id":43,"article_name":"Low Dose Aspirin","article_price":"$4.13","seller_name":"Marie","seller_rating":5,"avatar":"https://robohash.org/autveniamsit.bmp?size=50x50\u0026set=set1"},
  {"id":44,"article_name":"Atenolol","article_price":"$3.18","seller_name":"Todd","seller_rating":4,"avatar":"https://robohash.org/reprehenderitquimolestiae.png?size=50x50\u0026set=set1"},
  {"id":45,"article_name":"Night Time Cherry","article_price":"$4.52","seller_name":"Bruce","seller_rating":2,"avatar":"https://robohash.org/praesentiumsimiliquedolor.png?size=50x50\u0026set=set1"},
  {"id":46,"article_name":"MAYINGLONG BEZORNIL HEMORRHOIDAL","article_price":"$1.12","seller_name":"Teresa","seller_rating":5,"avatar":"https://robohash.org/estsedsed.bmp?size=50x50\u0026set=set1"},
  {"id":47,"article_name":"KETOROLAC TROMETHAMINE","article_price":"$2.11","seller_name":"Teresa","seller_rating":3,"avatar":"https://robohash.org/nihilquodat.png?size=50x50\u0026set=set1"},
  {"id":48,"article_name":"Theophylline","article_price":"$7.91","seller_name":"Andrew","seller_rating":1,"avatar":"https://robohash.org/veniamdebitisea.jpg?size=50x50\u0026set=set1"},
  {"id":49,"article_name":"Sunflower Pollen","article_price":"$1.78","seller_name":"Douglas","seller_rating":5,"avatar":"https://robohash.org/quimollitiaab.png?size=50x50\u0026set=set1"},
  {"id":50,"article_name":"Cardura","article_price":"$4.23","seller_name":"Andrew","seller_rating":3,"avatar":"https://robohash.org/pariaturetnisi.bmp?size=50x50\u0026set=set1"},
  {"id":51,"article_name":"Gastrotone","article_price":"$3.94","seller_name":"Deborah","seller_rating":1,"avatar":"https://robohash.org/voluptatibusdoloresducimus.png?size=50x50\u0026set=set1"},
  {"id":52,"article_name":"Azithromycin Dihydrate","article_price":"$3.29","seller_name":"Julia","seller_rating":2,"avatar":"https://robohash.org/maximedolorumsapiente.jpg?size=50x50\u0026set=set1"},
  {"id":53,"article_name":"Meloxicam","article_price":"$9.33","seller_name":"Frank","seller_rating":4,"avatar":"https://robohash.org/corporisquisquamnihil.png?size=50x50\u0026set=set1"},
  {"id":54,"article_name":"Lovenox","article_price":"$0.33","seller_name":"Anthony","seller_rating":5,"avatar":"https://robohash.org/delenitidoloressit.bmp?size=50x50\u0026set=set1"},
  {"id":55,"article_name":"Oxybutynin Chloride","article_price":"$7.22","seller_name":"Alice","seller_rating":0,"avatar":"https://robohash.org/culpaperspiciatiscommodi.bmp?size=50x50\u0026set=set1"},
  {"id":56,"article_name":"Badger Kids SPF 30 Sunscreen","article_price":"$6.86","seller_name":"Rose","seller_rating":4,"avatar":"https://robohash.org/minimaconsequatureaque.png?size=50x50\u0026set=set1"},
  {"id":57,"article_name":"Triamcinolone Acetonide","article_price":"$9.40","seller_name":"Phyllis","seller_rating":0,"avatar":"https://robohash.org/vitaeteneturofficiis.png?size=50x50\u0026set=set1"},
  {"id":58,"article_name":"Salicylic Acid","article_price":"$2.38","seller_name":"Phillip","seller_rating":3,"avatar":"https://robohash.org/dolorumautet.jpg?size=50x50\u0026set=set1"},
  {"id":59,"article_name":"Mapap","article_price":"$2.57","seller_name":"Carol","seller_rating":5,"avatar":"https://robohash.org/doloremquerepellataut.bmp?size=50x50\u0026set=set1"},
  {"id":60,"article_name":"ABILIFY","article_price":"$8.53","seller_name":"Clarence","seller_rating":4,"avatar":"https://robohash.org/dolorumadearum.png?size=50x50\u0026set=set1"},
  {"id":61,"article_name":"Ibuprofen","article_price":"$3.61","seller_name":"Randy","seller_rating":2,"avatar":"https://robohash.org/namatquecum.jpg?size=50x50\u0026set=set1"},
  {"id":62,"article_name":"Escitalopram","article_price":"$3.18","seller_name":"Carol","seller_rating":0,"avatar":"https://robohash.org/minusvoluptaseligendi.jpg?size=50x50\u0026set=set1"},
  {"id":63,"article_name":"ANTIBACTERIAL HAND SOAP","article_price":"$9.07","seller_name":"Annie","seller_rating":0,"avatar":"https://robohash.org/iustoiurererum.png?size=50x50\u0026set=set1"},
  {"id":64,"article_name":"Cefdinir","article_price":"$9.96","seller_name":"Gloria","seller_rating":2,"avatar":"https://robohash.org/magnibeataecupiditate.jpg?size=50x50\u0026set=set1"},
  {"id":65,"article_name":"Minocin Kit","article_price":"$0.33","seller_name":"Martha","seller_rating":1,"avatar":"https://robohash.org/asperioresdelenitilaboriosam.jpg?size=50x50\u0026set=set1"},
  {"id":66,"article_name":"Hydrocodone Bitartrate And Acetaminophen","article_price":"$7.21","seller_name":"Patrick","seller_rating":4,"avatar":"https://robohash.org/commodieadolores.bmp?size=50x50\u0026set=set1"},
  {"id":67,"article_name":"ZINC OXIDE","article_price":"$7.38","seller_name":"Ernest","seller_rating":3,"avatar":"https://robohash.org/etquiest.jpg?size=50x50\u0026set=set1"},
  {"id":68,"article_name":"Antipyrine and Benzocaine","article_price":"$4.82","seller_name":"Margaret","seller_rating":4,"avatar":"https://robohash.org/optioquidemut.png?size=50x50\u0026set=set1"},
  {"id":69,"article_name":"Ciprofloxacin","article_price":"$7.56","seller_name":"Evelyn","seller_rating":0,"avatar":"https://robohash.org/doloretin.bmp?size=50x50\u0026set=set1"},
  {"id":70,"article_name":"Homeopathic Perspiration Formula","article_price":"$5.85","seller_name":"Rachel","seller_rating":0,"avatar":"https://robohash.org/voluptaseosquae.jpg?size=50x50\u0026set=set1"},
  {"id":71,"article_name":"CHENOPODIUM ALBUM POLLEN","article_price":"$9.98","seller_name":"Peter","seller_rating":1,"avatar":"https://robohash.org/officiiscupiditatedistinctio.png?size=50x50\u0026set=set1"},
  {"id":72,"article_name":"Banana Boat Mens","article_price":"$4.82","seller_name":"Lois","seller_rating":3,"avatar":"https://robohash.org/assumendahicvelit.jpg?size=50x50\u0026set=set1"},
  {"id":73,"article_name":"BANANA BOAT","article_price":"$5.90","seller_name":"Alice","seller_rating":2,"avatar":"https://robohash.org/iustoveromolestias.png?size=50x50\u0026set=set1"},
  {"id":74,"article_name":"Ranitidine","article_price":"$0.75","seller_name":"George","seller_rating":2,"avatar":"https://robohash.org/sapientererumeos.png?size=50x50\u0026set=set1"},
  {"id":75,"article_name":"Dynamiclear ORO","article_price":"$0.24","seller_name":"Harold","seller_rating":5,"avatar":"https://robohash.org/iurequiaaliquid.jpg?size=50x50\u0026set=set1"},
  {"id":76,"article_name":"CLARINS BROAD SPECTRUM SPF 20 - SUNSCREEN CARE MILK","article_price":"$5.32","seller_name":"Cheryl","seller_rating":3,"avatar":"https://robohash.org/voluptassedrepellendus.bmp?size=50x50\u0026set=set1"},
  {"id":77,"article_name":"Methimazole","article_price":"$1.53","seller_name":"Jimmy","seller_rating":5,"avatar":"https://robohash.org/sintpossimusfugit.png?size=50x50\u0026set=set1"},
  {"id":78,"article_name":"Metformin Hydrochloride","article_price":"$6.63","seller_name":"Cynthia","seller_rating":3,"avatar":"https://robohash.org/similiquequaereprehenderit.jpg?size=50x50\u0026set=set1"},
  {"id":79,"article_name":"Weight Control","article_price":"$9.84","seller_name":"Annie","seller_rating":1,"avatar":"https://robohash.org/voluptatesnisiaperiam.bmp?size=50x50\u0026set=set1"},
  {"id":80,"article_name":"Zicam","article_price":"$8.81","seller_name":"Kevin","seller_rating":2,"avatar":"https://robohash.org/oditnammodi.bmp?size=50x50\u0026set=set1"},
  {"id":81,"article_name":"HydrOXYzine Hydrochloride","article_price":"$5.19","seller_name":"Carolyn","seller_rating":2,"avatar":"https://robohash.org/atautdoloremque.jpg?size=50x50\u0026set=set1"},
  {"id":82,"article_name":"Avocado","article_price":"$2.73","seller_name":"Craig","seller_rating":4,"avatar":"https://robohash.org/errorestvoluptas.jpg?size=50x50\u0026set=set1"},
  {"id":83,"article_name":"bareMinerals bareSkin Pure Brightening Serum Foundation Broad Spectrum SPF 20","article_price":"$0.95","seller_name":"Diane","seller_rating":1,"avatar":"https://robohash.org/nihildoloresnon.png?size=50x50\u0026set=set1"},
  {"id":84,"article_name":"Diazepam","article_price":"$5.43","seller_name":"Ryan","seller_rating":1,"avatar":"https://robohash.org/quiadoloriusto.png?size=50x50\u0026set=set1"},
  {"id":85,"article_name":"Maracuja Miracle Foundation 12-Hour Foundation Broad Spectrum SPF 15 Sunscreen","article_price":"$4.43","seller_name":"Gregory","seller_rating":5,"avatar":"https://robohash.org/beataeveniamdolores.png?size=50x50\u0026set=set1"},
  {"id":86,"article_name":"Instant Hand Sanitizer","article_price":"$9.11","seller_name":"Frank","seller_rating":5,"avatar":"https://robohash.org/veritatisetqui.bmp?size=50x50\u0026set=set1"},
  {"id":87,"article_name":"Indomethacin","article_price":"$2.20","seller_name":"Joyce","seller_rating":3,"avatar":"https://robohash.org/quirecusandaedolorem.jpg?size=50x50\u0026set=set1"},
  {"id":88,"article_name":"Reed Canary Grass","article_price":"$4.23","seller_name":"Jack","seller_rating":4,"avatar":"https://robohash.org/eaqueetsuscipit.jpg?size=50x50\u0026set=set1"},
  {"id":89,"article_name":"OXALIPLATIN","article_price":"$9.42","seller_name":"Martin","seller_rating":3,"avatar":"https://robohash.org/molestiasidaccusamus.jpg?size=50x50\u0026set=set1"},
  {"id":90,"article_name":"Dexamethasone","article_price":"$6.33","seller_name":"Joshua","seller_rating":3,"avatar":"https://robohash.org/laudantiumullamdolor.bmp?size=50x50\u0026set=set1"},
  {"id":91,"article_name":"ELF Zit Eraser","article_price":"$6.50","seller_name":"Angela","seller_rating":1,"avatar":"https://robohash.org/sedetsed.png?size=50x50\u0026set=set1"},
  {"id":92,"article_name":"Degree For Women Sexy Intrique","article_price":"$1.12","seller_name":"Katherine","seller_rating":2,"avatar":"https://robohash.org/facilishicullam.bmp?size=50x50\u0026set=set1"},
  {"id":93,"article_name":"SBS 40","article_price":"$0.07","seller_name":"Maria","seller_rating":1,"avatar":"https://robohash.org/eossedvero.png?size=50x50\u0026set=set1"},
  {"id":94,"article_name":"Sildenafil","article_price":"$7.03","seller_name":"Donna","seller_rating":3,"avatar":"https://robohash.org/delectusmodinumquam.png?size=50x50\u0026set=set1"},
  {"id":95,"article_name":"Stool Softener Plus Stimulant Laxative","article_price":"$3.12","seller_name":"Nicholas","seller_rating":1,"avatar":"https://robohash.org/consequaturanesciunt.bmp?size=50x50\u0026set=set1"},
  {"id":96,"article_name":"RITE AID NICOTINE TRANSDERMAL SYSTEM","article_price":"$9.00","seller_name":"Antonio","seller_rating":2,"avatar":"https://robohash.org/etquosminus.bmp?size=50x50\u0026set=set1"},
  {"id":97,"article_name":"Vaccination - Illness Assist","article_price":"$5.29","seller_name":"Gregory","seller_rating":1,"avatar":"https://robohash.org/minusoccaecatiperspiciatis.png?size=50x50\u0026set=set1"},
  {"id":98,"article_name":"Oxygen","article_price":"$3.47","seller_name":"Albert","seller_rating":1,"avatar":"https://robohash.org/officiisnihilquo.png?size=50x50\u0026set=set1"},
  {"id":99,"article_name":"Leader All Day Pain Relief","article_price":"$4.34","seller_name":"Carolyn","seller_rating":0,"avatar":"https://robohash.org/modiautqui.png?size=50x50\u0026set=set1"},
  {"id":100,"article_name":"SIMPONI ARIA","article_price":"$6.65","seller_name":"Charles","seller_rating":4,"avatar":"https://robohash.org/etsitharum.png?size=50x50\u0026set=set1"},
  {"id":101,"article_name":"Enalapril maleate and hydrochlorothiazide","article_price":"$0.69","seller_name":"Jeremy","seller_rating":4,"avatar":"https://robohash.org/explicabosequiut.jpg?size=50x50\u0026set=set1"},
  {"id":102,"article_name":"Enoxaparin Sodium","article_price":"$6.68","seller_name":"Amanda","seller_rating":0,"avatar":"https://robohash.org/voluptatesomniscorporis.jpg?size=50x50\u0026set=set1"},
  {"id":103,"article_name":"Clear Defense","article_price":"$5.54","seller_name":"Lori","seller_rating":0,"avatar":"https://robohash.org/odionobissoluta.jpg?size=50x50\u0026set=set1"},
  {"id":104,"article_name":"Hydrogen Peroxide","article_price":"$8.46","seller_name":"Paula","seller_rating":5,"avatar":"https://robohash.org/etipsamporro.png?size=50x50\u0026set=set1"},
  {"id":105,"article_name":"GAMMA -12","article_price":"$8.99","seller_name":"Bruce","seller_rating":3,"avatar":"https://robohash.org/involuptatemdolorem.jpg?size=50x50\u0026set=set1"},
  {"id":106,"article_name":"MEDICAL AIR","article_price":"$7.30","seller_name":"Lisa","seller_rating":5,"avatar":"https://robohash.org/innumquamesse.bmp?size=50x50\u0026set=set1"},
  {"id":107,"article_name":"Softlips Pure Lip Gloss","article_price":"$4.60","seller_name":"Katherine","seller_rating":4,"avatar":"https://robohash.org/providentnonullam.bmp?size=50x50\u0026set=set1"},
  {"id":108,"article_name":"Nigrospora sphaerica","article_price":"$6.08","seller_name":"Annie","seller_rating":5,"avatar":"https://robohash.org/aspernaturquiquae.png?size=50x50\u0026set=set1"},
  {"id":109,"article_name":"Ginger Lime Hand Sanitizer","article_price":"$5.76","seller_name":"Evelyn","seller_rating":3,"avatar":"https://robohash.org/similiqueestasperiores.png?size=50x50\u0026set=set1"},
  {"id":110,"article_name":"Proactiv","article_price":"$5.82","seller_name":"Stephanie","seller_rating":0,"avatar":"https://robohash.org/doloremquedolorevoluptas.png?size=50x50\u0026set=set1"},
  {"id":111,"article_name":"Clindamycin Hydrochloride","article_price":"$8.13","seller_name":"Nicole","seller_rating":5,"avatar":"https://robohash.org/aetratione.png?size=50x50\u0026set=set1"},
  {"id":112,"article_name":"Terrasil Molluscum Treatment","article_price":"$2.73","seller_name":"Julia","seller_rating":1,"avatar":"https://robohash.org/suntessedeserunt.bmp?size=50x50\u0026set=set1"},
  {"id":113,"article_name":"Cefdinir","article_price":"$5.75","seller_name":"Roy","seller_rating":4,"avatar":"https://robohash.org/optiosaepequisquam.bmp?size=50x50\u0026set=set1"},
  {"id":114,"article_name":"Umcka Menthol","article_price":"$1.72","seller_name":"Chris","seller_rating":5,"avatar":"https://robohash.org/impeditconsecteturqui.png?size=50x50\u0026set=set1"},
  {"id":115,"article_name":"Delsym","article_price":"$6.54","seller_name":"Kenneth","seller_rating":5,"avatar":"https://robohash.org/etlaudantiumadipisci.jpg?size=50x50\u0026set=set1"},
  {"id":116,"article_name":"Ropinirole Hydrochloride","article_price":"$4.29","seller_name":"Martha","seller_rating":2,"avatar":"https://robohash.org/undeutvitae.bmp?size=50x50\u0026set=set1"},
  {"id":117,"article_name":"LBEL MAXIMUM COMFORT AND LONG-LASTING FOUNDATION SPF 10","article_price":"$4.56","seller_name":"John","seller_rating":1,"avatar":"https://robohash.org/voluptasnumquambeatae.png?size=50x50\u0026set=set1"},
  {"id":118,"article_name":"Citalopram","article_price":"$4.44","seller_name":"Beverly","seller_rating":0,"avatar":"https://robohash.org/suscipitexercitationemquaerat.jpg?size=50x50\u0026set=set1"},
  {"id":119,"article_name":"tizanidine hydrochloride","article_price":"$4.73","seller_name":"Robin","seller_rating":5,"avatar":"https://robohash.org/consequunturfacereminima.jpg?size=50x50\u0026set=set1"},
  {"id":120,"article_name":"HYDROMORPHONE HYDROCHLORIDE","article_price":"$0.03","seller_name":"Jesse","seller_rating":0,"avatar":"https://robohash.org/optiorepellendusvoluptas.png?size=50x50\u0026set=set1"},
  {"id":121,"article_name":"Sulfasalazine","article_price":"$4.85","seller_name":"Teresa","seller_rating":2,"avatar":"https://robohash.org/doloremdeseruntexercitationem.bmp?size=50x50\u0026set=set1"},
  {"id":122,"article_name":"Shunga","article_price":"$1.37","seller_name":"Bobby","seller_rating":2,"avatar":"https://robohash.org/etquinon.png?size=50x50\u0026set=set1"},
  {"id":123,"article_name":"Holiday Elegance","article_price":"$2.90","seller_name":"Bobby","seller_rating":1,"avatar":"https://robohash.org/laudantiumbeataesaepe.bmp?size=50x50\u0026set=set1"},
  {"id":124,"article_name":"RHODOTORULA RUBRA","article_price":"$3.49","seller_name":"Mark","seller_rating":4,"avatar":"https://robohash.org/mollitiaquiamodi.png?size=50x50\u0026set=set1"},
  {"id":125,"article_name":"Benzonatate","article_price":"$7.07","seller_name":"Stephen","seller_rating":3,"avatar":"https://robohash.org/eapraesentiumdoloribus.bmp?size=50x50\u0026set=set1"},
  {"id":126,"article_name":"Naropin","article_price":"$7.08","seller_name":"Keith","seller_rating":0,"avatar":"https://robohash.org/estrerumrecusandae.bmp?size=50x50\u0026set=set1"},
  {"id":127,"article_name":"Indomethacin","article_price":"$2.88","seller_name":"Gloria","seller_rating":1,"avatar":"https://robohash.org/nihilaccusamusinventore.jpg?size=50x50\u0026set=set1"},
  {"id":128,"article_name":"Air","article_price":"$3.19","seller_name":"Gerald","seller_rating":3,"avatar":"https://robohash.org/hicnonconsequatur.png?size=50x50\u0026set=set1"},
  {"id":129,"article_name":"Bactrim DS","article_price":"$5.52","seller_name":"Christina","seller_rating":1,"avatar":"https://robohash.org/ullamautvel.jpg?size=50x50\u0026set=set1"},
  {"id":130,"article_name":"Ketorolac Tromethamine","article_price":"$0.51","seller_name":"Jeremy","seller_rating":4,"avatar":"https://robohash.org/quiauthic.png?size=50x50\u0026set=set1"},
  {"id":131,"article_name":"Clonazepam","article_price":"$4.18","seller_name":"Betty","seller_rating":4,"avatar":"https://robohash.org/quinemoamet.jpg?size=50x50\u0026set=set1"},
  {"id":132,"article_name":"BIOSOLIS Sun Milk UVA Sunscreen Face and Body Broad Spectrum SPF50 KIDS","article_price":"$5.37","seller_name":"Mary","seller_rating":2,"avatar":"https://robohash.org/laboriosammagnidoloribus.bmp?size=50x50\u0026set=set1"},
  {"id":133,"article_name":"INTENSIVE SKIN REPAIR","article_price":"$4.56","seller_name":"Louis","seller_rating":1,"avatar":"https://robohash.org/autvoluptatibusconsequatur.jpg?size=50x50\u0026set=set1"},
  {"id":134,"article_name":"TRIFLUOPERAZINE","article_price":"$6.52","seller_name":"Deborah","seller_rating":4,"avatar":"https://robohash.org/repellatducimusquae.bmp?size=50x50\u0026set=set1"}
  ];

  return {
    getArticles: getArticles,
    getApiBase: getApiBase

  };

}
