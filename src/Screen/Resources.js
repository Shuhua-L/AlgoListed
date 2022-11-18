import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CCRightMenu from '../Components/CCRightMenu'
import CCHeader from '../Components/CCHeader'
import LeftMenu from '../Components/LeftMenu'
import FilterListIcon from '@material-ui/icons/FilterList';
import InfoIcon from '@material-ui/icons/Info';

const Resources = () => { 
    return (
        <GrandContainer>
            <MobContainer>
                We are still working on Responsive Version of the website, please view the site with 
                width more than 1100px, a standard laptop or tablet landscape. 
                <img src="https://media4.giphy.com/media/13FrpeVH09Zrb2/giphy.gif" alt="" />
            </MobContainer>
            <Container>
                <CCHeader />
                <LeftMenu marked={"resources"} />
                <div className="cc-middle-content">
                    <h1 className='main-heading'>Resources <div className="head-tag">coming soon</div> </h1>
                    <p className="heading-supporter">
                        Here we have resources like notes and other important tools for computer related subjects. We are
                        collecting the resources from students, various websites like linkedin. 
                    </p>
                    <div className="message">
                        <div className="icon"></div>
                        <div className="text">
                            Want to contribute a Brain Teaser or have any suggestion about the website <a href="/">click here</a>
                        </div> 
                    </div> 

                    <div className="search-input">
                      <input type="text" placeholder='Search Topic for Resources . . .'/>
                      <div className="search-btn">Search</div>
                    </div>

                    <div className="resources-container">
                      <div className="resource">
                        <a href='http://www.wbuthelp.com/chapter_file/1015.pdf' target={"_blank"} className="title">Introduction to Computer System - Computer Organisation</a>
                        <div className="short-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam expedita ad provident excepturi itaque autem!</div>
                        <div className="tags">
                          <div className="main-tag">Computer Org.</div>
                          <div className="tag">PDF</div>
                        </div>
                      </div>
                      <div className="resource">
                        <a href='http://www.wbuthelp.com/chapter_file/1016.pdf' target={"_blank"} className="title">Arithmetic and Logic Unit - Computer Organisation</a>
                        <div className="short-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam expedita ad provident excepturi itaque autem!</div>
                        <div className="tags">
                          <div className="main-tag">Computer Org.</div>
                          <div className="tag">PDF</div>
                        </div>
                      </div>
                      <div className="resource">
                        <a href='http://www.wbuthelp.com/chapter_file/1106.pdf' target={"_blank"} className="title">Memory - Computer Organisation</a>
                        <div className="short-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam expedita ad provident excepturi itaque autem!</div>
                        <div className="tags">
                          <div className="main-tag">Computer Org.</div>
                          <div className="tag">PDF</div>
                        </div>
                      </div>
                      <div className="resource">
                        <a href='http://www.wbuthelp.com/chapter_file/1935.pdf' target={"_blank"} className="title">Instruction Set & Addressing Modes - Computer Organisation</a>
                        <div className="short-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam expedita ad provident excepturi itaque autem!</div>
                        <div className="tags">
                          <div className="main-tag">Computer Org.</div>
                          <div className="tag">PDF</div>
                        </div>
                      </div>
                      <div className="resource">
                        <a href='http://www.wbuthelp.com/chapter_file/4051.pdf' target={"_blank"} className="title">CPU Design - Computer Organisation</a>
                        <div className="short-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam expedita ad provident excepturi itaque autem!</div>
                        <div className="tags">
                          <div className="main-tag">Computer Org.</div>
                          <div className="tag">PDF</div>
                        </div>
                      </div>
                      <div className="resource">
                        <a href='http://www.wbuthelp.com/chapter_file/4052.pdf' target={"_blank"} className="title">Introduction to IO - Computer Organisation</a>
                        <div className="short-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam expedita ad provident excepturi itaque autem!</div>
                        <div className="tags">
                          <div className="main-tag">Computer Org.</div>
                          <div className="tag">PDF</div>
                        </div>
                      </div>
                      <div className="resource">
                        <a href='http://www.wbuthelp.com/chapter_file/4054.pdf' target={"_blank"} className="title">Pipelining - Computer Organisation</a>
                        <div className="short-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam expedita ad provident excepturi itaque autem!</div>
                        <div className="tags">
                          <div className="main-tag">Computer Org.</div>
                          <div className="tag">PDF</div>
                        </div>
                      </div>
                    </div>

                </div>
            </Container>
        </GrandContainer>
    )
}

export default Resources

const GrandContainer = styled.div`

`

const MobContainer = styled.div`
  width: 100vw;
  padding: 40px;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;

  img{
    width: calc(100% - 80px);
    margin: 40px;
    border-radius: 5px;
    display: block;
  }

  @media only screen and (min-width: 1099px){
    display: none;
  }
`


const Container = styled.div`
    @media only screen and (max-width: 1099px){
        display: none;
    }

    display: flex;
    justify-content: space-between;
    padding-left: 200px;

    a{
      color: #18489f;
    }

    .cc-middle-content{
      min-height: 100vh;
      width: 100%;
      /* padding: 80px min(120px, 5vw) 50px min(120px, 5vw); */
      padding: 80px 120px 50px 120px;
      position: relative;
      width: 100%;
      max-width: 1360px;
      min-width: 850px;
      margin: auto;
      
      @media only screen and (max-width: 1200px){
        padding: 80px 50px 50px 50px;
      }   

      .main-heading{
          font-size: 1.65rem;
          font-weight: 600;
          color: #292929;
          display: flex; 
          align-items: center;

          .head-tag{
            display: inline;
            font-size: 0.75rem;
            font-weight: 500;
            padding: 0.25rem 0.5rem;
            border-radius: 100px;
            background-color: #e5e5e5;
            margin-left: 10px;
          }
      }

      .heading-supporter{
          font-size: 1.05rem;
          margin-bottom: 10px;
          font-weight: 400;
          color: #696168;

          a{
            color: #18489f;
            font-size: 0.95rem;
            font-weight: 300;
            margin-left: 0.25rem;
          }
      }

      .message{
        display: inline-block;
        /* display: flex; */
        /* align-items: center; */
        background-color: #d5f7e1;
        border-radius: 5px;
        padding: 10px;
        margin: 20px 0 10px 0;

        .text{
            font-size: 0.8rem;
            color: #13803b;
            font-weight: 300;
            
        }
      }
      
      .search-input{
        display: flex;
        margin: 30px 0 10px 0;

        input{
          width: 400px;
          padding: 7.5px 12.5px;
          border-radius: 5px;
          font-size: 0.8rem;
          border: 1px solid #c2bfbf;
        }

        .search-btn{
          font-size: 0.8rem;
          padding: 7.5px 12.5px;
          margin-left: 5px;
          background-color: #e5e5e5;
          border-radius: 5px;
          font-weight: 400;
          cursor: pointer;
        }
      }

      .resources-container{
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .resource{
          width: 300px;
          height: 180px;
          border-radius: 5px;
          background-color: white;
          border: 1px solid #c2bfbf;
          padding: 10px;
          margin: 10px 10px 0 0;

          .title{
              font-size: 0.85rem;
              font-weight: 500;
              color: #374151;
              cursor: pointer;
              text-decoration: none;
              width: 100%;
              
              &:hover{
                color: cornflowerblue;
                /* transition-duration: 150ms; */
              }
          }


          .short-desc{
            font-size: 0.75rem;
            font-weight: 200;
            letter-spacing: 0.06rem;
          }

          .tags{
              display: flex;
              flex-wrap: wrap;
              margin-top: 10px;

              .main-tag{
                  font-size: 0.7rem;
                  padding: 2.5px 12.5px;
                  border-radius: 100px;
                  background-color: #f3e8ff;
                  color: rgb(107, 33, 168);
                  font-weight: 400;
                  margin: 5px 5px 0 0;
              }

              .tag{
                  font-size: 0.7rem;
                  padding: 2.5px 12.5px;
                  border-radius: 100px;
                  background-color: #eeeeee;
                  font-weight: 300;
                  margin: 5px 5px 0 0;
              }
          }
        }
      }
    }
`

const GapLine = styled.div`
  display: block;
  height: 10px;
`