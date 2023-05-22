// all of your endpoints for your router go
// in this file here


//anytime i want to use readTodos or writeTodos use dot notation db.readTodos/ db.writeTodos

const express = require('express')
const router = express.Router()
const db = require('./db/db')
db. 


router.get("/", async (req, res) => {
    res.send(`yes i am listening`);
  });

router.get('/all', async (req, res) => {
    const posts = await readPosts()
    res.json(db)
  })

  //gets specific item with post_id  number
  router.get("/:id", async (req, res) => {
    const item = db.find((item) => item.item === req.params.id);
  
    res.json(item);
  });


// add new items to list
router.post("/new", (req, res) => {
    //getting from postman
    const {item} = req.body;
    // const {body} = req.body;
  
    // making new object to send back to database
    const itemPost = {
    //   post_id: uuidv4(),
      item: item
    //   body: body
    };
  
    res.json({
      message: "added item to list",
      itemPost,
    });

    db.push(req.body);

    res.send("added new item");

  });


  //Deleting specific items
router.delete("/:id", async (req, res) => {
    const index = db.findIndex(
      (post) => parseInt(post.post_id) === parseInt(req.params.id)
    );
  
    const deleted = db.splice(index, 1);
  
    res.json({
      message: "Item Deleted!",
      deletedPost: deleted,
    });
  });

























  module.exports = router