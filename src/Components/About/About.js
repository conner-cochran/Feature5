import { useNavigate } from "react-router-dom"; // useHistory
//when user clicks on About section
export default function About() {
  const history = useNavigate();

  const buttonHandler = () => {
    history("/Main");
  };
  return (
    <section>
      <h1>About Page</h1>
      <p>This is the About section</p>
      <button onClick={buttonHandler}>Home</button>
      <h4>Welcome to Cookbook Helper!</h4>
      <p>
        At Cookbook Helper, we understand that cooking is an art that brings
        people together and creates memorable experiences. Whether you're a
        seasoned chef or a novice in the kitchen, we are here to simplify your
        culinary journey. Our website is dedicated to organizing and providing a
        vast collection of delicious recipes that will inspire and guide you to
        create mouthwatering meals.
      </p>
      <h4>Our Mission:</h4>
      <p>
        Cookbook Helper is on a mission to revolutionize the way you approach
        cooking. We strive to empower home cooks with a comprehensive platform
        that offers a wide range of recipes, cooking tips, and tools to enhance
        your culinary skills. Our goal is to make cooking enjoyable, accessible,
        and stress-free for everyone.
      </p>
      <h4>Discover Endless Recipes:</h4>
      <p>
        Get ready to embark on a culinary adventure with Cookbook Helper! Our
        website features an extensive collection of recipes from various
        cuisines and dietary preferences. From quick and easy weeknight dinners
        to indulgent desserts and everything in between, we've got you covered.
        Explore our diverse recipe categories and find something that tantalizes
        your taste buds.
      </p>
      <h4>Personalized Cooking Experience:</h4>
      <p>
        We believe that every individual has unique tastes and preferences. With
        Cookbook Helper, you can personalize your cooking experience. Create
        your profile, save your favorite recipes, and tailor your recipe
        recommendations based on your dietary needs, allergies, or personal
        preferences. Say goodbye to sifting through irrelevant recipes and focus
        on what truly matters to you.
      </p>
      <h4>Step-by-Step Instructions:</h4>
      <p>
        Cookbook Helper provides detailed, step-by-step instructions for each
        recipe, ensuring that you have all the guidance you need to create
        culinary masterpieces. Our recipes are created and curated by seasoned
        chefs and cooking enthusiasts, ensuring that you receive the best
        culinary advice and tips along the way. We break down complex techniques
        into simple, easy-to-follow steps, so you can become a confident cook in
        no time.
      </p>
      <h4>Interactive Tools and Features:</h4>
      <p>
        To further enhance your cooking experience, Cookbook Helper offers a
        range of interactive tools and features. Convert ingredient
        measurements, set timers for cooking and baking, create shopping lists,
        and even share your own recipes with our vibrant community. We believe
        that cooking is a collaborative journey, and we invite you to be a part
        of our thriving culinary community.
      </p>
      <h4>Join Our Community:</h4>
      <p>
        Cookbook Helper is more than just a recipe database; it's a community of
        passionate food lovers. Connect with like-minded individuals, exchange
        cooking tips and tricks, and share your culinary triumphs with others.
        Our forum allows you to ask questions, seek advice, and engage in
        discussions on all things food-related.
      </p>
      <p>
        Start your culinary adventure with Cookbook Helper today and let us
        guide you towards becoming a confident, creative, and accomplished home
        cook. Together, we'll transform ordinary meals into extraordinary
        experiences.
      </p>
      <br />
      <p>Happy cooking!</p>
      <p>The Cookbook Helper Team</p>
    </section>
  );
}
