import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Bestsellers from "./components/section/Bestsellers";
import Basketball from "./components/section/card/Basketball";
import Jordan from "./components/section/card/Jordan";
import Kobe from "./components/section/card/Kobe";
import Thenike from "./components/section/card/Thenike";
import Store from "./components/section/Store";

const east = [
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5114175e-1b28-4fb8-b349-77cf4ab26c54/fc-barcelona-2022-23-stadium-home-dri-fit-football-shirt-HFV375.png",
    image2:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ee9a601b-7068-4ab7-afc0-b2081b999e95/fc-barcelona-2022-23-stadium-away-dri-fit-football-shirt-HXMmxb.png",
    image3:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/556dfe6f-76b1-443c-bed6-5dc7ec3d7c0e/fc-barcelona-2022-23-match-home-dri-fit-adv-football-shirt-s0QfG6.png",
    image4:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/127d8c33-7aa8-447e-894a-c0cc6137f9d4/tottenham-hotspur-2022-23-stadium-home-dri-fit-football-shirt-b3nVDN.png",
    image5:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/42927a2d-3173-4198-8593-370a86c91bbf/chelsea-fc-2022-23-stadium-home-dri-fit-football-shirt-7bhbpx.png",
  },
];

function App() {
  return (
    <>
      <Header />
      <Main />
      <Bestsellers />
      {east.map((item) => (
        <Store
          image={item.image}
          image2={item.image2}
          image3={item.image3}
          image4={item.image4}
          image5={item.image5}
        />
      ))}

      <Kobe />
      <Basketball />
      <Jordan />
      <Thenike />
    </>
  );
}

export default App;
