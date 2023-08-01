import { Feedback } from "components/Feedback/Feedback";
import { Container } from "components/Container/Container";
import { Statistics } from "./components/Statistics/Statistics"
import { Component } from "react";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
 
  handleClickGood = (e) => {
    this.setState((prevState)=> {
return{good: prevState.good + 1,}
    })
        }

        handleClickNeutral = (e) => {
          this.setState((prevState)=> {
      return{neutral: prevState.neutral + 1,}
          })
              }

              handleClickBad = (e) => {
                this.setState((prevState)=> {
            return{bad: prevState.bad + 1,}
                })
                    }


  render(){
    return (
      <Container>
   
       <Feedback handleClickGood={this.handleClickGood}
  handleClickNeutral={this.handleClickNeutral}
  handleClickBad={this.handleClickBad} />
   
       <Statistics state={this.state}/>
       
       </Container>
     );
  }
  
};
