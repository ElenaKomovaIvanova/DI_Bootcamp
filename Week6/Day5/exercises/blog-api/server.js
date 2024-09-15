import express from 'express';

const app = express();
const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.use(express.json());

const blogPosts = [
    { id: 1, title: 'Getting Started with Node.js', content: 'Node.js is a runtime environment...' },
    { id: 2, title: 'Understanding JavaScript Promises', content: 'Promises in JavaScript allow...' },
    { id: 3, title: 'Express.js Basics', content: 'Express is a web framework for Node.js...' },
    { id: 4, title: 'Working with MongoDB', content: 'MongoDB is a NoSQL database...' },
    { id: 5, title: 'React for Beginners', content: 'React is a JavaScript library for building...' },
    { id: 6, title: 'Building APIs with Express', content: 'APIs allow applications to communicate...' },
    { id: 7, title: 'Handling Async Code in JavaScript', content: 'Async code can be handled using...' },
    { id: 8, title: 'Introduction to RESTful APIs', content: 'RESTful APIs follow a set of conventions...' },
    { id: 9, title: 'Understanding HTTP Methods', content: 'HTTP methods like GET, POST, PUT...' },
    { id: 10, title: 'JavaScript Closures Explained', content: 'A closure is a function that...' },
    { id: 11, title: 'Deploying Node.js Apps', content: 'There are multiple ways to deploy Node.js...' },
    { id: 12, title: 'Securing Express Apps', content: 'Security is important for web applications...' },
    { id: 13, title: 'Optimizing JavaScript Performance', content: 'There are several techniques to...' },
    { id: 14, title: 'Building Single Page Applications', content: 'SPAs are a popular way to build...' },
    { id: 15, title: 'CSS Flexbox vs Grid', content: 'Flexbox and Grid are two layout systems in CSS...' }
  ];

//   DELETE /posts/:id: Delete a blog post.
  
//   Implement error handling for invalid routes and server errors.  

//   GET /posts: Return a list of all blog posts.
app.get('/posts', (req, res) => {
    res.json(blogPosts);
});

//   GET /posts/:id: Return a specific blog post based on its id.
app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    const post = blogPosts.find(post => post.id == id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).send('Post not found');
    }
});

//   POST /posts: Create a new blog post.
app.post('/posts', (req, res) => {
    const {title, content} = req.body;
    const newPost = {
        id: blogPosts.length + 1,
        title,
        content
    };
    blogPosts.push(newPost);
    res.status(201).json(newPost);
});

//   PUT /posts/:id: Update an existing blog post.
app.put('/posts/:id', (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const post = blogPosts.find(post => post.id == id);
    if (post === -1) {
        return res.status(404).json({ message: 'Post not found' });
      }
    blogPosts[id] = {
        id,
        title,
        content
    };
    res.json(blogPosts[id]);
});

//   DELETE /posts/:id: Delete a blog post.
app.delete('/posts/:id', (req, res) => {
    const { id } = req.params;
    const post = blogPosts.find(post => post.id == id);
    if (post === -1) {
        return res.status(404).json({ message: 'Post not found' });
      }
    blogPosts.splice(id, 1);
    res.json({ message: 'Post deleted' });
});
