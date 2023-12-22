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

```bash
DATABASE_URL='mysql://p0way0xzn9mudc5aps1i:pscale_pw_uLEY4H1pXqSUdsmrDxm0YXNRdoXvMKhg0j439NMB39O@aws.connect.psdb.cloud/frituur?sslaccept=strict'
JWT_SECRET='someSuperRandomSecretKeyThatIThinkIsSafeButMaybeNotSoMuch'
JWT_EXPIRES='1200s'
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
