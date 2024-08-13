import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "What is the maximum weight that the adjustable table can carry?",
      answer:
        "Single-motor electric tables can carry less weight compared to the two-motor models. The Sun model single-motor table can carry a maximum of 80 kg including the plate, while the S2 model two-motor table can carry up to 120 kg.",
    },
    {
      question: "Why do I need an ergonomic desk?",
      answer:
        "Nowadays in the digital world in which we live most of the hours of the day we are chained in our chair in the sitting position. Our bodies are not meant to sit for so many hours during the day but rather to be dynamic and in motion. Sitting a lot can cause long-term medical problems, so it is recommended to use an adjustable table in order to change positions during the day and thus free yourself from the sitting position.",
    },
    {
      question:
        "What is the difference between a single-motor electric table and a two-motor electric table?",
      answer:
        "In general, the answer is that they are both electric adjustable tables and both will do the purpose for which they were intended - to raise and lower the table. But the differences between them are expressed in parameters such as: the maximum weight that the table can carry, the speed of movement up and down, the noise that the table produces when moving. The range of movement up and down will be greater in an adjustable two-motor table. And the two-motor table will be more stable in general.",
    },
    {
      question: "In what sizes can the adjustable table be obtained?",
      answer:
        "The possible sizes are 120*60, 140*70, 160*80. You can also get a customized size for an additional fee. For large plates, it is better to purchase an electric table model S2 with two motors so that it can carry the weight.",
    },
    {
      question: "What is an adjustable pneumatic table?",
      answer:
        "Unlike electric computer desks, a pneumatic desk is a desk that is manually adjusted without running a motor. We think this possibility is impractical, because manually adjusting the table becomes an overly complicated operation compared to pressing an electric mechanism and then simply makes us not use the function of raising and lowering the table. Therefore, we only market electric tables.",
    },
  ];

  const toggleFAQ = (index) => {
    console.log("test_index:", index);

    debugger;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span className="faq-question-text">{faq.question}</span>
                <span className="faq-icon">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
