import React, { Component } from "react";
import "./App.css";

const colors = [
    "pink",
    "purple",
    "blue",
    "azure",
    "green",
    "yellow",
    "orange",
    "red"
];

class App extends Component {
    rainbowThis(value) {
        if (!value) {
            return value;
        }

        let colorIndex = 0;
        const result = value.split("").map((letter, index) => {
            if (letter.trim() === "")
                return <span key={`letter-${index}`}>{letter}</span>;
            colorIndex += 1;
            return (
                <span
                    key={`letter-${index}`}
                    className={colors[colorIndex % 8]}
                >
                    {letter}
                </span>
            );
        });

        return result;
    }

    state = {
        boring: "",
        rainbowed: this.rainbowThis("Copy here!")
    };

    eventToRainbow({ target }) {
        if (!target) return;
        const result = this.rainbowThis(target.value);

        return this.setState({
            boring: target.value,
            rainbowed: result
        });
    }

    render() {
        return (
            <main>
                <input
                    type="text"
                    onChange={e => this.eventToRainbow(e)}
                    value={this.state.boring}
                    placeholder="Write here"
                />

                <div className="result">{this.state.rainbowed}</div>
            </main>
        );
    }
}

export default App;
