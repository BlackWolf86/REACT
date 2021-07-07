import { Component, SyntheticEvent } from "react";
import "./Search.css";

interface SearchState {
    txt: string;
}

class Search extends Component<{}, SearchState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
            txt: ''
        };
    }

    private setValue = (args: SyntheticEvent) => {
        // args - info about the event
        // args.target - the tag that raised the event
        const value = (args.target as HTMLInputElement).value;
        // alert(value);
        this.setState({ txt: value });
    }

    private clearValue = () => {
        this.setState({ txt: '' });
    }

    public render(): JSX.Element {
        return (
            <div className="Search">
                <label>Search</label>
                <input type="text"
                    placeholder="what you're looking for?"
                    onChange={this.setValue}
                    value={this.state.txt}
                />
                {this.state.txt.length == 0 || <span>Searching for {this.state.txt}</span>}
                <button onClick={this.clearValue}>Clear</button>
            </div>
        );
    }
}

export default Search;