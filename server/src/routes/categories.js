const router = require("express").Router();

const categoriesRoutes = (db) => {
  router.get("/", (req, res) => {
    db.query(
      `
      SELECT * from categories;
      `
    )
      .then((response) => {
        res.json(response.rows);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

  router.get("/:id", (req, res) => {
    const reqParams = req.params.id;
    db.query(
      `
      SELECT * from categories where categories.id = $1;
      `
    ,[reqParams])
      .then((response) => {
        res.json(response.rows);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });
  // -------------add categories --not working properyly
  router.post("/", (req, res) => {
    const categoriesName = req.body.name;
    const budgetId = req.body.budget_id;
    const spendingLimit = req.body.spending_limit;
    console.log("categoriesName-----", categoriesName);
    console.log("req.body----",req.body);
    db.query(
      `
      INSERT INTO categories(name, budget_id, spending_limit)
      VALUES($1, $2, $3) 
      RETURNING *;
      `
    ,[categoriesName, budgetId, spendingLimit])
      .then((response) => {
        res.json(response.rows);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

  //-------------update categories --not working properyly
  router.put("/:id", (req, res) => {
    const reqParams = req.params.id;
    const updatedName = req.session.name;
    const updatedLimit = req.session.spending_limit;

    db.query(
      `
      UPDATE categories SET name = $2, spending_limit =$3 WHERE id = $1;
      `
    ,[reqParams, updatedName, updatedLimit])
      .then((response) => {
        res.json(response.rows);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

  //-------------delete categories
  router.delete("/:id", (req, res) => {
    const reqParams = req.params.id;

    db.query(
      `
      DELETE FROM categories WHERE categories.id = $1;
      `
    ,[reqParams])
      .then((response) => {
        res.json(response.rows);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });
  return router;
};

module.exports = categoriesRoutes;