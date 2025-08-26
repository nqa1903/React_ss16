import { Component } from 'react';
type Button = {
  label: string;
  color: string;
};

type ListButton = {
  buttons: Button[];
};
export default class Ex3 extends Component<{}, ListButton> {
  constructor(props: {}) {
    super(props);
    this.state = {
      buttons: [
        { label: 'Primary', color: 'blue' },
        { label: 'Secondary', color: 'green' },
        { label: 'Danger', color: 'red' },
        { label: 'Warning', color: 'orange' },
        { label: 'Info', color: 'lightblue' }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.buttons.map((button, index) => (
          <button key={index} style={{ backgroundColor: button.color, border: 'none', display: 'flex', gap: '10px', color: 'white', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer', margin: '5px' }}>
            {button.label}
          </button>
        ))}
      </div>
    );
  }
}