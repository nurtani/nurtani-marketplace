FROM oven/bun

WORKDIR /app

COPY package*.json ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

CMD ["bun", "--bun", "start"]