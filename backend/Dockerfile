FROM node:alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

FROM node:alpine
WORKDIR /app
COPY --from=builder /app /app
RUN npm install
EXPOSE 8000
CMD ["npm","start"]