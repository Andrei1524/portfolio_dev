export const projects = [
  {
    id: 0,
    title: "Netflix Landing Page",
    about:
      "Made from scratch with html & css & js, user can click on a feature and that feature will be displayed.",
    tech: ["js"],
    images: ["netflix_landing_page.png"],
    live_link: "https://codepen.io/AndreiKnight/pen/KmmqdW"
  },
  {
    id: 1,
    title: "Blazing Movies",
    about:
      "A personal cinema website with movies stored on a database, user can rate a movie, add a movie to favorites and comment on a movie",
    tech: ["js", "node/expressjs", "momentjs", "mongodb/mongoose"],
    images: ["blazing_movies.jpg"],
    live_link: "https://quiet-brushlands-39817.herokuapp.com/"
  },
  {
    id: 2,
    title: "Spotify-Streamer",
    about:
      "Sync your liked songs from Spotify and Play / Download them. Created for my personal use.",
    tech: ["js", "node/expressjs", "reactjs", "node-ytdl-core"],
    images: ["spotify_streamer_react_2.png"],
    live_link: "https://spotify-streamer-react.herokuapp.com/"
  },
  {
    id: 3,
    title: "music mix",
    about:
      "A desktop app made with electron for playing youtube music.",
    tech: ["js", "vuejs", "electron-vue"],
    images: ["music_mix.gif"],
    live_link: "https://github.com/AndreiKnight/music_mix"
  },
  {
    id: 4,
    title: "pixel art maker",
    about:
      "Google Developer Challenge Scholarship",
    tech: ["js"],
    images: ["pixel_art_maker.png"],
    live_link: "https://github.com/AndreiKnight/Pixel-Art-Maker"
  },
  {
    id: 5,
    title: "partially hide email addresses",
    about:
      "You can use this tool for a giveaway to show the list of the participants",
    tech: ["js", "vuejs"],
    images: ["partially_hide.png"],
    live_link: "https://codepen.io/AndreiKnight/pen/WNNKgvz"
  },
  {
    id: 6,
    title: "Number Generator",
    about:
      "Generate an array of  non-repeating numbers",
    tech: ["js"],
    images: ["generate_arrays.png"],
    live_link: "https://codepen.io/AndreiKnight/pen/WNNpBjw"
  },
  {
    id: 7,
    title: "WIP: Giveaway Creator",
    about:
      `A giveaway creating site with a roulette for drawing winners. Inspired from hellcase.com / csgo gambling sites.
      ---------
      FEATURING WIP:
          - Real time roulette for drawing winners + custom canvas animation running on server side (planning to separate roulette game loop to another server)
              - reload & refresh persisted animation state
          - Giveaway job schedule ( auto closing on end date)
          - WIP: live winners showing up on the left sidebar
          - JWT AUTH & AUTHORIZATION (user & pass) (planning to integrate with social logins)

        TOP: 
          - DOCKER INTEGRATION dev & prod builds

        CLIENT SIDE:
          - NUXT.JS
          - AUTH module

        SERVER SIDE:
          - NODE.JS/EXPRESS.JS (serving build files from nuxt)
          - SOCKET.IO for roullete connection betwen client & server
          - Job Scheduling the giveaways end dates.
      `,
    tech: ["js", "nuxtjs", "JWT", "node/expressjs", "mongodb/mongoose", "socket.io"],
    images: ["gw-creator1.png", "gw-creator.png"],
    live_link: "https://arcane-temple-75043.herokuapp.com/"
  }
];
