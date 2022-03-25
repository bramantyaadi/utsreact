import React , {Component} from 'react';

class Project2 extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            data: props.data,
            color: "",
            cart: []
        }
        // console.log(this.state.data.colorOptions[0].styleName);
        
        
    }
    changeColor = (e) => {
        this.setState({
            color:e.target.value,
        })
    }

    clickImage(color) {
        this.setState({
            color:color
        })
        // console.log(color);
        console.log(this.state.color);
    }
    renderFeature(){
        return this.state.data.featureList.map((key) => {
            return (
                <div className="">
                    <button className="btn btn-secondary ml-3">{key}</button>
                </div>
            )
        })
    }

    renderButtonImage(){
        return this.state.data.colorOptions.map((key) => {
            if (key.styleName === "Red Strap") {
                return(
                    <div className="col">
                        <input 
                        // className="form-control"
                        type="image" 
                        src={key.imageUrl} 
                        alt="image"
                        style={{width:"150%"}}
                        onClick={() => this.clickImage("Orange")}
                        // onChange={this.changeColor}
                        >
                        </input>
                    </div>
                );
            }
            if (key.styleName === "Black Strap") {
                return(
                    <div className="col">
                        <input 
                        // className="form-control"
                        type="image" 
                        alt="image"
                        src={key.imageUrl} 
                        style={{width:"150%"}}
                        onClick={() => this.clickImage("Black")}
                        // onChange={this.changeColor}
                        >
                        </input>
                    </div>
                );
            }
            if (key.styleName === "Purple Strap") {
                return(
                    <div className="col">
                        <input 
                        // className="form-control"
                        type="image" 
                        alt="image"
                        src={key.imageUrl} 
                        style={{width:"150%"}}
                        onClick={() => this.clickImage("Purple")}
                        // onChange={this.changeColor}
                        >
                        </input>
                    </div>
                );
            }
            if (key.styleName === "Blue Strap") {
                return(
                    <div className="col">
                        <input 
                        // className="form-control"
                        type="image" 
                        alt="image"
                        src={key.imageUrl} 
                        style={{width:"150%"}}
                        onClick={() => this.clickImage("Pink")}
                        // onChange={this.changeColor}
                        >
                        </input>
                    </div>
                );
            }

        });
    }
    buy(){
        // alert("buy");
        let color = this.state.color;
        // console.log(color);
        this.state.cart.push(color);
        console.log(this.state);
        this.setState({
            color:'',
        })
    }
    renderCart(){
        return this.state.cart.map((key) => {
            return(
                <li>SmartWatch {key}</li>
            )
        })
    }
    render(){
        return(
            <div className="row">
                <div className="col">
                    <img className="rounded mx-auto d-block" src={this.state.data.colorOptions[0].imageUrl} style={{width:"70%"}}></img>
                </div>
                <div className="col">
                    <h3>{this.state.data.title}</h3>
                    <br></br>
                    <p>{this.state.data.description}</p>
                    <br></br>
                    <h4>Select Color</h4>
                    <div className="row col-6">
                        {this.renderButtonImage()}
                    </div>
                    <h4>Feauture</h4>
                    <br></br>
                    <div className="row">
                        {this.renderFeature()}
                    </div>
                    <br></br>
                    <button
                    className="btn btn-primary"
                    onClick={() => this.buy()}
                    >Buy Now</button>

                    <br></br><br></br>
                    <h4>Cart</h4>
                    <ul>
                        {this.renderCart()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Project2;