import React from 'react';

class Images extends React.Component {
  state = {
    score: 0,
    highScore: 3,
    images: ['./images/Black-Panther-Cover.jpg', './images/Captain-America-EW-Cover.jpg', './images/Dr-Strange-Cover.jpg', './images/Drax-Cover.jpg', './images/Falcon-Cover.jpg', './images/Hulk-Cover.jpg', './images/Iron-Man-Cover.jpeg', './images/Shuri-Vision-Cover.jpg', './images/Spider-Man-Cover.jpg', './images/Thanos-Cover.jpg', './images/Thor-Cover.jpg', './images/Winter-Soldier.jpg'],
    clicked: []
  }

  clickEvent(e) {
    const scoreState = this.state.score;
    const priorStateScore = [...this.state.images]
    // alert(e.target.src);
    const shuffledImages = this.arrayShuffle(this.state.images);
    this.setState({
      images: shuffledImages
    })
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
      <div style={{ backgroundImage: `url('./images/infinity-War.jpg'})` }} >
        < h1 > Score: {this.state.score} High score: {this.state.highScore}</ h1>
        {
          this.state.images.map((image, index) => {
            return (
              <img style={{ margin: '5px', maxHeight: "500px" }} src={image} onClick={((e) => this.clickEvent(e))} />
            )
          }
          )
        }
      </div >
    )
  };
}

export default Images;