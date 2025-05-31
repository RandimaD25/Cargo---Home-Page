import React from "react";
import TestimonialsComponent from "../components/TestimonialsComponent";

const TestimonialsSection = () => {
  return (
    <div className="testimonials">
      <div>
        <h2>TRUSTED CLIENTS</h2>
        <p className="feedback-heading">Lorem ipsum dolor sit amet.</p>

        <div className="feedback">
          <div className="feedback-quote">
            <p>""</p>
          </div>
          <div className="feedback-triangle">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              aspernatur obcaecati nostrum voluptatum dolores odit facilis
              asperiores corporis voluptates eligendi et magni consequuntur, ab
              veritatis inventore voluptate vitae expedita exercitationem
              tempora consequatur a distinctio ducimus odio earum. Minima,
              repellat aspernatur!
            </p>
          </div>
        </div>

        <p className="feedback-name">JOHN DOE</p>
        <p className="feedback-position">Managing Director</p>
      </div>

      <div>
        <h2>WHY CHOOSE US</h2>
        <p className="feedback-heading why-choose-us">
          Lorem ipsum dolor sit amet.
        </p>
        <TestimonialsComponent text="Ipsum dolor sit amet consectetur adipisicing elit." />
        <TestimonialsComponent text="Lorem ipsum dolor consectetur adipisicing elit." />

        <TestimonialsComponent text="Rem ipsum dolor sit amet consectetur elit." />

        <TestimonialsComponent text="Orem ipsum dolor sit amet consectetur adipisicing." />
        <hr />
      </div>
    </div>
  );
};

export default TestimonialsSection;
