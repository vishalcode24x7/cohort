const songModel = require("../models/song.model")
const storageService = require("../services/storage.service")
const id3 = require("node-id3")

async function uploadSong(req, res) {

    const songBuffer = req.file.buffer
    const tags = id3.read(songBuffer)

    const { mood } = req.body

    const [songFile, posterFile] = await Promise.all([
        storageService.uploadFile({
            buffer: songBuffer,
            filename: tags.title + ".mp3",
            folder: "/cohort2/moodify/songs"
        }),
        storageService.uploadFile({
            buffer: tags.image.imageBuffer,
            filename: tags.title + ".jpg",
            folder: "/cohort2/moodify/posters"
        })
    ])

    const song = await songModel.create({
        title: tags.title,
        url: songFile.url,
        posterUrl: posterFile.url,
        mood
    })

    res.status(201).json({
        message: "song created successfully",
        song
    })
}

async function getSong(req, res){
    const mood = typeof req.query.mood === "string"
        ? req.query.mood.trim().toLowerCase()
        : ""

    if (!mood) {
        return res.status(400).json({
            message: "A mood is required to fetch songs."
        })
    }

    const songs = await songModel.find({ mood }).sort({ title: 1 })

    res.status(200).json({
        message: "Songs fetched successfully.",
        songs,
    })
}

module.exports = {
    uploadSong,
    getSong
}