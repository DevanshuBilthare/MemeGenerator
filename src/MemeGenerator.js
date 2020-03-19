import React from "react";
import Header from "./Header";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage:
        "https://images.unsplash.com/photo-1521249692263-e0659c60326e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      allMemeImgs: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleClick(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[randNum].url;
    this.setState({
      randomImage: randMemeImg
    });
  }

  render() {
    return (
      <div>
        <Header />
        <br />
        <form className="meme-form">
          <input
            onChange={this.handleChange}
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
          />

          <input
            onChange={this.handleChange}
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
          />

          <button onClick={this.handleClick}>Gen</button>
        </form>

        <div className="meme">
          <img src={this.state.randomImage} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
