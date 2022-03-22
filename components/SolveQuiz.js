
import React from 'react';


const Options = ({question}) => {

  const [loading, setLoading] = React.useState(true);
  const [options, setOptions] = React.useState([])

  React.useEffect(() => {

    var url = process.env.API_URL + 'quiz/options/?question='+question.id;
    fetch(url)
    .then(async (response) => {
        if (response.ok) {
            var data = await response.json();
            setOptions(data);
            setLoading(false);
            }
        else{}
        })
},[]);

  return(
    <div>
      {loading && <div>loading...</div>}

      <div style={{ 'margin':'1em 0px' }}>
                        {question.right_option == question.selected ? <div>
                            {options.map((option,key)=>
                                <div key={key}>
                                {(question.right_option==option.id) &&
                                    <div style={{ 'margin':'0.3em 0em', 'padding':'0.4em', 'border': '1px solid green', 'borderRadius':'1em' }}>
                                    <span style={{ paddingLeft:"5px"  }}>{option.text}</span>
                                    
                                    </div> ||
                                (question.right_option != option.id) && <div style={{ 'margin':'0.3em 0em', 'padding':'0.4em'}}>
                                        <span style={{ paddingLeft:"5px"  }}>{option.text}</span>
                                    </div>
                                }
                                </div>
                            )}



                        </div>: 
                            <div>
                            {options.map((option,key)=>
                                <div key={key}>
                                    { (question.right_option==option.id) &&
                                    <div style={{ 'margin':'0.3em 0em', 'padding':'0.4em', 'border': '1px solid green', 'borderRadius':'1em'}}>

                                    <span style={{ paddingLeft:"5px"  }}>{option.text}</span>
                                    
                                    </div>  ||

                                     (question.selected==option.id) &&
                                    <div style={{ 'margin':'0.3em 0em', 'padding':'0.4em', 'border': '1px solid red', 'borderRadius':'1em'}}>

                                    <span style={{ paddingLeft:"5px"  }}>{option.text}</span>
                                    
                                    </div> ||
                                        (true) && <div style={{ 'margin':'0.3em 0em', 'padding':'0.4em'}}>
                                         <span style={{ paddingLeft:"5px"  }}>{option.text}</span>
                                     </div>
                                    }
                                </div>
                             )}

                        </div>

                        }
            </div>
    </div>
  )


}






const SolveQuiz = ({quiz}) => {

    const [questions, setQuestions] = React.useState([]);

    const [started, setStarted] = React.useState(false);
    const [currentQuestion, setCurrentQuestion] = React.useState({});

    const [options, setOptions] = React.useState([]);
    const [currentCount, setCurrentCount] = React.useState(0);
    const [optionLoading, setOptionLoading] = React.useState(false);

    const [showAnswer, setShowAnswer] = React.useState(false);
    const [rightCount, setRightCount] = React.useState(0);

    React.useEffect(() => {
      let url = process.env.API_URL + 'quiz/questions/?quiz='+quiz.id;
      fetch(url)
      .then(async (response) => {
        if (response.ok) {
          var data = await response.json();
          setQuestions(data.results);
          setCurrentQuestion(data.results[0]);
          loadOptions(data.results[0].id);
         } else {
          
        }
      }).catch(error=>{  })
  },[]);


  React.useEffect(() => {
    let question;
    for (question of questions){
        if (question.selected==question.right_option){
          setRightCount(rightCount+1);
        }
    }
  },[showAnswer]);


  const loadOptions = (quesID) => {
    var url = process.env.API_URL + 'quiz/options/?question='+quesID;
    fetch(url)
    .then(async (response) => {
        if (response.ok) {
            var data = await response.json();
            setOptions(data);
            setOptionLoading(false);
            }
        else{}
        })
  }

  const addRight = () =>{
    // console.log("added ", currentCount ,questions[currentCount]);

    let option;
    for (option of options){
        if (option.is_right===true){
            questions[currentCount]['right_option'] = option.id.toString();
            // console.log(questions)
        }
    }
  }

  const handleNP = (np) => {
        let new_count = np==='n' ? currentCount+1:currentCount-1
        addRight();
        setCurrentCount(new_count);
        setCurrentQuestion(questions[new_count]);
        setOptionLoading(true);
        loadOptions(questions[new_count].id)
        uncheckAll();
  }

  const uncheckAll = () =>{
      let option;
      for (option of options) {
              document.getElementById(option.id).checked=false;
      }
  }

  const handleChange = (event) =>{
    var selected = event.target.value;
    // var right_option = questions[currentCount]['right_option'];

    questions[currentCount]['selected'] = selected;
    // this.addUserQuestion(selected, right_option);
    for (var option of options) {
        if (option.id != selected){
            document.getElementById(option.id).checked=false;
        }
        else{
            document.getElementById(option.id).checked=true;
        }
    }
    // console.log(this.state.questions);
}

const handleSubmit = () => {

  addRight();


  
  setShowAnswer(true);

  // let user = JSON.parse(localStorage.getItem('userData'));

  // if (user){

  // let url = api_url + 'quiz/user_quiz/'+this.state.user_quiz.id+'/'
  // postDataAuth(url,user.token,{total_correct:this.state.right_count},'PATCH')
  //             .then(data => {
  //             }).catch(error => {
  //               this.setState({})
  //     })
  // }
}


  return (
    <>

    {showAnswer && 
                    <div >

                    <h4>Your Score : {rightCount} / {questions.length}</h4>

                    {questions.map((question, key)=>
                            <div key={key} className="card" style={{'padding':16, 'margin':12}}>
                            {question.right_option==question.selected ?
                                <h5 className="">{key+1}. Right Answer</h5>:
                                <h5 className="">{key+1}. Wrong Answer</h5>
                            }
                            <div className="" dangerouslySetInnerHTML={{__html:question.text}} />
                            <Options question={question} questionID={question.id} />
                            <p className=""> EXPLANATION </p>
                            <div className=""> {question.answer_discription}</div>
                            <br />
    
                            </div>
                        )}
                 </div>
    
    }

    {!showAnswer && <div>  

    {started ?

    <div>
      <div style={{ 'padding':'0.3em 0em' }}>

      <h3 style={{ 'paddingTop':'0.2em' }}> {currentCount+1} of {questions.length} </h3>
      <div dangerouslySetInnerHTML={{__html:currentQuestion.text}} />

      </div>

      {optionLoading && <div>Loading...</div>}

      {!optionLoading && <div>
        {options.map((option,key)=>
          <div key={key} style={{ padding:"4px 0" }}>
            <label>
              <input style={{ paddingRight:6 }} type="radio" id={option.id} onChange={handleChange} value={option.id} /> 
              {option.text}
            </label>
                        
          </div>

        )}
        
      </div>}

      <br />
      <div className='row'>

      <div style={{ width:"50%" }}> {currentCount>0 && <button className="btn btn-secondary btn-outline" onClick={()=>handleNP('p')}>Previous</button>}</div>

      <div style={{ width:"50%",'textAlign':'right' }}> 
                {currentCount<questions.length-1 ? <button className="btn btn-secondary btn-outline" onClick={()=>handleNP('n')}>Next</button>: <div>
                    
                    <button className="btn btn-secondary btn-outline" onClick={()=>handleSubmit()}>See the Result</button>
                    </div>

                 }
        </div>

      </div>


    </div>:
    
    
    
    <div style={{ 'padding':'2em', 'borderStyle': 'dotted' }}>

        <h3> {quiz.name} ({questions.length} Questions) </h3>
        <div dangerouslySetInnerHTML={{__html:quiz.detail}} />

        <br />

        <p><button onClick={()=>{setStarted(true)}} className="btn btn-primary btn-hover-dark" href="#">
              Start Quiz
        </button></p>
        
    </div>}

    </div>}
    
    
    </>
  )
}

export default SolveQuiz