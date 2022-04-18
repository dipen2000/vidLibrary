import { useState } from "react";
import { usePlaylistModal } from "../../contexts/PlaylistModalContext";
import { useVideoState } from "../../contexts/videoStateContext";
import { addToPlaylist } from "../../services/playlist/addToPlaylist";
import { removeFromPlaylist } from "../../services/playlist/removeFromPlaylist";
import { createPlaylist } from "../../services/playlist/createPlaylist";
import { inPlaylist } from "../../utils/videoUtil";
import "./PlaylistModal.css";
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
      <div className="flex-col modal-container">
        <div className="flex-row align-center-flex">
          <div
            className="curs-point dismiss-modal"
            onClick={() => {
              setDisplayModal(false);
              setVideo(undefined);
            }}
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>

        <h3 className="heading-3 playlist-heading">Playlist</h3>
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
          <form onSubmit={handleSubmit} className="flex-col">
            <input
              className="shoetube-input-box"
              type="text"
              placeholder="title"
              value={playlist.title}
              onChange={(e) =>
                setPlaylist({ ...playlist, title: e.target.value })
              }
            />
            <input
              className="shoetube-input-box"
              type="text"
              placeholder="desc"
              value={playlist.desc}
              onChange={(e) =>
                setPlaylist({ ...playlist, desc: e.target.value })
              }
            />
            <button
              className="btn btn-primary-solid shoetube-btn-main"
              type="submit"
            >
              Create playlist
            </button>
          </form>
        ) : (
          <button
            className="btn btn-primary-solid shoetube-btn-main"
            onClick={() => setShowCreatePlaylistForm(true)}
          >
            Add a new playlist
          </button>
        )}
      </div>
    </section>
  );
};

export { PlaylistModal };
