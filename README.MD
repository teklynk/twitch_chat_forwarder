# **Twitch Chat Forwarder**

This is strange right? Why would anyone need this?

## **Use Case:**

**PSVR (Playstation VR)**

You can of course stream PSVR right from the Playstation but you will not have custom overlays, face cam, transitions, custom alerts. The stream quality is not great and the video output that is streamed to Twitch looks weird and fish-eyed. 

You can also capture your PSVR on a PC and stream it that way. But how do you see chat while in your VR headset?

One solution is to capture PSVR on a PC and stream it, while at the same time stream to Twitch from the Playstation that is using an alternate Twitch account. This way you will be able to see chat while in PSVR and still use OBS for transitions, overlays, alerts... The idea is to send chat messages from your main Twitch account to the alternate Twitch account that your PSVR is using. 

This guy explains why you would want to do it this way. [Streaming PlayStation VR with OBS & see stream chat inside the headset!](https://www.youtube.com/watch?v=cdseyPx7LSI)

## **Setup:**

Just clone or [download](https://github.com/teklynk/twitch_chat_forwarder/archive/refs/heads/master.zip ) the repo and open "chat_relay.html" in your browser. **No web server needed!** Everything runs client-side using plain old javascript, html and css.



![Screenshot](https://raw.githubusercontent.com/teklynk/twitch_chat_forwarder/master/Screenshot%20from%202021-03-30%2021-37-05.png)

![Screenshot](https://raw.githubusercontent.com/teklynk/twitch_chat_forwarder/master/Screenshot%20from%202021-03-30%2022-22-28.png)