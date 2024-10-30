// middleware/cors.js
export default (req, res, next) => {
    const allowedOrigins = ['https://your-allowed-domain.com', 'http://localhost:3000'];
    const origin = req.headers.origin;
  
    if (allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
  
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
  
    next();
  };
  