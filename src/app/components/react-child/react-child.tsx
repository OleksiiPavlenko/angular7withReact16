import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ReactStore} from '../../store/store';
import {add} from '../../store/actions';

interface ReactChildComponentViewProps {
  title: string;
  store: ReactStore;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

class ReactChildComponentElement extends React.Component<ReactChildComponentViewProps, any> {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title || '',
      word: this.props.store.store.getState().join('')
    };

    this.props.store.store.subscribe(() => {
      this.setState({
        word: this.props.store.store.getState().join('')
      });
    });
  }

  handleChange = (event) => {
    this.setState({
      title: event.target.value
    });
  };

  addLetter = () => {
    this.props.store.dispatch(add(this.state.title));
  };


  render() {
    return (
      <div>
        Type something:
        <input onChange={this.handleChange} value={this.state.title}/>
        <button onClick={this.props.onClick}>Run directly</button>
        <button onClick={this.addLetter}>Add letter</button>
        <p>
          {this.state.word}
        </p>
      </div>
    );
  }
}

export class ReactChildComponent {

  static initialize(title: string, store: ReactStore, containerId: string, onClick) {
    ReactDOM.render(<ReactChildComponentElement title={title} store={store} onClick={onClick}/>, document.getElementById(containerId));
  }
}
