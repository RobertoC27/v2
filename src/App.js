import React, { Component } from 'react';
import voting_contract from './utils/voting_contract';
import CandidateList from './components/CandidateList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {voting_instance: undefined, 
      candidates: [{name:'a', votes:1}, {name:'b', votes:2}, {name:'c', votes:3}],
      account : '',
      allow_votes: true,
      show_results: false,
      loading: false}
  }
  
  

  voteHandler = async () => {
    this.setState({loading: true});


    this.setState({
      allow_votes: false,
      loading: false
    });
  }

  render() {
    
    const barStyle = {
      width: "80%"
      
    };

    const parentStyle = {
      position: 'absolute',
      width: '100%',
      top: '50%',
      height: '10%'
    }
    
    let candidates = <div className="progress" style={parentStyle}>
      <div className="progress-bar bg-info progress-bar-striped progress-bar-animated"
        role="progressbar"
        aria-valuenow="80"
        aria-valuemin="0"
        aria-valuemax="100"
        style={barStyle}>Conectando con el Blockchain...</div>
    </div>;
    
    candidates = <CandidateList 
          
          candidates={this.state.candidates}
          voteHandler={this.voteHandler}
          loading={this.state.loading}/>

    let results = null;
    return (
      <div className="App">{candidates}{results}</div>
    );
  }
}

export default App;
