const ButtonsSessions = (joinSessionFunction, joinLiveCodingFunction) => {
  return (
    <div className="buttons">
      <button className="joinMeeting blueButton" onClick={joinSessionFunction}>Join Meeting</button>
      <button className="liveCoding blueButton" onClick={joinLiveCodingFunction}>Live Coding</button>
    </div>
  )
}

export default ButtonsSessions