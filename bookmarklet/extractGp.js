// define global var
/* global bn, xn */

;(() => {
    // check correct hostname
    if (window.location.hostname !== 'www.legendsofidleon.com') {
        alert(`Stop browsing ${window.location.hostname}, go play Idleon!`)
    }

    // check data exist
    if (!bn || !xn) {
        alert(
            'Guild data not fount. Please make sure that\n1. You are in a guild.\n2. You opened the guild menu.'
        )
    }

    // map data
    const today = new Date().toISOString().substr(0, 10)
    const csv = xn
        .map((member) => {
            // date,id,gp
            return [today, member[7], member[4]].join(',')
        })
        .join('\n')

    // to clipboard
    window.navigator.clipboard
        .writeText(csv)
        .then(() => alert('Guild data has been copied to your clipboard.'))
        .catch(() => alert('Something go wrong...But it works on my machine.'))
})()
