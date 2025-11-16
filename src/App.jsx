import React, { useState, useEffect } from "react";
import logo from "./assets/airforce.png";
import myPic1 from "./assets/Geonwoo.png";
import myPic2 from "./assets/Ilya.png";

export default function App() {
    // ⭐ 한국시간(KST) 0시 기준으로 전역일 지정
    const dischargeDate = new Date("2027-08-16T00:00:00+09:00");

    const milestones = [
        { date: new Date("2026-01-17T00:00:00+09:00"), message: "🎉 일병 손건우 진급을 축하해!" },
        { date: new Date("2026-07-17T00:00:00+09:00"), message: "🎉 상병 손건우 진급을 축하해!" },
        { date: new Date("2027-01-17T00:00:00+09:00"), message: "🎉 병장 손건우 진급을 축하해!" },
    ];

    const [now, setNow] = useState(new Date());
    const [congrats, setCongrats] = useState("");

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const diffTime = dischargeDate - now;
    const dday = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const hours = String(Math.floor((diffTime / (1000 * 60 * 60)) % 24)).padStart(2, "0");
    const minutes = String(Math.floor((diffTime / (1000 * 60)) % 60)).padStart(2, "0");
    const seconds = String(Math.floor((diffTime / 1000) % 60)).padStart(2, "0");

    useEffect(() => {
        const done = milestones.filter(m => now >= m.date);
        if (done.length > 0) {
            setCongrats(done[done.length - 1].message);
        }
    }, [now]);

    // ★★★ 금색 D-day 조건 ★★★
    const isGoldDay = [300, 200, 100].includes(dday);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-sky-200 flex flex-col items-center pt-10 pb-20">
            <img src={logo} alt="AirForce Logo" className="w-30 h-16 opacity-90" />

            {/* ★★ 금색 or 기본 파랑 색상 적용 ★★ */}
            <h1
                className={`text-6xl font-bold mt-4 font-airforce tracking-wide ${isGoldDay
                        ? "text-yellow-500 drop-shadow-[0_0_8px_rgba(255,215,0,0.7)]"
                        : "text-[#1A4B9A]"
                    }`}
            >
                D-{dday}
            </h1>

            <p className="text-lg text-[#1A4B9A] font-semibold mt-2">
                {dday}일 {hours}:{minutes}:{seconds} 남음
            </p>

            <p className="mt-1 text-gray-600 font-body">전역일: 2027-08-16</p>

            {congrats && (
                <p className="mt-4 text-xl font-bold text-black-900 animate-pulse">
                    {congrats}
                </p>
            )}

            <div className="flex gap-10 md:gap-20 mt-10 justify-center flex-wrap">
                <img src={myPic1} className="w-40 h-40 rounded-xl shadow-lg object-cover" />
                <img src={myPic2} className="w-40 h-40 rounded-xl shadow-lg object-cover" />
            </div>


            <p className="font-message text-3xl mt-10 text-gray-700 tracking-wide drop-shadow-sm">
                건우야 잘 다녀와 !!
            </p>
        </div>
    );
}
