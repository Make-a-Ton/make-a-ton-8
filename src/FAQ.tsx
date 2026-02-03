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
