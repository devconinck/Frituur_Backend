# Examenopdracht Web Services

- Student: Quinten Deconinck
- Studentennummer: 202293145
- E-mailadres: <mailto:quinten.deconinck@student.hogent.be>

## Vereisten

Ik verwacht dat volgende software reeds geïnstalleerd is:

- [NodeJS](https://nodejs.org)
- [Yarn](https://yarnpkg.com)

## Opstarten

### Create a .env file with the following content:

```javascript
DATABASE_URL =
  'mysql://llenchsp5ii229orb71j:pscale_pw_b7VpYdnAGVSraZwabnXxkqz2ObrQvTHtzgDY0nHvoG9@aws.connect.psdb.cloud/frituur?sslaccept=strict';
JWT_SECRET = 'someSuperRandomSecretKeyThatIThinkIsSafeButMaybeNotSoMuch';
JWT_EXPIRES = '1200s';
```

### Install all dependencies using the following command:

```bash
yarn install
```

### Run the following command to start the application:

```bash
yarn start:dev
```

## Testen

### To test the application you have to switch to the test branch and run the following command:

```bash
git checkout test
yarn test
```

If there is an issue with prisma, install it globally using the command found in the frontend web README
