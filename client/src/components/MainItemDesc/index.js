import { Component } from "react"
import { Link} from 'react-router-dom'; 
import Axios from "axios"
import './index.css'


class MainItemDesc extends Component{ 

    state = {dataArr:[],id:''}
    
    funcCalled = async() =>{
        try{
            // this.setState({dataArr:d})
            const path = window.location.pathname;
            const parts = path.split('/');
            console.log(parts)
            let i = parts[parts.length - 1];
            // id = parseInt(id)
            // console.log(typeof id)
            // id = JSON.stringify(id)
            // const response = await Axios.get(`http://localhost:3001/getitem/${id}`);
            // const data = response.data;
            // console.log(response)

            const x = await Axios.get("http://localhost:3001/getdata")
            const data = await x.data

            // const f = data.filter(item =>
            //     item.id === parseInt(id)
            // )
            const f = data.filter(item => JSON.stringify(item.id) === JSON.stringify(parseInt(i)));
            console.log(f,"IS FILTERW")
            console.log(data,'IN DESC') 
            this.setState({dataArr:f})
        }catch(error){
            console.log(error)
        }
        

        // const {id} = useParams();
        
        // console.log(parts)
        
        
        // console.log(id,'iaskn')


    }

    componentDidMount() {
      this.funcCalled();
      }
    
    
    // const{item }=  props
    // const{id,name,para,description} = item 
    render(){
        const {dataArr} = this.state
        const firstItem = dataArr[0];
        // console.log(id,'is the index')
        console.log(dataArr[0],'is the result sbajb')
        return(
            <div className="container">
        <h1 className="heading">{firstItem && firstItem.name}</h1>
        <p className="description">{firstItem && firstItem.description}</p>
        <div className="button-container">
          <Link to="/comments">
            <button>Comments</button>
          </Link>
        </div>
      </div>
            
            
        )
    }
    
}

export default MainItemDesc