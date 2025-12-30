/**
 * Cricket API Integration Test
 * Validates that the Cricket API key is working correctly
 */

import { describe, it, expect } from 'vitest';
import axios from 'axios';

const CRICKET_API_BASE_URL = 'https://api.cricapi.com/v1';
const CRICKET_API_KEY = process.env.CRICKET_API_KEY;

describe('Cricket API Integration', () => {
  it('should have CRICKET_API_KEY environment variable set', () => {
    expect(CRICKET_API_KEY).toBeDefined();
    expect(CRICKET_API_KEY).not.toBe('');
  });

  it('should successfully fetch current matches with the API key', async () => {
    if (!CRICKET_API_KEY) {
      throw new Error('CRICKET_API_KEY is not set');
    }

    const response = await axios.get(`${CRICKET_API_BASE_URL}/currentMatches`, {
      params: {
        apikey: CRICKET_API_KEY,
        offset: 0,
      },
      timeout: 10000,
    });

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
    expect(response.data.status).toBe('success');
    expect(response.data.data).toBeDefined();
    expect(Array.isArray(response.data.data)).toBe(true);
    
    console.log(`✅ Cricket API test passed! Found ${response.data.data.length} matches`);
    console.log(`API hits today: ${response.data.info?.hitsToday}/${response.data.info?.hitsLimit}`);
  }, 15000); // 15 second timeout for API call
});
