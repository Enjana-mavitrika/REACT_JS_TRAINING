import React, {Component} from 'react';


class ConditionnalComponent extends Component {

  constructor(props){
    super(props);
  }

  render(){
    const {title, subtitle} = this.props;

    return (
    <div style={styles.card}>
      <h1 style={styles.title}>{title}</h1>
      { subtitle ? (
        <h3 style={styles.subtitle}>{subtitle}</h3>
      ) : (
        <h3 style={styles.empty}>No subtitle</h3>
      )
      }
    </div>
    );
  }

}

const styles = {
  card: {
    padding: 20,
    margin: 20,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'skyblue',
    border: '1px solid rgba(0,0,0,0.15)',
  },
  title: {
    fontSize: 18,
    lineHeight: '24px',
  },
  subtitle: {
    fontSize: 14,
    lineHeight: '18px',
  },
  empty: {
    fontSize: 12,
    lineHeight: '15px',
    opacity: 0.5,
  }
};


  export default ConditionnalComponent;
