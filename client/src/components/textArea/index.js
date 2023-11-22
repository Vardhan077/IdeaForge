import Axios from 'axios'
import './index.css'
import { Component } from 'react'
// import {v4} from 'uuid'

class textArea extends Component{

    state = {text:'',abstract:'',res:false,id:7}

    addIdea = async() =>{
        const {text,idea,abstract,id} = this.state
        Axios.post('http://localhost:3001/post',{id:id,description:text,name:idea,para:abstract})
        .then((response) => {
            console.log('Data uploaded successfully:', response.data);
          })
          .catch((error) => {
            console.error('Error uploading data:', error);
          });
        this.setState(prevState =>({id:prevState.id+1,res:true}))
        console.log(id)
    }

    textChanged = event =>{
        this.setState({text:event.target.value})

    }

    absChanged = event =>{
        this.setState({abstract:event.target.value})

    }

    inputChanged = event =>{
        this.setState({idea:event.target.value})
    }

    render(){
        const {res} = this.state
        return(
            
            <div className="container">
                <input onChange={this.inputChanged} placeholder='Name of Idea...'/>
                <textarea className="dracula-theme-one" placeholder="Abstract Of Idea..." onChange={this.absChanged}></textarea>
                <textarea className="dracula-theme" placeholder="Start typing..." onChange={this.textChanged}></textarea>
                <button onClick={this.addIdea}>Add</button>
                {res ? <p>Uploaded</p> : ''}
            </div>
                
            )

    }
    
}

export default textArea











// TextArea.js - React component

// import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import Axios from 'axios';
// import './index.css';

// class TextArea extends Component {
//   state = {
//     text: '',
//     idea: '',
//     abstract: '',
//     res: false,
//   };

//   addIdea = async () => {
//     const { text, idea, abstract } = this.state;
//     Axios.post('http://localhost:3001/post', {
//       id: uuidv4(),
//       description: text,
//       name: idea,
//       para: abstract,
//     })
//       .then((response) => {
//         console.log('Data uploaded successfully:', response.data);
//       })
//       .catch((error) => {
//         console.error('Error uploading data:', error);
//       });
//     this.setState({ res: true });
//   };

//   textChanged = (event) => {
//     this.setState({ text: event.target.value });
//   };

//   absChanged = (event) => {
//     this.setState({ abstract: event.target.value });
//   };

//   inputChanged = (event) => {
//     this.setState({ idea: event.target.value });
//   };

//   render() {
//     const { res } = this.state;
//     return (
//       <div className="container">
//         <input
//           onChange={this.inputChanged}
//           placeholder="Name of Idea..."
//           style={{ backgroundColor: '#373d49', color: '#ffffff' }}
//         />
//         <textarea
//           className="dracula-theme-one"
//           placeholder="Abstract Of Idea..."
//           onChange={this.absChanged}
//           style={{ backgroundColor: '#373d49', color: '#ffffff' }}
//         ></textarea>
//         <textarea
//           className="dracula-theme"
//           placeholder="Start typing..."
//           onChange={this.textChanged}
//           style={{ backgroundColor: '#373d49', color: '#ffffff' }}
//         ></textarea>
//         <button
//           onClick={this.addIdea}
//           style={{
//             padding: '10px 20px',
//             fontSize: '16px',
//             backgroundColor: '#2e6930',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer',
//           }}
//         >
//           Add
//         </button>
//         {res ? <p style={{ color: '#2e6930', fontWeight: 'bold' }}>Uploaded</p> : ''}
//       </div>
//     );
//   }
// }

// export default TextArea;
