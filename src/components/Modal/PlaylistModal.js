import { useState } from "react";
import { usePlaylistModal } from "../../contexts/PlaylistModalContext";
import { useVideoState } from "../../contexts/videoStateContext";
import { addToPlaylist } from "../../services/playlist/addToPlaylist";
import { removeFromPlaylist } from "../../services/playlist/removeFromPlaylist";
import { createPlaylist } from "../../services/playlist/createPlaylist";
import { inPlaylist } from "../../utils/videoUtil";

const PlaylistModal = () => {
  const {
    videoState: { playLists },
    videoStateDispatch,
  } = useVideoState();
  console.log("in the modal");
  const { setDisplayModal, video, setVideo } = usePlaylistModal();
  const [showCreatePlaylistForm, setShowCreatePlaylistForm] = useState(
    video ? false : true
  );

  const [playlist, setPlaylist] = useState({
    title: "Playlist-title",
    desc: "desc",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCreatePlaylistForm(false);
    createPlaylist({
      video,
      playlist,
      videoStateDispatch,
    });
    setPlaylist({ title: "Playlist-title", desc: "desc" });
    setDisplayModal(false);
    setVideo(undefined);
  };

  const handleOnChange = (isVideoInPlaylist, _id) => {
    if (isVideoInPlaylist) {
      removeFromPlaylist({
        playlistId: _id,
        videoId: video._id,
        videoStateDispatch,
      });
    } else
      addToPlaylist({
        video,
        playlistId: _id,
        videoStateDispatch,
      });
  };

  return (
    <section className="flex-col modal-section-overlay">
      <button>x</button>
      <div className="flex-col">
        <h3>Playlist</h3>
        <div className="flex-col">
          {video &&
            playLists.map((playlist) => {
              const { _id, title } = playlist;
              const isVideoInPlaylist = inPlaylist({
                _id: video._id,
                playlist,
              });

              return (
                <label key={_id}>
                  <input
                    type="checkbox"
                    checked={isVideoInPlaylist}
                    onChange={() => {
                      handleOnChange(isVideoInPlaylist, _id);
                    }}
                  />
                  <span>{title}</span>
                </label>
              );
            })}
        </div>
        {showCreatePlaylistForm ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="title"
              value={playlist.title}
              onChange={(e) =>
                setPlaylist({ ...playlist, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="desc"
              value={playlist.desc}
              onChange={(e) =>
                setPlaylist({ ...playlist, desc: e.target.value })
              }
            />
            <button>Create playlist</button>
          </form>
        ) : (
          <button onClick={() => setShowCreatePlaylistForm(true)}>
            Add a new playlist
          </button>
        )}
      </div>
    </section>
  );
};

export { PlaylistModal };
