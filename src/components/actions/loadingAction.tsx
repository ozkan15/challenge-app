export const LOADING = "LOADING";

export const loadingAction = () => {
    return {     
        payload: "Loading...",
        type: LOADING
    };
}