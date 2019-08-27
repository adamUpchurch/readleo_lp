import React from "react"

import Layout from "../components/layout"
import Calendly from "../components/calendly"
import SEO from "../components/seo"

const BetaPage = () => (
    <Layout>
        <SEO title="Contact"/>
        <div className={"container"}>
            <div className={"content"}>
                <div className={"title"}>
                    <h1>Beta</h1>
                </div>

                <div className={"row"}>
                    <div className={"col-7"}>
                        <p>I really appreciate you taking the time to download the Leo Beta. I hope you enjoy the experience. We have quite a lot of work to do until we can deliver the true experience we want you to have.</p>
                        <br/>
                        <p>If you'd like to contribute, we are looking for people willing to chat for about 15 minutes about your experience & goals with learning a new language. Just click the button "Let's Chat" to find some time on our calendar.</p>
                        <br/>
                        <div className={"call-to-action"}>
                            <div className={"container"}>
                                <div className={"button"}>
                                    <a href="https://calendly.com/readleo/chat" target={"_blank"}>Let's chat</a>
                                </div>
                                <div className={"button"}>
                                    <a href={"https://testflight.apple.com/join/kw2whfjH"} target="_blank">Download iOS Beta</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default BetaPage