# Installation

The officially supported installation method is Docker Compose.

In an new folder, create a `docker-compose.yml` file:

::: code-group

```yaml [docker-compose.yml] {8,28,29}
services:
  hound-postgres:
    container_name: hound-postgres
    image: postgres:18
    environment:
      POSTGRES_DB: hound_db
      POSTGRES_USER: hound
      POSTGRES_PASSWORD: super-strong-password
    volumes:
      - ./Hound Data/postgres_data:/var/lib/postgresql
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U hound -d hound_db"]
      interval: 5s
      timeout: 5s
      retries: 5

  hound-server:
    container_name: hound-server
    image: houndmediaserver/hound:latest
    depends_on:
      hound-postgres:
        condition: service_healthy
    ports:
      - "2323:2323"
    environment:
      - POSTGRES_DB=hound_db
      - POSTGRES_USER=hound
      - POSTGRES_PASSWORD=super-strong-password
      - HOUND_SECRET=super-strong-secret
    volumes:
      - ./Hound Data:/app/Hound Data
      # (Optional) attach your media library
      # IMPORTANT: Please read the docs before doing this
      # - /path/to/movies:/app/External Library/Movies
      # - /path/to/shows:/app/External Library/TV Shows
```

:::
Pay attention to the highlighted lines:

- Change `POSTGRES_PASSWORD` in both `hound-postgres` and `hound-server` to a strong password. Make sure both are the same.
- Change `HOUND_SECRET` in `hound-server` to a strong secret.

You can use [this site](https://randomkeygen.com/secret-key) to generate a strong password/secret, or generate your own.

Start the containers:

```bash
docker compose up -d
```

And access the web portal:

::: code-group

```yml [http://localhost:2323]
Username: admin
Password: password
```

:::

**Make sure you change your password after logging in.**

Congratulations, you have successfully deployed Hound!

Next, follow the next section to **set up a provider**, so you can start streaming and downloading content.
