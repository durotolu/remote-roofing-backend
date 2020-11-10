const router = require('express').Router();
const data = require('./mock-addresses');

router.post('/', (req, res) => {
  try {
    let address = req.body.search;
    console.log(address);
    let result = [];
    
    for (let i = 0; data.length > i; i++) {
      if (data[i].includes(address) && result.length < 5) {
        result.push(data[i]);
      };
      if (result.length >= 4) {
        break
      };
    };
    res.status(201).json(result);
  } catch {res.status(500).json('error')};
});

module.exports = router;