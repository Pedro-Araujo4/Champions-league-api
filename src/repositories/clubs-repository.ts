import { ClubModel } from "../models/clubs-model";
import fs from 'fs/promises';

const CLUBS_FILE_PATH = ("./src/data/clubs.json");

const getClubsJSONFile = async () => {
    const data = await fs.readFile(CLUBS_FILE_PATH, "utf-8")
    const Clubs: ClubModel[] = JSON.parse(data); 
    return Clubs;
};

const saveClubsJSONFile = async (clubs: ClubModel[]): Promise<void> => {
    await fs.writeFile(CLUBS_FILE_PATH, JSON.stringify(clubs, null, 2), "utf-8");
};

export const findAllClubs = async (): Promise<ClubModel[]> => {
    const data = await getClubsJSONFile()
    return data;
};