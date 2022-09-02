import { Component } from 'react';

export class CleaningHome extends Component {
    state = {
        userInput: '',
        cleaningList: []
    }

addItem(input){
    if(input === ''){
        alert('Please enter an item!')
    }
    else{
        let list = this.state.cleaningList;
        list.push(input);
        this.setState({cleaningList: list, userInput: ''})
    }
}
deleteItem(){
    let list = this.state.cleaningList;
    list.length = 0;
    this.setState({cleaningList: list})
}
crossedWord(e){
    const li = e.target;
    li.classList.toggle('crossed')
}
onChangeCleaning(e){
    this.setState({userInput: e})
}
onFormSubmit(e){
    e.preventDefault();
}
    render(){
        return(
            <div>
                <form onSubmit={ this.onFormSubmit}>
                    <div className='container'>
                    <input onChange={ (e) => {this.onChangeCleaning(e.target.value)} } value={ this.state.userInput }
                    type = 'text' placeholder='Write here!'/>
                    <ul>
                        { this.state.cleaningList.map((item, index) => (
                             <li key={ index } onClick={ this.crossedWord }>{ item } </li>))}
                    </ul>
                    <div className='btn-container'>
                    <button onClick={ () => {this.addItem(this.state.userInput)} } className='btn add'>Add</button>
                    <button onClick={ () => this.deleteItem()} className='btn delete'>Delete</button>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}