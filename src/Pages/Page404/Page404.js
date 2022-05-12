import "./Page404.css";
import { ShoetubeContainer } from "../../components/Wrapper/ShoetubeContainer";
const Page404 = () => {
  return (
    <ShoetubeContainer>
      <div className="flex-col container-404 gap-1 bord-3-green align-center-flex justify-center-flex">
        <h2>Whoops! something went wrong, page not found</h2>
        <h3>Status : 404</h3>
        <h1>🙄</h1>
      </div>
    </ShoetubeContainer>
  );
};

export { Page404 };
