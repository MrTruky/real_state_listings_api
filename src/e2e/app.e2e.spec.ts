import app from '../app';
import request from 'supertest';

import { Listing } from '../app';

describe('app', () => {
  it('should create a listing', async () => {
    const listing: Listing = {
      id: '1',
      title: 'Title',
      price: 100,
      description: 'Description',
    };

    const response = await request(app)
      .post('/api/v1/listings')
      .send(listing)
      .expect(201);

    expect(response.body).toEqual(listing);
  });

  it('should get all listings', async () => {
    const response = await request(app).get('/api/v1/listings').expect(200);

    expect(response.body).toEqual([
      {
        id: '1',
        title: 'Title',
        price: 100,
        description: 'Description',
      },
    ]);
  });

  it('should delete a listing', async () => {
    const response = await request(app)
      .delete('/api/v1/listings/1')
      .expect(200);

    expect(response.body).toEqual({ id: '1' });
  });
});
