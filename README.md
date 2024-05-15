### 1. Clone repo

```
$ git clone https://github.com/GauravSah21/Agriproduct.git
$ cd AgriProduct
```

### 2. Create .env File

<<<<<<< HEAD
- created  to .env in backend an frontend
and
=======
- create .env in backend and frontend folder the veriable 

 ```
Backend .env

JWT_SECRET=
MONGODB_URI=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_URL=
CLOUDINARY_API_SECRET=
GOOGLE_API_KEY=
MAILGUN_DOMIAN=
MAILGUN_API_KEY=

Frontend .env
REACT_APP_KHALTI_PUBLIC_KEY=
REACT_APP_KHALTI_SECRET_KEY=

```

### 3. Setup MongoDB

- Local MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - In .env file update MONGODB_URI=mongodb://localhost/AgriProduct
- OR Atlas Cloud MongoDB
  - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
  - In .env file update MONGODB_URI=mongodb+srv://your-db-connection

### 4. Run Backend

```
$ cd backend
$ npm install
$ npm start
```

### 5. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```

### 6. Seed Users and Products

- Run this on browser: http://localhost:5000/api/seed
- It returns admin email and password and 6 sample products

### 7. Admin Login

- Run http://localhost:3000/signin
- Enter admin email and password and click signin
