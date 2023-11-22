# Voornaam Familienaam (Studentennummer)

> Duid aan welke vakken je volgt en vermeld voor deze vakken de link naar jouw GitHub repository. In het geval je slechts één vak volgt, verwijder alle inhoud omtrent het andere vak uit dit document.
> Lees <https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet> om te weten hoe een Markdown-bestand opgemaakt moet worden.
> Verwijder alle instructies (lijnen die starten met >).

- [x] Front-end Web Development
  - <GITHUB_REPO_LINK_HIER>
  - <LINK_ONLINE_VERSIE_HIER>
- [x] Web Services:
  - <GITHUB_REPO_LINK_HIER>
  - <LINK_ONLINE_VERSIE_HIER>

**Logingegevens**

- Gebruikersnaam/e-mailadres:
- Wachtwoord:

> Vul eventueel aan met extra accounts voor administrators of andere rollen.

## Projectbeschrijving

> Omschrijf hier duidelijk waarover jouw project gaat. Voeg een domeinmodel (of EERD) toe om jouw entiteiten te verduidelijken.

Het project is een website voor een lokaal frituur (Frituur d'Aa) om klanten de mogelijkheid te geven online te bestellen. Verder is er ook een admin panel zodat de eigenaar producten/categorieën kan toevoegen/aanpassen/verwijderen en bestellingen kan bekijken.

Hieronder een afbeelding van het EERD van de databank:

![EERD](./eerd.png)

## Screenshots

> Voeg enkele (nuttige!) screenshots toe die tonen wat de app doet.

Hier de Homepage met volgende items: NavBar met links naar Homepage, Order page en Contact page, profile button met links naar Orders page, Account page en Logout button.

Hier de Order page die een lijst toont met alle categorieën die de user kan gebruiken om te filteren. Een lijst met alle producten die de gebruiker aan zijn shopping cart kan toevoegen. Rechts de shopping cart die de totale prijs toont en de gebruiker toelaat zijn order te bekijken en nog aan te passen alvorens de Checkout knop te gebruiken om naar de betaling te gaan.

Hier het admin dashboard: de admin kan alle producten bekijken en hier ook producten wijzigen/toevoegen/verwijderen. De admin kan dezelfde acties ondernemen voor alle categorieën. Onder orders kan de admin alle orders bekijken en deze eventueel filteren.

## API calls

> Maak hier een oplijsting van alle API cals in jouw applicatie. Groepeer dit per entiteit. Hieronder een voorbeeld.
> Dit is weinig zinvol indien je enkel Front-end Web Development volgt, verwijder dan deze sectie.
> Indien je als extra Swagger koos, dan voeg je hier een link toe naar jouw online documentatie. Swagger geeft nl. exact (en nog veel meer) wat je hieronder moet schrijven.

Swagger: `localhost:8080/api`

### Gebruikers

- `GET /api/users`: alle gebruikers ophalen
- `GET /api/users/:id`: gebruiker met een bepaald id ophalen

### Customers

- `GET /api/customers`: alle customers ophalen
- `GET /api/customers/:id`: customer met een bepaald id ophalen
- `POST /api/customers`: een nieuwe customer toevoegen
- `PUT /api/customers/:id`: een customer met een bepaald id updaten
- `DELETE /api/customers/:id`: een customer met een bepaald id verwijderen

### Categories

- `GET /api/categories`: alle categorieën ophalen
- `POST /api/categories`: een nieuwe categorie toevoegen
- `DELETE /api/categories/:id`: een categorie met een bepaalde ID verwijderen

### Products

- `GET /api/products`: alle producten ophalen
- `POST /api/products`: een nieuw product toevoegen
- `DELETE /api/products/:id`: een product met een bepaalde ID verwijderen

### OrderItems

- `GET /api/orders/:id/order-items`: alle order-items van een bepaalde order ophalen
- `POST /api/orders/:id/order-items`: een nieuw order-item toevoegen aan een bepaalde order
- `DELETE /api/orders/:id/order-items/:id`: een order-item met een bepaalde ID verwijderen van een bepaalde order

### Orders

- `GET /api/orders`: alle orders ophalen
- `GET /api/orders/:id`: een order met een bepaalde ID ophalen
- `POST /api/orders`: een nieuwe order toevoegen
- `DELETE /api/orders/:id`: een order met een bepaalde ID verwijderen

## Behaalde minimumvereisten

> Duid per vak aan welke minimumvereisten je denkt behaald te hebben

### Front-end Web Development

- **componenten**

  - [x] heeft meerdere componenten - dom & slim (naast login/register)
  - [x] applicatie is voldoende complex
  - [ ] definieert constanten (variabelen, functies en componenten) buiten de component
  - [ ] minstens één form met meerdere velden met validatie (naast login/register)
  - [ ] login systeem
        <br />

- **routing**

  - [x] heeft minstens 2 pagina's (naast login/register)
  - [ ] routes worden afgeschermd met authenticatie en autorisatie
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
  - [ ] maakt gebruik van de laatste ES-features (async/await, object destructuring, spread operator...)
  - [ ] duidelijke en volledige README.md
  - [ ] volledig en tijdig ingediend dossier en voldoende commits

### Web Services

- **datalaag**

  - [x] voldoende complex (meer dan één tabel, 2 een-op-veel of veel-op-veel relaties)
  - [ ] één module beheert de connectie + connectie wordt gesloten bij sluiten server
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

  - [ ] meerdere routes met invoervalidatie
  - [ ] degelijke foutboodschappen
  - [ ] volgt de conventies van een RESTful API
  - [ ] bevat geen domeinlogica
  - [ ] geen API calls voor entiteiten die geen zin hebben zonder hun ouder (bvb tussentabellen)
  - [ ] degelijke authorisatie/authenticatie op alle routes
        <br />

- **algemeen**

  - [ ] er is een minimum aan logging voorzien
  - [ ] een aantal niet-triviale integratietesten (min. 1 controller >=80% coverage)
  - [x] minstens één extra technologie
  - [ ] maakt gebruik van de laatste ES-features (async/await, object destructuring, spread operator...)
  - [ ] duidelijke en volledige README.md
  - [ ] volledig en tijdig ingediend dossier en voldoende commits

## Projectstructuur

### Front-end Web Development

> Hoe heb je jouw applicatie gestructureerd (mappen, design patterns, hiërarchie van componenten, state...)?

Ik heb gebruik gemaakt van de T3 stack dus zij maken een mappenstructuur aan wanneer het project geinitialiseerd wordt. De T3 stack bestaat uit NextJs, Typescript, Tailwindcss, Prisma en tRPC. De mappen voor tRPC en Prisma heb ik verwijderd aangezien ik tRPC niet kan gebruiken omdat we een dedicated project hebben met de backend en daar gebruik ik prisma dan ook.
De mappen zijn als volgt gestructureerd:

- public : bevat de images die ik gebruik in dit project
- src : bevat alle files en folders van het project behalve de config files
  - api : bevat de calls naar de REST API per entiteit
  - components : bevat alle componenten zowel eigen gemaakte als van mijn UI-library Shadcn
  - hooks : bevat custom hooks die ik kan hergebruiken doorheen het project
  - pages : op het moment van initialisatie was er nog geen support voor app router dus gebruik ik de pages router van NextJs
    - account : folder die alle /account paths bevat zoals customer-card, orders en settings
    - admin : folder die alle /admin paths bevat zoals products, categories en orders
    - contact : file voor de /contact pagina
    - order : file voor de /order pagina
  - styles : bevat de global styles voor het project, gegenereerd door Shadcn voor darkmode/lightmode
  - types.ts : Typescript file die verschillende types bevat die ik hergebruik doorheen het project

### Web Services

> Hoe heb je jouw applicatie gestructureerd (mappen, design patterns...)?

Ik heb gebruik gemaakt van NestJs dus de mappenstructuur ligt vast bij initialisatie:

- prisma : folder die prisma schema file en seed.ts file bevat
- test : folder met e2e testen
- src :
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
  - Ik heb gebruik gemaakt van de T3 stack en het bijbehorende create-t3-app om mijn project te initialiseren. De T3 stack bestaat uit NextJs, Typescript, Tailwindcss en dan de keuze tussen Prisma en Drizzle en eventueel NextAuth. Ik heb ervoor gekozen om NextAuth niet te gebruiken maar te opteren voor (**\***)
- #### NextJs:
  NextJs is een framework om makkelijk web applicaties te maken. Het framework komt met routing, image optimization,
- #### Typescript:
  Typescript is een superset van Javascript en zorgt ervoor dat je project strongly typed is. Dit wil zeggen voor alle functies en attributen het type ingeven zodat Typescript aan type checking kan doen. Op deze manier kan je bijvoorbeeld geen props vergeten doorgeven of een return type teruggeven anders dan wat je gespecifieerd hebt.
- #### Tailwindcss:
  Tailwindcss maakt gebruik van gewone css styles maar in plaats van alle elementen van de webpagina een class te geven en de styles per class te definiëren kan je de styles gewoon inline direct per component opsommen.
- #### Tanstack Query:

- #### ShadcnUI:
  ShadcnUI is een relatief nieuwe UI collectie, geen library. Dit wil zeggen dat je via de command line enkel de componenten installeert die je echt gaat gebruiken en kan deze dan callen in het project bv. <Button> in plaats van een gewone <button> en hierbij kan je dan verschillende presets kiezen.

### Web Services

> Wat is de extra technologie? Hoe werkt het? Voeg een link naar het npm package toe!

- #### NestJs:
  NestJs is een alternatief voor NodeJs en ik heb hier vooral voor gekozen omdat het strong support heeft voor Typescript.
- #### Typescript:
  Typescript is een superset van Javascript en verplicht je om alle types in het project te definiëren.
- #### Prisma:
  Prisma is een ORM (Object Relational Mapper) om zonder zelf SQL te moeten schrijven, interacties te kunnen hebben met de database.
  Voor migration = database met tabellen aanmaken: npx prisma migrate dev --name "init"

## Testresultaten

### Front-end Web Development

> Schrijf hier een korte oplijsting en beschrijving van de geschreven testen

### Web Services

> Schrijf hier een korte oplijsting en beschrijving van de geschreven testen + voeg een screenshot van de coverage en uitvoering toe

## Gekende bugs

### Front-end Web Development

> Zijn er gekende bugs?

### Web Services

> Zijn er gekende bugs?
