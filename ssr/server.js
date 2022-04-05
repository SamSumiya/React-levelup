import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './src/App.js';
import path from 'path'
import fs from 'fs'

const app = express();

app.use(express.static('./build', { index: false }));

app.get('*', (req, res) => {
  let reactApp; 
  try {
    reactApp = renderToString(
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      );
    
  } catch (error) {
    console.error((error));
  }
  
  const tempplateFile = path.resolve('./build/index.html')
  fs.readFile(tempplateFile, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send(err)
    } else {
      return res.send(
        data.replace('<div id="root"></div>',
          `<div id="root">${reactApp}</div>`)
      )
    }
  })
 
  // res.send(`
  //   <html>
  //     <body>
  //       <div id='root'> ${reactApp} </div>
  //     </body>
  //   </html>
  // `);
});

app.listen(8080, () => {
  console.log(`Port is running on port 8080`);
});
