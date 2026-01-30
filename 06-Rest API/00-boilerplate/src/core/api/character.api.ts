import { Character, CharacterResponse, CharacterWithSentences } from '#core/model/character.model';
import Axios from 'axios';

// Toggle entre API pública y json-server
const USE_JSON_SERVER = false;

const publicApiUrl = 'https://rickandmortyapi.com/api';
const localApiUrl = 'http://localhost:3000';

const baseURL = USE_JSON_SERVER ? localApiUrl : publicApiUrl;

export const characterApi = {
  getCharacters: async (page: number = 1): Promise<CharacterResponse> => {
    if (USE_JSON_SERVER) {
      // json-server no tiene paginación automática, simulamos
      const { data } = await Axios.get<CharacterWithSentences[]>(`${baseURL}/characters`);
      return {
        info: {
          count: data.length,
          pages: 1,
          next: null,
          prev: null,
        },
        results: data,
      };
    } else {
      const { data } = await Axios.get<CharacterResponse>(
        `${baseURL}/character`,
        {
          params: { page },
        }
      );
      return data;
    }
  },

  getCharacterById: async (id: string): Promise<Character | CharacterWithSentences> => {
    const endpoint = USE_JSON_SERVER 
      ? `${baseURL}/characters/${id}`
      : `${baseURL}/character/${id}`;
    
    const { data } = await Axios.get<Character | CharacterWithSentences>(endpoint);
    return data;
  },

  updateCharacter: async (id: string, character: Partial<CharacterWithSentences>): Promise<CharacterWithSentences> => {
    if (!USE_JSON_SERVER) {
      throw new Error('Update only available with json-server');
    }
    
    const { data } = await Axios.patch<CharacterWithSentences>(
      `${baseURL}/characters/${id}`,
      character
    );
    return data;
  },

  searchCharacters: async (name: string, page: number = 1): Promise<CharacterResponse> => {
    if (USE_JSON_SERVER) {
      const { data } = await Axios.get<CharacterWithSentences[]>(
        `${baseURL}/characters`,
        {
          params: { name_like: name },
        }
      );
      return {
        info: {
          count: data.length,
          pages: 1,
          next: null,
          prev: null,
        },
        results: data,
      };
    } else {
      const { data } = await Axios.get<CharacterResponse>(
        `${baseURL}/character`,
        {
          params: { name, page },
        }
      );
      return data;
    }
  },
};
