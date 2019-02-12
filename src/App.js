import React, { Component } from "react";
import "./App.css";

import { ReactComponent as Copy } from "./copy-regular.svg";
import { ReactComponent as Github } from "./github-brands.svg";

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

    copyAction() {
        const range = document.createRange();
        const selection = window.getSelection();
        range.selectNodeContents(this.textArea);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
    }

    render() {
        return (
            <>
                <section className="input">
                    <input
                        type="text"
                        onChange={e => this.eventToRainbow(e)}
                        value={this.state.boring}
                        placeholder="Write here"
                    />

                    <a
                        className="github"
                        href="https://github.com/Sbax/rainbow"
                    >
                        <Github />
                        Check out source on Github!
                    </a>

                    <Copy className="copy" onClick={() => this.copyAction()} />
                </section>
                <section className="result">
                    <div ref={textarea => (this.textArea = textarea)}>
                        {this.state.rainbowed}
                    </div>
                </section>
            </>
        );
    }
}

export default App;
