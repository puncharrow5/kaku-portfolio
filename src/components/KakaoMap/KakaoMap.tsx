"use client";

import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function KakaoMap() {
  const [scriptLoad, setScriptLoad] = useState<boolean>(false);

  const apiKey = process.env.NEXT_PUBLIC_KAKAO_APP_KEY ?? undefined;

  useEffect(() => {
    const script: HTMLScriptElement = document.createElement("script");

    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;

    document.head.appendChild(script);

    script.addEventListener("load", () => {
      setScriptLoad(true);
    });
  }, []);

  return (
    <div className="w-full h-full">
      {scriptLoad ? (
        <Map
          center={{ lat: 37.56613388580742, lng: 127.02654860270684 }}
          style={{ width: "100%", height: "100%" }}
          level={6}
        >
          <MapMarker
            position={{
              lat: 37.56613388580742,
              lng: 127.02654860270684,
            }}
          />
        </Map>
      ) : (
        <div></div>
      )}
    </div>
  );
}
