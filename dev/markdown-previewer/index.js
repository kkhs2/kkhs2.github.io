class App extends React.Component {
  constructor(props) {
    super(props);
    const placeholder = '# This is a markdown - it is about the best food in the world - fish and chips\n\n## Cod fish (non-biased) is definitely essential fish and chips\n\nCheck out the best fish and chips in the UK [Fish and chips award] (https://www.seafish.org/promoting-seafood/the-national-fish-chip-awards/)\n\n`<br><br>`\n\n#### Some things which are illegal in fish and chips:\n\n * Vinegar\n * Beef dripping\n * Ketchup instead of curry sauce\n * Saveloy on the side instead of battered sausage\n * Serving with Black pudding\n\n![Fish and chips](https://images.unsplash.com/photo-1579208030886-b937da0925dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)\n\n> Look at this thing of beauty!\n\n**Although looking at this closer, you can tell the vendor who sold this portion is a fraud because it comes in a polystyrene container instead of wrapped in newspaper.**';
    this.state = {
      'markdown': placeholder
    }
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({
      markdown: event.target.value
    });

  }

  render() {
    return (
      <>
        <Editor markdown={this.state.markdown} handleChange={this.handleChange} />
        <Previewer markdown={this.state.markdown} />        
      </>
    )
  }
}

const Editor = (props) => {
  return (
    <div className="container w3-container w3-pink w3-margin">
      <h2><u>Editor</u></h2>
      <textarea id="editor" name="editor" type="text" value={props.markdown} onChange={props.handleChange}></textarea>
    </div>
  );
  
}

const Previewer = (props) => {
  return (
    <div className="container w3-container w3-gray w3-margin">
      <h2><u>Preview</u></h2>
      <div dangerouslySetInnerHTML={{__html: marked.parse(props.markdown)}} id="preview" />
    </div>
  );
}


const appContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(appContainer);
root.render(<App />)