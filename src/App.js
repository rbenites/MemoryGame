import React, { Component } from "react";
import JusticeCard from "./components/JusticeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import members from "./leagueImages.json";
import "./App.css";

class App extends Component {
  // Setting this.state.members to the members json array score set to 0 and clicked state
  state = {
    members: members,
    score: 0,
    clicked: []

  };

  shufflemembers = id => {
    // Filter this.state.members for members with an id not equal to the id being removed
    const members = this.shuffle(this.state.members);
    // Set this.state.members equal to the new members array
    this.setState({ members });

    this.decisionDepot(id);
  };

  decisionDepot(id) {
    if (this.state.clicked.indexOf(id) === -1) {
      let newState = [...this.state.clicked, id]
      this.setState({
        clicked: newState, score: this.state.score + 1
      })

    }
    else {
      this.setState({
        clicked: [], score: 0

      })
    }
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }


  winner() {
    if (this.state.score === 5) {
      return (<div>
        <p>Winner!</p>
      </div>)
    }
  }
  // Map over this.state.members and render a memberCard component for each member object
  render() {
    const isThereWinner = this.winner();
    return (
      <Wrapper>
        <Title>Justice League Memory Game
        {isThereWinner}
        <p>Score:{this.state.score}</p>
        </Title>

        {this.state.members.map(member => (
          <JusticeCard
            shufflemembers={this.shufflemembers}
            id={member.id}
            key={member.id}
            image={member.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;