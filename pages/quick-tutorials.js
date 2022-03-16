
import React from 'react';

import Head from 'next/head';

import Banner from '../components/Banner';
import { useAppContext } from '../context/state';
import Article from '../components/Article';


const Articles = () => {

    const mycontext = useAppContext();
    const data = mycontext.articles;

    const [articles, setArticles] =  React.useState([]);
    const [count, setCount] = React.useState(0);
    const [next, setNext] = React.useState("");

    React.useEffect(() => {
        if (data){
          setArticles(data.results);
          setNext(data.next);
          setCount(data.count);
          // console.log(data);
        }
    
    },[data]);
  return (
    <div>

      <Head>
        <title>Quick Tutorials - The Learning Setu</title>
        <meta name="description" content="Read our quick tutorials. Python, Django, Website Development, Data Science" />
      </Head>

        <Banner>

        <div className="page-banner-content">
                    <ul className="breadcrumb">
                        <li><a href="#">Home</a></li>
                        <li className="active">Quick Tutorials</li>
                    </ul>
                    <h2 className="title">Quick <span>Tutorials</span></h2>
          </div>
        </Banner>

        <div className="section section-padding mt-n10">
            <div className="container">

                <div className="blog-wrapper">
                    <div className="row">


                        {articles.map((article, index) => (
                            <Article key={index} article={article} />
                        ))} 

                        
                    </div>
                </div>
            </div>
        </div>



    </div>
  )
}

Articles.layout = "L1";
export default Articles