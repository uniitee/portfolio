import React from 'react'
import { Separator } from './ui/separator'
import Link from 'next/link'
import { Github } from 'lucide-react'
import { Spotify } from 'react-spotify-embed'

const About = () => {
  return (
    <div className="flex flex-row justify-between">
      
      <Spotify link="https://open.spotify.com/track/1UNEuG9DYOWiikf00ayr52?si=5801f85504664f29" />
      <Spotify link="https://open.spotify.com/track/7DcJ6fEBb7BaKuYKTwiDxK?si=2d08b84fd81546d7" />
      <Spotify link="https://open.spotify.com/track/2g7XdTVBXkM2vVYI33eBTh?si=088ac36ea919492b" />
      <Spotify link="https://open.spotify.com/track/7jm2PueKmv4EOHfdbdXMKT?si=9312d24cc08b4a0e" />
    </div>
  );
}

export default About