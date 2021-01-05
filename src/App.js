import './App.css';
import Customer from './components/Customer'
import { Component } from 'react';


const customers =[
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' :'홍길동',
  'birthday' : '940226',
  'gender' : '남자',
  'job':'학생'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' :'홍길동1',
    'birthday' : '940226',
    'gender' : '남자',
    'job':'학생'
    },
    {
      'id' : 3,
      'image' : 'https://placeimg.com/64/64/3',
      'name' :'홍길동3',
      'birthday' : '9402126',
      'gender' : '남자',
      'job':'학생'
      }
]

class App extends Component {
  render(){
    return (
      <div>
        {
          customers.map(c =>{
           return (
             <Customer
             key = {c.id}
                id = {c.id}
                image = {c.image}
                name ={c.name}
                gender = {c.gender}
                job = {c.job}
                birthday = {c.birthday}
             />
           ) 
          })
        }
      </div>
    );
  }
}

export default App;
