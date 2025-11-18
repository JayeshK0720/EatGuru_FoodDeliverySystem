🍽️ Online Food Delivery System (MERN Stack)
  A full-featured Online Food Delivery System built using the MERN stack, integrating real-time order tracking, live delivery boy location, dynamic dashboards, and secure authentication. 
  The system includes three panels: User, Shop Owner, and Delivery Boy, each with dedicated functionalities.

🔗 Project is Live On: **https://eatguru.onrender.com**

🚀 Features

🧑‍🍳 User Features

  Search nearby restaurants and food items using GPS (Leaflet API).
  View ratings, prices, categories, and recommended items.
  Add to Cart & Place Orders.
  Pay using Razorpay (Online) or Cash on Delivery.
  Track order status in real time via Socket.io.
  Live delivery boy location on map.
  Rate food after delivery

🏪 Owner (Restaurant) Features

  Add, edit, and manage shop details.
  Add, update, and categorize food items.
  Real-time visibility of all incoming orders.
  Update order status: Pending → Preparing → Out for Delivery.
  Assign available delivery boys dynamically.
  Real-time sync with users & delivery boys.
  
🚴 Delivery Boy Features

  View assigned orders.
  Accept or reject delivery requests.
  Live location sharing to user (Socket.io + Leaflet).
  OTP verification to complete delivery.
  Earnings and delivery analytics using Recharts (Bar Graph).

🧰 Tech Stack
  
  Frontend
  - React.js
  - Tailwind CSS
  - Leaflet.js (maps)
  - Recharts (delivery analytics)

  Backend
  - Node.js
  - Express.js
  - MongoDB (Mongoose)

Authentication & Security
  - Firebase Authentication (Google Login)
  - JWT Authorization
  - Bcrypt (Password Hashing)

Other Integrations
  - Socket.io (Real-time updates)
  - Razorpay (Online payments)
  - Cloudinary + Multer (Image uploads)
  - Nodemailer (Email OTP)

