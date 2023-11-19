import { useState, useEffect } from "react";

const parseTestimonials = (mdContent) => {
  const lines = mdContent.split("\n");
  const testimonials = [];
  let currentTestimonial = null;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith("## ")) {
      if (currentTestimonial) {
        testimonials.push(currentTestimonial);
      }

      currentTestimonial = {
        name: lines[i].replace("## ", "").trim(),
        title: lines[i + 1].trim(),
        stars: parseFloat(lines[i + 2], 10),
        review: [],
      };

      i += 2;
    } else if (lines[i].startsWith("-") && currentTestimonial) {
      currentTestimonial.review.push(lines[i].replace(/^- /, "").trim());
    } else if (lines[i].trim() === "" && currentTestimonial) {
      testimonials.push(currentTestimonial);
      currentTestimonial = null; // Reset the current testimonial
    }
  }

  if (currentTestimonial) {
    testimonials.push(currentTestimonial);
  }

  testimonials.forEach((testimonial) => {
    testimonial.review = testimonial.review.join("\n").trim();
  });

  return testimonials;
};

const TestimonialsArray = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/content/Testimonials.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch markdown content");
        }
        return response.text();
      })
      .then((mdContent) => {
        setTestimonials(parseTestimonials(mdContent));
        console.log(parseTestimonials(mdContent));
      })
      .catch((error) => {
        console.error("Error fetching markdown content:", error);
      });
  }, []);

  return testimonials;
};

export default TestimonialsArray;
