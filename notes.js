fs = require('fs')

chalk = require('chalk')

const getNotes = function() {
    return "Your notes are fucking ugly"
}

const addNotes = function(title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note) {

        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            'title': title,
            'body': body
        })
        saveNotes(notes)
        console.log(chalk.green('New note added..'))


    } else {

        console.log(chalk.red('Duplicate note found with title', title))


    }



}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (e) {

        return []
    }


}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}


const removeNote = function(title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note) {
        return note.title != title

    })
    saveNotes(notesToKeep)

    if (notes.length != notesToKeep.length) {
        console.log(chalk.green('Removed note with title', title))

    } else {
        console.log(chalk.red('Note not found with title', title))
    }



}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote
}