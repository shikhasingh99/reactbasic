import React,{Components} from 'react';
import './avatar.css'
import 'tachyons';
import Avatarlist from './Avatarlist';
	class Avatar extends Components{
		constructor(){
			super();
			this.state ={
				name: "Wlecom to Avatar world1"
			}
		}
		nameChange()
		{
			this.setState({
				name:"Welcome My world Hukuna Matata"
			})
		}
		const avatarlistarray=[
		{
			id:1,
			name: "Shikha",
			work:"Web Developerd"
		},
		{
			id:2,
			name: "Shikha1",
			work:"full stackDeveloperd"
		},
		{
			id:3,
			name: "Shikha2",
			work:"Frontend Developerd"
		},
		{
			id:4,
			name: "Shikha3",
			work:"backend Developerd"
		}
	]
	const avatarcard= avatarlistarray.map( (avatarcard,i)=>{
			return <Avatarlist key={i} id={avatarlistarray[i].id} name={avatarlistarray[i].name} work={avatarlistarray[i].work}/>
			
		} )
	
		render()
		{
			return ( 
		<div className="mainpage">
		<h1 className="tc">{this.state.name}</h1>
		{avatarcard}
		<button onClick={()=> this.nameChange}> Subscribe</button>
		</div>
			)
		}
	}
	


export default Avatar;