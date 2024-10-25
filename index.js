const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ruleRoutes = require('./routes/ruleRoutes');
const { sequelize } = require('./models/ruleModel'); // DB setup

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api/rules', ruleRoutes);

const port = 5000;

// Connect to DB and start server
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
