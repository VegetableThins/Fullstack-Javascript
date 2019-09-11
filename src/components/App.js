import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ContestPreview from './ContestPreview';

// extends React.Component
class App extends React.Component {
    state = { 
        pageHeader: 'Naming Contests'
    }
    
    render(){
        return (
            <div className="App">
                <Header message={this.state.pageHeader}/>
                <div>
                    {this.props.contests.map(contest =>
                        <ContestPreview key={contest.id} {...contest}/>
                    )}
                    
                </div>
            </div>
        );
    }
}

App.propTypes = {
    headerMessage: PropTypes.string
};

export default App;