import React,{Component}from'react'
import'./App.css';
import CharacterCard from'./CharacterCard';
import _ from 'lodash';
const prepareStateFromWord = (given_word) => {
 let word = given_word.toUpperCase()
 let chars = _.shuffle(Array.from(word))
 return {
 word,
 chars,
 attempt: 1,
 guess: '',
 completed: false
 }
}
export default class wordCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            attempt: '',
        }
    }
    ComponentWillMount(){
        let data = prepareStateFromWord(this.props.value);
        this.setState({
            word: data.word,
            chars: data.chars,
            attempt: data.attempt,
            guess: data.guess
            completed: data.completed
        })
    }
    activationHandler = (c) => {
        let guess = [...this.state.guess, c]
        this.setState({ guess })
        if (guess.length == this this.state.chars.length){
            if (guess.join('').toString() == this.state.word){
                this.setState({ guess: [], completed: true})
            }
            else {
                this.state({guess :[], attempt: this.state.attempt + 1})
            }
            }
        }
        render(){
            console.log(this.state);
            return(
                <div>
                    {
                        this.state.chars.map((c,i)=> <CharacterCard value={c} key={i}attempt={this.state.attempt}
                        activationHandler={this.activationHandler} />)
                    }
                </div>
            );
    }
}