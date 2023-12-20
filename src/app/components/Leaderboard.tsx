"use client";

const Leaderboard = () => {

    return (
        <div className="flex flex-col gap-10">
            <span className="italic text-3xl">Leaderboard</span>
            <table className="w-full">
                <thead className="typography-brand-body-l-caps sticky top-0 text-camo-400 backdrop-blur-lg">
                    <tr>
                        <th className="border-b border-[#FFFF33] px-4 py-2 text-start italic">Rank</th>
                        <th className="border-b border-[#FFFF33] px-4 py-2 text-start italic">Name</th>
                        <th className="border-b border-[#FFFF33] px-4 py-2 text-start italic">Invited By</th>
                        <th className="border-b border-[#FFFF33] px-4 py-2 text-start italic">Points</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;