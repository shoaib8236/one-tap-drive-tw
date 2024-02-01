import { GiRoundStar } from "react-icons/gi";

const TestimonialCard = () => {
  return (
    <div>
      <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
        <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
            alt="tania andrew"
            className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <h3 className="block font-medium text-gray-700">
                Tania Andrew
              </h3>
              <div className="5 flex items-center gap-1">
                <GiRoundStar  className="text-primary"/>
                <GiRoundStar  className="text-primary"/>
                <GiRoundStar  className="text-primary"/>
                <GiRoundStar  className="text-primary"/>
                <GiRoundStar  className="text-primary"/>
              </div>
            </div>
            <p className="block text-primary font-semibold">
              Frontend Lead @ Google
            </p>
          </div>
        </div>
        <div className="mb-6 p-0">
          <p className="block font-medium">
            "I found solution to all my design needs from Creative Tim. I use
            them as a freelancer in my hobby projects for fun! And its really
            affordable, very humble guys !!!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
