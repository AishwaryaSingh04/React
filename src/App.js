import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person : [
      {id:1 ,name:'hgfs',age:23},
      {id:2,name:'etry',age:45},
      {id:3,name:'sfdg',age:76}
    ],
    showUserData : false
  };

    switchNameHandle = (newName) =>{
      this.setState({
        person : [
          {name:newName,age:23},
          {name:'egdfgfhftry',age:45},
          {name:'sfddghdg',age:76}
        ]
       }   );
    }

    changeTheName = (event) =>{
      this.setState({
        person :[
          {name:event.target.value,age:23},
          {name:'egdfgfhftry',age:45},
          {name:'sfddghdg',age:76}
        ]
      })

    }

    toggleUserDate = () => {
      const data = this.state.showUserData;
      this.setState({showUserData : !data}); 
    }

    deletePerson = (index) =>{
      const person = this.state.person;
      person.splice(index,1);
      this.setState({person:person});

    }

    nameUpdateMethod = (event,index) =>{

      const personIndex = this.state.person.findIndex(p=>{
        return p.id===index;
      });

      const personUpdate = {...this.state.person[personIndex]};
      
      personUpdate.name = event.target.value;

      const persons = [...this.state.person]
      persons[personIndex] = personUpdate;

      this.setState({person:persons});

    }

  render(){
    let person = null;

    if(this.state.showUserData){
    person =( <div>
              {
                this.state.person.map((item,index)=>{
                return <Person
                  click = {()=>this.deletePerson(index)}
                  changed={(event)=>this.nameUpdateMethod(event,item.id)}
                  name={item.name} 
                  age={item.age}
                  key={item.id}
                  >My hobby:Dancing</Person>
                })
              }
        {/*<Person 
           click={this.switchNameHandle.bind(this,'maximiilian!!!!!')}
            ChangeTriggered={this.changeTheName} 
           name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person
            ChangeTriggered={this.changeTheName} 
           name={this.state.person[1].name} age={this.state.person[1].age}>My hobby:Dancing</Person>
        <Person
         ChangeTriggered={this.changeTheName} 
           name={this.state.person[2].name} age={this.state.person[2].age}/>*/}
       </div>)
      
    }
  
  return (
    <div className="App">
      <button onClick={this.toggleUserDate}>Click ME</button>
      <h1>This is React app</h1>
      {person}
    </div>
  
  );
}
}

export default App;
