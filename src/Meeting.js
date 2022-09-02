import { Component } from 'react';

export class Meeting extends Component{
    state = {
        userInput: '',
        meetingList: []
    }
addItem(input){
    if(input === ''){
        alert('Please enter an item!')
    }
    else{
        let list = this.state.meetingList;
        list.push(input);
        this.setState({meetingList: list, userInput: ''});
    }
}
deleteItem(){
    let list = this.state.meetingList;
    list.length = 0;
    this.setState({meetingList: list})
}
crossedWord(e){
    const li = e.target;
    li.classList.toggle('crossed')
}
onChangeMeeting(e){
    this.setState({userInput: e})
}
onFormSubmit(e){
    e.preventDefault();
}
    render(){
        return(
            <div>
            <form onSubmit={ this.onFormSubmit }>
                <div className='container'>
                <input onChange={ (e) => {this.onChangeMeeting(e.target.value)} } value={ this.state.userInput } type='text' placeholder='Write here!'/>
                <ul>
                    { this.state.meetingList.map((item, index) => (
                    <li key={ index } onClick={ this.crossedWord }>{ item }</li>)) }
                </ul>
                <div className='btn-container'>
                <button onClick={ () => {this.addItem(this.state.userInput)} } className='btn add'>Add</button>
                <button onClick={ () => {this.deleteItem()} } className='btn delete'>Delete</button>
                </div>
                </div>
            </form>
            </div>
         )
    }
}