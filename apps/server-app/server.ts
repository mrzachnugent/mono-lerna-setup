import express from 'express';

const PORT = 4000;

export interface QueryPayload {
  foo: string;
}

express()
  .get('/data', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const data: QueryPayload = { foo: 'bar' };
    res.json(data);
  })

  .listen(PORT, () =>
    console.log(`server-app is istening at http://localhost:${PORT}`)
  );
