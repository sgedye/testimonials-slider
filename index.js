const testimonialsData = [
  {
    id: 0,
    imgSrc: './assets/images/image-tanya.jpg',
    quoteText: `" I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. "`,
    quoteAuthor: 'Tanya Sinclair',
    quoteJobTitle: 'UX Engineer',
  },
  {
    id: 1,
    imgSrc: './assets/images/image-john.jpg',
    quoteText: `" If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. "`,
    quoteAuthor: 'John Tarkpor',
    quoteJobTitle: 'Junior Front-end Developer',
  }
];

let testimonialId = 0;
const leftArrow = document.getElementById('arrow-left');
const rightArrow = document.getElementById('arrow-right');
// Only two images so just have to swap the image and quotes.
leftArrow.addEventListener("click", () => changeImage());
rightArrow.addEventListener("click", () => changeImage());

const changeImage = () => {
  const image = document.getElementById('image');
  const quoteText = document.getElementById('quote');
  const quoteAuthor = document.getElementById('quote-author');
  const quoteJobTitle = document.getElementById('quote-job-title');
  if (testimonialId === 0) {
    image.attributes[2].value = testimonialsData[1].imgSrc;
    quoteText.textContent = testimonialsData[1].quoteText;
    quoteAuthor.textContent = testimonialsData[1].quoteAuthor;
    quoteJobTitle.textContent = testimonialsData[1].quoteJobTitle;
    testimonialId = 1;
  } else {
    image.attributes[2].value = testimonialsData[0].imgSrc;
    quoteText.textContent = testimonialsData[0].quoteText;
    quoteAuthor.textContent = testimonialsData[0].quoteAuthor;
    quoteJobTitle.textContent = testimonialsData[0].quoteJobTitle;
    testimonialId = 0;
  }
}
