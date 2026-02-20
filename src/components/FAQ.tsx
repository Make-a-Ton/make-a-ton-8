import { useState } from 'react'
import './FAQ.css'

interface FAQItem {
    question: string
    answer: string
}

const faqs: FAQItem[] = [
    {
        question: "Is registration free?",
        answer: "Yes, registration is free of charge."
    },
    {
        question: "Is this hackathon only for CUSAT students?",
        answer: "No. The event is equally open to all."
    },
    {
        question: "Will I get certificates?",
        answer: "Yes, certificates will be provided to all participants on completion."
    },
    {
        question: "When will prizes and other details be announced?",
        answer: "More details regarding the schedule, sponsors, main prizes and other category awards will be communicated in a mail to the registered candidates."
    },
    {
        question: "I'm a newbie. Is there any point in registering?",
        answer: "Hackathons are a great way for everyone."
    },
    {
        question: "Is there a separate track for hardware projects?",
        answer: "Yes, there is a separate track for hardware projects."
    },
    {
        question: "Is this a team event?",
        answer: "Yes, the registration has to be done as a team of 2-4 hackers ."
    },
    {
        question: "Will I be provided with food and accommodation during the event?",
        answer: "All checked-in participants will be served food. Hackers will also be provided with a dedicated space to rest and refresh."
    },
    {
        question: "What is the theme of the hackathon?",
        answer: "Make-A-Ton is an open hackathon. Unlike other hackathons, we don't stress too much on the marketing side of things. We believe in creating technology that can positively impact the world."
    },
    {
        question: "Are premade products allowed?",
        answer: "No, we all start coding at the same time. It’s cool to work on designs beforehand, digital mockups, open source frameworks, and anything else available to everyone, but keep things within fair limits. The organizers have the right to disqualify any team who violates this rule."
    },
    {
        question: "Do we get any swag?",
        answer: "Yes, of course. Amazing swags are awaiting all the participants that check-in to the event."
    },
    {
        question: "I'm a beginner. Is there any point in registering?",
        answer: "Hackathons are a great way to learn about new technology and make new friends. We strive to have a diverse audience and therefore welcome beginners to register"
    }
    
    

]

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <div className="faq-container">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => toggleFAQ(index)}
                >
                    <div className="faq-question">
                        {faq.question}
                        <span className="faq-toggle">{activeIndex === index ? '−' : '+'}</span>
                    </div>
                    <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
                        <p>{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
