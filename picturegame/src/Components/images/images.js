import React from 'react';

class Images extends React.Component {
  state = {
    score: 0,
    highScore: 0,
    images: ['./images/Black-Panther-Cover.jpg', './images/Captain-America-EW-Cover.jpg', './images/Dr-Strange-Cover.jpg', './images/Drax-Cover.jpg', './images/Falcon-Cover.jpg', './images/Hulk-Cover.jpg', './images/Iron-Man-Cover.jpeg', './images/Shuri-Vision-Cover.jpg', './images/Spider-Man-Cover.jpg', './images/Thanos-Cover.jpg', './images/Thor-Cover.jpg', './images/Winter-Soldier.jpg'],
    clicked: []
  }

  clickEvent(e) {
    const clicked = this.state.clicked;
    // alert(e.target.src);
    const shuffledImages = this.arrayShuffle(this.state.images);
    this.setState({
      images: shuffledImages,
      score: this.state.score + 1
    })
    for (let i = 0; i < clicked.length; i++) {
      if (e.target.src === clicked[i]) {
        this.setState({
          clicked: [],
          score: 0
        })
        if (this.state.highScore < this.state.score) {
          this.setState({
            highScore: this.state.score
          });
          console.log(this.state.highScore);
        }
      } else {
        if (this.state.highScore < this.state.score) {
          this.setState({
            highScore: this.state.score
          });
        }
      }
    }
    clicked.push(e.target.src);
    console.log(clicked);
  }

  arrayShuffle(array) {

    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;

  }
  render() {
    return (
      <div >
        < h1 > Score: {this.state.score}   High score: {this.state.highScore}</ h1>
        {
          this.state.images.map((image, index) => {
            return (
              <img class="pics" style={{ margin: '12px', maxHeight: "500px" }} alt="paceholder" src={image} onClick={((e) => this.clickEvent(e))} />
            )
          }
          )
        }
      </div >
    )
  };
}

export default Images;