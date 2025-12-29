/**
 * Cricket Data API Service
 * Handles all interactions with Cricket Data API (cricapi.com)
 * API Documentation: https://cricketdata.org
 */

import axios, { AxiosInstance } from 'axios';

const CRICKET_API_BASE_URL = 'https://api.cricapi.com/v1';
const CRICKET_API_KEY = process.env.CRICKET_API_KEY || 'afb22ee0-add7-48b4-af1d-bdf319c03c9d';

// API response types
interface ApiResponse<T> {
  apikey: string;
  status: string;
  data: T;
  info?: {
    hitsToday: number;
    hitsLimit: number;
    credits?: number;
    server: number;
    offsetRows: number;
    totalRows: number;
    queryTime: number;
  };
}

interface TeamInfo {
  name: string;
  shortname: string;
  img: string;
}

interface ScoreInfo {
  r: number;
  w: number;
  o: number;
  inning: string;
}

interface MatchData {
  id: string;
  name: string;
  matchType: 't20' | 'odi' | 'test';
  status: string;
  venue: string;
  date: string;
  dateTimeGMT: string;
  teams: string[];
  teamInfo: TeamInfo[];
  score?: ScoreInfo[];
  series_id: string;
  fantasyEnabled: boolean;
  bbbEnabled: boolean;
  hasSquad: boolean;
  matchStarted: boolean;
  matchEnded: boolean;
}

interface PlayerData {
  id: string;
  name: string;
  role: string;
  battingStyle: string;
  bowlingStyle: string;
  country: string;
  playerImg: string;
}

interface SquadData {
  teamName: string;
  shortName: string;
  img: string;
  players: PlayerData[];
}

interface MatchPointsInning {
  inning: string;
  batting: Array<{
    id: string;
    name: string;
    altnames?: string[];
    points: number;
  }>;
  bowling: Array<{
    id: string;
    name: string;
    points: number;
  }>;
}

interface MatchPointsData {
  innings: MatchPointsInning[];
}

interface ScorecardData {
  id: string;
  name: string;
  matchType: string;
  status: string;
  venue: string;
  date: string;
  dateTimeGMT: string;
  teams: string[];
  teamInfo: TeamInfo[];
  score: ScoreInfo[];
}

class CricketApiService {
  private client: AxiosInstance;
  private requestCount: number = 0;
  private lastResetTime: number = Date.now();

  constructor() {
    this.client = axios.create({
      baseURL: CRICKET_API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Request interceptor to add API key
    this.client.interceptors.request.use((config) => {
      config.params = {
        ...config.params,
        apikey: CRICKET_API_KEY,
      };
      return config;
    });

    // Response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => {
        this.requestCount++;
        return response;
      },
      (error) => {
        console.error('[Cricket API Error]', error.message);
        throw error;
      }
    );
  }

  /**
   * Get current matches (live and upcoming)
   */
  async getCurrentMatches(offset: number = 0): Promise<MatchData[]> {
    try {
      console.log('[Cricket API] Fetching current matches with API key:', CRICKET_API_KEY.substring(0, 8) + '...');
      const response = await this.client.get<ApiResponse<MatchData[]>>('/currentMatches', {
        params: { offset },
      });

      console.log('[Cricket API] Response status:', response.data.status);
      console.log('[Cricket API] Response info:', response.data.info);

      if (response.data.status === 'success') {
        console.log('[Cricket API] Successfully fetched', response.data.data.length, 'matches');
        return response.data.data;
      }
      throw new Error(`Failed to fetch current matches: ${response.data.status}`);
    } catch (error: any) {
      console.error('[getCurrentMatches Error]', error.message);
      console.error('[getCurrentMatches Error Details]', error.response?.data || error);
      // Return empty array instead of throwing to prevent sync from crashing
      return [];
    }
  }

  /**
   * Get all matches (paginated)
   */
  async getAllMatches(offset: number = 0): Promise<MatchData[]> {
    try {
      const response = await this.client.get<ApiResponse<MatchData[]>>('/matches', {
        params: { offset },
      });

      if (response.data.status === 'success') {
        return response.data.data;
      }
      throw new Error('Failed to fetch all matches');
    } catch (error) {
      console.error('[getAllMatches Error]', error);
      throw error;
    }
  }

  /**
   * Get match info by ID
   */
  async getMatchInfo(matchId: string): Promise<MatchData> {
    try {
      const response = await this.client.get<ApiResponse<MatchData>>('/match_info', {
        params: { id: matchId },
      });

      if (response.data.status === 'success') {
        return response.data.data;
      }
      throw new Error('Failed to fetch match info');
    } catch (error) {
      console.error('[getMatchInfo Error]', error);
      throw error;
    }
  }

  /**
   * Get fantasy squad for a match
   */
  async getFantasySquad(matchId: string): Promise<SquadData[]> {
    try {
      const response = await this.client.get<ApiResponse<SquadData[]>>('/match_squad', {
        params: { id: matchId },
      });

      if (response.data.status === 'success') {
        return response.data.data;
      }
      throw new Error('Failed to fetch fantasy squad');
    } catch (error) {
      console.error('[getFantasySquad Error]', error);
      throw error;
    }
  }

  /**
   * Get fantasy match points
   */
  async getFantasyMatchPoints(matchId: string, ruleset: number = 0): Promise<MatchPointsData> {
    try {
      const response = await this.client.get<ApiResponse<MatchPointsData>>('/match_points', {
        params: { id: matchId, ruleset },
      });

      if (response.data.status === 'success') {
        return response.data.data;
      }
      throw new Error('Failed to fetch fantasy match points');
    } catch (error) {
      console.error('[getFantasyMatchPoints Error]', error);
      throw error;
    }
  }

  /**
   * Get fantasy scorecard
   */
  async getFantasyScorecard(matchId: string): Promise<ScorecardData> {
    try {
      const response = await this.client.get<ApiResponse<ScorecardData>>('/match_scorecard', {
        params: { id: matchId },
      });

      if (response.data.status === 'success') {
        return response.data.data;
      }
      throw new Error('Failed to fetch fantasy scorecard');
    } catch (error) {
      console.error('[getFantasyScorecard Error]', error);
      throw error;
    }
  }

  /**
   * Get player info by ID
   */
  async getPlayerInfo(playerId: string): Promise<PlayerData> {
    try {
      const response = await this.client.get<ApiResponse<PlayerData>>('/players_info', {
        params: { id: playerId },
      });

      if (response.data.status === 'success') {
        return response.data.data;
      }
      throw new Error('Failed to fetch player info');
    } catch (error) {
      console.error('[getPlayerInfo Error]', error);
      throw error;
    }
  }

  /**
   * Get all players (paginated)
   */
  async getAllPlayers(offset: number = 0): Promise<PlayerData[]> {
    try {
      const response = await this.client.get<ApiResponse<PlayerData[]>>('/players', {
        params: { offset },
      });

      if (response.data.status === 'success') {
        return response.data.data;
      }
      throw new Error('Failed to fetch all players');
    } catch (error) {
      console.error('[getAllPlayers Error]', error);
      throw error;
    }
  }

  /**
   * Search players by name
   */
  async searchPlayers(searchTerm: string, offset: number = 0): Promise<PlayerData[]> {
    try {
      const response = await this.client.get<ApiResponse<PlayerData[]>>('/players', {
        params: { offset, search: searchTerm },
      });

      if (response.data.status === 'success') {
        return response.data.data;
      }
      throw new Error('Failed to search players');
    } catch (error) {
      console.error('[searchPlayers Error]', error);
      throw error;
    }
  }

  /**
   * Get API usage statistics
   */
  getUsageStats() {
    return {
      requestCount: this.requestCount,
      lastResetTime: this.lastResetTime,
    };
  }

  /**
   * Reset usage statistics
   */
  resetUsageStats() {
    this.requestCount = 0;
    this.lastResetTime = Date.now();
  }
}

// Export singleton instance
export const cricketApi = new CricketApiService();

// Export types
export type {
  MatchData,
  PlayerData,
  SquadData,
  MatchPointsData,
  MatchPointsInning,
  ScorecardData,
  TeamInfo,
  ScoreInfo,
};
