# Step 1: Use Node.js as the base image to build the Angular app
FROM node:18-alpine as build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the app's source code
COPY . .

# Step 6: Build the Angular app for production
RUN npm run build --prod

# Step 7: Use Nginx as the base image for serving the production build
FROM nginx:alpine

# Step 8: Copy the build output to the Nginx HTML directory
COPY --from=build /app/dist/sample1 /usr/share/nginx/html

# Step 9: Expose port 80
EXPOSE 80

# Step 10: Start Nginx
CMD ["nginx", "-g", "daemon off;"]
