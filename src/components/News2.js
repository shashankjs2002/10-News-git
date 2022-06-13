// import React, { Component } from 'react';
// import NewsItem from './NewsItem';

// export class News2 extends Component {
    
//     articles= [
//         {
//             "source": {
//                 "id": "bild",
//                 "name": "Bild"
//             },
//             "author": "TOBIAS ALTSCHÄFFL und LENA WURZENBERGER",
//             "title": "FC Bayern München: Paul Wanner kriegt neuen Vertrag und Alonso-Nummer",
//             "description": "Paul Wanner (16) ist DAS neue Bayern-Juwel. Seine Zukunft war bis zuletzt unklar: Der Vertrag des technisch beschlagenen Mittelfeldspielers läuft am Saisonende aus. Topklubs aus Deutschland – u.a. Leverkusen – und England wollten Wanner. Jetzt hat er eine Ent…",
//             "url": "http://www.bild.de/bild-plus/sport/fussball/fussball/fc-bayern-muenchen-paul-wanner-kriegt-neuen-vertrag-und-alonso-nummer-78994500.bild.html",
//             "urlToImage": "https://bilder.bild.de/fotos/fc-bayern-muenchen-paul-wanner-kriegt-neuen-vertrag-und-alonso-nummer-512ad6433a42455992d7b9a833ba1ec3-78994688/Bild/8,club=bildplus.bild.jpg",
//             "publishedAt": "2022-01-31T17:43:12Z",
//             "content": "Paul Wanner (16) ist DAS neue Bayern-Juwel. \r\nSeine Zukunft war bis zuletzt unklar: Der Vertrag des technisch beschlagenen Mittelfeldspielers läuft am Saisonende aus. Topklubs aus Deutschland u.a. Le… [+106 chars]"
//         },
//         {
//             "source": {
//                 "id": "ars-technica",
//                 "name": "Ars Technica"
//             },
//             "author": "Scharon Harding",
//             "title": "500 Hz PC monitor prototype is fastest panel ever",
//             "description": "Chinese panel maker claims to surpass 360 Hz with enhanced thin film transistor tech.",
//             "url": "https://arstechnica.com/gadgets/2022/01/500-hz-pc-monitor-prototype-is-fastest-panel-ever/",
//             "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2022/01/boe-760x380.jpg",
//             "publishedAt": "2022-01-31T17:27:31+00:00",
//             "content": "24 with 20 posters participating\r\nMonitors with high refresh rates are able to depict fast-paced action more smoothly than standard 60 Hz monitors. Today's screens can go as high as 360 Hz, but BOE, … [+2883 chars]"
//         },
//         {
//             "source": {
//                 "id": "techcrunch",
//                 "name": "TechCrunch"
//             },
//             "author": "Connie Loizos",
//             "title": "Following his fiery Twitter tirades, Bolt founder Ryan Breslow is no longer CEO -- and he says it's his choice",
//             "description": "Ryan Breslow, who founded the “one-click” checkout tech company Bolt as a Stanford student and dropped out of college to build it, is stepping away as the company’s CEO seven years into his reign. Breslow, who says the decision is his own, is being replaced a…",
//             "url": "https://techcrunch.com/2022/01/31/ryanbreslow-bolt/",
//             "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/01/Headshot_Ryan-Breslow.jpg?w=600",
//             "publishedAt": "2022-01-31T16:45:58Z",
//             "content": "Ryan Breslow, who founded the “one-click” checkout tech company Bolt as a Stanford student and dropped out of college to build it, is stepping away as the company’s CEO seven years into his reign. Br… [+7484 chars]"
//         },
//         {
//             "source": {
//                 "id": "techcrunch",
//                 "name": "TechCrunch"
//             },
//             "author": "Jordan Crook",
//             "title": "Come hang with us for live recordings of TechCrunch podcasts Equity and Found",
//             "description": "Are you a numbers nerd? A people person? In either case, there’s a TechCrunch podcast for you. TechCrunch’s premier (only) podcasts Equity and Found are kicking off 2022 with live recordings of the shows starting in February. Listeners can catch the live reco…",
//             "url": "https://techcrunch.com/2022/01/31/come-hang-with-us-for-live-recordings-of-techcrunch-podcasts-equity-and-found/",
//             "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/01/horizontal-slate-20220-02-1.jpg?w=711",
//             "publishedAt": "2022-01-31T16:45:40Z",
//             "content": "Are you a numbers nerd? A people person?\r\nIn either case, there’s a TechCrunch podcast for you.\r\nTechCrunch’s premier (only) podcasts Equity and Found are kicking off 2022 with live recordings of the… [+2147 chars]"
//         },
//         {
//             "source": {
//                 "id": "google-news-it",
//                 "name": "Google News (Italy)"
//             },
//             "author": "F. Q.",
//             "title": "Il primo Cdm post-Quirinale è light: riunione di mezz’ora, decisa solo la proroga di 10 giorni delle…",
//             "description": "Il governo si muove con cautela dopo le incognite e gli strascichi provocati dalla settimana di votazioni sul Colle: l'obbligo di mascherina all'aperto e la chiusura delle discoteche vengono confermati per un'altra settimana e mezzo. Posticipata ai prossimi v…",
//             "url": "https://www.ilfattoquotidiano.it/2022/01/31/il-primo-cdm-post-quirinale-e-light-riunione-di-mezzora-decisa-solo-la-proroga-di-10-giorni-delle-restrizioni-su-mascherine-e-discoteche/6474609/",
//             "urlToImage": "https://st.ilfattoquotidiano.it/wp-content/uploads/2022/01/31/Draghi-3.jpg",
//             "publishedAt": "2022-01-31T16:38:31+00:00",
//             "content": "Appena mezz’ora di riunione, per decidere solamente la proroga per 10 giorni dell’obbligo di mascherina all’aperto e della chiusura delle discoteche. Il primo Consiglio dei ministri dopo la rielezion… [+6226 chars]"
//         },
//         {
//             "source": {
//                 "id": "la-repubblica",
//                 "name": "La Repubblica"
//             },
//             "author": "La Repubblica",
//             "title": "Mascherine all'aperto e discoteche: stretta per altri 10 giorni. Ecco tutte le regole da domani",
//             "description": "L'intesa raggiunta nel primo Consiglio dei ministri dopo la rielezione del presidente della Repubblica Sergio Mattarella. Rinviata a metà settimana …",
//             "url": "https://www.repubblica.it/cronaca/2022/01/31/news/mascherine_all_aperto_e_discoteche_stretta_per_altri_10_giorni_ecco_tutte_le_regole_da_domani-335922216/",
//             "urlToImage": "https://www.repstatic.it/content/nazionale/img/2022/01/31/173652501-0fecd887-ef4a-4199-90c2-85bb808f8d4a.jpg",
//             "publishedAt": "2022-01-31T16:23:00Z",
//             "content": "Intesa raggiunta nel nuovo Consiglio dei ministri che si è riunito oggi alle 16 a Palazzo Chigi sulle ultime misure anti-Covid. In particolare si è deciso di prorogare i provvedimenti già in vigore p… [+4929 chars]"
//         },
//         {
//             "source": {
//                 "id": "techcrunch",
//                 "name": "TechCrunch"
//             },
//             "author": "Sarah Perez",
//             "title": "Pinterest's AR shopping feature expands to include furniture and home décor",
//             "description": "A new Pinterest feature will allow consumers to see what furniture or other home décor items will look like in their own home, using augmented reality (AR). Similar technology has already been put into place by major retailers, like Amazon, IKEA or Wayfair, a…",
//             "url": "https://techcrunch.com/2022/01/31/pinterests-ar-shopping-feature-expands-to-include-furniture-and-home-decor/",
//             "urlToImage": "https://techcrunch.com/wp-content/uploads/2017/09/pinterest-app-icon-ios.jpg?w=710",
//             "publishedAt": "2022-01-31T16:21:21Z",
//             "content": "A new Pinterest feature will allow consumers to see what furniture or other home décor items will look like in their own home, using augmented reality (AR). Similar technology has already been put in… [+5165 chars]"
//         },
//         {
//             "source": {
//                 "id": "techcrunch",
//                 "name": "TechCrunch"
//             },
//             "author": "Alex Wilhelm",
//             "title": "Equity Monday: If you don't want to be criticized for your editorial choices, don't make editorial choices",
//             "description": "Hello and welcome back to Equity, a podcast about the business of startups, where we unpack the numbers and nuance behind the headlines. This Monday show actually felt a bit old-school, in that the weekend controversy in tech has spilled over into the working…",
//             "url": "https://techcrunch.com/2022/01/31/equity-monday-if-you-dont-want-to-be-criticized-for-your-editorial-choices-dont-make-editorial-choices/",
//             "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/07/equity-podcast-2019-phone.jpg?w=711",
//             "publishedAt": "2022-01-31T15:52:57Z",
//             "content": "Hello and welcome back to Equity, a podcast about the business of startups, where we unpack the numbers and nuance behind the headlines.\r\nThis Monday show actually felt a bit old-school, in that the … [+1453 chars]"
//         },
//         {
//             "source": {
//                 "id": "google-news-it",
//                 "name": "Google News (Italy)"
//             },
//             "author": "Redazione Web",
//             "title": "Mascherine all'aperto obbligatorie e discoteche chiuse fino al 10 febbraio, intesa in cdm",
//             "description": "Mascherine all'aperto obbligatorie ancora per 10 giorni e discoteche riaperte dal 10...",
//             "url": "https://www.ilgazzettino.it/italia/primopiano/mascherine_aperto_proroga_obbligo_discoteche_chiuse_fino_a_quando_nuovo_decreto_31_gennaio_2022-6473916.html",
//             "urlToImage": "https://www.ilgazzettino.it/photos/MED_HIGH/39/05/6473905_31171839_mascherine_discoteca.jpg",
//             "publishedAt": "2022-01-31T15:49:55+00:00",
//             "content": "Mascherine all'aperto obbligatorie ancora per 10 giorni e discoteche riaperte dal 10 febbraio. È l'intesa raggiunta, a quanto si apprende da diverse fonti di governo, in Consiglio dei ministri. Le di… [+1613 chars]"
//         },
//         {
//             "source": {
//                 "id": "reuters",
//                 "name": "Reuters"
//             },
//             "author": null,
//             "title": "Battered Nasdaq climbs at end of volatile month",
//             "description": "The tech-heavy Nasdaq rose 1% on Monday, but was still on track for its worst start to the year as investors shied away from stocks with lofty valuations amid aggressive rate hike bets and geopolitical tensions.",
//             "url": "https://www.reuters.com/business/nasdaq-futures-edge-higher-end-turbulent-month-2022-01-31/",
//             "urlToImage": "https://www.reuters.com/resizer/qaG8m1PpFe5cRP1Mr8yh3RejRik=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Z5B5UHNXLFIVXCRUPZKS7SUXJI.jpg",
//             "publishedAt": "2022-01-31T15:34:59Z",
//             "content": "Jan 31 (Reuters) - The tech-heavy Nasdaq rose 1% on Monday, but was still on track for its worst start to the year as investors shied away from stocks with lofty valuations amid aggressive rate hike … [+3075 chars]"
//         },
//         {
//             "source": {
//                 "id": "google-news-fr",
//                 "name": "Google News (France)"
//             },
//             "author": "Joffrey Marcellin",
//             "title": "Pass vaccinal : nouveau QR Code le 1er février, êtes-vous concerné par la mise à jour ?",
//             "description": "Pour remédier au problème technique qui affichait une date d'expiration à des Français ayant pourtant un schéma vaccinal complet, l'Assurance maladie a mis en place un correctif, qui nécessite le téléchargement d'un nouveau QR Code.",
//             "url": "https://www.midilibre.fr/2022/01/31/pass-vaccinal-etes-vous-concerne-par-le-telechargement-du-nouveau-qr-code-ce-1er-fevrier-10079806.php",
//             "urlToImage": "https://images.midilibre.fr/api/v1/images/view/61f80005d286c21c5e6d016e/large/image.jpg?v=1",
//             "publishedAt": "2022-01-31T15:32:00+00:00",
//             "content": "Pour remédier au problème technique qui affichait une date d'expiration à des Français ayant pourtant un schéma vaccinal complet, l'Assurance maladie a mis en place un correctif, qui nécessite le tél… [+2139 chars]"
//         },
//         {
//             "source": {
//                 "id": "il-sole-24-ore",
//                 "name": "Il Sole 24 Ore"
//             },
//             "author": "Redazione",
//             "title": "Divieti, discoteche chiuse e mascherine: Cdm riunito per le proroghe",
//             "description": "Scadono oggi l’obbligo di mascherina all’aperto anche in zona bianca, il divieto di feste e concerti all’aperto",
//             "url": "https://www.ilsole24ore.com/art/divieti-discoteche-chiuse-e-mascherine-cdm-riunito-le-proroghe-AEGCyJBB",
//             "urlToImage": "https://i2.res.24o.it/images2010/2022/01/AEGCyJBB/images/6a8a9800-82a7-11ec-9b08-81d5e2a5d864-fotohome0.jpg",
//             "publishedAt": "2022-01-31T15:23:14Z",
//             "content": "Ascolta la versione audio dell'articolo\r\n1' di lettura\r\nChiusa la partita per il Quirinale, il governo riprende in mano il dossier sulle misure legate allemergenza Covid con lobiettivo di semplificar… [+639 chars]"
//         },
//         {
//             "source": {
//                 "id": "focus",
//                 "name": "Focus"
//             },
//             "author": "FOCUS Online",
//             "title": "Bald kommt der Omikron-Impfstoff: Mediziner sagt, ob Sie darauf warten sollen  - Video",
//             "description": "Biontech und Moderna arbeiten an einem spezifischen Omikron-Impfstoff, der vor der neuen Corona-Variante schützen soll. Bis die neuen Vakzine zur Verfügung steht, könnte es aber noch einige Monate dauern. FOCUS Online hat bei Infektiologe Christoph Spinner na…",
//             "url": "https://www.focus.de/gesundheit/news/biontech-und-moderna-arbeiten-daran-bald-kommt-der-omikron-impfstoff-mediziner-sagt-ob-sie-darauf-warten-sollen_id_46595190.html",
//             "urlToImage": "https://p6.focus.de/img/fotos/id_46594451/sp-i.jpg?im=Crop%3D%28157%2C0%2C847%2C424%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=medium&hash=20cfa8b30b3add22ee34d145e84dd9448cfa9b5de89615d3a9d928fcdb08975e",
//             "publishedAt": "2022-01-31T14:21:15Z",
//             "content": "Biontech und Moderna arbeiten an einem spezifischen Omikron-Impfstoff, der vor der neuen Corona-Variante schützen soll. Bis die neuen Vakzine zur Verfügung steht, könnte es aber noch einige Monate da… [+669 chars]"
//         },
//         {
//             "source": {
//                 "id": "wired",
//                 "name": "Wired"
//             },
//             "author": "Wired",
//             "title": "Maybe Green Energy Needs ‘Information Batteries' Too",
//             "description": "Researchers are exploring whether tech giants can precompute certain data when the grid is humming with solar or wind power, then stash it away for later use.",
//             "url": "https://www.wired.com/story/maybe-green-energy-needs-information-batteries-too",
//             "urlToImage": "https://media.wired.com/photos/61f43ab4a098d1434bc85a3c/191:100/w_1280,c_limit/Science_datacenter_GettyImages-1269351125.jpg",
//             "publishedAt": "2022-01-31T13:00:00Z",
//             "content": "For all its faultsand there are manythe electrical grid in the United States is a miracle worker: If you flip a switch the lights come on, almost without fail. But as renewables like solar and wind r… [+3918 chars]"
//         },
//         {
//             "source": {
//                 "id": "wired",
//                 "name": "Wired"
//             },
//             "author": "Wired",
//             "title": "Big Tech Needs to Stop Trying to Make Their Metaverse Happen",
//             "description": "From Microsoft to Meta, the race is on to sell an amorphous concept that no one really wants them to build.",
//             "url": "https://www.wired.com/story/metaverse-big-tech-land-grab-hype/",
//             "urlToImage": "https://media.wired.com/photos/61f47fcbf355cd4b798a015b/191:100/w_1280,c_limit/nft-socialmedia.jpg",
//             "publishedAt": "2022-01-31T12:00:00Z",
//             "content": "The race is on to cash in on the metaverse hype. Last week, Microsoft described its $68.7 billion takeover of gaming studio Activision Blizzarda move that would have usually been interpreted as the X… [+4602 chars]"
//         },
//         {
//             "source": {
//                 "id": "wired",
//                 "name": "Wired"
//             },
//             "author": "Wired",
//             "title": "Big Tech Needs to Stop Trying to Make Their Metaverse Happen",
//             "description": "From Microsoft to Meta, the race is on to sell an amorphous concept that no one really wants them to build.",
//             "url": "https://www.wired.com/story/metaverse-big-tech-land-grab-hype",
//             "urlToImage": "https://media.wired.com/photos/61f47fcbf355cd4b798a015b/191:100/w_1280,c_limit/nft-socialmedia.jpg",
//             "publishedAt": "2022-01-31T12:00:00Z",
//             "content": "The race is on to cash in on the metaverse hype. Last week, Microsoft described its $68.7 billion takeover of gaming studio Activision Blizzarda move that would have usually been interpreted as the X… [+4602 chars]"
//         },
//         {
//             "source": {
//                 "id": "gruenderszene",
//                 "name": "Gruenderszene"
//             },
//             "author": null,
//             "title": "Up to date? So behalten Gründende den Durchblick im Medienkosmos",
//             "description": "Wer in der Tech-Welt bestehen will, sollte aktuelle Trends und News im Auge haben. Wie Startups Zugang zu Quality Content und Experten-Insights erhalten.",
//             "url": "https://www.businessinsider.de/gruenderszene/sponsored-post/readly-news/so-behalten-gruendende-den-durchblick-im-medienkosmos-readly-7233595405/",
//             "urlToImage": "https://cdn.businessinsider.de/wp-content/uploads/2022/01/readly-magazin-artikelbild.jpg?ver=1641388954",
//             "publishedAt": "2022-01-31T10:22:00+00:00",
//             "content": "Wer in der Tech-Welt bestehen will, sollte aktuelle Trends und News im Auge haben. Wie Startups Zugang zu Quality Content und Experten-Insights erhalten.Wer beruflich Erfolge vorweisen will, sollte n… [+2605 chars]"
//         },
//         {
//             "source": {
//                 "id": "the-irish-times",
//                 "name": "The Irish Times"
//             },
//             "author": "The Irish Times",
//             "title": "Galway’s CitySwift to roll out big data tech on New York buses",
//             "description": "Irish founders set sights on US market as public transport battles the legacy of Covid",
//             "url": "https://www.irishtimes.com/\t\t\t\t\t\t\t/business/technology/galway-s-cityswift-to-roll-out-big-data-tech-on-new-york-buses-1.4789206\t",
//             "urlToImage": "https://www.irishtimes.com/image-creator/?id=1.4789204&origw=1200",
//             "publishedAt": "2022-01-31T05:18:50Z",
//             "content": "Transport tech company CitySwift has partnered with New York Citys public bus operator to help improve its vast commuter network with big data and machine learning.\r\nThe Galway-based tech company has… [+240 chars]"
//         },
//         {
//             "source": {
//                 "id": "fortune",
//                 "name": "Fortune"
//             },
//             "author": "Ellen McGirt, Jonathan Vanian",
//             "title": "The new way tech workers or color are protecting themselves when speaking out",
//             "description": "Speaking out against questionable management can pose a risk for tech workers in the minority—but that's about to change by an act of solidarity.",
//             "url": "https://fortune.com/2022/01/28/labor-funds-protect-workers-of-color-who-strike-activism/",
//             "urlToImage": "https://content.fortune.com/wp-content/uploads/2022/01/RaceAhead-GettyImages-1129489677.jpg?resize=1200,600",
//             "publishedAt": "2022-01-28T20:57:34Z",
//             "content": "Skip to Content"
//         },
//         {
//             "source": {
//                 "id": "next-big-future",
//                 "name": "Next Big Future"
//             },
//             "author": "Brian Wang",
//             "title": "Molecular Electronic Nanotechnology on a Semiconductor Chip | NextBigFuture.com",
//             "description": "The first molecular electronics chip has been developed. This is realizing a 50-year-old goal molecular nanotechnology to integrate single molecules into",
//             "url": "https://www.nextbigfuture.com/2022/01/molecular-electronic-nanotechnology-on-a-semiconductor-chip.html",
//             "urlToImage": "https://nextbigfuture.s3.amazonaws.com/uploads/2022/01/Screen-Shot-2022-01-28-at-9.35.35-AM-1024x532.jpg",
//             "publishedAt": "2022-01-28T17:38:05Z",
//             "content": "The first molecular electronics chip has been developed. This is realizing a 50-year-old goal molecular nanotechnology to integrate single molecules into circuits to achieve the ultimate scaling limi… [+5496 chars]"
//         }
//     ]
//     constructor(){
//         super();
//         console.log("Hello I am a constructor from news component ");
//         this.state ={
//             articles: this.articles,
//             loading: false    
//         }
//     }

//     async componentDidMount() {
//       let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=4ead7440fb05472c9e3315666906d761";
//       let data = await fetch(url);
//       let
//       console.log(data);
//     }
    

//   render() {

//     return <div className="container my-3">
            
//             <h2>NewsApp- Top Headlines</h2>
//             <div className="row">
//             {this.state.articles.map((element)=>{
//                    return <div className="col-md-4" key={element.url}>
//                         <NewsItem title= {element.title.slice(0,40)} description ={element.description.slice(0,80)} imageurl ={element.urlToImage} newsUrl={element.url}/> 
//                     </div>

//             })}
                
               
//             </div>
        

//         </div>;
//   }
// }

// export default News2;
