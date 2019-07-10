import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './demo.css';
class Demo extends Component{
	render(){
		 return <div className="maindiv_style">
		 <h1> Hellow {this.props.name}</h1>
		 <p> Welcome ro my page</p>
		 </div>
	}
}

export default Demo;