import React, { useState } from 'react';
import styles from '../style/Testimonials.module.css';
import test1 from '../image/test1.png';
import test2 from '../image/test2.png';
import test3 from '../image/test3.png';
import test4 from '../image/test4.png';
import test5 from '../image/test5.png';

const testimonials = [
  {
    name: 'B. Sharmila',
    image: test1,
    text: "Devlabs has been a game-changer for finding the perfect tools for my projects. The vast selection and ease of use make it my go-to resource.",
  },
  {
    name: 'Prem Sampath',
    image: test2,
    text: "Thanks to Devlabs, I've discovered so many free tools that I didn't know existed. It's an invaluable resource for any developer.",
  },
  {
    name: 'Aron Loes',
    image: test3,
    text: "The open-source community behind Devlabs has done an incredible job. It's my first stop when I need to find a tool quickly.",
  },
  {
    name: 'Shaheen',
    image: test4,
    text: "Devlabs makes finding helpful tools effortless. The interface is user-friendly, and the recommendations are spot on.",
  },
  {
    name: 'Naga Laxmi',
    image: test5,
    text: "I love how Devlabs brings together the best free tools in one place. It's a must-have for anyone in tech.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prevCurrent) => (prevCurrent + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prevCurrent) => (prevCurrent - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visibleTestimonials = [];
    for (let i = 0; i < 3; i++) {
      visibleTestimonials.push(testimonials[(current + i) % testimonials.length]);
    }
    return visibleTestimonials;
  };

  return (
    <div className={styles.testimonials}>
      <h2 className={`${styles.h2} ${styles.sectionTitle}`}>Testimonials</h2>
      <p className={styles.sectionSubtitle}>Know what our Users say</p>

      <div className={styles.testimonialsContainer}>
        {getVisibleTestimonials().map((testimonial, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <img src={testimonial.image} alt={testimonial.name} className={styles.cardImg} />
                <h3>{testimonial.name}</h3>
              </div>
              <div className={styles.cardBack}>
                <p>" {testimonial.text} "</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className={`${styles.arrow} ${styles.left}`} onClick={prevSlide}>
        &#9664;
      </button>
      <button className={`${styles.arrow} ${styles.right}`} onClick={nextSlide}>
        &#9654;
      </button>
    </div>
  );
};

export default Testimonials;
