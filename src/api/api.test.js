import { fetchPassengers } from './api';

// Test API.
describe('#fetchPassengers() using async/await', () => {
  it('should load passengers data', async () => {
    const passengers = await fetchPassengers()
    expect(passengers).toBeDefined()
    expect(passengers).toHaveLength(8)
  })
})