import "./routes";
import app from './app';

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`kanban api is running on port: ${port}`);  
});
