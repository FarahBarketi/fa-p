

import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/esm/Button';
import { FaShoppingCart } from 'react-icons/fa';

const LandingPage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return <div className='home' >
    <section>
    <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/group-portrait-adorable-puppies_53876-64778.jpg?w=2000"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.telegraph.co.uk/content/dam/news/2022/04/29/0422_DOGS_LEAD_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.forbes.com/advisor/wp-content/uploads/2021/03/dog-group.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="intro">
        <div className="title">
          <h1>
          Животни is the best website to sell / buy Pets and their
            Supplies!
          </h1>
        

<button class="button-53" role="button">Buy</button>



        </div>
        <div className="para-container">
          <h2>What Should you Pay Attention to When Looking for a Pet?</h2>
          <p>
            Are you looking for pets for sale? For many people, having their own
            pet is a heartfelt desire and often fulfilling a long-term dream.
            But should everyone really get a pet? Which pets are suitable for
            whom and what should be considered beforehand? Or how can I locate
            pets for sale near me? Buying a pet has to be well thought out.
            Hundreds of thousands of animals sell are because their owners can
            no longer or do not want to look after them. That is why it is so
            important to look closely at certain factors before purchasing a
            pet.
          </p>
          <h2>Cost of Pet</h2>
          <p>
            The question of the pet’s cost is critical. Suppose the potential
            pet owner may want to look for high-cost pets for sale near me or
            cheap puppies for sale near me. It is vital to check your own budget
            and offset the costs carefully.
          </p>
          <h2>Affection and Attention for the Pet</h2>
          <p>
            Before finalizing the sale pet contract, another essential point is
            whether the new pet owner can offer the pet attention and care. At
            best, they should be treated like family members. This involves
            feeding, basic care, games, etc.
          </p>
          <h2>Pets and Children</h2>
          <p>
            In principle, almost all pets are to be kept in a household with
            children, but concerns are appropriate for potentially dangerous
            animal species. Since children also want to play with the animals,
            free-running animals such as cats or dogs are generally very
            suitable. It is also important to make it clear to the children that
            pets are not cuddly toys. They must understand and respect the
            animals and their needs!
          </p>
        </div>
      </div>
      <div className="mission">
        <h2>Our Mission</h2>
        <p>
          To be the most trusted and convenient destination for pet parents (and
          partners), everywhere.
        </p>
        <h2>Our Values</h2>
        <h3>We work hard, and we win.</h3>
        <p>
          At Животни, we strive to deliver the best products with the best
          service – and we want to become even better. Happy customers are
          always our #1 priority, and our team members are passionate about
          finding new ways to wow both pet owners and the industry at large.
        </p>
      </div>
</section>

<footer>  copy right ©2022</footer>
  </div>;
};

export default LandingPage;