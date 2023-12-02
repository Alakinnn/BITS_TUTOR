FROM node:18

WORKDIR /app

COPY package*.json ./

ARG NODE_ENV
RUN if [ ${NODE_ENV} = "development" ]; \
    then npm install; \
    else npm install --omit=dev; \
    fi

COPY . .

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "serve"]
