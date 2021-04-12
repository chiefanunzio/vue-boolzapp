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
                    indexContact: 0,

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
                        date: '10/01/2020 15:50:00',
                        text: '',
                        status: 'sent'
                    },
                    cerca: '',


                },
                methods: {

                    getIndex: function (i) {

                        this.indexContact = i;
                        console.log(i);
                    },



                    addMessage: function () {

                        this.newMessage.status = 'sent'
                        if (this.newMessage.text.length > 0) {
                            this.contacts[this.indexContact].messages.push({
                                ...this.newMessage
                            });
                            setTimeout(this.botMessage, 2000);
                            this.newMessage.text = '';


                        }



                    },
                    botMessage: function () {

                        this.newMessage.text = 'ok';
                        this.newMessage.status = 'received'
                        this.contacts[this.indexContact].messages.push({
                            ...this.newMessage
                        });

                        this.newMessage.text = '';
                    },
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

        },









});


}

document.addEventListener('DOMContentLoaded', init)