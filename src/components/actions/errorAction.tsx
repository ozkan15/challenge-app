export const ERROR = "ERROR";

export const errorAction = () => {
    return {     
        payload: "Opps. something went wrong...",
        type: ERROR
    };
}