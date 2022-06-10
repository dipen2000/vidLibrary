import { ShoetubeContainer } from "../../components/Wrapper/ShoetubeContainer";
import { useParams } from "react-router-dom";
import { usePlaylist } from "../../context/playlistContext";
import { SinglePlaylistCard } from "../../components/Cards/SinglePlaylistCard/SinglePlaylistCard";
import { ButtonPrimary } from "../../components/Buttons";
import { useNavigate } from "react-router-dom";
import "./SinglePlaylistPage.css";

const SinglePlaylistPage = () => {
  const { playlistId } = useParams();
  const { playlistState } = usePlaylist();
  const navigate = useNavigate();
  const playlist = playlistState.find((video) => video._id === playlistId);
  return (
    <ShoetubeContainer>
      <div className="flex-col bord-3-green">
        <h2>
          {playlist.title} ({playlist.videos.length})
        </h2>
        {playlist.videos.length === 0 ? (
          <div>
            <p>No videos in this playlist</p>
            <ButtonPrimary onClick={() => navigate("/")}>Explore</ButtonPrimary>
          </div>
        ) : (
          <div className="video-listing-grid-container bord-3-green">
            {playlist.videos.map((video) => {
              return <SinglePlaylistCard key={video._id} video={video} />;
            })}
          </div>
        )}
      </div>
    </ShoetubeContainer>
  );
};

export { SinglePlaylistPage };
