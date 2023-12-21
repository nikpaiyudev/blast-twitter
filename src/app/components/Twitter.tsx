"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import useTwitterFlow, { ITwitterUser } from "../hooks/useTwitterFlow";
import Button from "./Button";
import RenderIf from "./RenderIf";

const Twitter = () => {

    const { initateTwitterAuth, getTwitterUserInfo } = useTwitterFlow();
    const [twitterUser, setTwitterUser] = useState<ITwitterUser>();
    const [isLoading, setLoading] = useState(false);
    const params = useSearchParams();
    const state = params.get('state');
    const code = params.get('code');
    const getTwitterUser = async () => {
        if (params.get('state') && params.get('code')) {
            try {
                setLoading(true);
                const user = await getTwitterUserInfo(state as string, code as string, 'http://localhost:3000');
                setTwitterUser(user);
                setLoading(false);
            } catch (e) {
                console.error(e, 'Getting Twitter User Error');
                setLoading(false);
            }
        }
    }

    useEffect(() => {
        getTwitterUser();
    }, [state, code]);

    const handleTwitter = async () => {
        const url = await initateTwitterAuth();
        window.open(url, "_self");
    };

    return (
        <div className="flex flex-col justify-center items-center gap-10 w-full pt-40 pb-40">
            <RenderIf isTrue={!isLoading && !Boolean(twitterUser)}>
                <>
                    <div className="flex flex-col gap-3">
                        <span className="text-3xl font-thin italic text-center">Reserve Your Blast <span className="text-[#FFFF33]">Name.</span></span>
                        <p className="italic font-normal text-lg text-center">The only Ethereum L2 with native yield for ETH and stablecoins.</p>
                    </div>
                    <Button name="Connect Twitter" onClick={handleTwitter}></Button>
                </>
            </RenderIf>
            <RenderIf isTrue={isLoading && !Boolean(twitterUser)}>
                <span className="text-2xl text-center italic">Getting yout twitter handle...</span>
            </RenderIf>
            <RenderIf isTrue={!isLoading && Boolean(twitterUser)}>
                <div className="w-full flex justify-center items-center">
                    <span className="text-5xl  text-center italic">Your X/Twitter handle,<span className="text-[#FFFF33]"> {twitterUser?.username}</span>, has been reserved for an <br /><span className="text-[#FFFF33]"> onBlast.eth </span>subdomain!</span>
                </div>
            </RenderIf>
        </div>
    );
};

export default Twitter;