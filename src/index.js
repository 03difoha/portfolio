import React from "react";
import ReactDOM from "react-dom";
import "./css/normalize.css";
import "./css/skeleton.css";
import "./css/portfolio.css";

import logo from "./img/me.png";

import projectData from "./projectData.js";

function Hero(props) {
  return (
    <div>
      <img className="hero-img round" src={logo} alt="Logo"></img>
      <h1 className="hero-text">
        Harry Difolco
        <br></br>
        Web Developer
      </h1>
      <h6 className="hero-text">
        hdifolco@yahoo.com <br />
        Linkedin <br />
        Github <br />
        +86 15026741076
        <br />
        +44 7931848691
        <br />
      </h6>
    </div>
  );
}

function Project(props) {
  return (
    <div className="profile">
      <div className="photo">
        <img alt="img" src={props.img} />
      </div>
      <div className="content">
        <div className="text">
          <h4 className="projectDesc">{props.title}</h4>
          <p className="projectDesc">{props.desc}</p>
          <Chip tech={props.tech} />
        </div>
      </div>
    </div>
  );
}

function Chip(props) {
  var chipList = props.tech.map(function(t) {
    return <div className={"chip " + t}>{t}</div>;
  });

  return chipList;
}

// class Board extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       squares: Array(9).fill(null)
//     };
//   }

//   handleClick(i) {
//     const squares = this.state.squares.slice();

//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     squares[i] = this.state.xIsNext ? "X" : "O";
//     this.setState({
//       squares: squares,
//       xIsNext: !this.state.xIsNext
//     });
//   }

//   renderSquare(i) {
//     return (
//       <Square
//         value={this.state.squares[i]}
//         onClick={() => this.handleClick(i)}
//       />
//     );
//   }

//   render() {
//     const winner = calculateWinner(this.state.squares);
//     let status;
//     if (winner) {
//       status = "Winner: " + winner;
//     } else {
//       status = "Next player: " + (this.state.xIsNext ? "X" : "O");
//     }

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

class Projects extends React.Component {
  render() {
    var projectList = projectData.map(function(p) {
      return (
        <Project
          key={p.title}
          title={p.title}
          img={p.img}
          desc={p.desc}
          tech={p.tech}
        />
      );
    });

    return <div>{projectList}</div>;
  }
}

class Portfolio extends React.Component {
  render() {
    return (
      <div className="my-container">
        <div className="row">
          <div className="left-col six columns">
            <Hero />
          </div>
          <div className="right-col six columns">
            <Projects />
          </div>
        </div>
        <footer className="footer">Portfolio built with React</footer>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Portfolio />, document.getElementById("root"));
