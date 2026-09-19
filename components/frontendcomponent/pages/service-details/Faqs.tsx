"use client";
import { useState } from "react";

interface FaqItem {
  id: number;
  title: string;
  desc: string;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    title: "Do I need a doctor's prescription to book?",
    desc: "No prescription is required for the standard panels we offer. If a specific test in the panel requires a prescription in your state, our team will let you know before booking.",
  },
  {
    id: 2,
    title: "Can my partner and I get tested together?",
    desc: "No prescription is required for the standard panels we offer. If a specific test in the panel requires a prescription in your state, our team will let you know before booking.",
  },
  {
    id: 3,
    title: "Where is sample collection available?",
    desc: "No prescription is required for the standard panels we offer. If a specific test in the panel requires a prescription in your state, our team will let you know before booking.",
  },
  {
    id: 4,
    title: "Will I be pushed to buy Fertigen after the test?",
    desc: "No prescription is required for the standard panels we offer. If a specific test in the panel requires a prescription in your state, our team will let you know before booking.",
  },
];

export default function Faqs() {
  const [activeFaq, setActiveFaq] = useState<number>(faqData[0].id);
  return (
    <section>
      <div className="faqs_sec sec-pad-all">
        <div className="container">
          <div className="heading">
            <h3>Frequently Asked Questions</h3>
          </div>
          <div className="main_wrapper">
            {faqData.map((item) => (
              <div
                className={`faq_col ${activeFaq === item.id ? "active" : ""}`}
                onClick={() => setActiveFaq(item.id)}
                key={item.id}
              >
                <div className="faq_title">
                  <h4>{item.title}</h4>
                  <div className="icon"></div>
                </div>
                <article>
                  <div className="faq_details">
                    <p>{item.desc}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
