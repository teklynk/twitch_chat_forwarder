**Twitch Chat Forwarder**

This is strange right? Why would anyone need this?

**Use Case:**

**PSVR (Playstation VR)**

You can of course stream PSVR right from the Playstation but you will not have custom overlays, face cam, transitions, custom alerts. The stream quality is not great and the video output that is streamed to Twitch looks weird and fish-eyed. 

You can also capture your PSVR on a PC and stream it that way. But how do you see chat while in VR?

One solution is to capture PSVR on PC and stream it, while at the same time stream to Twitch from the Playstation that is using an alternate Twitch account. This way you will be able to see chat while in PSVR and still use OBS for transitions, overlays, alerts... The idea is to send chat messages from your main Twitch account to the alternate Twitch account that your PSVR is using. 

This guy explains why you would want to do it this way. [Streaming PlayStation VR with OBS & see stream chat inside the headset!](https://www.youtube.com/watch?v=cdseyPx7LSI)

There may be other use cases for this, like multiple Twitch streamers forwarding chat messages to a main event chat channel that has more viewers and exposure?  

**Setup:**

Just clone the repo and open chat_relay.html in your browser. No web server is needed! Everything runs client-side using plain old javascript, html and css.

<img src="https://github.com/teklynk/twitch_chat_forwarder/blob/master/Screenshot%20from%202021-03-30%2021-37-05.png?raw=true" alt="image" style="zoom:80%;text-align:center;" />

<img src="https://github.com/teklynk/twitch_chat_forwarder/blob/master/Screenshot%20from%202021-03-30%2021-13-53.png?raw=true" alt="image" style="zoom:80%;text-align:center;" />
