import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert'
export default class GetAll extends Component {
    constructor(props){
        super(props);
        this.state={
            getdata:[],
            mode:'online'
        }
       
    }
    componentDidMount(){
    
    
         fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json()).then((result) => {
                console.log(result);
                this.setState({getdata:result})
                localStorage.setItem("getinfo",JSON.stringify(result))
            }).catch(err=>{
                this.setState({ mode:'offline'})
                let storageData = localStorage.getItem("getinfo")
                this.setState({getdata:JSON.parse(storageData)})
               // alert("ofline mode")
            })
    }
    render() {
        return (
            <div>
               { this.state.mode ==='offline'? <Alert variant='danger'>
   you are on offline mode
  </Alert>:undefined}
            <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>city</th>
              </tr>
            </thead>
            <tbody>
                {this.state.getdata.map((val, index) => {
                    return(
              <tr>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.address.city}</td>
              </tr>
              )
                })
             }
            </tbody>
          </Table> 
          </div>          
        )
    }
}