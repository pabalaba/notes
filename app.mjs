import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
//import * as core from "./core-notes.mjs";

const yarg = yargs(hideBin(process.argv))

yarg.version('1.0.0')

yarg.command({
    command: 'list',
    describe: 'Lista le tue note',
    handler() {
        console.log('lista tutte le note');
    }
})

yarg.command({
    command: 'add',
    describe: 'Aggiungi una nota',
    builder: {
        title: {
            describe: 'Titolo nota',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Corpo della nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('aggiungi una nota');
    }
})

yarg.command({
    command: 'remove',
    describe: 'Rimuovi una nota',
    builder: {
        title: {
            describe: 'Titolo nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('rimuovi una nota');
    }
})

yarg.command({
    command: 'read',
    describe: 'Leggi una nota',
    builder: {
        title: {
            describe: 'Titolo nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('leggi una nota');
    }
})

yarg.parse()