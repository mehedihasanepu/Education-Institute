document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const questionButton = item.querySelector(".faq-question");
    const answerDiv = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    questionButton.addEventListener("click", () => {
      const isExpanded =
        questionButton.getAttribute("aria-expanded") === "true";

      // Toggle answer visibility
      answerDiv.classList.toggle("hidden");
      questionButton.setAttribute("aria-expanded", !isExpanded);

      // Rotate icon
      if (isExpanded) {
        icon.classList.remove("rotate-180");
      } else {
        icon.classList.add("rotate-180");
      }
    });
  });
});
