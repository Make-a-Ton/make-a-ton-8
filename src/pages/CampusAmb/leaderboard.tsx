import { useEffect, useState } from 'react';
import './CampusAmb.css';

interface LeaderboardEntry {
    key: string;
    name: string;
    institution: string;
    branch: string;
    score: number;
}

function Leaderboard() {
    const [data, setData] = useState<LeaderboardEntry[]>([]);

    useEffect(() => {
        fetch('/leaderboard.json')
            .then(res => res.json())
            .then((data: LeaderboardEntry[]) => {
                const filtered = data
                    .filter(entry => entry.score > 0)
                    .sort((a, b) => b.score - a.score);
                setData(filtered);
            })
            .catch(err => console.error('Error loading leaderboard:', err));
    }, []);

    if (data.length === 0) return null;

    return (
        <div className="leaderboard-container">
            <h2 className="leaderboard-title">LEADERBOARD</h2>
            <div className="leaderboard-table-wrapper">
                <table className="leaderboard-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Institution</th>
                            <th>Referrals</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((entry, index) => (
                            <tr key={entry.key}>
                                <td className="leaderboard-name-cell">
                                    <span className="leaderboard-rank">#{index + 1}</span>
                                    <div className="leaderboard-name-content">
                                        <span className="leaderboard-name-text">{entry.name}</span>
                                        <span className="leaderboard-institution-mobile">{entry.institution}</span>
                                    </div>
                                </td>
                                <td className="leaderboard-institution-cell">{entry.institution}</td>
                                <td className="leaderboard-score-cell">{entry.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Leaderboard;
