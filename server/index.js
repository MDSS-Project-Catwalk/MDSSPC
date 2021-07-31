const express = require('express');
const axios = require('axios');
const config = require('../config');

const app = express();
const port = 3000;

axios.defaults.baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';
axios.defaults.headers.common.Authorization = config.TOKEN;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static('./client/dist'));

// products

app.get('/products', (req, res) => {
  axios.get('/products/', { params: req.query })
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
});

app.get('/products/:product_id', (req, res) => {
  axios.get(`/products/${req.params.product_id}`)
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
});

app.get('/products/:product_id/:end_point', (req, res) => {
  axios.get(`/products/${req.params.product_id}/${req.params.end_point}`)
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
});

// reviews

app.get('/reviews', (req, res) => {
  axios.get('/reviews', { params: req.query })
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
});

app.get('/reviews/meta', (req, res) => {
  axios.get('/reviews/meta', { params: req.query })
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
});

/* Posting a review, marking a review as helpful,
and reporting a review is to be created.  */

// app.post('')

// Questions

app.get('/qa/questions', (req, res) => {
  axios.get('/qa/questions', { params: req.query })
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
});

app.get('/qa/questions/:question_id/answers', (req, res) => {
  axios.get(`/qa/questions/${req.params.question_id}/answers`,
    { params: req.query })
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
});

app.put('/qa/questions/:question_id/helpful', (req, res) => {
  axios.put(`/qa/questions/${req.params.question_id}/helpful`)
    .then(() => {
      res.status(200).send();
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
});

app.post('/qa/questions/:question_id/answers', (req, res) => {
  axios.post(`/qa/questions/${req.params.question_id}/answers`, req.body)
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

app.listen(port, () => {
  console.log(`App listening at post: ${port}`);
});
