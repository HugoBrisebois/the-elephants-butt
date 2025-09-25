// scenes.js
// Define your story scenes and branching here

const scenes = {
    start: {
        text: "You and other researchers have spotted a weird object inside an iceberg. What do you choose?",
        choices: [
            { text: 'Go to see what the object is.', next: 'iceberg' },
            { text: 'Return to home base and get help.', next: 'base' }
        ]
    },
    iceberg: {
        text: "You have chosen to go see the mysterious object. After a few minutes on the dinghy, you arrive at the iceberg and ... the mysterious object inside the iceberg is a mammoth. A perfectly preserved mammoth! What do you do now?",
        choices: [
            { text: 'Go back to base and report your findings.', next: 'base2'},
            { text: 'Go and collect samples.', next: 'finding'}
        ]
    },
    base: {
        text: "You have chosen to go back to the research base. You ask your fellow colleague to come see what you saw. They follow you to the spot you saw the anomaly and... it isn't there!",
        choices: [
            { text: 'The end', next: 'end' },
        ]
    },
    base2: {
        text: "You rush back to base and report your findings. The team is skeptical but decides to send a larger expedition. When you return, the mammoth is gone, leaving only a large hole in the ice. What could have happened?",
        choices: [
            { text: 'Investigate the hole.', next: 'hole' },
            { text: 'Give up and return home.', next: 'end' }
        ]
    },
    finding: {
        text: "You decide to collect samples from the mammoth. As you chip away at the ice, the ground shakes and the ice cracks beneath you! You fall into a hidden cavern beneath the iceberg.",
        choices: [
            { text: 'Explore the cavern.', next: 'cavern' },
            { text: 'Try to climb out.', next: 'escape' }
        ]
    },
    hole: {
        text: "You and your team investigate the hole. Deep inside, you find strange markings and evidence of something having been dragged away. The mystery deepens, but your discovery makes headlines around the world!",
        choices: [
            { text: 'The end', next: 'end' }
        ]
    },
    cavern: {
        text: "Inside the cavern, you discover ancient cave paintings and the remains of other prehistoric creatures. You realize you've made a discovery that will change history!",
        choices: [
            { text: 'The end', next: 'end' }
        ]
    },
    escape: {
        text: "You try to climb out, but the ice is too slippery. Luckily, your team notices you're missing and rescues you. You share your incredible story, and the site becomes a major research location.",
        choices: [
            { text: 'The end', next: 'end' }
        ]
    },
    end: {
        text: "Thank you for playing! The adventure ends here... for now.",
        choices: []
    }
};
