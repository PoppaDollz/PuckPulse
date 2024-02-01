import TeamCard from "./TeamCard.jsx"

export default function Matchup(props) {
    return (
        <div className="gameMatchup">
            <TeamCard {...props.awayTeam} />
            <TeamCard {...props.homeTeam} />
        </div>
    )
}