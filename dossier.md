# Quinten Deconinck (202293145)

> Duid aan welke vakken je volgt en vermeld voor deze vakken de link naar jouw GitHub repository. In het geval je slechts één vak volgt, verwijder alle inhoud omtrent het andere vak uit dit document.
> Lees <https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet> om te weten hoe een Markdown-bestand opgemaakt moet worden.
> Verwijder alle instructies (lijnen die starten met >).

- [x] Front-end Web Development
  - <https://github.com/Web-IV/2324-webservices-QuintenDeconinck>
  - <LINK_ONLINE_VERSIE_HIER>
- [x] Web Services:
  - <https://github.com/Web-IV/2324-frontendweb-QuintenDeconinck>
  - <LINK_ONLINE_VERSIE_HIER>

**Logingegevens**

- Gebruikersnaam/e-mailadres:
- Wachtwoord:

> Vul eventueel aan met extra accounts voor administrators of andere rollen.
> Voor Admin:

- Gebruikersnaam/e-mailadres:
- Wachtwoord:

## Projectbeschrijving

> Omschrijf hier duidelijk waarover jouw project gaat. Voeg een domeinmodel (of EERD) toe om jouw entiteiten te verduidelijken.

Het project is een website voor een lokaal frituur (Frituur d'Aa) om klanten de mogelijkheid te geven online te bestellen. Verder is er ook een admin panel zodat de eigenaar producten/categorieën kan toevoegen/aanpassen/verwijderen en bestellingen kan bekijken. De gebruiker kan dus aanmelden en vanaf dan heeft deze de mogelijkheid om bestellingen te plaatsen en zijn eigen eerdere bestellingen te bekijken.

Hieronder een afbeelding van het EERD van de databank:

![EERD](./eerd.png)

## Screenshots

> Voeg enkele (nuttige!) screenshots toe die tonen wat de app doet.

Hier de Homepage met volgende items: NavBar met links naar Homepage, Order page en Contact page, profile button die bestaat uit <Link> items naar Orders page (overzicht van bestelgeschiedenis), Customer Card page (waar er een klantenkaart komt die punten bevat en waarmee de klant dan korting krijgt/een gratis vleesje kan bestellen), Account page (waar gebruiker zijn naam, geboortedatum, voorkeurstaal... kan aanpassen) en Logout button.

Hier de Order page die een lijst toont met alle categorieën die de user kan gebruiken om te filteren. Een lijst met alle producten die de gebruiker aan zijn shopping cart kan toevoegen. Rechts de shopping cart die de totale prijs toont en de gebruiker toelaat zijn order te bekijken en nog aan te passen alvorens de Checkout knop te gebruiken om naar de betaling te gaan.

Hier het admin dashboard: de admin kan alle producten bekijken en hier ook producten wijzigen/toevoegen/verwijderen. De admin kan ook een categorie toevoegen of verwijderen en kan onder "Orders" alle orders bekijken die geplaatst zijn door klanten.

## API calls

> Maak hier een oplijsting van alle API cals in jouw applicatie. Groepeer dit per entiteit. Hieronder een voorbeeld.
> Dit is weinig zinvol indien je enkel Front-end Web Development volgt, verwijder dan deze sectie.
> Indien je als extra Swagger koos, dan voeg je hier een link toe naar jouw online documentatie. Swagger geeft nl. exact (en nog veel meer) wat je hieronder moet schrijven.

Swagger: `localhost:8080/api`

### Customers

- `GET /api/customers/:id`: customer met een bepaald id ophalen
- `POST /api/customers`: een nieuwe customer toevoegen
- `PUT /api/customers/:id`: een customer met een bepaald id updaten

### Categories

- `GET /api/categories`: alle categorieën ophalen
- `POST /api/categories`: een nieuwe categorie toevoegen
- `DELETE /api/categories/:id`: een categorie met een bepaalde ID verwijderen

### Products

- `GET /api/products`: alle producten ophalen
- `POST /api/products`: een nieuw product toevoegen
- `PUT /api/products/:id`: een product met een bepaalde ID updaten
- `DELETE /api/products/:id`: een product met een bepaalde ID verwijderen

### OrderItems

- `POST /api/order-items`: nieuwe order items toevoegen

### Orders

- `GET /api/orders`: alle orders ophalen
- `GET /api/orders/user/:id`: alle orders voor een bepaalde gebruiker ophalen
- `GET /api/orders/:id`: een order met een bepaalde ID ophalen

### Auth

- `POST /api/login`: inloggen
- `POST /api/register`: registreren

## Behaalde minimumvereisten

> Duid per vak aan welke minimumvereisten je denkt behaald te hebben

### Front-end Web Development

- **componenten**

  - [x] heeft meerdere componenten - dom & slim (naast login/register)
  - [x] applicatie is voldoende complex
  - [ ] definieert constanten (variabelen, functies en componenten) buiten de component
  - [x] minstens één form met meerdere velden met validatie (naast login/register)
  - [x] login systeem
        <br />

- **routing**

  - [x] heeft minstens 2 pagina's (naast login/register)
  - [x] routes worden afgeschermd met authenticatie en autorisatie
        <br />

- **state-management**

  - [x] meerdere API calls (naast login/register)
  - [ ] degelijke foutmeldingen indien API-call faalt
  - [ ] gebruikt useState enkel voor lokale state
  - [ ] gebruikt gepast state management voor globale state - indien van toepassing
        <br />

- **hooks**

  - [ ] gebruikt de hooks op de juiste manier
        <br />

- **varia**

  - [ ] een aantal niet-triviale e2e testen
  - [x] minstens één extra technologie
  - [x] maakt gebruik van de laatste ES-features (async/await, object destructuring, spread operator...)
  - [ ] duidelijke en volledige README.md
  - [ ] volledig en tijdig ingediend dossier en voldoende commits

### Web Services

- **datalaag**

  - [x] voldoende complex (meer dan één tabel, 2 een-op-veel of veel-op-veel relaties)
  - [x] één module beheert de connectie + connectie wordt gesloten bij sluiten server
  - [x] heeft migraties - indien van toepassing
  - [x] heeft seeds
        <br />

- **repositorylaag**

  - [x] definieert één repository per entiteit (niet voor tussentabellen) - indien van toepassing
  - [x] mapt OO-rijke data naar relationele tabellen en vice versa - indien van toepassing
        <br />

- **servicelaag met een zekere complexiteit**

  - [x] bevat alle domeinlogica
  - [x] bevat geen SQL-queries of databank-gerelateerde code
        <br />

- **REST-laag**

  - [x] meerdere routes met invoervalidatie
  - [x] degelijke foutboodschappen
  - [x] volgt de conventies van een RESTful API
  - [x] bevat geen domeinlogica
  - [x] geen API calls voor entiteiten die geen zin hebben zonder hun ouder (bvb tussentabellen)
  - [x] degelijke authorisatie/authenticatie op alle routes
        <br />

- **algemeen**

  - [x] er is een minimum aan logging voorzien
  - [x] een aantal niet-triviale integratietesten (min. 1 controller >=80% coverage)
  - [x] minstens één extra technologie
  - [x] maakt gebruik van de laatste ES-features (async/await, object destructuring, spread operator...)
  - [ ] duidelijke en volledige README.md
  - [ ] volledig en tijdig ingediend dossier en voldoende commits

## Projectstructuur

### Front-end Web Development

> Hoe heb je jouw applicatie gestructureerd (mappen, design patterns, hiërarchie van componenten, state...)?

Ik heb gebruik gemaakt van de T3 stack dus zij maken een mappenstructuur aan wanneer het project geinitialiseerd wordt. De T3 stack bestaat uit NextJs, Typescript, Tailwindcss, Prisma en tRPC. Aangezien we werken met een aparte REST API heb ik de mappen van Prisma en tRPC verwijderd.
De mappen zijn als volgt gestructureerd:

- public : bevat de images die ik gebruik in dit project
- src : bevat alle files en folders van het project behalve de config files
  - api : bevat de calls naar de REST API per entiteit
  - components : bevat alle componenten zowel eigen gemaakte als van mijn UI-library Shadcn
  - contexts : bevat de context voor authenticatie
  - lib : utils file die nodig is om shadCN UI-library te gebruiken
  - pages : op het moment van initialisatie was er nog geen support voor app router dus gebruik ik de pages router van NextJs
    - account : folder die alle /account paths bevat zoals /account/customer-car en /account/orders
    - admin : folder die alle /admin paths bevat zoals /admin/products, /admin/categories en /admin/orders
    - contact : file voor de /contact pagina
    - order : file voor de /order pagina
    - layout: layout file voor de applicatie die de navbar bevat
    - login : file voor de /login pagina
    - register : file voor de /register pagina
    - index : file voor de / pagina
  - styles : bevat de global styles voor het project, gegenereerd door Shadcn voor darkmode/lightmode
  - types.ts : Typescript file die verschillende types bevat die ik hergebruik doorheen het project
  - hooks.ts : Typescript file die verschillende hooks bevat die ik hergebruik doorheen het project

### Web Services

> Hoe heb je jouw applicatie gestructureerd (mappen, design patterns...)?

Ik heb gebruik gemaakt van NestJs dus heb ik hun mappenstructuur gebruikt: door de CLI te gebruiken kan je voor elke entiteit een map genereren die een service, controller, dto en entity bevat. Verder maakt NestJs ook automatisch test files aan voor elke entiteit. De mappen zijn als volgt gestructureerd:

- prisma : folder die prisma schema file en seed.ts file bevat
- test : initialisatie van jest
- src :
  - auth : bevat alle files die met authenticatie en authorisatie te maken hebben
  - categories
  - config
  - customers
  - order-items
  - orders
  - prisma
  - products
  - main.ts

## Extra technologie

### Front-end Web Development

> Wat is de extra technologie? Hoe werkt het? Voeg een link naar het npm package toe!

- #### T3 Stack:

  - Ik heb gebruik gemaakt van de T3 stack en het bijbehorende create-t3-app om mijn project te initialiseren. De T3 stack bestaat uit NextJs, Typescript, Tailwindcss, tRPC en dan de keuze tussen Prisma en Drizzle en eventueel NextAuth. Aangezien we een aparte REST API hebben heb ik Prisma, tRPC en NextAuth niet gebruikt en deze dus verwijderd uit mijn project na initialisatie. https://create.t3.gg / https://www.npmjs.com/package/create-t3-app

- #### NextJs:

  NextJs is een framework om makkelijk web applicaties te maken. Het is gebaseerd op React en komt met een ingebouwde file-based router, Image Optimization, ... en nog veel meer. https://nextjs.org

- #### Typescript:

  Typescript is een superset van Javascript en zorgt ervoor dat je project strongly typed is. Dit wil zeggen voor alle functies en attributen het type ingeven zodat Typescript aan type checking kan doen. Op deze manier kan je bijvoorbeeld geen props vergeten doorgeven of een return type teruggeven anders dan wat je gespecifieerd hebt. https://www.npmjs.com/package/typescript

- #### Tailwindcss:

  Tailwindcss maakt gebruik van gewone css styles maar in plaats van alle elementen van de webpagina een class te geven en de styles per class te definiëren kan je de styles gewoon inline direct per component opsommen. https://www.npmjs.com/package/tailwindcss

- #### Tanstack Query:

  Ik heb een deel van mijn applicatie ook herschreven om gebruik te maken van Tanstack Query in plaats van SWR. Tanstack Query of het vroegere react-query maakt gebruik van keys om mutations en queries te cachen en op basis daarvan ook te refetchen. https://www.npmjs.com/package/@tanstack/react-query

- #### ShadcnUI:
  ShadcnUI is een relatief nieuwe UI collectie, geen library. Dit wil zeggen dat je via de command line enkel de componenten installeert die je echt gaat gebruiken en kan deze dan callen in het project bv. <Button> in plaats van een gewone <button> en hierbij kan je dan verschillende presets kiezen. Dit is geen component library dus er is geen package beschikbaar maar hier is de website: https://ui.shadcn.com

### Web Services

> Wat is de extra technologie? Hoe werkt het? Voeg een link naar het npm package toe!

- #### NestJs:

  NestJs is een alternatief voor NodeJs en ik heb hier vooral voor gekozen omdat het strong support heeft voor Typescript. https://www.npmjs.com/org/nestjs

- #### Typescript:

  Typescript is een superset van Javascript en verplicht je om alle types in het project te definiëren. https://www.npmjs.com/package/typescript

- #### Prisma:

  Prisma is een ORM (Object Relational Mapper) om zonder zelf SQL te moeten schrijven, interacties te kunnen hebben met de database. https://www.npmjs.com/package/prisma

- ### Swagger:

  Swagger is een tool om een API te documenteren. Je kan hier de verschillende endpoints en hun parameters en responses in documenteren. Verder kan je ook een voorbeeld van een request en response toevoegen. In NestJs is het erg makkelijk om deze op te stellen en ik heb deze doorheen het hele project gebruikt om al mijn endpoints te testen in plaats van PostMan. https://www.npmjs.com/package/@nestjs/swagger

- ### Passport:
  Passport is een authentication middleware voor NodeJs. Ik heb deze gebruikt om de login en register te implementeren. Voor NestJs is er een aparte package die gebruik maakt van de NestJs standaarden. https://www.npmjs.com/package/@nestjs/passport

## Testresultaten

### Front-end Web Development

> Schrijf hier een korte oplijsting en beschrijving van de geschreven testen

### Web Services

Elke file die door NestJs is aangemaakt is getest. Dit wil zeggen elke .controller.ts en .service.ts file heeft een equivalente .controller.spec.ts en .service.spec.ts file die testen definieert. Alle testen slagen, het is alleen spijtig dat dit niet werkt wanneer ik de AuthGuard en RolesGuard toevoeg aan de endpoints. De authenticatie zelf en de AuthGuard en RolesGuard zelf werken wel en wanneer ik ze manueel test in Swagger werkt alles naar behoren. Het was alleen niet mogelijk om de authenticatie te mocken in NestJs en daarom heb ik een aparte branch gemaakt die de authenticatie niet toepast op de endpoints. De authenticatie zelf wordt wel getest en werkt zoals gezegd naar behoren. De testen zijn geschreven met Jest en maken gebruik van de NestJs testing module.

![coverage](https://github.com/QuintenDeconinck/Images/raw/main/Screenshot%202023-12-19%20134621.png)
![coverage](https://github.com/QuintenDeconinck/Images/raw/main/Screenshot%202023-12-19%20134636.png)

## Gekende bugs

### Front-end Web Development

> Zijn er gekende bugs?

### Web Services

> Zijn er gekende bugs?

- Het lukt niet om de api te testen wanneer de Authenticatie Guards worden toegepast. Daarom is er een "testing" branch die gewoon de useGuards(AuthGuard) weglaat en de api dus test zonder de authentication header. Ik heb manueel op Swagger al mijn endpoints getest met de useGuards(AuthGuard, RolesGuard) en alls werkt perfect, het probleem ligt dus bij het mocken in de test scenarios. Ik heb erg lang liggen proberen om de authenticatie te kunnen mocken maar dit bleek moeilijker dan gedacht in NestJs.

- voor de testen wordt gebruik gemaakt van dezelfde databank als de online applicatie draait. In Prisma is het blijkbaar momenteel niet mogelijk om een aparte databank te gebruiken voor testen. Ik heb dit opgelost door de testen te laten runnen op een aparte branch die de databank seed, de testen runt en dan de databank opnieuw seed. Dit is natuurlijk niet ideaal maar ik heb geen andere oplossing gevonden en ik heb er dan ook voor gezorgd dat de seed file voldoende data bevat zodat het verschil eigenlijk niet zo groot is.
