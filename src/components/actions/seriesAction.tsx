export const SERIES_UPDATE = "SERIES_UPDATE";

export  const seriesUpdateAction = (data:string)=>{
    return{
        payload: data,
        type:SERIES_UPDATE
    };    
}

