         Zerodha Clone - Stock Trading Platform 📈
A comprehensive full-stack stock trading platform inspired by Zerodha's Kite interface. Built with modern web technologies to provide real-time market data, portfolio management, and seamless trading capabilities.
 📊 Dashboard & Portfolio
- Comprehensive portfolio overview with P&L calculations
- Real-time holdings display with current market values
- Active positions tracking
- Order history and transaction logs
- Performance analytics with interactive charts


        ### Frontend
- **React.js** - Modern UI library
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Chart.js/Recharts** - Data visualization
- **Socket.io Client** - Real-time updates

        ### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Socket.io** - Real-time communication
- **JWT** - Authentication
- **bcrypt** - Password hashing

        ### Additional Tools
- **Axios** - HTTP client
- **Multer** - File upload handling
- **Nodemailer** - Email notifications
- **Morgan** - HTTP request logging
- **Helmet** - Security middleware

        ## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abeer-srivastava/Zerodha-Clone.git
   cd Zerodha-Clone
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/zerodha-clone
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=30d
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   ```

   Create a `.env` file in the client directory:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   REACT_APP_SOCKET_URL=http://localhost:5000
   ```

5. **Set up the database**
   ```bash
   # Make sure MongoDB is running
   # The app will create the database automatically
   npm run seed  # Optional: to add sample data
   ```

6. **Start the development servers**
   
   **Option 1: Run both servers concurrently**
   ```bash
   npm run dev
   ```
   
   **Option 2: Run servers separately**
   ```bash
   # Terminal 1 - Backend
   npm run server
   
   # Terminal 2 - Frontend
   npm run client
   ```

7. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - API Documentation: http://localhost:5000/api-docs

## 📁 Project Structure

```
Zerodha-Clone/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route-based pages
│   │   ├── redux/          # State management
│   │   ├── services/       # API services
│   │   ├── utils/          # Helper functions
│   │   └── hooks/          # Custom React hooks
│   └── package.json
├── server/                 # Express backend
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── controllers/        # Route controllers
│   ├── utils/              # Helper functions
│   ├── config/             # Configuration files
│   └── sockets/            # Socket.io handlers
├── .env                    # Environment variables
├── package.json
└── README.md
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/forgot-password` - Password reset

### User Management
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `POST /api/users/upload-avatar` - Upload profile picture

### Market Data
- `GET /api/market/stocks` - Get stock list
- `GET /api/market/stock/:symbol` - Get stock details
- `GET /api/market/stock/:symbol/chart` - Get stock chart data
- `GET /api/market/news` - Get market news

### Trading
- `POST /api/orders` - Place new order
- `GET /api/orders` - Get user orders
- `PUT /api/orders/:id` - Modify order
- `DELETE /api/orders/:id` - Cancel order

### Portfolio
- `GET /api/portfolio/holdings` - Get user holdings
- `GET /api/portfolio/positions` - Get active positions
- `GET /api/portfolio/pnl` - Get profit/loss data

## 🔄 Real-time Features

The application uses WebSocket connections for real-time updates:

- **Live Stock Prices** - Real-time price updates
- **Order Status** - Instant order confirmations
- **Portfolio Updates** - Live portfolio value changes
- **Market Alerts** - Price alert notifications
- **Trading Activity** - Live trading feed

## 🔒 Security Features

- Input validation and sanitization
- SQL injection prevention
- XSS protection with Content Security Policy
- Rate limiting for API endpoints
- HTTPS enforcement in production
- Secure cookie handling
- Environment variable protection

## 🧪 Testing

```bash
# Run backend tests
npm test

# Run frontend tests
cd client && npm test

# Run tests with coverage
npm run test:coverage
```

## 🚢 Deployment

### Using Docker
```bash
# Build and run with Docker Compose
docker-compose up --build
```

### Manual Deployment
1. Set production environment variables
2. Build the React app: `cd client && npm run build`
3. Start the production server: `npm start`

## 📝 Environment Variables

### Backend (.env)
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=30d
EMAIL_HOST=your_email_host
EMAIL_PORT=587
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

### Frontend (client/.env)
```env
REACT_APP_API_URL=your_backend_url
REACT_APP_SOCKET_URL=your_socket_url
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Zerodha's Kite platform
- Icons from [Lucide React](https://lucide.dev/)
- Charts powered by [Recharts](https://recharts.org/)
- UI components styled with [Tailwind CSS](https://tailwindcss.com/)

## 📞 Contact

**Abeer Srivastava**
- GitHub: [@abeer-srivastava](https://github.com/abeer-srivastava)
- Email: your.email@example.com

## 🌟 Show your support

Give a ⭐️ if this project helped you!

---

**⚠️ Disclaimer**: This is a demo application for educational purposes only. Do not use real money or actual trading credentials. Always consult with financial advisors for real trading decisions.
