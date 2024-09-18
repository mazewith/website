import { Room } from "src/interfaces";

const API = import.meta.env.VITE_REDIS_URL;

export const redis = {
  getRoomsByJoins: async (offset = 0, count = 3): Promise<Room[]> => {
    return (await fetch(`${API}/rooms?offset=${offset}&count=${count}`)).json();
  },
};
