import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onchangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onchangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    //console.log(event);
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let buttonCaption = "Edit";
  if (isEditing) {
    editablePlayerName = (
      <input
        className="player-name"
        type="text"
        required
        value={playerName}
        onChange={handleChange}
      ></input>
    );
    buttonCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  );
}
