import React from 'react';

class ProgressBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            percentageEarly: 25,
            percentageOnTime: 32,
            percentageLate: 43
        };
    }

    render(){
        return(
            <div>
                <Progress percentEarly={this.state.percentageEarly} percentOnTime={this.state.percentageOnTime} percentLate={this.state.percentageLate}/>
                <input type="number"></input>
                <input type="submit" id="tbSubmit" value="Submit" onClick={this.changePercentage}/>
            </div>
        )
    }

    changePercentage = () => {
        this.setState({
            percentageEarly: 5
        });
    }

}

const Progress = (props) => {
    return (
        <div className="progress-bar">
            <Filler Early={props.percentEarly} OnTime={props.percentOnTime} Late={props.percentLate}/>
        </div>
    )
}

const Filler = (props) => {
    return (
        <div className="progress-wrapper">
            <div className="progress-filler-early" style={{width: `${props.Early}%`}}>
                <div className="progress-percent-text">
                    {`${props.Early}%`}
                </div>
            </div>
            <div className="progress-filler-on-time" style={{width: `${props.OnTime}%`}}>
                <div className="progress-percent-text">
                    {`${props.OnTime}%`}
                </div>
            </div>
            <div className="progress-filler-late" style={{width: `${props.Late}%`}}>
                <div className="progress-percent-text">
                    {`${props.Late}%`}
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;