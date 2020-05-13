notes = require('./notes.js')
yargs = require('yargs')



yargs.command(
    {
        command: 'add',
        describe: 'this is fucking description,',
        builder: {
                title: {
                    describe: 'Note title',
                    demandOption: true,
                    type: 'string'
                },
                body: {
                    describe: 'Note body',
                    demandOption: true,
                    type: 'string'
                }
        },
        handler: function(args){
            notes.addNotes(args.title, args.body)
        }
    }
)

yargs.command(
    {
        command: 'remove',
        describe: 'this is fucking description,',
        handler: function(){
            console.log('Removing note..')
        },
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
    }
)
yargs.command(
    {
        command: 'list',
        describe: 'this is fucking description,',
        handler: function(){
            console.log('listing notes..')
        }
    }
)

yargs.command(
    {
        command: 'read',
        describe: 'this is fucking description,',
        handler: function(){
            console.log('reading note..')
        }
    }
)
// console.log(yargs.argv)

yargs.parse()