export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    console.log('------------------------------------------>', req.data);
    
    res.status(200).json({ name: 'John Doe' })
  } else {
    res.status(200).json({ name: 'John Doe' })
  }
}