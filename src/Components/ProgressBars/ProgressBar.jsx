import React from 'react';

class ProgressBarExample extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            percentage: 60
        };
    }

    render(){
        return(
            <div>
                <ProgressBar percentage={this.state.percentage} />
                <input type="number"></input>
                <input type="submit" id="tbSubmit" value="Submit" onClick={this.changePercentage}/>
            </div>
        )
    }

    changePercentage = () => {
        this.setState({
            percentage: 5
        });
    }

}

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
            <Filler percentage={props.percentage}/>
        </div>
    )
}

const Filler = (props) => {
    return <div className="filler-early" style={{width: `${props.percentage}%`}}/>
}

export default ProgressBarExample;