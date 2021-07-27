const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const config = require('../config');

axios.defaults.headers.common.Authorization = config.TOKEN;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static('./client/dist'));

// products

app.get('/products', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/', { params: req.query })
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      throw err;
    });
});

app.get('/products/:product_id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${req.params.product_id}`)
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      throw err;
    });
});

app.get('/products/:product_id/:end_point', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${req.params.product_id}/${req.params.end_point}`)
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      throw err;
    });
});

// reviews

app.get('/reviews', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews', { params: req.query })
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      throw err;
    });
});

app.get('/reviews/meta', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta', { params: req.query })
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      throw err;
    });
});

/* Posting a review, marking a review as helpful,
and reporting a review is to be created.  */

// app.post('')

// Questions

app.get('/qa/questions', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions', { params: req.query })
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      throw err;
    });
});

app.get('/qa/questions/:question_id/answers', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${req.params.question_id}/answers`,
    { params: req.query })
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      throw err;
    });
});

// post questions and answers to be done

app.listen(port, () => {
  console.log(`App listening at post: ${port}`);
});
