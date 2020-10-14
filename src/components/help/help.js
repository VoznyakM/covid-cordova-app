import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

export default class Help extends Component {

  render() {


    return (
      <>

      <Paper variant="outlined"  style={{padding: 1 + 'em'}}>

      <h4>Знання достовірних фактів і дотримання запобіжних заходів допоможуть вам захистити себе й оточуючих. 
    Виконуйте поради місцевого органу охорони здоров’я.</h4>
<p>Як зупинити поширення COVID-19:
часто мийте руки милом і водою або використовуйте спиртовмісний антисептик для рук;
тримайтеся на безпечній відстані від усіх, хто кашляє або чхає;
вдягайте маску, якщо дотримуватися дистанції неможливо;
не торкайтеся очей, носа або рота;
під час кашлю або чхання прикривайте ніс і рот зігнутим ліктем або серветкою;
не виходьте з дому, якщо погано почуваєтесь;
якщо у вас лихоманка, кашель і вам важко дихати, зверніться до лікаря.</p>

      </Paper>
 
      </>
    );
  }
}
