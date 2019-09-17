import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BasicForm from "../components/BasicForm"
import featureImage from "../../static/images/hero.png";
import thumbnailEvent from "../../static/images/feature-event.png"
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
                                {/* <div className={"col-6 first"}>
                                    <div className={"thumbnail"}>
                                        <img alt={"Event"} src={thumbnailEvent}/>
                                    </div>
                                </div> */}
                                <div className={"col-12"}>
                                    <div className={"feature__content"}>
                                        <h2>Read your favorite stories</h2>
                                        <p>Don't just learn a language. Enjoy learning a language by reading a thrilling novel or a must read classic. Read your favorite novels line by line in your native language and the language you're learning.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"feature__item"}>
                            <div className={"row"}>
                                <div className={"col-12"}>
                                    <div className={"feature__content"}>
                                        <h2>Learn more words, faster.</h2>
                                        <p>The Hobbit by JRR Tolkien has 96,072 words,<br/>with 6,911 unique words. You'll never get that kind of exposure with other learning apps.</p>
                                    </div>
                                </div>

                                {/* <div className={"col-6 first"}>
                                    <div className={"thumbnail"}>
                                        <img alt={"Board"} src={thumbnailBoard}/>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className={"feature__item"}>
                            <div className={"row"}>
                                {/* <div className={"col-6 first"}>
                                    <div className={"thumbnail"}>
                                        <img alt={"News"} src={thumbnailNews}/>
                                    </div>
                                </div> */}

                                <div className={"col-12"}>
                                    <div className={"feature__content"}>
                                        <h2>Leo is just a step in the language learning process.</h2>
                                        <ol>
                                            <li>First, go learn the vocabulary & grammar, naturally.</li>
                                            <li>Then learn pronunciation & the skill of listening with podcasts, movies & music.</li>
                                            <li>Throughout the journey, go converse! Text some friends without google translate, order food at restaurant or visit a country that natively speaks the language you're learning.</li>
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

                <div className={"call-to-action"}>
                    <div className={"container"}>
                        <div id={"download_beta"} className={"call-to-action__content"}>
                            <h2>Download the iOS Beta</h2>
                            <p>I will send you a link from goreadleo@gmail.com to go a 'testflight.apple.com' website. Just follow the instructions. Also, if you don't mind, I'll keep you up to date on our journey with periodic emails.</p>
                            {/* <div className={"widget__item"} style={{display:'inline-block'}}>
                                <div className={"social"}>
                                    <p>And follow us on twitter</p>
                                    <a href="https://twitter.com/goreadleo" target={"_blank"} title={"Twitter"}><img alt={"Twitter"} src={iconTwitter}/></a>
                                </div>
                            </div> */}
                        </div>
                        <BasicForm />
                    </div>
                </div>
            </Layout>
        )}
    }

export default IndexPage
