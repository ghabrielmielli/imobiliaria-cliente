FROM node:17.7.2-alpine
WORKDIR /imobiliaria-cliente
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm install
EXPOSE 8080
CMD ["npm", "run", "serve"]
