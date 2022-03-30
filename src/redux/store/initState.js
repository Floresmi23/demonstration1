function initState(){
    return {
        guesses: [
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', '']
        ],
        // EDITED ON 3-29 CLASS
        try:0,
        answer: ["t", "e", "a", "c", "h"],
        change:false,
        end:false,
        win:false


    }
}

export default initState