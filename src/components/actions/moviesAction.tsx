
export const MOVIES_UPDATE = "MOVIES_UPDATE";

export const moviesUpdateAction = (data: string) => {
    return {  
        payload: data,
        type: MOVIES_UPDATE
    };
}