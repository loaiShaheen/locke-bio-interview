## Running the app

# after cloning the code:

install packages with:

```bash
$ yarn
```

create a .env file containing the following key

```bash
DATABASE_URL="postgres://admin:admin@localhost:5432/nestjs"
```

generate prisma with:

```bash
$ yarn prisma generate
```

create a docker container:

```bash
$ docker-compose up
```

once the container is up and running we can migrate the tables to the db:

```bash
$ yarn prisma migrate dev
```

now the backend is ready to start using:

```bash
$ yarn start:dev
```
