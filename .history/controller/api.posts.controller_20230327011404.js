const db = require('../db');
class PostsController {
   async getPosts(req, res) {
      const title = 'Posts'
      const pos = await db.query(`select * from post`)
      const posts = pos.rows
      res.render('posts', {posts, title})
   }
}

module.exports = new PostsController()