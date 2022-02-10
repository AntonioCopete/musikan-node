const db = require("../models");

async function getBasePlaylists() {
    let userId = await db.User.find({}, { _id: 1 }).lean();
    // find all tracks
    let trackId = await db.Track.find({}, { _id: 1 }).lean();
    console.log(trackId);
    return [
    {
      userId: userId.map(user => user._id),
      name: "PLaylist 1",
      tracks: trackId.slice(0, 10).map(track => track._id),
      followedBy: userId,
      isFollowed: true,
      thumbnail:
        "https://images.unsplash.com/photo-1632993952737-0c2897164db3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
      collaborative: false,
      description: "The first playlist",
      publicAccessible: false,
      primaryColor: "#fbdc00",
    },
    {
        userId: userId.map(user => user._id),
        name: "PLaylist 2",
        tracks: trackId.slice(0, 10).map(track => track._id),
        followedBy: userId,
        isFollowed: true,
        thumbnail:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        collaborative: false,
        description: "The second playlist",
        publicAccessible: false,
        primaryColor: "#fbdc00",
    },
    {
        userId: userId.map(user => user._id),
        name: "PLaylist 3",
        tracks: trackId.slice(0, 10).map(track => track._id),
        followedBy: userId,
        isFollowed: true,
        thumbnail:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        collaborative: false,
        description: "The third playlist",
        publicAccessible: false,
        primaryColor: "#fbdc00",
    },
    {
        userId: userId.map(user => user._id),
        name: "PLaylist 4",
        tracks: trackId.slice(0, 10).map(track => track._id),
        followedBy: userId,
        isFollowed: true,
        thumbnail:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        collaborative: false,
        description: "The fourth playlist",
        publicAccessible: false,
        primaryColor: "#fbdc00",
    },
    {
        userId: userId.map(user => user._id),
        name: "PLaylist 5",
        tracks: trackId.slice(0, 10).map(track => track._id),
        followedBy: userId,
        isFollowed: true,
        thumbnail:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        collaborative: false,
        description: "The fifth playlist",
        publicAccessible: false,
        primaryColor: "#fbdc00",
    },
    {
        userId: userId.map(user => user._id),
        name: "PLaylist 6",
        tracks: trackId.slice(0, 10).map(track => track._id),
        followedBy: userId,
        isFollowed: true,
        thumbnail:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        collaborative: false,
        description: "The sixth playlist",
        publicAccessible: false,
        primaryColor: "#fbdc00",
    },
    {
        userId: userId.map(user => user._id),
        name: "PLaylist 7",
        tracks: trackId.slice(0, 10).map(track => track._id),
        followedBy: userId,
        isFollowed: true,
        thumbnail:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        collaborative: false,
        description: "The seventh playlist",
        publicAccessible: false,
        primaryColor: "#fbdc00",
    },
    {
        userId: userId.map(user => user._id),
        name: "PLaylist 8",
        tracks: trackId.slice(0, 10).map(track => track._id),
        followedBy: userId,
        isFollowed: true,
        thumbnail:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        collaborative: false,
        description: "The eighth playlist",
        publicAccessible: false,
        primaryColor: "#fbdc00",
    },
    {
        userId: userId.map(user => user._id),
        name: "PLaylist 9",
        tracks: trackId.slice(0, 10).map(track => track._id),
        followedBy: userId,
        isFollowed: true,
        thumbnail:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        collaborative: false,
        description: "The ninth playlist",
        publicAccessible: false,
        primaryColor: "#fbdc00",
    },
    {
        userId: userId.map(user => user._id),
        name: "PLaylist 10",
        tracks: trackId.slice(0, 10).map(track => track._id),
        followedBy: userId,
        isFollowed: true,
        thumbnail:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        collaborative: false,
        description: "The tenth playlist",
        publicAccessible: false,
        primaryColor: "#fbdc00",
    },
  ];
}

module.exports = { getBasePlaylists };
