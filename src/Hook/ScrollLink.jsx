import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const ScrollLink = ({ to, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });

      setTimeout(() => {
        scroller.scrollTo(to, {
          duration: 500,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      }, 100); // Wait for the home page to render
    } else {
      scroller.scrollTo(to, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  };

  return <button onClick={handleClick}>{children}</button>;
};
export default ScrollLink;