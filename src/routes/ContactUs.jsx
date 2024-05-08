import Navbar from "../components/Navbar/Navbar";

function ContactUs() {
  return (
    <div className="  md:mx-auto  px-4 scroll-m-2 ">
      <Navbar />
      <div className=" text-center  font-bold text-4xl col text-slate-500 hover:text-blue-600 underline p-10">
        Get in Touch
        <br></br>
        <br></br>
      </div>
      <div className=" contain-content left text-2xl  hover:text-blue-700 ">
        Clients only calls from
        <br></br>
        <div className="font-bold">0712345678</div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="text-left text-2xl hover:text-blue-700 ">
        <div className="font-bold ">Data Queries:</div>
        <div className=" text-lime-500">expresseats@kenya.co.ke</div>
      </div>
      <br></br>
      <br></br>
      <div className=" text-right text-2xl  hover:text-blue-700 ">
        Online Support Team
        <br></br>
        <div className=" text-lime-500">Twitter@ExpressEats</div>
        <div className=" text-lime-500">Facebook: @ExpressEats</div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className=" tente-left text-2xl hover:text-blue-700 ">
        Careers and HR
        <br></br>
        Jobs and Internships -upload your CV and apply.
        <br></br>
        General Queries:{" "}
        <div className=" text-lime-500">hr@expresseats.co.ke</div> (All
        applications are processed over email)
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div className="tente-left text-2xl hover:text-blue-700 text-right">
        CEO’s Office Email:
        <div className=" text-lime-500">ceo@expresseats.co.ke</div>
      </div>
      <br></br>
      <br></br>
      <div className="  text-2xl hover:text-blue-700 tetx-right text-right">
        <div className="font-bold">Visit Website:</div>
        <div className="text-lime-500 ">www.ExpressEatsufoods.com</div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className=" text-2xl hover:text-blue-700 tetx-right text-center">
        ExpressEats Foods
        <br></br>
        P.O Box 0,
        <br></br>
        00800 Nairobi
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default ContactUs;

