// Function to generate FAQPage schema
function generateFAQSchema() {
  const questions = document.querySelectorAll(".schema-faq-question, .faq");



  const faqItems = [];

  questions.forEach((question) => {

    console.log(question.tagName);
    let qText, answerText;

    if (question.tagName === 'STRONG') {
      qText = question.textContent.trim();

      console.log(question.nextElementSibling);
      answerText = question.nextElementSibling

        .textContent.trim();
    } else if (question.classList.contains("schema-faq-question")) {
      qText = question.querySelector("schema-faq-question").textContent.trim();
      answerText = question.querySelector(".schema-faq-answer").textContent.trim();
    }

    const faqItem = {
      "@type": "Question",
      "name": qText,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": answerText
      }
    };

    faqItems.push(faqItem);


  });

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems
  };

  return JSON.stringify(faqPageSchema);
}

// Append the generated schema to the <head> section
function appendSchemaToHead() {
  const jsonLDData = generateFAQSchema();

  if (jsonLDData && JSON.parse(jsonLDData).mainEntity.length > 0) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = jsonLDData;

    document.head.appendChild(script);
  } else {
    console.log("No FAQs found. Schema not appended.");
  }
}

appendSchemaToHead();
