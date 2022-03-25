import React , {Component} from 'react';

class Project1 extends Component{

    constructor(props){
        super(props);
        this.state={
            data: props.data
        };
    
    }
    jawab(key , numberButton){
        let answers = this.state.data[numberButton].correct
        if (key === answers) {
            alert("anda benar");
        }
        else {
            alert("anda salah");
        }
    }
    renderData(){
        return this.state.data.map((key , index) => {
            return (
                <div className="card">
                    <div className="card-header">
                        Question
                    </div>
                    <div className="card-body">
                    <h3 className="card-title">{key.question}</h3>
                    {key.answers.map((y) => 
                        <button onClick={() => this.jawab(y , index)} className="btn btn-success ml-3">{y}</button>
                    )}
                    </div>
                </div>
            )
        })
    }
    render(){
        return(
            <div>
                <h1 className="bg-dark text-center text-white">QuizOn</h1>
                { this.renderData() }
            </div>
        )
    }
}
export default Project1;
