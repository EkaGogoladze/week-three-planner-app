import { Component } from 'react';

export class Shopping extends Component {
    state = {
        userInput: '',
        shoppingList: [],
    }
addItem(input){
    if(input === ''){
        alert('Please enter an item!')
    }
    else{
        let list = this.state.shoppingList;
        list.push(input);
        this.setState({shoppingList: list, userInput: ''})
    }
}
deleteItem(){
    let list = this.state.shoppingList;
    list.length = 0;
    this.setState({shoppingList: list})
} 
crossedWord(e){
    const li = e.target;
    li.classlist.toggle('crossed')
}   
onChangeShopping(e){
    this.setState({userInput: e})
}
onFormSubmit(e){
    e.preventDefault();
}
    render(){
        return(
            <div>
                <div className='container'>
                <form onSubmit={this.onFormSubmit}>
                    <input onChange={ (e) => {this.onChangeShopping(e.target.value)} } value={ this.state.userInput }
                     type = 'text' placeholder = 'Write here!'/>
                    <ul>
                        { this.state.shoppingList.map((item, index) => ( 
                        <li key={ index } onClick={ this.crossedWord }>{ item }</li>)) }
                    </ul>
                    <div className='btn-container'>
                    <button onClick={() => {this.addItem(this.state.userInput)}} className='btn add'>Add</button>
                    <button onClick = {() => this.deleteItem()} className='btn delete'>Delete</button>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}