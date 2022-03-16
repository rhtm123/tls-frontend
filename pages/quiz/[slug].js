
import React from 'react';
import Head from 'next/head';
import Banner from '../../components/Banner';

import Error from '../../components/Error';

import SolveQuiz from '../../components/SolveQuiz';

const QuizPage = ({data, error}) => {

  

  if (error){
    return (<Error />)
  }


  return (
    <div>

      <Head>
        <title>{data.name} - The Learning Setu</title>
        {/* <meta name="description" content={data.sub_header} /> */}
      </Head>

    <Banner>
        <div className="page-banner-content">
          <ul className="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li className="active">Quizzes</li>
          </ul>
          <h2 className="title">
            {data.name} <span></span>
          </h2>
        </div>
      </Banner>

      <div className='component'>
        <div className='row'>
          <div className='col-lg-2'></div>

          <div className='col-lg-8'>

            <div style={{padding:64}}>
                <SolveQuiz quiz={data} />

            </div>
               
          </div>
          <div className='col-lg-2'></div>


        </div>

      </div>


    </div>
  )
}


export async function getServerSideProps(context) {
  // Fetch data from external API
  const {slug} = context.params;
  const url = process.env.API_URL+"quiz/quiz/"+slug+"/";

  const res = await fetch(url)
  const error = res.ok ? false : true
  const data = await res.json()

  return { 
      props: { 
          data:data, error:error
      } 

  }
}


QuizPage.layout = "L1";
export default QuizPage