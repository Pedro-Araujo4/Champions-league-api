import * as repository from "../repositories/clubs-repository";
import * as HttpResponses from "../utils/http-helper";

export const getClubsService = async () => {
    const data = await repository.findAllClubs();
    const response = HttpResponses.ok(data)
    return response;
};