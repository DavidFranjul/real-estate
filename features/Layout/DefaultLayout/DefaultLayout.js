import Footer from "@/features/common/modules/Footer";
import Navigation from "@/features/common/modules/Navigation/Components/Navigation";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};
export default DefaultLayout;
