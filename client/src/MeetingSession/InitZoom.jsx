import React from "react";
import { KJUR } from "jsrsasign";
import ZoomMtgEmbedded from "@zoomus/websdk/embedded";

const client = ZoomMtgEmbedded.createClient();
const key = "dJObZ1nDSZOgiGhBcKbpuA";
const secret = "uDfxfEz8HEmLSis0a8G6kImVlLgB8dTS";

function InitZoom(zoomData, userRole) {
  // TODO: place this function elsewhere, this file is large
  // TODO: the "key" & "secret" should be environment variable, not stored here
  const name =
    userRole == "tutor" ? zoomData.student.username : zoomData.tutor.username;
  function generateSignature(key, secret, meetingNumber, role) {
    const iat = Math.round(new Date().getTime() / 1000) - 30;
    const exp = iat + 60 * 60 * 2;
    const oHeader = { alg: "HS256", typ: "JWT" };

    const oPayload = {
      sdkKey: key,
      mn: meetingNumber,
      role: role,
      iat: iat,
      exp: exp,
      tokenExp: exp,
    };

    const sHeader = JSON.stringify(oHeader);
    const sPayload = JSON.stringify(oPayload);
    const sdkJWT = KJUR.jws.JWS.sign("HS256", sHeader, sPayload, secret);
    return sdkJWT;
  }

  // Now you can use zoomData.meetingNumber, zoomData.zakToken, etc.
  // to pass values to your ZoomMtg.init and ZoomMtg.join functions.

  console.log(zoomData);

  const signature = generateSignature(key, secret, zoomData.meetingNumber, 0);
  console.log(signature);
  // Now you can use zoomData.meetingNumber, zoomData.zakToken, etc.
  // to pass values to your ZoomMtg.init and ZoomMtg.join functions.

  let meetingSDKElement = document.getElementById("meetingSDKElement");
  client.init({ zoomAppRoot: meetingSDKElement, language: "en-US" });
  client
    .join({
      sdkKey: key, // Use environment variable
      signature: signature,
      meetingNumber: zoomData.meetingNumber,
      password: zoomData.meetingPassword,
      userName: name,
    })
    .catch((error) => {
      console.error("Error fetching Zoom data:", error);
    });
}

export default InitZoom;
