import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import fs from 'fs/promises'

const PLAYERS_FILE_PATH = ("./src/data/players.json");

const getPlayerJSONFile = async () => {
    const data = await fs.readFile(PLAYERS_FILE_PATH, "utf-8")
    const players: PlayerModel[] = JSON.parse(data); 
    return players;
};

const savePlayerJSONFile = async (players: PlayerModel[]): Promise<void> => {
    await fs.writeFile(PLAYERS_FILE_PATH, JSON.stringify(players, null, 2), "utf-8");
};

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    const data = await getPlayerJSONFile()
    return data;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    const data = await getPlayerJSONFile()
    return data.find((data) => data.id === id);
};


export const insertPlayer = async (player: PlayerModel) => {
    const data = await getPlayerJSONFile()
    data.push(player);
    await savePlayerJSONFile(data);
};

export const deleteOnePlayer = async (id: number) => {
    const data = await getPlayerJSONFile();
    const index = data.findIndex((data) => data.id === id)

    if (index !== -1) {
        data.splice(index, 1);
        await savePlayerJSONFile(data);
        return true;
    } 

    return false;
};

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel | null> => {
    const data = await getPlayerJSONFile()
    const playerIndex = data.findIndex((data) => data.id === id)

    if (playerIndex !== -1) {
        data[playerIndex].statistics = statistics;
        await savePlayerJSONFile(data);
        return data[playerIndex];
    }

    return null;
};