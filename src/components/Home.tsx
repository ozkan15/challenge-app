
import * as React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dispatch } from "redux";


import { errorAction } from "../components/actions/errorAction";
import { loadingAction } from "../components/actions/loadingAction";
import { moviesUpdateAction } from "../components/actions/moviesAction";
import { seriesUpdateAction } from "../components/actions/seriesAction";


interface IHome {
    error: typeof errorAction;
    addSeries:  typeof seriesUpdateAction;
    addMovies:typeof moviesUpdateAction;
    loading:typeof loadingAction


}


class Home extends React.Component<IHome> {
    


    public apiRequest: any = async (e: any) => {

        const type = e.target.value;    
        this.props.loading();
        const data = await fetch(`http://localhost:80/${type}`).then((res: any) => res.json()).catch(() => this.props.error());
        if (data) {
            let filteredData = data.filter((value: any) => value.releaseYear > 2010);
            
            filteredData = filteredData.sort((a: any, b: any) => {
                const nameA = a.title.toLowerCase();
                const nameB = b.title.toLowerCase();
                if (nameA < nameB) { return -1; }
                if (nameA > nameB) { return 1; }
                return 0;
            });

            const popularList: any[] = [];

            for (let i = 0; i < 21; i++) {
                popularList.push(filteredData[i]);
            }

            if (type === "series") {


                if (data == null) { this.props.error() }
                else {
                    
                    this.props.addSeries(JSON.stringify(popularList));
                }
            }
            else if (type === "movies") {

                if (data == null) { this.props.error() }
                else {
                    
                    this.props.addMovies(JSON.stringify(popularList));
                }
            }
        }







    }



    public render() {

        return (
            <div className="home">
                <h2>Popular Titles</h2>
                <div className="home-links">


                    <NavLink to="/movies" >
                        <button className="movies-link" value="movies" onClick={this.apiRequest} >Movies</button>
                    </NavLink>
                    <NavLink to="/series">
                        <button value="series" className="series-link" onClick={this.apiRequest} >Series</button>

                    </NavLink>
                </div>
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMovies: (data: string) => {
            dispatch(moviesUpdateAction(data))
        },
        addSeries: (data: string) => {
            dispatch(seriesUpdateAction(data))
        },
        error: () => {
            dispatch(errorAction())
        },
        loading: () => {
            dispatch(loadingAction())
        }
    }
}

export const exportedHome = connect<IHome>(null, mapDispatchToProps)(Home);
