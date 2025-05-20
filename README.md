
# Enhanced website - Oncollaboration
Ontwerp en maak een interactieve website die snel laadt en prettig te gebruiken is.

Een online platform waar Indonesische en Nederlandse artsen — met name radiotherapeuten — kennis kunnen uitwisselen onder andere via webinars.
[Bekijk de live website](https://user-experience-enhanced-website-g9ki.onrender.com)  

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/enhanced-website/blob/main/docs/INSTRUCTIONS.md)

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Ontwerpkeuzes](#ontwerpkeuzes)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
Tijdens deze sprint heb ik gewerkt aan het uitwerken en opbouwen van de homepage van OnCollaboration. Op basis van feedback heb ik meerdere aanpassingen gedaan. Daarnaast heb ik de gebruikservaring verbeterd met:

<img width="1792" alt="Scherm­afbeelding 2025-05-20 om 13 52 22" src="https://github.com/user-attachments/assets/925468d9-a6a7-4c5f-95d1-b14c06bf5221" />

<br>

- **View Transitions API** voor vloeiende paginawissels  


https://github.com/user-attachments/assets/9ebcf1c0-651c-4a62-ad60-bbcc4238691b

<br>

- **Picture elements** en **lazy loading** om afbeeldingen slimmer en sneller te laden 


https://github.com/user-attachments/assets/69638f0e-6570-478b-b45e-8260df0e1f6b

<br>
 
- Het voorkomen van layout shifts door width en height elementen toe te voegen 

## Ontwerpkeuzes

Bij het ontwerpen van OnCollaboration heb ik gekozen voor een rustige en overzichtelijke layout die aansluit bij de doelgroep. De interface is simpel gehouden, zodat de focus ligt op de inhoud, zoals de webinars en contourings.

De kleuren en typografie zijn neutraal en professioneel, zodat het platform vertrouwen uitstraalt. Voor de homepage heb ik bewust gekozen om de introductie met een animatie te presenterenom de aandacht naar de intoductie tekst te trekken. De navigatie is opgezet met duidelijke knoppen en secties, zodat gebruikers snel vinden wat ze zoeken.

Daarnaast heb ik ervoor gekozen om met **view transitions** te werken bij het wisselen van pagina’s, zodat het navigeren prettiger aanvoelt en de site luxer oogt. De opbouw is mobile first gemaakt met een responsive design, zodat het platform goed werkt op verschillende schermformaten. Dit is belangrijk voor artsen die het onderweg of op hun eigen apparaten gebruiken.

Tot slot is er extra aandacht besteed aan de laadtijd van de pagina’s. Afbeeldingen worden slim geladen (**lazy loading**), en door gebruik van moderne afbeeldingsformaten wordt de performance verbeterd zonder dat dit ten koste gaat van de kwaliteit van het ontwerp.

## Gebruik
Op de homepage zie je een introductie over het platform met animatie bij het laden. Je kunt via het menu gemakkelijk navigeren naar twee hoofdonderdelen:

- **Webinars:** Hier vind je alle beschikbare online sessies.
- **Contourings:** Interactieve inhoud en voorbeelden binnen het radiotherapie vakgebied.

Ook staan de samenwerkende partners duidelijk vermeld op de homepage.

## Kenmerken

**HTML**  
De site is opgebouwd met semantische HTML, waarbij duidelijke structuur is aangehouden zoals `<header>`, `<main>`, `<section>` en `<footer>`. De content is logisch gegroepeerd, zodat het goed leesbaar en toegankelijk is voor gebruikers én zoekmachines.

**CSS**  
Er is gebruik gemaakt van een responsive layout, zodat de site op mobiel en desktop goed werkt. Animaties (zoals de intro op de homepage) zijn gemaakt met CSS transitions en keyframes. Verder is er aandacht besteed aan het voorkomen van layout shifts door vaste afmetingen en ruimte voor content te reserveren.

**JavaScript**  
JavaScript is gebruikt om de navigatie te verbeteren met de **View Transitions API**, wat zorgt voor vloeiendere overgangen tussen pagina’s. Daarnaast worden sommige elementen pas geladen of zichtbaar gemaakt op basis van gebruikersinteractie.

**Node.js**  
De website draait op een eenvoudige Node.js server met Express. Routes zijn opgezet voor verschillende pagina’s zoals de homepage, webinars en contourings. De views zijn geschreven in Liquid (template engine).

**Performance**  
Voor betere prestaties zijn afbeeldingen ingeladen via `<picture>` elementen met ondersteuning voor moderne formaten zoals WebP en AVIF. Lazy loading is toegevoegd om pas afbeeldingen te laden als ze in beeld komen. Dit zorgt voor snellere laadtijden, vooral op mobiel.

**Overige technieken**  
- **Homepage** met geanimeerde introductie
- **Webinars en contourings** als losse routes
- **View transitions** voor vloeiendere navigatie
- **Lazy loading** en **responsive images** via het `<picture>` element
- **Snelle laadtijden** en betere gebruikerservaring door performance-optimalisaties

## Installatie
1. Download en installeer Node.js.
2. Fork deze repository naar je eigen GitHub-account.
3. Clone de repository naar je laptop.
4. Open de repository in VS code.
5. Open de terminal in de map van je project in VS Code.
6. Installeer de benodigde pakketten door het volgende commando in de terminal uit te voeren: npm install
7. Start de server met het commando: npm start Bekijk je project door de lokale host-link die in de terminal verschijnt te openen in je browser.

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
