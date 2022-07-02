class App extends React.Component {
  constructor(props) {
    super(props);
    const drumPads = [
      {
        'id': 'Big Boomy Gong',
        'key': 'Q',
        'src': '//sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Gongs%20and%20Super%20Crashes/276[kb]big-boomy-gong.wav.mp3'
      },
      {
        'id': 'Acoustic Snare',
        'key': 'W',
        'src': '//sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/61[kb]acoustic_snare.wav.mp3'
      },
      {
        'id': 'Ambient Roll 2',
        'key': 'E',
        'src': '//sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/610[kb]ambient_roll_2.wav.mp3'
      },
      {
        'id': 'Alloy Crash Long',
        'key': 'A',
        'src': '//sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/292[kb]alloy-crash-long.wav.mp3'
      },
      {
        'id': 'Big China Cym',
        'key': 'S',
        'src': '//sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Cymbals/200[kb]big_china_cym.wav.mp3'
      },
      {
        'id': 'Alien Telephone',
        'key': 'D',
        'src': '//sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Electronic%20Hits/63[kb]alien-telephone.wav.mp3'
      },
      {
        'id': 'Dramatic Bong',
        'key': 'Z',
        'src': '//sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Gongs%20and%20Super%20Crashes/185[kb]dramatic-bong.wav.mp3'
      },
      {
        'id': 'Straight Tambourine',
        'key': 'X',
        'src': '//sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Western%20and%20Latin%20Percussion/17[kb]bell1.wav.mp3'
      },
      {
        'id': 'African Pe Lo',
        'key': 'C',
        'src': '//sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/90[kb]african-pe-lo.wav.mp3'
      }
    ];

    this.state = {
      drumPads: Array.from(drumPads)
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.playAndDisplayAudio = this.playAndDisplayAudio.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(e) {
    const pad = this.state.drumPads.find((p) => p.key.toUpperCase() === e.key.toUpperCase());
    this.playAndDisplayAudio(pad);
  }

  handleClick(i) {
    const pad = this.state.drumPads.find((p) => p.key === i);
    this.playAndDisplayAudio(pad);
  }

  playAndDisplayAudio(p) {
    document.getElementById("display").innerHTML = '<h1>' + p.id + '</h1>';
    let play = document.getElementById(p.key);
    play.play();
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display" />
        { 
          this.state.drumPads.map((drum) => {
            return <DrumPad value={drum.key} key={drum.id} id={drum.id} onClick={() => this.handleClick(drum.key)} onKeyPress={() => this.handleKeyDown(drum.key)} src={drum.src} />
          })
        }
      </div>
    );
  }
}

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div 
          className="w3-button w3-purple drum-pad" id={this.props.id} onClick={this.props.onClick} onKeyPress={this.props.onKeyDown}
        value={this.props.value} >{this.props.value} 
          <audio id={this.props.value} src={this.props.src} className="clip">
            <source src={this.props.src} type="audio/mpeg" />
          </audio>
        </div>
    );
  }
}


const appContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(appContainer);
root.render(<App />);
