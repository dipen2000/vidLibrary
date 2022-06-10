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
      <div className="flex-col gap-1 mt-1">
        <h2>
          {playlist.title} ({playlist.videos.length})
        </h2>
        {playlist.videos.length === 0 ? (
          <div className="flex-col justify-space-between-flex align-center-flex gap-1">
            <h2>No videos in this playlist</h2>
            <button
              className="curs-point btn-primary"
              onClick={() => navigate("/")}
            >
              Explore
            </button>
          </div>
        ) : (
          <div className="video-listing-grid-container">
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
