import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/hero.png";
import thumbnailEvent from "../../static/images/feature-event.png"
import thumbnailBoard from "../../static/images/feature-board.png"
import thumbnailNews from "../../static/images/feature-news.png"
import thumbnailTeams from "../../static/images/feature-team.png"
import thumbnailStaff from "../../static/images/feature-user.png"
import thumbnailVideo from "../../static/videos/demo.mp4"

const IndexPage = () => (
    <Layout>
        <SEO title="Language Learning App"/>

        <div className={"page-header home"}>
            <h1 style={{margin: 0}}>I read</h1>
            <h1 style={{margin: 0}}>Leo</h1>
            <div style={{marginTop: 30}}>
                <p>Add color to the way you learn.<br/>Agrega color a la forma en que aprende.</p>
            </div>
            {/* <div style={{margin: 50, marginBottom: -50, textAlign: "center"}}>
                <iframe src="https://appetize.io/embed/<PUBLIC_KEY>?device=iphonex&scale=75&autoplay=false&orientation=portrait&deviceColor=black" width="378px" height="800px" frameborder="0" scrolling="no" style={{display: "inline-block"}}></iframe>
            </div> */}
            <video width="960" height="720" autoPlay>
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
                                <p>Don't just learn a language. Enjoy learning a language by reading a thrilling novel or a must read classic.</p>
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
                                <h2>It's a three step process:</h2>
                                <ol>
                                    <li>1. Learn Words & Grammar, naturally.</li>
                                    <li>2. Learn Pronounciation & the skill of Listening with podcasts, movies & music.</li>
                                    <li>3. Finally, go converse!</li>
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
                <div className={"call-to-action__content"}>
                    <h2>Stay Tuned to Leo</h2>
                    <p>Stay up to date with our journey, things we've learned along the way & learning a new language.</p>
                    {/* <p>People say that the best way to learn a new language is to fully immerse yourself. We think this is the next best thing.</p> */}
                </div>

                <div className={"button"}>
                    <a href="https://forms.gle/mB36oNHirz7w2G6T8" target={"_blank"}>Stay tuned</a>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
