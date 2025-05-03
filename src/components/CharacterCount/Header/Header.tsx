import Image from "next/image"

export default function Header() {
    return (
        <div>
            <div className="mb-10">
                <Image
                    src={"/assets/char-counter/images/logo-dark-theme.svg"}
                    alt="Logo"
                    height={100}
                    width={200}
                />
            </div>
            <h1 className="text-center text-3xl text-[#F2F2F7] font-extrabold">Analyze your text in real-time.</h1>
        </div>
    )
} 