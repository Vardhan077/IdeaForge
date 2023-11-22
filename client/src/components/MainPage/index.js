// import { Component } from 'react'
// import Axios from 'axios'
// import {v4} from 'uuid'
// import MainItem from '../MainItem'
// import Header from '../Header'
// import './index.css'

// class MainPage extends Component{
//     state = {dataArr:[],name:'',para:'',description:''}
    
//     funcCalled = async() =>{
//         try{
//             const x = await Axios.get("http://localhost:3001/getdata")
//         const d = await x.data
//         this.setState({dataArr:d})

//         }catch(error){
//             console.log(error)
//         }
        

//     }

//     async componentDidMount() {
//         await this.funcCalled();
//       }

//     submitPara = () =>{
//         const {name,para,description} = this.state
//         console.log(v4());
//         Axios.post("http://localhost:3001/post",{id:v4(),name:name,para:para,description:description})
//     }

//     render(){
//         const {dataArr} = this.state
//         console.log(dataArr,'abdakajgdbs')
//         return(
//            <div className=' body'>
//             <Header />
//             <h1 className='heading'>
//                 Ideas...
//             </h1>
//             <ul>
//                 {dataArr.map(item =>(
//                     <MainItem key = {item.id} item = {item} />
//                 ))}
//             </ul>


            
//            </div> 
//         )
//     }
// }


// export default MainPage


import React, { Component } from 'react';
import Axios from 'axios';
import { v4 } from 'uuid';
import MainItem from '../MainItem';
import Header from '../Header';
import './index.css';

class MainPage extends Component {
  state = { dataArr: [], name: '', para: '', description: '' };

  funcCalled = async () => {
    try {
      const response = await Axios.get('http://localhost:3001/getdata');
      const data = response.data;
      this.setState({ dataArr: data });
    } catch (error) {
      console.log(error);
    }
  };

  async componentDidMount() {
    await this.funcCalled();
  }

  render() {
    const { dataArr } = this.state;
    return (
      <div className="body">
        <div className='head'>
          {<Header />}

        </div>
        
        {/* <h1 className="heading">hehjksahjk</h1> */}
        <ul className='list'>
          {dataArr.map((item) => (
            <MainItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}

export default MainPage
