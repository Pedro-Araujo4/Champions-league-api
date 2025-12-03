import { HttpResponse } from "../models/http-response-model";
import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponses from "../utils/http-helper";

export const getPlayerListService = async () => {
    const data = await PlayerRepository.findAllPlayers();
    let response = null;

    if (data){
        response = await HttpResponses.ok(data);
    } else {
        response = await HttpResponses.noContent();
    };
   
    return response;
};

export const getPlayerByIdService = async (id: number) => {
    const data = await PlayerRepository.findPlayerById(id);
    let response = null;

    if (data) {
        response = HttpResponses.ok(data);
    } else {
        response = HttpResponses.noContent();
    }

    return response;
};


export const createPlayerService = async (player: PlayerModel) => {
    let response = null;

    //verifica se está vazio
    if (Object.keys(player).length !== 0) {
       await PlayerRepository.insertPlayer(player);
       response = HttpResponses.created();
    } else {
       return HttpResponses.badRequest();
    }

    return response;
};

export const deletePlayerService = async (id: number) => {
    let response = null;
    const isDeleted = await PlayerRepository.deleteOnePlayer(id);

    if (isDeleted) {
        response = await HttpResponses.ok({message: "deleted"})
    } else {
        response = await HttpResponses.badRequest()
    }
    
    return response;
};

export const updatePlayerService = async (id: number, statistics: StatisticsModel): Promise<HttpResponse> => {
    const data = await PlayerRepository.findAndModifyPlayer(id, statistics);
    let response = null;

    if (data === null) {
        response = await HttpResponses.badRequest(); 
    } else {
        response = await HttpResponses.ok(data);
    }

    return response;
};
