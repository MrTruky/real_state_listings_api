import express from 'express';

export interface Listing {
  id: string;
  title: string;
  price: number;
  description: string;
}

const listings: Listing[] = [];

const app = express();

app.use(express.json());

app.post('/api/v1/listings', (req, res) => {
  const { ...listing } = req.body;

  listings.push(listing);

  return res.status(201).json(listing);
});

app.get('/api/v1/listings', (_req, res) => {
  return res.status(200).json(listings);
});

app.delete('/api/v1/listings/:listingId', (req, res) => {
  const { listingId } = req.params;

  const listingIndex = listings.findIndex(
    (listing) => listing.id === listingId
  );

  if (listingIndex === -1) {
    return res.status(404).json({ error: 'Listing not found' });
  }

  listings.splice(listingIndex, 1);

  return res.status(200).json({ id: listingId });
});

export default app;
