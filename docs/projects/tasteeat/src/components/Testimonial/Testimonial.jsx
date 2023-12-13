import Title from "../Title/Title";
import TestimonialItem from "./TestimonialItem/TestimonialItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselProps } from "../../settings/carousel";
import { testimonials } from "../../data/testimonials";
import styles from "./Testimonial.module.scss";

const title = "our clients say";
const description =
  "We love to hear from customers, so please leave a comment or say hello in an email.";

const Testimonial = () => {
  return (
    <section>
      <div className="Container">
        <div className={styles.Wrapper}>
          <Title title="Testimonial" />
          <h2>{title}</h2>
          <p>{description}</p>
          <div className={styles.Carousel}>
            <Carousel {...carouselProps}>
              {testimonials.map((item, index) => {
                return (
                  <TestimonialItem
                    title={item.title}
                    img={item.img}
                    location={item.location}
                    description={item.description}
                    key={index}
                  />
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
