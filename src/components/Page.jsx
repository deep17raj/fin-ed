import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header with Avatar and Progress */}
      <header className="flex justify-between items-center p-4 bg-[#111111]">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full  flex items-center justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw9sRPLQndDMSSi5YjypJ_-cmHiZDrli0nk2GEn0u30O-Q_LL0RVKclfA&s"
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div>
            <p className="font-bold">Level 1</p>
            <div className="w-32 h-2 bg-gray-700 rounded-full">
              <div className="w-1/4 h-full bg-[#4AD66D] rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img className="rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlj1RDlMW4m5zUrnqNmzLTf_UjFYxhZ0DuDi3BCKz_qVVi_w0gsdv0b88&s" alt="Coins" width={40} height={40} />
            <span className="font-bold">1,000</span>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"><button >Log Out</button></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 max-w-7xl mx-auto">
        {/* Achievement Banner - New! */}
        <div className="bg-gradient-to-r from-[#4361EE] to-[#4AD66D] p-4 rounded-xl mb-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                🌟
              </div>
              <div>
                <h3 className="font-bold text-xl">New Achievement Unlocked!</h3>
                <p>First Budget Created</p>
              </div>
            </div>
            <span className="text-2xl font-bold">+500 XP</span>
          </div>
        </div>

        {/* Quest Map */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Your Financial Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {questData.map((quest, index) => (
              <div
                key={index}
                className="bg-[#111111] p-6 rounded-xl border border-[#4361EE]/20 hover:border-[#4361EE] transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-[${quest.bgColor}]/20 flex items-center justify-center`}>
                    {quest.icon}
                  </div>
                  <h3 className="font-bold">{quest.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{quest.description}</p>
                {quest.isLocked ? (
                  <button className="w-full py-2 bg-gray-700 rounded-full font-bold cursor-not-allowed opacity-50">
                    Locked
                  </button>
                ) : (
                  <button className="w-full py-2 bg-[#4361EE] rounded-full font-bold hover:bg-[#4361EE]/80 transition-colors">
                    {quest.buttonText}
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Daily Challenges */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Daily Challenges</h2>
          <div className="bg-[#111111] p-6 rounded-xl">
            {dailyChallenges.map((challenge, index) => (
              <div key={index} className="flex items-center justify-between mb-4 p-4 bg-[#0A0A0A] rounded-lg">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full bg-[${challenge.bgColor}]/20 flex items-center justify-center`}>
                    {challenge.icon}
                  </div>
                  <div>
                    <h3 className="font-bold">{challenge.title}</h3>
                    <p className="text-sm text-gray-400">{challenge.xp}</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-[#FF6B6B] rounded-full text-sm font-bold">
                  Accept
                </button>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Top Savers This Week</h2>
          <div className="bg-[#111111] p-6 rounded-xl">
            <div className="space-y-4">
              {['Crypt0Queen_CA', 'FinanceNinja', 'SaveMaster2024'].map((player, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-[#0A0A0A] rounded-lg">
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-xl">{index + 1}</span>
                    <div className="w-10 h-10 rounded-full bg-[#4361EE]/20 flex items-center justify-center">
                      👤
                    </div>
                    <span className="font-bold">{player}</span>
                  </div>
                  <div className="flex items-center gap-2">
                  <img className="rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlj1RDlMW4m5zUrnqNmzLTf_UjFYxhZ0DuDi3BCKz_qVVi_w0gsdv0b88&s" alt="Coins" width={40} height={40} />
                    <span className="font-bold">{5000 - (index * 1000)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-[#111111] p-4 rounded-xl hover:bg-[#111111]/80 transition-colors">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#4AD66D]/20 flex items-center justify-center">
                👥
              </div>
              <span className="font-bold">Join Clan</span>
            </div>
          </button>
          <button className="bg-[#111111] p-4 rounded-xl hover:bg-[#111111]/80 transition-colors">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#4361EE]/20 flex items-center justify-center">
                🎯
              </div>
              <span className="font-bold">Set Goal</span>
            </div>
          </button>
          <button className="bg-[#111111] p-4 rounded-xl hover:bg-[#111111]/80 transition-colors">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#FF6B6B]/20 flex items-center justify-center">
                🏆
              </div>
              <span className="font-bold">Achievements</span>
            </div>
          </button>
          <button className="bg-[#111111] p-4 rounded-xl hover:bg-[#111111]/80 transition-colors">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#4AD66D]/20 flex items-center justify-center">
                📊
              </div>
              <span className="font-bold">Stats</span>
            </div>
          </button>
         </section>
      </main>
    </div>
  );
}

const questData = [
  {
    title: "Bank Basics",
    description: "Start your journey learning about savings accounts and budgeting",
    icon: "🏦",
    bgColor: "#4361EE",
    buttonText: "Start Quest",
    isLocked: false,
  },
  {
    title: "Investment Island",
    description: "Learn about stocks, bonds, and smart investing strategies",
    icon: "📈",
    bgColor: "#4AD66D",
    buttonText: "Locked",
    isLocked: true,
  },
  {
    title: "Tax Calculator",
    description: "Calculate your tax in most accurate and efficient way!",
    icon: "🧮",
    bgColor: "#FF6B6B",
    buttonText: "Calculate",
    isLocked: false,
  },
  {
    title: "Dcf Predictor",
    description: "Calculate your tax in most accurate and efficient way!",
    icon: "🧮",
    bgColor: "#FF6B6B",
    buttonText: "Calculate",
    isLocked: false,
  },
  {
    title: "",
    description: "Calculate your tax in most accurate and efficient way!",
    icon: "🧮",
    bgColor: "#FF6B6B",
    buttonText: "Calculate",
    isLocked: false,
  },
  {
    title: "Tax Calculator",
    description: "Calculate your tax in most accurate and efficient way!",
    icon: "🧮",
    bgColor: "#FF6B6B",
    buttonText: "Calculate",
    isLocked: false,
  },
];

const dailyChallenges = [
  {
    title: "Save $5 Today",
    xp: "+100 XP",
    icon: "🎯",
    bgColor: "#FF6B6B",
  },
];

