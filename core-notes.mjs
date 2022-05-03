import * as fs from 'fs';
import chalk from 'chalk';

const findNote = function (notes, title) {
    //
}

const displayNote = function (note) {
    console.log('Nota \n\t', `${chalk.green(note.title)}: ${chalk.green(note.body)}`, '\n')
}

const errorHelper = function () {
    console.log('\n\t', chalk.red('Nota non trovata.'), '\n');
}

const addNote = function (title, body) {
    const notes = [];
    const noteExist = [];

    if (!noteExist) {
        //
    } else {
        //
    }
}

const removeNote = function (title) {
    const notes = [];
    const notesToKeep = [];

    if (true) {
        //
    } else {
        //
    }
}

const listNotes = function () {
    const notes = [];

    console.log(chalk('Lista note'), '\n');

}

const readNote = function (title) {
    const notes = [];
    const noteExist = findNote(notes, title);

    if (noteExist) {
        //
    } else {
        //
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('database/notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const data = fs.readFileSync('database/notes.json')
        const result = data.toString()
        return JSON.parse(result)
    } catch (e) {
        return []
    }
}

export {
    addNote,
    removeNote,
    listNotes,
    readNote
}