import "./Home.css";
import { ShoetubeContainer } from "../../components/Wrapper/ShoetubeContainer";
import { Chip } from "../../components/Chip/Chip";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { VideoCard } from "../../components/Cards/VideoCard/VideoCard";
import { useCategory } from "../../context/categoryContext";
import { useVideos } from "../../context/videoContext";
import { getFinalData } from "../../utils/videos/getFinalData";
import { useState } from "react";
import { usePlaylist } from "../../context/playlistContext";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const { categoryState, selectedCategory, setSelectedCategory } =
    useCategory();
  const { videoState } = useVideos();

  const finalData = getFinalData(videoState, selectedCategory, searchInput);

  return (
    <ShoetubeContainer>
      <div className="flex-col">
        <div className="chip-section flex-row align-center-flex gap-1">
          <Chip
            style={{
              backgroundColor: selectedCategory === "All" ? "black" : "",
              color: selectedCategory === "All" ? "white" : "black",
            }}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </Chip>
          {categoryState.map((category) => {
            return (
              <Chip
                key={category._id}
                style={{
                  backgroundColor:
                    selectedCategory === category.categoryName ? "black" : "",
                  color:
                    selectedCategory === category.categoryName
                      ? "white"
                      : "black",
                }}
                onClick={() => setSelectedCategory(category.categoryName)}
              >
                {category.categoryName}
              </Chip>
            );
          })}
        </div>
        <div className="searchbar-section bord-3-black">
          <SearchBar
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
        </div>
        <div className="flex-col video-listing-section">
          <h2>Videos ({finalData.length})</h2>
          {finalData.length === 0 ? (
            <p>The item of your preference is not available.</p>
          ) : (
            <div className="video-listing-grid-container">
              {finalData.map((video) => {
                return <VideoCard key={video._id} video={video} />;
              })}
            </div>
          )}
        </div>
      </div>
    </ShoetubeContainer>
  );
};

export { Home };
