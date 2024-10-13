import { allowDynamicBackends } from "fastly:experimental";
import { Backend } from "fastly:backend";

allowDynamicBackends(true);

addEventListener("fetch", event => {
  const backend = new Backend({
    name: 'my_backend',
    target: 'http-me.glitch.me',
    hostOverride: "http-me.glitch.me",
    connectTimeout: 1000,
    firstByteTimeout: 15000,
    betweenBytesTimeout: 10000,
    useSSL: true,
    sslMinVersion: 1.3,
    sslMaxVersion: 1.3,
  });
  return fetch(event.request, { backend });
});