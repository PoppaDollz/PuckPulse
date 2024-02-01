
export default function TeamCard(props) {

    return (
        <>
        <div className="teamCard">
            <div className="matchup-logo-container">
                <div className="teamName">{props.abbrev}</div>
                <img className="matchupLogo" src={props.logo}></img>
            </div>
            <div className="matchup-score-container">
                {props.score}
            </div>
        </div>
            
        </>
    )
}