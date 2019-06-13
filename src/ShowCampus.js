import React from 'react';
import './App.css';
import StudentCard from'./StudentCard'
import Navigation from './Navigation';
import {Link} from 'react-router-dom';

class ShowCampus extends React.Component{

  showStudentCard(){
    let studentCard= []
    for(let i =0; i<this.props.info.location.state.campStudents.length; i++){
      let student = this.props.info.location.state.campStudents[i];
      studentCard.push(<StudentCard name ={student.name} campName ={this.props.info.location.state.campus} /> )
    }

    return studentCard;
  }

  componentDidMount(){
    console.log(this.props)
  }

  delete =()=>{
    this.props.delete(this.props.info.location.state.campus)
  }

  render(){
    return (
      <div>
      <Navigation />
      <div className="image-showCampus">
           <img src="https://www.uri.edu/wp-content/uploads/home/2018/05/kingston-campus-500x327.jpg" alt="lehman img"/>
      <div>
      {/* this.props.info.location.state.campus */}
          <h1>{this.props.info.location.state.campus} </h1>
        
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. </p>
      </div>  
      </div>
      <div className="address">
        <div>
           <p>250 Bedford Park Blvd W</p>
           <p>The Bronx, NY 10468</p>
        </div>

        <div>
           <button>Edit</button>
           <Link to="/campuses"><button onClick={this.delete}>Delete</button></Link>
        </div> 
      </div>

    <div className="studentList">
      <div>
        <h1>Students On Campus</h1>
      </div>
      <div>
      <button>Add Student</button>
      </div>
    </div>
      
      <div className= "studentCards">
        {this.showStudentCard()}

      </div>
      
      
      
      </div>
);
}
};
export default ShowCampus;
