class App extends React.Component {
  constructor(props) {
    super(props);
    const keys = [
      {
        'id': 'equals',
        'value': '='
      },
      {
        'id': 'clear',
        'value': 'AC'
      },
      {
        'id': 'zero',
        'value': '0'
      },
      {
        'id': 'one',
        'value': '1'
      },
      {
        'id': 'two',
        'value': '2'
      },
      {
        'id': 'three',
        'value': '3'
      },
      {
        'id': 'four',
        'value': '4'
      },
      {
        'id': 'five',
        'value': '5'
      },
      {
        'id': 'six',
        'value': '6'
      },
      {
        'id': 'seven',
        'value': '7'
      },
      {
        'id': 'eight',
        'value': '8'
      },
      {
        'id': 'nine',
        'value': '9'
      },
      {
        'id': 'add',
        'value': '+'
      },
      {
        'id': 'subtract',
        'value': '-'
      },
      {
        'id': 'multiply',
        'value': '*'
      },
      {
        'id': 'divide',
        'value': '/'
      },
      {
        'id': 'decimal',
        'value': '.'
      }
    ]


    this.state = {
      keys: Array.from(keys),
      formula: '',
      currentValue: '0'
    }

    this.handleClick = this.handleClick.bind(this);
    this.equals = this.equals.bind(this);
    this.clear = this.clear.bind(this); 
  }

  handleClick(event) {
    let value = event.target.value;
    let formula = this.state.formula;
    let currentValue = String(this.state.currentValue);
    let beginsWith = currentValue.charAt(0);

    /* checks - probably a better way to do checks with regex */

    /* don't allow two decimals in a number */
    if (currentValue.includes('.') && value == '.') return;

    /* don't allow more than one zero at the beginning of a number */
    if (beginsWith == '0' && value == '0') return;

    if (['+', '*', '/', '-'].includes(value) || ['+', '*', '/', '-'].includes(currentValue) || beginsWith == '0') {
      currentValue = value;
    } else {
      currentValue += value;
    }

    /* if the latest character is an operator, don't concat to the formula but instead replace it */
    if (['+', '*', '/'].includes(formula.charAt(formula.length - 1)) && ['+', '*', '/'].includes(value) ) {
      formula = formula.slice(0, -1) + value; 
    }
    
    /* make formula so that if consecutive operators are entered, the last one is used to do the calculation */ 
    else if (['+', '*', '/', '-'].includes(formula.charAt(formula.length - 2)) && ['+', '*', '/', '-'].includes(formula.charAt(formula.length - 1)) && !Number.isInteger(parseInt(value))) {
      formula = formula.slice(0, -2) + value;
    }
    /* add a zero in front of a decimal if user does not enter a digit followed by decimal */
    else if (!Number.isInteger(parseInt(formula.charAt(formula.length - 1))) && value == '.') {
      formula += '0' + value;
    }
    /* if equals is pressed and the following value is an operator, start the new formula from the result value and clear the old formula */
    else if (formula.includes('=') && ['*', '+', '/', '-'].includes(value)) {
      formula = formula.split('=')[1] + value;
    }
    /* if equals is pressed and the following is not an operator, start from the beginning */
    else if (formula.includes('=') && !['*', '+', '/', '-'].includes(value)) {
      formula = value;
      currentValue = value;
    }
    else {
      formula += value;
    }


    this.setState({
      currentValue: currentValue,
      formula: formula
    });
    
  }

  equals(event) {
    let value = event.target.value;
    let formula = this.state.formula;
    let modifiedFormula = formula.replace(/\D+$/g, '');
    console.log(modifiedFormula);
    this.setState({
      formula: modifiedFormula + value + eval(modifiedFormula),
      currentValue: eval(modifiedFormula)
    });
  }

  clear() {
    this.setState({
      formula: '',
      currentValue: '0'
    })
  }
  

  render() {
    return (
      <div className="w3-container" id="calculator">
        <div className="w3-row">
          <div className="w3-input w3-right-align" type="text" id="formula">{this.state.formula}</div>
        </div>
        <div className="w3-row">
          <div className="w3-input w3-right-align" id="display">{this.state.currentValue}</div>
        </div> 
        {
          this.state.keys.map((k, index) => {
            if (k.id == 'equals') {
              return <button className="w3-button w3-orange w3-half w3-border w3-border-white w3-right" key="equals" name="equals" onClick={this.equals} id="equals" value={k.value}>{k.value}</button>
            } else if (k.id == 'clear') {
              return <button className="w3-button w3-orange w3-half w3-border w3-border-white w3-right" key="clear" name="clear" onClick={this.clear} id="clear" value={k.value}>{k.value}</button>
            } else {
              return <Key key={index} id={k.id} onClick={this.handleClick} value={k.value}  />
            }
          })
        }
      </div>
    )
  }
}

function Key(props) {

    return (
      <button className="w3-button w3-pink w3-quarter w3-border w3-border-white" key={props.index} name={props.value} onClick={props.onClick} id={props.id} value={props.value}>{props.value}</button>
    )
  
}

const appContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(appContainer);
root.render(<App />);