const router = require("express").Router();
const axios = require("axios");
const mcache = require('memory-cache')

const cache = duration => {
    return (req, res, next) => {
        let key = '__express__' + req.originalUrl || req.url
        let cachedBody = mcache.get(key)
        if(cachedBody){
            res.send(cachedBody)
            return
        } 
        else {
            res.sendResponse = res.send
            res.send = body => {
                mcache.put(key, body, duration * 1000)
                res.sendResponse(body)
            }
            next();
        }
    }
}

// ruta para buscar por keyword /api/search?q=keyword
router.get("/search", cache(10), (req,res) => {
    const query = req.query.q;
    const regex = /-I./;
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
        .then(r => {
            const response = r.data.results;
            if (response.length > 0) {
                let products = response.map (product => {
                    return {
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        currency_id: product.currency_id,
                        available_quantity: product.available_quantity,
                        thumbnail: product.thumbnail.replace(regex, "-O."),
                        condition: product.condition,
                        permalink: product.permalink,
                        rate: product.installments.rate
                    };
                });
                res.status(200).json(products);
            }
        })
        .catch(err => res.status(400).send(err))
})

router.get("/categories", cache(20), (req, res) => {
    axios
      .get("https://api.mercadolibre.com/sites/MLA/categories")
      .then(({ data }) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  });
  

module.exports = router