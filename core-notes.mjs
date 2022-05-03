import * as fs from 'fs';
import chalk from 'chalk';

const findNote = (notes, title) => notes.find(note => note.title === title);

const displayNote = function (note) {
    console.log('Nota \n\t', `${chalk.green(note.title)}: ${chalk.green(note.body)}`, '\n')
}

const errorHelper = function () {
    console.log('\n\t', chalk.red('Nota non trovata.'), '\n');
}

const addNote = function (title, body) {
    const notes = loadNotes();
    const noteExist = findNote(notes,title);

    if (!noteExist) {
        notes.push({title: title,body: body});
        console.log('nota inserita')
        saveNotes(notes);
    } else {
        console.log('la nota esiste già')
    }
    console.log(title,body);
}

const removeNote = function (title) {
    const notes = loadNotes();
    const note = findNote(notes,title);
    if (note) {
        console.log('Nota:',note,'eliminata');
        const notesToKeep = notes.filter(noteA => noteA.title !== title);
        saveNotes(notesToKeep);
    } else {
        console.log('Non esiste una nota con quel titolo');
    }
}

const listNotes = function () {
    const notes = loadNotes();
    console.log('Note:\n')
    notes.map(note=>{
        displayNote(note);
    })
}

const readNote = function (title) {
    const notes = [];
    const noteExist = findNote(notes, title);
    if (noteExist) {
        console.log(noteExist)
    } else {
        console.log('Non esiste una nota con questo titolo');
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