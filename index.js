const express = require('express');
const computerAssemblyRouter = require('./routes/computer-assembly.routes');
const PORT = process.env.PORT || 8080;
const cors = require('cors');
const app = express();

app.use(cors({credentials: true}));
app.use(express.json());
app.use('/api', computerAssemblyRouter);
app.post('/',  (req, res) => {
    const requestData = req.body;
});

app.listen(PORT, () => console.log(`server started on post ${PORT}`));
