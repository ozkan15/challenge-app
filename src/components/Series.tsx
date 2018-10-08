import * as React from "react";
import { connect } from "react-redux";

interface ISeries { series: string, message: string }

class Series extends React.Component<ISeries> {



  public render() {

  

    let seriesList: any;
    if (this.props.series[this.props.series.length - 1]) {
      const series = JSON.parse(this.props.series[this.props.series.length - 1]);

      seriesList = series.map((res: any) => (<div className="series-flex-items" key={res.title}><img width="100%" src={res.images["Poster Art"].url} /><h3>{res.title}</h3></div>));
    }

    else {
      seriesList = "";
    }

    return (
      <div>
        <h2>Popular Series</h2>
        <h3>{this.props.message[this.props.message.length - 1]}</h3>
        <div className="series-flex">{seriesList}</div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return { series: state.series, message: state.message };
}

export const exportedSeries = connect<ISeries>(mapStateToProps, {})(Series);

