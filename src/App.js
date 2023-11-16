import { TypeAnimation } from "react-type-animation";
import { useSpring, animated } from "react-spring";
import BezierEasing from "bezier-easing";

const customCubicBezier = BezierEasing(0.11, 0.33, 0.59, 0.95);

const ExampleComponent = () => {
  const movingImage = useSpring({
    from: { transform: "translateY(0px)" },
    to: async (next) => {
      while (true) {
        await next({
          transform: "translateY(-20px)",
          config: {
            duration: 800,
            easing: customCubicBezier,
          },
        });
        await new Promise((resolve) => setTimeout(resolve, 200));
        await next({
          transform: "translateY(0px)",
          config: {
            duration: 800,
            easing: customCubicBezier,
          },
        });
        await new Promise((resolve) => setTimeout(resolve, 200));
      }
    },
  });

  return (
    <div className="bg-secondColor">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center mt-20 items-center">
          <div className="flex items-center">
            <h2 className="mr-4 font-poppins font-semibold text-white text-[50px]">
              Anda
            </h2>
            <h2>
              <TypeAnimation
                sequence={["Sibuk?", 2500, "Mager?", 2500, "Lelah?", 2500]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "50px",
                  fontFamily: "poppins",
                  color: "white",
                }}
                repeat={Infinity}
              />
            </h2>
          </div>
          <p className="text-white text-center mt-4 px-4">
            <span>Tenang, kami ada! Dengan </span>
            <span className="text-accentColor font-bold border-b-2 border-accentColor">
              Barbercome
            </span>
            <span>
              , anda tidak perlu repot-repot lagi untuk ke barbershop, kami yang
              akan datang ke anda!
            </span>
          </p>
        </div>
        <div>
          <animated.img
            style={movingImage}
            src="https://black_hole-3kf-1-x7270168.deta.app/api/photo/79615p9c2d3v.png"
            alt=""
            className="h-[900px] ml-40"
          />
        </div>
      </div>
    </div>
  );
};

export default ExampleComponent;
