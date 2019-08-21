import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
        <SEO title="Contact"/>
        <div className={"container"}>
            <div className={"content"}>
                <div className={"title"}>
                    <h1>Contact</h1>
                </div>

                <div className={"row"}>
                    <div className={"col-7"}>
                        <p>I really appreciate you taking the time to check out our Project Leo. I hope you enjoy the experience and see the value learning by reading can bring to learning a new language. We are always looking for feedback, suggestions & help. So, please, do not hesitate to contact us.</p>
                    </div>

                    <div className={"col-5"}>
                        <div className={"contact-items"}>
                            <p>Email is the best way to reach me.</p>
                            <h2>adam@ausolution.com</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default ContactPage
