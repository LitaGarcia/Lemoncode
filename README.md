# Lemoncode
Personal Repository for Lemoncode Frontend Master projects

## How to run it

Each module has its own dependencies. If you want to run any of them on your local machine, follow the steps below:

- Module 1 : Run npx parcel <folder>/index.html with the file you are interested in from index.html. For example: npx parcel Ejercicio-01/index. html

- Module 2 : Install the dependencies in the corresponding folder and run npm run start

- Module 3: Install all the dependencies and then use the following commands to run the project:

    - **Development Mode**:
      ```sh
      npm run start:dev
      ```
      This will start the development server on port 3000 with the development environment settings.

    - **Production Mode**:
      ```sh
      npm run build
      npm run serve:prod
      ```
      This will build the project in production mode and start the server on port 5000 with the production environment settings.