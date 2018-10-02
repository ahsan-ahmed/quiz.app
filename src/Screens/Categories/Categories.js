import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavItem,Dropdown, DropdownToggle, DropdownMenu, DropdownItem,Container,Row,Col } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import CardExample from "../../Components/Card/Card";
import fire from "../../Firebase/Firebase";

class Categories extends Component {
    constructor(){
      super();     
     this.state={ isCategoryShow:true,isRegisterClick:true,categories: [
        {
          name: "HTML5",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfUS8ePXaOwihdfrs0WYg7YQjUceD1TYrQWc8KulRLZUapYU2",
          quiz: [
            {
              name: "Basic HTML5",
              number: 1,
              timeAllowed:"04 Mins",
              totalQuestions:"10",
              password: "123456",
              questions: [
                {
                  question: "What is 8 x 1?",
                  answers: [
                    "1",
                    "8",
                    "16",
                    "9"
                  ],
                  correct: 1
                },
                {
                  question: "Who is Steve Jobs?",
                      answers: [
                        "CEO of Microsoft",
                        "Barber in NY",
                        "Movie Star",
                        "CEO of Apple"
                      ],
                      correct: 3
                },
                 {
                      question: "Metallica is a ____ band",
                      answers: [
                        "Blues",
                        "Hard-Rock",
                        "Jazz",
                        "Metal"
                      ],
                      correct: 3
                    },
                    {
                      question: "IS is a ____",
                      answers: [
                        "Word",
                        "Band",
                        "Terror Group",
                        "Brand"
                      ],
                      correct: 2
                    },
                    {
                      question: "Who was Einstein",
                      answers: [
                        "A Scientist",
                        "A Dentist",
                        "A Serial Killer",
                        "None of the above"
                      ],
                      correct: 0
                    },
                    {
                      question: "JavaScript can be used in ____ development",
                      answers: [
                        "Back-End",
                        "Front-End",
                        "ReactJS",
                        "All of the Above"
                      ],
                      correct: 3
                    },
                    {
                      question: "Hitler was a",
                      answers: [
                        "Mass Murderer",
                        "Dictator",
                        "Jew",
                        "None of the above",
                        "All of the above"
                      ],
                      correct: 4
                    },
                    {
                      question: "Korn is a",
                      answers: [
                        "Nu-Metal band",
                        "Religion",
                        "Singer"
                      ],
                      correct: 0
                    },
                    {
                      question: "Windows computers are",
                      answers: [
                        "Horrible",
                        "Great",
                        "Cheap",
                        "Invented by Bill Gates"
                      ],
                      correct: 3
                    },
                    {
                      question: "The BigBan stands in",
                      answers: [
                        "Egypt",
                        "London",
                        "Amsterdam",
                        "NewYork"
                      ],
                      correct: 1
                    },
              ]
            },
            {
              name: "Medium HTML5",
              number: 2,
              timeAllowed:"04 Mins",
              totalQuestions:"10",
              password: "123456",
              questions: [
                {
                  question: "What is 8 x 1?",
                  answers: [
                    "1",
                    "8",
                    "16",
                    "9"
                  ],
                  correct: 1
                },
                {
                  question: "Who is Steve Jobs?",
                      answers: [
                        "CEO of Microsoft",
                        "Barber in NY",
                        "Movie Star",
                        "CEO of Apple"
                      ],
                      correct: 3
                },
                 {
                      question: "Metallica is a ____ band",
                      answers: [
                        "Blues",
                        "Hard-Rock",
                        "Jazz",
                        "Metal"
                      ],
                      correct: 3
                    },
                    {
                      question: "IS is a ____",
                      answers: [
                        "Word",
                        "Band",
                        "Terror Group",
                        "Brand"
                      ],
                      correct: 2
                    },
                    {
                      question: "Who was Einstein",
                      answers: [
                        "A Scientist",
                        "A Dentist",
                        "A Serial Killer",
                        "None of the above"
                      ],
                      correct: 0
                    },
                    {
                      question: "JavaScript can be used in ____ development",
                      answers: [
                        "Back-End",
                        "Front-End",
                        "ReactJS",
                        "All of the Above"
                      ],
                      correct: 3
                    },
                    {
                      question: "Hitler was a",
                      answers: [
                        "Mass Murderer",
                        "Dictator",
                        "Jew",
                        "None of the above",
                        "All of the above"
                      ],
                      correct: 4
                    },
                    {
                      question: "Korn is a",
                      answers: [
                        "Nu-Metal band",
                        "Religion",
                        "Singer"
                      ],
                      correct: 0
                    },
                    {
                      question: "Windows computers are",
                      answers: [
                        "Horrible",
                        "Great",
                        "Cheap",
                        "Invented by Bill Gates"
                      ],
                      correct: 3
                    },
                    {
                      question: "The BigBan stands in",
                      answers: [
                        "Egypt",
                        "London",
                        "Amsterdam",
                        "NewYork"
                      ],
                      correct: 1
                    },
              ]
            },
            {
              name: "Advance HTML5",
              timeAllowed:"04 Mins",
              totalQuestions:"10",
              number: 3,
              password: "123456",
              questions: [
                {
                  question: "What is 8 x 1?",
                  answers: [
                    "1",
                    "8",
                    "16",
                    "9"
                  ],
                  correct: 1
                },
                {
                  question: "Who is Steve Jobs?",
                      answers: [
                        "CEO of Microsoft",
                        "Barber in NY",
                        "Movie Star",
                        "CEO of Apple"
                      ],
                      correct: 3
                },
                 {
                      question: "Metallica is a ____ band",
                      answers: [
                        "Blues",
                        "Hard-Rock",
                        "Jazz",
                        "Metal"
                      ],
                      correct: 3
                    },
                    {
                      question: "IS is a ____",
                      answers: [
                        "Word",
                        "Band",
                        "Terror Group",
                        "Brand"
                      ],
                      correct: 2
                    },
                    {
                      question: "Who was Einstein",
                      answers: [
                        "A Scientist",
                        "A Dentist",
                        "A Serial Killer",
                        "None of the above"
                      ],
                      correct: 0
                    },
                    {
                      question: "JavaScript can be used in ____ development",
                      answers: [
                        "Back-End",
                        "Front-End",
                        "ReactJS",
                        "All of the Above"
                      ],
                      correct: 3
                    },
                    {
                      question: "Hitler was a",
                      answers: [
                        "Mass Murderer",
                        "Dictator",
                        "Jew",
                        "None of the above",
                        "All of the above"
                      ],
                      correct: 4
                    },
                    {
                      question: "Korn is a",
                      answers: [
                        "Nu-Metal band",
                        "Religion",
                        "Singer"
                      ],
                      correct: 0
                    },
                    {
                      question: "Windows computers are",
                      answers: [
                        "Horrible",
                        "Great",
                        "Cheap",
                        "Invented by Bill Gates"
                      ],
                      correct: 3
                    },
                    {
                      question: "The BigBan stands in",
                      answers: [
                        "Egypt",
                        "London",
                        "Amsterdam",
                        "NewYork"
                      ],
                      correct: 1
                    },
              ]
            }
          ]
        },
        {
          name: "AngularJs",
          image:"https://udemy-images.udemy.com/course/750x422/1427466_f4f8.jpg",
          quiz:[
            {
              name: "Basic HTML5",
              number: 1,
              timeAllowed:"04 Mins",
              totalQuestions:"10",
              password: "123456",
              questions: [
                {
                  question: "What is 8 x 1?",
                  answers: [
                    "1",
                    "8",
                    "16",
                    "9"
                  ],
                  correct: 1
                },
                {
                  question: "Who is Steve Jobs?",
                      answers: [
                        "CEO of Microsoft",
                        "Barber in NY",
                        "Movie Star",
                        "CEO of Apple"
                      ],
                      correct: 3
                },
                 {
                      question: "Metallica is a ____ band",
                      answers: [
                        "Blues",
                        "Hard-Rock",
                        "Jazz",
                        "Metal"
                      ],
                      correct: 3
                    },
                    {
                      question: "IS is a ____",
                      answers: [
                        "Word",
                        "Band",
                        "Terror Group",
                        "Brand"
                      ],
                      correct: 2
                    },
                    {
                      question: "Who was Einstein",
                      answers: [
                        "A Scientist",
                        "A Dentist",
                        "A Serial Killer",
                        "None of the above"
                      ],
                      correct: 0
                    },
                    {
                      question: "JavaScript can be used in ____ development",
                      answers: [
                        "Back-End",
                        "Front-End",
                        "ReactJS",
                        "All of the Above"
                      ],
                      correct: 3
                    },
                    {
                      question: "Hitler was a",
                      answers: [
                        "Mass Murderer",
                        "Dictator",
                        "Jew",
                        "None of the above",
                        "All of the above"
                      ],
                      correct: 4
                    },
                    {
                      question: "Korn is a",
                      answers: [
                        "Nu-Metal band",
                        "Religion",
                        "Singer"
                      ],
                      correct: 0
                    },
                    {
                      question: "Windows computers are",
                      answers: [
                        "Horrible",
                        "Great",
                        "Cheap",
                        "Invented by Bill Gates"
                      ],
                      correct: 3
                    },
                    {
                      question: "The BigBan stands in",
                      answers: [
                        "Egypt",
                        "London",
                        "Amsterdam",
                        "NewYork"
                      ],
                      correct: 1
                    },
              ]
            },
            {
              name: "Medium HTML5",
              number: 2,
              timeAllowed:"04 Mins",
              totalQuestions:"10",
              password: "123456",
              questions: [
                {
                  question: "What is 8 x 1?",
                  answers: [
                    "1",
                    "8",
                    "16",
                    "9"
                  ],
                  correct: 1
                },
                {
                  question: "Who is Steve Jobs?",
                      answers: [
                        "CEO of Microsoft",
                        "Barber in NY",
                        "Movie Star",
                        "CEO of Apple"
                      ],
                      correct: 3
                },
                 {
                      question: "Metallica is a ____ band",
                      answers: [
                        "Blues",
                        "Hard-Rock",
                        "Jazz",
                        "Metal"
                      ],
                      correct: 3
                    },
                    {
                      question: "IS is a ____",
                      answers: [
                        "Word",
                        "Band",
                        "Terror Group",
                        "Brand"
                      ],
                      correct: 2
                    },
                    {
                      question: "Who was Einstein",
                      answers: [
                        "A Scientist",
                        "A Dentist",
                        "A Serial Killer",
                        "None of the above"
                      ],
                      correct: 0
                    },
                    {
                      question: "JavaScript can be used in ____ development",
                      answers: [
                        "Back-End",
                        "Front-End",
                        "ReactJS",
                        "All of the Above"
                      ],
                      correct: 3
                    },
                    {
                      question: "Hitler was a",
                      answers: [
                        "Mass Murderer",
                        "Dictator",
                        "Jew",
                        "None of the above",
                        "All of the above"
                      ],
                      correct: 4
                    },
                    {
                      question: "Korn is a",
                      answers: [
                        "Nu-Metal band",
                        "Religion",
                        "Singer"
                      ],
                      correct: 0
                    },
                    {
                      question: "Windows computers are",
                      answers: [
                        "Horrible",
                        "Great",
                        "Cheap",
                        "Invented by Bill Gates"
                      ],
                      correct: 3
                    },
                    {
                      question: "The BigBan stands in",
                      answers: [
                        "Egypt",
                        "London",
                        "Amsterdam",
                        "NewYork"
                      ],
                      correct: 1
                    },
              ]
            },
            {
              name: "Advance HTML5",
              timeAllowed:"04 Mins",
              totalQuestions:"10",
              number: 3,
              password: "123456",
              questions: [
                {
                  question: "What is 8 x 1?",
                  answers: [
                    "1",
                    "8",
                    "16",
                    "9"
                  ],
                  correct: 1
                },
                {
                  question: "Who is Steve Jobs?",
                      answers: [
                        "CEO of Microsoft",
                        "Barber in NY",
                        "Movie Star",
                        "CEO of Apple"
                      ],
                      correct: 3
                },
                 {
                      question: "Metallica is a ____ band",
                      answers: [
                        "Blues",
                        "Hard-Rock",
                        "Jazz",
                        "Metal"
                      ],
                      correct: 3
                    },
                    {
                      question: "IS is a ____",
                      answers: [
                        "Word",
                        "Band",
                        "Terror Group",
                        "Brand"
                      ],
                      correct: 2
                    },
                    {
                      question: "Who was Einstein",
                      answers: [
                        "A Scientist",
                        "A Dentist",
                        "A Serial Killer",
                        "None of the above"
                      ],
                      correct: 0
                    },
                    {
                      question: "JavaScript can be used in ____ development",
                      answers: [
                        "Back-End",
                        "Front-End",
                        "ReactJS",
                        "All of the Above"
                      ],
                      correct: 3
                    },
                    {
                      question: "Hitler was a",
                      answers: [
                        "Mass Murderer",
                        "Dictator",
                        "Jew",
                        "None of the above",
                        "All of the above"
                      ],
                      correct: 4
                    },
                    {
                      question: "Korn is a",
                      answers: [
                        "Nu-Metal band",
                        "Religion",
                        "Singer"
                      ],
                      correct: 0
                    },
                    {
                      question: "Windows computers are",
                      answers: [
                        "Horrible",
                        "Great",
                        "Cheap",
                        "Invented by Bill Gates"
                      ],
                      correct: 3
                    },
                    {
                      question: "The BigBan stands in",
                      answers: [
                        "Egypt",
                        "London",
                        "Amsterdam",
                        "NewYork"
                      ],
                      correct: 1
                    },
              ]
            }
          ] 
        },
        {
          name: "ReactJs",
          image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
          quiz: [
            {
              name: "Basic HTML5",
              number: 1,
              timeAllowed:"04 Mins",
              totalQuestions:"10",
              password: "123456",
              questions: [
                {
                  question: "What is 8 x 1?",
                  answers: [
                    "1",
                    "8",
                    "16",
                    "9"
                  ],
                  correct: 1
                },
                {
                  question: "Who is Steve Jobs?",
                      answers: [
                        "CEO of Microsoft",
                        "Barber in NY",
                        "Movie Star",
                        "CEO of Apple"
                      ],
                      correct: 3
                },
                 {
                      question: "Metallica is a ____ band",
                      answers: [
                        "Blues",
                        "Hard-Rock",
                        "Jazz",
                        "Metal"
                      ],
                      correct: 3
                    },
                    {
                      question: "IS is a ____",
                      answers: [
                        "Word",
                        "Band",
                        "Terror Group",
                        "Brand"
                      ],
                      correct: 2
                    },
                    {
                      question: "Who was Einstein",
                      answers: [
                        "A Scientist",
                        "A Dentist",
                        "A Serial Killer",
                        "None of the above"
                      ],
                      correct: 0
                    },
                    {
                      question: "JavaScript can be used in ____ development",
                      answers: [
                        "Back-End",
                        "Front-End",
                        "ReactJS",
                        "All of the Above"
                      ],
                      correct: 3
                    },
                    {
                      question: "Hitler was a",
                      answers: [
                        "Mass Murderer",
                        "Dictator",
                        "Jew",
                        "None of the above",
                        "All of the above"
                      ],
                      correct: 4
                    },
                    {
                      question: "Korn is a",
                      answers: [
                        "Nu-Metal band",
                        "Religion",
                        "Singer"
                      ],
                      correct: 0
                    },
                    {
                      question: "Windows computers are",
                      answers: [
                        "Horrible",
                        "Great",
                        "Cheap",
                        "Invented by Bill Gates"
                      ],
                      correct: 3
                    },
                    {
                      question: "The BigBan stands in",
                      answers: [
                        "Egypt",
                        "London",
                        "Amsterdam",
                        "NewYork"
                      ],
                      correct: 1
                    },
              ]
            },
            {
              name: "Medium HTML5",
              number: 2,
              timeAllowed:"04 Mins",
              totalQuestions:"10",
              password: "123456",
              questions: [
                {
                  question: "What is 8 x 1?",
                  answers: [
                    "1",
                    "8",
                    "16",
                    "9"
                  ],
                  correct: 1
                },
                {
                  question: "Who is Steve Jobs?",
                      answers: [
                        "CEO of Microsoft",
                        "Barber in NY",
                        "Movie Star",
                        "CEO of Apple"
                      ],
                      correct: 3
                },
                 {
                      question: "Metallica is a ____ band",
                      answers: [
                        "Blues",
                        "Hard-Rock",
                        "Jazz",
                        "Metal"
                      ],
                      correct: 3
                    },
                    {
                      question: "IS is a ____",
                      answers: [
                        "Word",
                        "Band",
                        "Terror Group",
                        "Brand"
                      ],
                      correct: 2
                    },
                    {
                      question: "Who was Einstein",
                      answers: [
                        "A Scientist",
                        "A Dentist",
                        "A Serial Killer",
                        "None of the above"
                      ],
                      correct: 0
                    },
                    {
                      question: "JavaScript can be used in ____ development",
                      answers: [
                        "Back-End",
                        "Front-End",
                        "ReactJS",
                        "All of the Above"
                      ],
                      correct: 3
                    },
                    {
                      question: "Hitler was a",
                      answers: [
                        "Mass Murderer",
                        "Dictator",
                        "Jew",
                        "None of the above",
                        "All of the above"
                      ],
                      correct: 4
                    },
                    {
                      question: "Korn is a",
                      answers: [
                        "Nu-Metal band",
                        "Religion",
                        "Singer"
                      ],
                      correct: 0
                    },
                    {
                      question: "Windows computers are",
                      answers: [
                        "Horrible",
                        "Great",
                        "Cheap",
                        "Invented by Bill Gates"
                      ],
                      correct: 3
                    },
                    {
                      question: "The BigBan stands in",
                      answers: [
                        "Egypt",
                        "London",
                        "Amsterdam",
                        "NewYork"
                      ],
                      correct: 1
                    },
              ]
            },
            {
              name: "Advance HTML5",
              timeAllowed:"04 Mins",
              totalQuestions:"10",
              number: 3,
              password: "123456",
              questions: [
                {
                  question: "What is 8 x 1?",
                  answers: [
                    "1",
                    "8",
                    "16",
                    "9"
                  ],
                  correct: 1
                },
                {
                  question: "Who is Steve Jobs?",
                      answers: [
                        "CEO of Microsoft",
                        "Barber in NY",
                        "Movie Star",
                        "CEO of Apple"
                      ],
                      correct: 3
                },
                 {
                      question: "Metallica is a ____ band",
                      answers: [
                        "Blues",
                        "Hard-Rock",
                        "Jazz",
                        "Metal"
                      ],
                      correct: 3
                    },
                    {
                      question: "IS is a ____",
                      answers: [
                        "Word",
                        "Band",
                        "Terror Group",
                        "Brand"
                      ],
                      correct: 2
                    },
                    {
                      question: "Who was Einstein",
                      answers: [
                        "A Scientist",
                        "A Dentist",
                        "A Serial Killer",
                        "None of the above"
                      ],
                      correct: 0
                    },
                    {
                      question: "JavaScript can be used in ____ development",
                      answers: [
                        "Back-End",
                        "Front-End",
                        "ReactJS",
                        "All of the Above"
                      ],
                      correct: 3
                    },
                    {
                      question: "Hitler was a",
                      answers: [
                        "Mass Murderer",
                        "Dictator",
                        "Jew",
                        "None of the above",
                        "All of the above"
                      ],
                      correct: 4
                    },
                    {
                      question: "Korn is a",
                      answers: [
                        "Nu-Metal band",
                        "Religion",
                        "Singer"
                      ],
                      correct: 0
                    },
                    {
                      question: "Windows computers are",
                      answers: [
                        "Horrible",
                        "Great",
                        "Cheap",
                        "Invented by Bill Gates"
                      ],
                      correct: 3
                    },
                    {
                      question: "The BigBan stands in",
                      answers: [
                        "Egypt",
                        "London",
                        "Amsterdam",
                        "NewYork"
                      ],
                      correct: 1
                    },
              ]
            }
          ]
        }
      ]
    }
    this.nextShowQuizInfo=this.nextShowQuizInfo.bind(this);
  }
  logoutUser(){
    this.props.logoutUser(); 
  }

  nextShowQuizInfo(value){
    const {categories}=this.state;
    //console.log(categories[value])
    localStorage.setItem("QuizInfo",true);
    localStorage.setItem("isCategoryShow",false);
    this.props.getTargetCategory(categories[value]);

  }
  NavbarParaClick(){
    this.props.NavbarParaClick();
      console.log("chal gya!!!");
  }
  componentDidMount(){
    console.log("componentDidUpdate");
    this.setState({isRegisterClick:false,isCategoryPageShow:false})
  }
  getUsernameFromFirebase(){
    fire.auth().onAuthStateChanged(function(user) {
      if (user) {
        var db = fire.firestore();
          var docRef = db.collection("users").doc(user.uid);
          docRef.get().then(function(doc) {
          localStorage.setItem("username",doc.data().username);
         //  console.log(doc.data().username);
        }).catch(function(error) {
        console.log("Got an error: ",error);
        });
      } else {
        console.log(" No user is signed in")
      }
    });
  }

  Header(){
  this.getUsernameFromFirebase();
  const username=localStorage.getItem("username")
  return(
      <div>
    <Container>
      <Router>  
        <Navbar dark color="indigo" expand="lg">
      <NavbarBrand >
          <strong onClick={()=>{this.NavbarParaClick()}}style={{color:"white"}}>Panacloud Quiz App</strong>
      </NavbarBrand>  
      <NavbarNav right>
      <NavItem>
            <Dropdown>
                  <DropdownToggle nav caret><i class="fa fa-user-circle" aria-hidden="true"></i>{username}</DropdownToggle>
                <DropdownMenu >
                    <DropdownItem >Go To category</DropdownItem>
                    <DropdownItem >Check Your Quiz</DropdownItem>
                    <DropdownItem onClick={()=>{this.logoutUser()}}>Log Out</DropdownItem>
                </DropdownMenu>
            </Dropdown>
         </NavItem>
         </NavbarNav>  
            </Navbar>
          </Router>
      </Container>
</div>    
    )
  }
  Body(){
    const { categories } = this.state;
    return(
  <div>
  <Container fluid>
    <Row>
   { categories.map((item, count) => 
     <Col sm="3">
    <CardExample getCategory={item} getCount={count} takeQuizListClick={this.nextShowQuizInfo}/>                
      </Col>
    )}
    </Row>
      </Container>
 </div>
    )
  }

  render() {
    console.log("render")
      return (
        <div>
          {this.Header()}
          {this.Body()}
        </div>
  );
    }
  }
  
  export default Categories;
  