import React,{Component} from "react";
export default class Cards extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <div className="cards">
                    <div className="card-content">
                    <img src={this.props.imgSrc}
                        alt={this.props.alt}
                    />
                    <div className="content-data">
                    <h3>{this.props.head}</h3>
                    <p id="p1">{this.props.content}</p>
                    <p id="p2">see more</p>
                    <button><b>{this.props.btext}</b></button>
                    </div>
                    </div>
                </div>
            </>
        )
    }
}