import Navbar from "../components/Navbar/Navbar";

function About() {
  return (
    <main className="scroll-px-2 ">
      <Navbar />
      <div className="pt-6">
        <div className=" text-2xl font-bold   bg-blue-400 grid justify-items-center  ">
          Company Background
        </div>
        <div className=" bg-blue-400  text-xl ">
          At ExpressEats Foods, we are passionate about bringing delicious meals
          straight to your doorstep. Founded in 1992, our journey began with a
          simple mission: to revolutionize the way people experience food
          delivery. What started as a small team of food enthusiasts has grown
          into a leading platform connecting hungry customers with their
          favorite local restaurants.
        </div>
      </div>
      <div className=" font-bold text-2xl grid justify-items-center bg-slate-400 ">
        <br></br>
        <br></br>
        Our Mission
        <br></br>
      </div>
      <div className=" bg-slate-400 text-xl">
        Our mission is to make food delivery convenient, reliable, and
        delightful for everyone. We believe that good food has the power to
        bring people together and enrich their lives. Whether you're craving a
        comforting bowl of noodles, a sizzling burger, or a fresh salad, we're
        here to satisfy your cravings with a few taps on your phone.
      </div>
      <div className=" font-bold text-2xl grid justify-items-center bg-red-400">
        <br></br>
        <br></br>
        Our vision
        <br></br>
      </div>
      <div className="bg-red-400 text-xl ">
        At ExpressEats, our vision is to redefine the way people experience food
        delivery. We envision a world where everyone can enjoy delicious,
        high-quality meals anytime, anywhere, with just a few taps on their
        phone.
      </div>
      <div className="  font-bold text-2xl grid justify-items-center  bg-emerald-400">
        <br></br>
        <br></br>
        Our Promise
        <br></br>
      </div>
      <div className="  bg-emerald-400 text-xl">
        At ExpressEats Food, we are committed to delivering more than just food.
        We're dedicated to creating memorable dining experiences that bring joy
        to your day and make every mealtime special. Join us on this delicious
        journey and taste the difference for yourself!
      </div>
    </main>
  );
}

export default About;
