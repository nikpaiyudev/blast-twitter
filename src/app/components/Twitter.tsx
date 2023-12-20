"use client";

import useTwitterFlow from "../hooks/useTwitterFlow";
import Button from "./Button";

const Twitter = () => {

    const { initateTwitterAuth } = useTwitterFlow();

    const handleTwitter = async () => {
        const url = await initateTwitterAuth();
        window.open(url, "_self");
    };

    return (
        <div className="flex flex-col justify-center items-center gap-10 w-full pt-40 pb-40">
            <div className="flex flex-col gap-5">
                <span className="text-3xl font-thin italic text-center">Reserve Your Blast <span className="text-[#FFFF33]">Name.</span></span>
                <p className="italic font-normal text-lg text-center">The only Ethereum L2 with native yield for ETH and stablecoins.<br></br>Airdrop now live.</p>
            </div>
            <Button name="Connect Twitter" onClick={handleTwitter}></Button>
        </div>
    );
};

export default Twitter;