import * as React from "react";
import { connect } from "react-redux";




interface IMovies { message: string; movies: string; }




class Movies extends React.Component<IMovies> {



  public render() {


    let moviesList: any;
    if (this.props.movies[this.props.movies.length - 1]) {
      const movies = JSON.parse(this.props.movies[this.props.movies.length - 1]);

      moviesList = movies.map((res: any) => (<div className="series-flex-items" key={res.title}><img width="100%" src={res.images["Poster Art"].url} /><h3>{res.title}</h3></div>));
    }
    else {
      moviesList = "";
    }


    return (
      <div>
        <h2>Popular Movies</h2>
        <h3>{this.props.message[this.props.message.length - 1]}</h3>
        <div className="series-flex">{moviesList}</div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return { message: state.message, movies: state.movies };
}

export const exportedMovies = connect(mapStateToProps, {})(Movies);