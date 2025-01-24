class Jukebox {
    constructor() {
        this.albums = []
    }
    addAlbum (album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

const jbox = new Jukebox()
const album1 = new Album('Operation Ivy', 'Energy')
const album2 = new Album('Blink 182', 'Dude Ranch')
const album3 = new Album('New Found Glory', 'Sticks and Stones')

jbox.addAlbum(album1)
jbox.addAlbum(album2)
jbox.addAlbum(album3)

 // Populate the dropdown menu
 const albumSelect = document.getElementById('albumSelect');
 jbox.albums.forEach((album, index) => {
     const option = document.createElement('option')
     option.value = index; // Store album index
     option.textContent = `${album.artist} - ${album.title}`
     albumSelect.appendChild(option)
 });

 // Play button event
 document.getElementById('playButton').addEventListener('click', () => {
     const selectedIndex = albumSelect.value
     jbox.albums[selectedIndex].play()
     alert(`${jbox.albums[selectedIndex].title} is now playing!`)
 })

 // Show favorite album button event
 document.getElementById('favoriteButton').addEventListener('click', () => {
     const favorite = jbox.favoriteAlbum();
     if (favorite) {
         document.getElementById('favoriteAlbum').textContent = favorite.display()
     } else {
         document.getElementById('favoriteAlbum').textContent = "No albums have been played yet."
     }
 })