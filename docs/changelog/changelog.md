# CHANGELOG SERVER FIVEM

# <center>CHANGELOG 1.0.7 </center>

- Rimosso il supporto per poter prelevare i veicoli dai vecchi garage,
  ambi i punti sono stati messi presso il sequestro; 
  Il Punto verde servirà a mandare il veicolo al sequestro mentre il rosso a ritirarlo. (esx_garage)
- Effettuate alcune migliorie al codice: (bpt_addonaccount).
- Rimossi gli addobbi Natalizi. [Christmas + server.cfg]
- impostato il meteo su sereno. (vSync)
- Inserito un nuovo veicolo Ford Mustang MGT con suono Modificato (Veicolo Vip) - (bpt_cars + sound_cars)
- Effettuata una pulizia del codice per il lavoro della polizia, molte parti del codice erano inutilizzate,
  di conseguenza sono state rimosse cio' dovrebbe rendere più fluida l'esperienza di gioco. (bpt_policejob)
- Introdotto un sistema per le riparazioni delle armi attraverso l'utilizzo dell'acciaio,
  le riparazioni potranno essere effettuate soltanto dall'armeria. (alv_repairtable + ox_inventory)
- Ricostruzione lavoro armeria con l'inserimento di una mappa custom,
  ora è possibile avere i veicoli aziendali di proprietà rilasciare fatture inserendo il motivo del rilascio,
  visualizzare i documenti d'identita e rilasciare il porto d'armi nonchè altre piccole news.
  Inoltre è stato inserito un veicolo aziendale blindato. (bpt_cars + sound_cars + bpt_ammujob)
- Migliorato il codice per la riproduzione di contenuti web sul gioco. (ptelevision)
- Eseguito un miglioramento lato server per evitare il crash del codice (KC_unicorn)
- Implementate le librerie "loader-utils", cio' ha permesso l'aggiornamento della risorsa chat. ([gameplay]/chat/)
- Rimozione della schermata di caricamento natalizia,
  inoltre le musiche di riproduzione sono state diminuite da 3 ad 1,
  le freccie direzzionali destra e sinistra sono state rimosse,
  la musica in schermata di caricamento è "NCS" questo è il primo passo affinchè si possano effettuare le live Stream. (bpt_loadscreen)
- Creata la lingua Italiana per l'assegnazione del veicolo VIP. (esx_givevehicle)
- Corretti alcuni errori minori inerenti alle risorse (ps-dispatch + esx_strippers)
- La risorsa (Pnotify) non è più una dipendenza per le risorse (seatbeal e bpt_carshoroom)
- Applicata una piccola patch di sicurezza per evitare il "client-side cross-site scripting". (esx_scoreboard)
- Aggiornate le dipendenze per la chat vocale di gioco (pma-voice)
   
# <center>CHANGELOG 1.0.6 R2</center>

- Corretto il problema della traduzione mancante nel menu fatture dell'import exploit (bpt_importjob)
- Introdotto un nuovo sistema di garage piu' realistici, (esx_garage + esx_realparking)
  continueremo a supportare i vecchi Garage fino al 07/01/2025.
  Attenzione: Spostare tutti i veicoli dall'attuale garage a quelli nuovi, i veicoli non spostati verranno persi.
  I Garage di proprietà nelle abitazioni resteranno invariati.
- Effettuato un grande aggiornamento di ricostruzione dell'hud per visualizzare lo stato del cibo e della salute,
  in precedenza era posto al centro della schermata con delle icone al quanto fastidiose quando venivano effettati i test di guida,
  ora è stata spostata sulla sinistra sotto la minimappa, (minimappa che funzionerà soltanto quando si è su un veicolo).
- Corretto errore di battitura nelle traduzioni dell'inventario. (ox_inventory)

# <center>CHANGELOG 1.0.6 R1</center>

- Creata la traduzione in lingua Italiana per i contratti di rivendita dei veicoli. (esx_contract)
- Corretta la gestione degli oggetti lanciabili e paracaduti. (es_extended)
- Corretti problemi di esecuzione per il Codice KC-unicorn. (KC_unicorn)
- Corretto il peso e il nome dell'item trota. (ox_inventory)

# <center>CHANGELOG 1.0.6</center>

- Implementato il contratto di rivendita del veicolo,
  d'ora in poi l'import potrà riciclare la carta e riutilizzarla per la creazione dei contratti.
- Ricostruzione lavoro Taxi
- Corretto problema inerente all'utilizzo della torcia  
- Migliorato il codice lato client per il job taxi per una maggiore stabilità
- Correzioni minori al menu animazione
- Aggiornamento al [core], nuovo sistema di coordinate introdotto,
  cio' permetterà cio' permetterà una maggiore  precisione durante la generazione di veicoli, personaggi o altri oggetti di scena.
- Nuovo comando disponibile per tutti: "/playtime",
  comando che vi permetterà di visualizzare il tempo trascorso in gioco.
- Aggiornato il sistema d'interazione per la lista lavori presso il centro di collocamento.
- Creazione di una nuova categoria per l'armeria per suddividere al meglio gli item da craftare.
- Nuovi item disponibili in armeria.
- Inserite 11 nuove animazioni.
- Modificato il funzionamento della modalità fps quando si è accovacciati,
  (ora è possibile disattivare completamente la mira per evitare un exploit in cui è possibile mirare e poi sparare in terza persona).
- Modificata la schermata di caricamento in stile Natalizio.
- Applicate patch di sicurezza nel codice dell' abbigliamento.
- Corretto problema falsa godmode rilevata quando si effettuava il relog.
- Creato un sistema d'interazione con gli NPC, ora è possibile derubarli. 
  (attenzione gli npc sono armati possono reagire).
- Pack auto compattato in una sola risorsa senza avere numerose risorse nel server.
- Inserito nuovo veicolo Vip Tmax 500.
- Inserito il veicolo Mercedes-Benz SLS AMG (riservato al vincitore dell'evento di halloween 2024).
- Inserito un nuovo cibo temporaneo per il periodo Natalizio "Fetta di panettone".
- Inserita nuova mappa (abitazione Playboy).
- Inserita la possibiltà di preparare: patatine fritte, latte di mandorla,
  salmone alla griglia presso il vanilla unicorn.
- Diminuito il peso del grano e delle patate.
- Limite del ping prima del kick automatico impostato a 600ms e 3warn.
- Migliorata notevolmente la connessione al database per salvataggi piu' rapidi e precisi.
- Caricata mappa prigione.
- Rivisionato l'intero sistema carcerario.
- Corretto problema inerente le modifiche per i veicoli addon.
- sostituito l'uso di gameEventTriggeredcon una soluzione più efficiente basata su thread per gestire le morti dei giocatori.
  L'approccio precedente si basava sull'evento CEventNetworkEntityDamage, che veniva attivato troppo spesso,
  in particolare per eventi non letali come incidenti stradali, causando un sovraccarico di prestazioni non necessario.
  La nuova soluzione controlla la morte del giocatore in modo deterministico in un thread,
  attivando l'evento di morte solo quando un giocatore viene confermato morto.

# <center>CHANGELOG 1.0.5 R2</center>

- Rimosse le decorazioni di Halloween
- Meteo impostato su sereno

# <center>CHANGELOG 1.0.5 R1</center>
  
- Inserimento mappa Benny's (nuovo centro modifiche auto).
- Spostato il centro modifiche presso nuova posizione.
- Inserite nuove targhe disponobili dall'aggiornamento fivem 3095 e superiori.
- Menu delle modifiche spostato sulla destra. 
- Supporto in maniera nativa per la traduzine inerente alla intestazione del menu modifiche.

# <center>CHANGELOG 1.0.5</center>

- Implementata per gli helper la funzione di gestione ticket in game,
  tutti i nuovi aggiornamenti per i ticket di supporto saranno visibili in discord soltanto per lo staff di supporto.
- Patch di sicurezza applicate
- L'ospedale è stato trasferito in un nuovo punto.
- Inseriti due punti di acquisto per l'elicottero dei medici
- Corretto problema del caricamento texture per l'abbigliamento dei medici
- Aggiornamento Onesync per quanto riguarda la generazione di veicoli e oggetti di scena

# <center>CHANGELOG 1.0.4</center>

- Corretto veicolo mads14
- Ottimizato il codice per i ticket in gioco.
- Configurati dei permessi amministrativi per i Trial Helper

# <center>CHANGELOG 1.0.3</center>

- Risolto problema della falsa rilevazione della godmode.
- Migliorate le prestazioni del menu abbigliamento.
- Schermata di caricamento modificata per il periodo di Halloween.
- Fix lato Server il sistema monetario non farà differena tra lettere minuscole o maiuscole
- Apportate delle modifiche Importanti al [core], diminuendo il carico di invio di dati.
  Inoltre la sincronizzazione è notevolmente migliorata riducendo i problemi di arresti anomali
- Corretta l'impossibilità per i medici di rianimare i giocatori
- Introdotto l'Item Zucca per l'vento di Halloween.
- Risolto problema con i permessi amministrativi di EasyAdmin
- Aggiornato il sistema di collisione tra giocatori e veicoli
- Aggiornato il sistema di generazione dei veicoli
- Gestione dei pneumatici più reale
- Aggiornato il sistema Streaming, la quale si occupa della gestione Texture e richiesta dei vari modelli
- Il meteo è stato impostato in stile Halloween per l'intera durata dell'evento
- Introdotto nuovo Item "Torcia" acquistabile in armeria
- Lo staff di supporto verrà mostrato con il proprio ruolo e colore anche in game
- Inserite le decorazioni per l'evento di Halloween

# <center>CHANGELOG 1.0.2</center>

- Corretto il sistema di notifica, alcune volte l'icona non veniva visualizzata
- Corretto il problema inerente alla scomparsa dei veicoli di proprietà se lasciati fuori dal garage
- Gestione del random spawn ped e veicoli migliorata
- Pannello per la scelta del personaggio configurato in lingua Italiana
- Corretto il comando "say"
- Rimosso il sottomenu delle animazioni dal menu F5, sostituito con un nuovo menu
- Implementata la possibilità di spingere il veicolo soltanto quando è in avaria
- Inserita la possibilità di aprire direttamente in gioco dei ticket di assistenza attraverso il comando /tickets , anche i membri non staff potranno aiutare la community
- Aggiornamento per quanto riguarda l'utilizzo della fotocamera, cio' dovrebbe consentire delle migliori prestazioni

# <center>CHANGELOG 1.0.1</center>

- Effettuata una ricostruzione parziale lato client per la scuola guida per una migliore stabilità.
- Impostata la lingua Italiana per il sistema bancario, effettuate alcune correzioni minori,
- La vendita del pesce è stata impostata presso l'aquirente situato nella zona della discarica ad un prezzo minimo, sarò comunque venderlo ai gestori dei ristoranti.
- Tutti i gradi lavorativi sono stati cambiati in lingua Italiana
- Inseriti nuovi veicoli FDO, effettuate traduzioni mancanti
- Chiuse le seguenti porte: Porte principali armeria, la maggior parte delle porte della centrale di polizia, chiusa la porta dell'ufficio del meccanico
- Corretto il problema del conto alla rovescia per la rigenerazione del personaggio 

# <center>CHANGELOG 1.0.0</center>

- Corrette alcune traduzioni riguardanti le abitazioni
- Correzioni minori per il lavoro del concessionario
- Applicate importanti patch di sicurezza
- Bloccata la possibilità di creare il doppio personaggio, solo gli utenti autorizzati n'è avranno la possibilità
- Possibiltà di utilizzare i televisori in gioco per poter guardare video Youtube e livestream twitch
- Bilancato il peso di alcuni Item
- Possibilità di trovare la plastica usata attraverso la pesca in mare
- I Menu Crafting dell'armeria e Import sono stati suddivisi per categoria
- Cambiati i prezzi di vendita per quanto riguarda Smeraldi e Diamanti
- Creato punto di acquisto veloce per gli item creati dall'import
- Introdotto il comando "say" (solo sviluppatore) per poter inviare direttamente messaggi al server dalla console di avvio
- Rimossa mappa del porto e lavoro per la lavorazione del pesce, (la possibilità di pescare è rimasta). La lavorazione del pesce spetta direttamnte ai vari locoli e ristoranti
- Aggiornata la descrizione del server
- Aggiornate le immagini degli item dell'inventario e sistema crafting
- Rimosso il punto di acquisto per l'attrezzatura di pesca, ora il tutto si trova presso lo shop 24/7
- Introdotti nel sistema crafting la creazione delle: lamiere di acciaio, giubbotti antiproiettile, medikit
