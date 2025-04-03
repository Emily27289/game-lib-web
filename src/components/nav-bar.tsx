import Link from "next/link";

interface NavBarProps {
    active: "Library" | "PublishGame" | "Nickname"
}

export default function NavBar(props: NavBarProps) {
    const { active } = props
    const actvieClass = "border-b-4 border-pink-600 pb-2"

    const links = [
        { text: "Library", href: "/library" },
        { text: "PublishGame", href: "/publish/game" },
        { text: "Nickname", href: "/Nickname" },
    ]

    return (
        <nav className="flex justify-between items-center p-4 bg-emerald-950 text-emerald-100">
      <div className="flex gap-6">
        <a href="/library" className="text-lg font-bold">LIBRARY</a>
        <a href="/publish/game" className="text-lg font-bold">PUBLISH GAME</a>
      </div>
      <div className="flex items-center gap-2">
        <span>NICKNAME</span>
        <img src="/avatar.png" alt="Avatar" className="w-10 h-10 rounded-full"/>
      </div>
    </nav>
    )
}