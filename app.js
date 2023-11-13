import express from 'express';
import cors from 'cors';

import ReactPDF from '@react-pdf/renderer';
import BookDocument from './BookDocument.jsx';

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Server is Ready!');
});

app.get('/pdf', async (req, res) => {
  // const pdfStream = await ReactPDF.renderToStream(<MyDocument />);
  // res.setHeader('Content-Type', 'application/pdf');
  // pdfStream.pipe(res);
  // pdfStream.on('end', () => console.log('Done streaming, response sent.'));

  await ReactPDF.renderToFile(<BookDocument />, `${__dirname}/my-doc.pdf`);
});
