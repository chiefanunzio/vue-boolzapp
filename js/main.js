// Milestone 1● 
//Replica della grafica con la possibilità di avere messaggi scritti dall’ utente(verdi) e
// dall’ interlocutore(bianco) assegnando due classi CSS diverse
//● Visualizzazione dinamica della lista contatti: tramite la direttiva v -for, visualizzare
// nome e immagine di ogni contatto --ok--


// Milestone 2● 
//Visualizzazione dinamica dei messaggi: tramite la direttiva v -for, visualizzare tutti i
// messaggi relativi al contatto attivo all’ interno del pannello della conversazione
//● Click sul contatto mostra la conversazione del contatto cliccato


// Milestone 3● 
//Aggiunta di un messaggio: l’ utente scrive un testo nella parte bassa e digitando“ enter” il testo viene aggiunto al thread sopra, come messaggio verde● Risposta dall’ interlocutore: ad ogni inserimento di un messaggio, l’ utente riceverà
// un“ ok” come risposta, che apparirà dopo 1 secondo.


// Milestone 4● 
//Ricerca utenti: scrivendo qualcosa nell’ input a sinistra, vengono visualizzati solo i
// contatti il cui nome contiene le lettere inserite(es, Marco, Matteo Martina - > Scrivo“ mar” rimangono solo Marco e Martina)


// Milestone 5 - opzionale● 
//Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
// permette di cancellare il messaggio selezionato
//●Visualizzazione ora e ultimo messaggio inviato / ricevuto nella lista dei contatti
// Consigli utili: ●Si possono trascurare le scrollbar verticali, sia nel pannello dei messaggi, che nella
// lista dei contatti● I pulsanti e le icone possono non funzionare(a parte l’ invio del messaggio)● Per gestire le date, può essere utile la libreria day.js● La struttura dell’ array dei contatti potrebbe avere questa forma:




function init() {

    new Vue({

        el: '#app',
        data: {


            contacts: [{
                    name: 'louise',
                    avatar: '../img/pg.png',
                    visible: true,
                    messages: [{
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }

                    ],
                },
                {
                    name: 'Batman',
                    avatar: '../img/bat.jpeg',
                    visible: true,
                    messages: [{
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Homer',
                    avatar: '../img/homer.png',
                    visible: true,
                    messages: [{
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Bart',
                    avatar: '../img/bart.png',
                    visible: true,
                    messages: [{
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],
            newMessage: {
                date: '',
                text: '',
                status: 'sent'
            },
            cerca: '',
            indexContact: 0,
            
            frasi: [
                "Sii audace.",
                "Segui il consiglio degli esperti.",
                "I compromessi non fanno per te.",
                "Concentrati sulla tua vita familiare.",
                "Scopri il significato delle cose e poi goditele.",
                "Assolutamente.",
                "Resterà un dubbio.",
                "Assolutamente no.",
                "La curiosità ti indicherà la strada.",
                "Meglio aspettare.",
                "Contaci.",
                "Tienilo per te.",
                "Fallo presto.",
                "Gli esiti potrebbero essere sorprendenti.",
                "La risposta potrebbe arrivare sotto un'altra forma.",
                "Dubitane.",
                "Dovrai adattarti.",
                "Sii paziente.",
                "Scoprirai tutto ciò di cui hai bisogno.",
                "Tutto è legato ad un'altra situazione.",
                "Presta attenzione e osserva cosa succede.",
                "Dipenderà dall'opinione che gli altri hanno di te.",
                "Troverai la risposta scrivendo.",
                "Sarai felice di averlo fatto.",
                "Non è consigliabile.",
                "Cerca sempre di migliorare.",
                "In questo momento no.",
                "Solo se farai come ti è stato detto di fare.",
                "Se è fatto bene, altrimenti lascia perdere.",
                "In questo momento non chiedere di più.",
                "Non fermarti alla prima soluzione.",
                "Avrai l'ultima parola.",
                "Procedi con passo più rilassato.",
                "La soluzione migliore non sempre è la più ovvia.",
                "Sii più flessibile.",
                "La situazione è fuori dal tuo controllo.",
                "Goditi l'esperienza.",
                "Avvicinati con cautela.",
                "Presta attenzione ai dettagli.",
                "Guarda dove metti i piedi.",
                "Parlane apertamente.",
                "Non esitare.",
                "Sarà un buon momento per fare nuovi progetti.",
                "Procedi oltre.",
                "Non ti accontentare.",
                "Vai oltre le apparenze.",
                "Non c'è nessuna garanzia.",
                "Funzionerà.",
                "Le circostanze cambieranno velocemente.",
                "Non farti travolgere dalle emozioni.",
                "Sposta il tuo obbiettivo.",
                "Da' priorità a ciò che è veramente importante.",
                "Elenca i pro e i contro.",
                "Non aspettare.",
                "Metti la testa a posto.",
                "Valuta più alternative.",
                "Porta a termine gli impegni presi.",
                "Affronta la situazione più avanti.",
                "Lasciati guidare da qualcun altro.",
                "Rischia.",
                "Accetta un cambiamento nella routine.",
                "Dovrai prendere iniziativa.",
                "Devi osare di più.",
                "Solo se saprai rischiare.",
                "Mettiti in gioco per scoprirlo.",
                "Avrai bisogno di saperne di più.",
                "Fidati della tua prima impressione.",
                "Creerà confusione.",
                "Rimuovi le tue incertezze.",
                "Sarebbe meglio se ti concentrassi sul lavoro.",
                "Ti farà piacere.",
                "Saperlo non cambierà le cose.",
                "Puoi scommeterci.",
                "Sii più generoso.",
                "Ascolta i consigli di chi ti vuole bene.",
                "Prima finisci qualcos'altro.",
                "Incontrerai resistenze.",
                "Sei troppo coinvolto per capire.",
                "La situazione non è chiara.",
                "Richiederà uno sforzo considerevole.",
                "Concediti una pausa.",
                "Non ti ricapiterà un'opportunità simile.",
                "Rivedi il tuo atteggiamento.",
                "Nessuno è perfetto.",
                "Non è consigliabile.",
                "Aspetta un'offerta migliore.",
                "Trova presto una soluzione.",
                "Sì, ma non forzare le cose.",
                "Chiarisciti le idee prima.",
                "Ora puoi.",
                "Non esagerare.",
                "Ti sosterrà.",
                "Ti costerà.",
                "Renderà le cose più interessanti.",
                "Non farà la differenza.",
                "Risparmia le energie.",
                "Sii concreto.",
                "L'esito sarà positivo.",
                "Non è sicuro.",
                "È sicuro.",
                "Forse dovrai rinunciare ad altre cose.",
                "Non ha importanza.",
                "Non ti angosciare.",
                "Preparati ad affrontare un imprevisto.",
                "Non è importante.",
                "Di' a qualcuno cosa significa per te.",
                "Qualsiasi cosa tu faccia durerà a lungo.",
                "Tieni la mente aperta.",
                "È un buon momento per fare progetti.",
                "Potrà sembrarti difficile ma porterà dei risultati.",
                "Ne vale la pena.",
                "Non ne vale la pena.",
                "Troverai degli ostacoli da superare.",
                "Potrebbero emergere altri problemi.",
                "Se ti farai aiutare otterai quello che vuoi.",
                "La chiave sarà la collaborazione.",
                "Apriti nuove strade.",
                "Prenditene cura.",
                "Non può fallire.",
                "Rispetta le regole.",
                "Devi agire.",
                "Non perdere tempo.",
                "Non sarai deluso.",
                "Insisti e ce la farai.",
                "Può essere una questione già risolve.",
                "Presto ne verrai a capo.",
                "Prenditi più tempo per decidere.",
                "Segui i tuoi buoni propositi.",
                "Non arrenderti.",
                "Non sentirti in obbligo di agire troppo in fretta.",
                "Non ignorare ciò che è ovvio.",
                "Se proprio non resisti.",
                "Non dimenticare di divertirti.",
                "Non dubitarne.",
                "Impegnandoti otterrai dei buoni risultati.",
                "Prova una soluzione meno ovvia.",
                "Abbandona le soluzioni più scontate.",
                "Attenzione ai contrattempi.",
                "Cerca di concludere.",
                "Avere tante alternative è peggio che averne poche.",
                "Se ascolterai più attentamente capirai.",
                "Ridici sopra.",
                "La risposta è dentro di te.",
                "Altri dipendono dalle tue scelte.",
                "Lascia perdere.",
                "È uno spreco di soldi.",
                "Stai sprecando tempo.",
                "Non ti importa realmente.",
                "Metticela tutta.",
                "Non mollare.",
                "Devi considerare altre possibilità.",
                "Fra un anno non avrà importanza.",
                "Lo supererai.",
                "Potrebbe rivelarsi straordinario.",
                "Sarà più facile di quanto pensi.",
                "Conta fino a dieci e rifai la domanda.",
                "Agisci come se fosse già vero.",
                "È indispensabile stabilire delle priorità.",
                "Usa l'immaginazione.",
                "Sarà meraviglioso.",
                "Mantieni la calma.",
                "Deciderai nel corso del tempo.",
                "Dovrai aspettare.",
                "Indiscutibilmente.",
                "Lo rimpiangerai.",
                "Certamente.",
                "Non sei mai stato così consapevole.",
                "Sii più consapevole dei tuoi limiti.",
                "Fidati del tuo intuito.",
                "Non limitarti.",
                "Puoi fare molto di più.",
                "Considerala un'opportunità.",
                "Mai.",
                "Forse più avanti.",
                "Forse.",
                "Fallo una volta sola.",
                "Ciò che farai migliorerà la situazione.",
                "Non scommetterci.",
                "Non essere ridicolo.",
                "Potresti scoprirti incapace a compromessi.",
                "Dovrai scendere a compromessi.",
                "Gioisci per piccole cose.",
                "Sicuramente.",
                "Resterà un dubbio.",
                "Sii entusiasta.",
                "Sembra certo.",
                "Fallo presto.",
                "Non dirlo in giro.",
                "Metti tutto nero su bianco, troverai la risposta.",
                "Non è il momento giusto.",
                "Cerca sempre di migliorare.",
                "Per adesso accontentati.",
                "Lascia perdere.",
                "Esistono altre soluzioni, pensaci.",
                "L'ultima parola sarà la tua.",
                "Sii versatile.",
                "Assapora questo momento.",
                "Guardati dalle trappole.",
                "Agisci con freddezza.",
                "Non indugiare.",
                "Occupati subito di ciò che ti sta a cuore.",
                "Ti rimarrà sempre nel cuore.",
                "Le cose andranno bene.",
                "Non lasciare a metà ciò che hai iniziato.",
                "Ci penserai più avanti.",
                "Buttati.",
                "Dovrai fare il primo passo.",
                "Devi avere più informazioni.",
                "Non è come sembra.",
                "Lascia perdere i dubbi.",
                "Farà scalpore.",
                "Rimarrai sorpreso di ciò di cui sei capace.",
                "Sarà bellissimo.",
                "Non avere timore.",
                "Le tue paure sono ingiustificate.",
                "Crepi l'avarizia.",
                "Troppe scelte a disposizione possono costituire un ostacolo.",
                "Lascia perdere.",
                "Impegnati al massimo.",
                "Non ti importa realmente.",
                "Fra un po' non ci penserai più.",
                "Il tempo è prezioso: non sprecarlo.",
                "I risultati saranno incredibili.",
                "Anche questa è un'occasione.",
                "Ti costerà fatica.",
                "Purtroppo non andrà tutto liscio.",
                "Lascia che le cose evolvano per conto loro.",
                "La situazione ti sta troppo a cuore per capire.",
                "Riconsidera il tuo atteggiamento.",
                "Sì, ma non forzare le cose.",
                "Non preoccuparti di niente."
            ],

        },
        
        methods: {

            getIndex: function (i) {
                this.indexContact = i;
                console.log(i);
            
            },



            addMessage: function () {
                this.newMessage.date = this.getDate();
                this.newMessage.status = 'sent'
                if (this.newMessage.text.length > 0) {
                    this.contacts[this.indexContact].messages.push({
                        ...this.newMessage
                    });

                    this.newMessage.text = '';
                    this.botMessage();
                }


            },
            botMessage: function () {
                const rispMessage = this.indexContact;
                setTimeout(() => {
                    this.newMessage.text = this.getmessages();
                    this.newMessage.status = 'received'
                    this.contacts[rispMessage].messages.push({
                        ...this.newMessage
                    });
                    this.newMessage.text = '';


                }, 2000);

            },
            getDate: function () {

                const now = new Date();
                const date = now.getDate() + '/' +
                    now.getMonth() + '/' +
                    now.getFullYear() + ' ' +
                    now.getHours() + ':' +
                    now.getMinutes();

                return date;
            },

            filteredName: function () {

                const filteredContacts = [];
                for (let i = 0; i < this.contacts.length; i++) {
                    const contact = this.contacts[i];
                    const name = contact.name;

                    if (name.toLowerCase().includes(this.cerca.toLowerCase())) {

                        filteredContacts.push(contact);
                    }
                }
                return filteredContacts;

            },


            getRandom: function (min, max) {


                return Math.floor(Math.random() * (max - min + 1)) + min;

            },

            getmessages: function () { //trovo una risposta al bot

               const index = this.getRandom(0, this.frasi.length);
               const msg = this.frasi[index];
               return msg;
            }




            // VARIE PROVE
            // filteredname: function () {
            //     return this.contacts.filter(elem => {
            //         return elem.name.toLowerCase().includes(this.cerca.toLowerCase());
            //     });
            //         filteredName: function (array , text) {

            //             return this.contacts[this.indexContact].filter(function (contact) {

            //                 let reg = RegExp(this.cerca, 'i');
            //                 return contact.name.match(reg);
            //                 console.log(filteredName(contacts, ));
            //             });

            //             // let reg = RegExp(this.cerca, 'i');
            //             // return contact.name.match(reg);

            // }









        }


    });
}

document.addEventListener('DOMContentLoaded', init)