"use client";
import KamButton from "@/app/_components/Button";
import {GameWrapper} from "@/app/_components/GameWrapper";

export default function Home() {
    return (
        <GameWrapper>
            <KamButton label={"JEDEN"} onClick={() => {
            }} variant={"primary"}/>
            <KamButton label={"DWA"} onClick={() => {
            }} variant={"secondary"}/>
        </GameWrapper>

    )
}
