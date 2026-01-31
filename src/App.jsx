function App() {
  return (
    <>
      <Jumbotron />
      <Cards />
      <FAQ />
    </>
  );
}

function Jumbotron() {
  return (
    <div className="text-white bg-[#242D56] text-center h-[50vh] pt-20">
      <h1 className="text-5xl">Simple Pricing!</h1>
      <p className="mt-10 w-1/2 mx-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        ipsa alias illum modi! In libero tempora reiciendis, praesentium debitis
        aspernatur!
      </p>
    </div>
  );
}

function FAQ() {
  return (
    <div className="p-5">
      <h2 className="text-center mb-10 mt-11 text-xl">
        Frequently Asked Question
      </h2>
      <div className="text-justify *:w-md *:p-4 flex justify-center [&_h4]:font-bold">
        <div>
          <h4>How Does Free Trial Works?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            repudiandae unde cum, maiores, saepe ipsam aperiam voluptatibus,
            illum nesciunt reprehenderit ex delectus! Provident, facere dolorem
            ad aspernatur sit illo similique.
          </p>
        </div>
        <div>
          <h4>Can I Cancel Anytime?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            delectus quidem, non nisi unde totam facere velit consectetur sunt
            nobis recusandae cupiditate dolorum saepe, aut eveniet aperiam!
            Voluptates, alias totam.
          </p>
        </div>
      </div>
    </div>
  );
}

// need refactor
function Cards() {
  return (
    <div className="flex justify-center *:ml-3 -mt-40 [&_h5]:p-2 [&_h5]:text-white [&_h5]:pl-7 [&_button]:w-1/2 *:shadow-xl/50 *:bg-white *:hover:scale-105 *:hover:cursor-pointer">
      <div
        onClick={() => {
          alert("Basic Card is Selected");
        }}
        className="w-[15vw]"
      >
        <div>
          <h5 className="bg-[#3C4252]">BASIC</h5>
        </div>
        <div className="p-10 *:mt-3 flex flex-col [&_button]:mx-auto">
          <p>
            <span className="relative -top-7">$</span>
            <span className="text-5xl">4</span>/month
          </p>
          <hr />
          <ul>
            <li>10 Projects</li>
            <li>10 Pages</li>
            <li>100 Mb Disk Space</li>
          </ul>
          <button
            onClick={(e) => {
              e.stopPropagation();
              alert("Success");
            }}
            className="border p-1 rounded bg-blue-500 text-white hover:cursor-pointer"
          >
            Buy Now
          </button>
        </div>
      </div>

      <div
        onClick={() => {
          alert("Standard Card is Selected");
        }}
        className="w-[15vw]"
      >
        <div>
          <h5 className="bg-[#3C4252]">
            STANDARD <span className="pl-20 text-xs">save 15%</span>
          </h5>
        </div>
        <div className="p-10 *:mt-3 flex flex-col [&_button]:mx-auto">
          <p>
            <span className="relative -top-7">$</span>
            <span className="text-5xl">8</span>/month
          </p>
          <hr />
          <ul>
            <li>20 Projects</li>
            <li>20 Pages</li>
            <li>200 Mb Disk Space</li>
          </ul>
          <button
            onClick={(e) => {
              e.stopPropagation();
              alert("Success");
            }}
            className="border p-1 rounded bg-blue-500 text-white hover:cursor-pointer"
          >
            Buy Now
          </button>
        </div>
      </div>

      <div
        onClick={() => {
          alert("Advanced Card is Selected");
        }}
        className="w-[15vw]"
      >
        <div>
          <h5 className="bg-[#3C4252] ">ADVANCED</h5>
        </div>
        <div className="p-10 *:mt-3 flex flex-col [&_button]:mx-auto">
          <p>
            <span className="relative -top-7">$</span>
            <span className="text-5xl">12</span>/month
          </p>
          <hr />
          <ul>
            <li>40 Projects</li>
            <li>40 Pages</li>
            <li>500 Mb Disk Space</li>
          </ul>
          <button
            onClick={(e) => {
              e.stopPropagation();
              alert("Success");
            }}
            className="border p-1 rounded bg-blue-500 text-white hover:cursor-pointer"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
