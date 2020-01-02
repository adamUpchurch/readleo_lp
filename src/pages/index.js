import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BasicForm from "../components/basicForm"
import featureImage from "../../static/images/hero.png";
import thumbnailBook from "../../static/images/ReadLeoBook.png"
import thumbnailWizard from "../../static/images/wordWizard.png"
import thumbnailSalsa from "../../static/images/salsa.png"
import thumbnailBoard from "../../static/images/feature-board.png"
import thumbnailNews from "../../static/images/feature-news.png"
import thumbnailTeams from "../../static/images/feature-team.png"
import thumbnailStaff from "../../static/images/feature-user.png"
import thumbnailVideo from "../../static/videos/demo.mp4"
import iconTwitter from "../../static/images/icon-twitter.svg"



class IndexPage extends React.Component {

    render() {
        return (
            <Layout>
                <SEO title="Language Learning App"/>

                <div className={"page-header home"}>
                    <h1 style={{margin: 0}}>I read</h1>
                    <h1 style={{margin: 0}}>Leo</h1>
                    <div style={{marginTop: 30}}>
                        <p>Learn to read a new language like this.<br/>Aprende a leer un nuevo idioma como esto.</p>
                    </div>
                    {/* <div style={{margin: 50, marginBottom: -50, textAlign: "center"}}>
                        <iframe src="https://appetize.io/embed/<PUBLIC_KEY>?device=iphonex&scale=75&autoplay=false&orientation=portrait&deviceColor=black" width="378px" height="800px" frameborder="0" scrolling="no" style={{display: "inline-block"}}></iframe>
                    </div> */}
                    <video width="100%" height="auto" autoPlay controls>
                        <source src={thumbnailVideo} type="video/mp4" />
                    </video>
                </div>

                <div className={"container"}>
                    <div className={"features"}>
                        <div className={"feature__item"}>
                            <div className={"row"}>
                                <div className={"col-6 first"}>
                                    <div className={"thumbnail"}>
                                        <img alt={"Event"} src={thumbnailBook}/>
                                    </div>
                                </div>
                                <div className={"col-6"}>
                                    <div className={"feature__content"}>
                                        <h2>Read your favorite stories</h2>
                                        <p>Don't just learn a language. Enjoy learning a language by reading a thrilling novel or a must read classic. Read your favorite novels line by line in your native language and the language you're learning.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"feature__item"}>
                            <div className={"row"}>
                                <div className={"col-6"}>
                                    <div className={"feature__content"}>
                                        <h2>Learn more words, faster.</h2>
                                        <p>The Hobbit by JRR Tolkien has 96,072 words,<br/>with 6,911 unique words. You'll be a Word Wizard in no time!</p>
                                    </div>
                                </div>

                                <div className={"col-6 first"}>
                                    <div className={"thumbnail"}>
                                        <img alt={"Board"} src={thumbnailWizard}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"feature__item"}>
                            <div className={"row"}>
                                <div className={"col-6 first"}>
                                    <div className={"thumbnail"}>
                                        <img alt={"News"} src={thumbnailSalsa}/>
                                    </div>
                                </div>

                                <div className={"col-6"}>
                                    <div className={"feature__content"}>
                                        <h2>Embrace the culture!</h2>
                                        <ol>
                                            <li>Read Leo is just one tool for learning spanish. There are so many ways to learn.</li>
                                            <li>Use DuoLingo for a little variety, find a penpal, watch Spanish Netflix, Youtube or Twitch.</li>
                                            <li>But most importantly, go live the life! Take salsa dancing, cook Spanish & Latin food, travel or even live in a Spanish speakign country!</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className={"feature__item"}>
                            <div className={"row"}>
                                <div className={"col-6"}>
                                    <div className={"feature__content"}>
                                        <h2>It's a three step process:</h2>
                                        <p>learn words & grammar <br/>learn how to pronounciate & listen<br/>Go converse! </p>
                                    </div>
                                </div>

                                <div className={"col-6 first"}>
                                    <div className={"thumbnail"}>
                                        <img alt={"Team"} src={thumbnailTeams}/>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className={"feature__item"}>
                            <div className={"row"}>
                                <div className={"col-6 first"}>
                                    <div className={"thumbnail"}>
                                        <img alt={"Users"} src={thumbnailStaff}/>
                                    </div>
                                </div>

                                <div className={"col-6"}>
                                    <div className={"feature__content"}>
                                        <h2>Staff management</h2>
                                        <p>Discard traditional ways to archive staff documents and information, and try new ways to store and archive them in HiStaff easily.</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className={"call-to-action"} id="download_beta">
                    <iframe src="https://cdn.forms-content.sg-form.com/e15ac4da-e007-11e9-b3ab-569bf7c2727d"/>
                    {/* z</div> */}
                </div>
            </Layout>
        )}
    }

export default IndexPage
