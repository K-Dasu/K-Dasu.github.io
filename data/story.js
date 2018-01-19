var stories = [
    // 1
    'This visualization works best in 1280x800 or larger screen sizes on WebGL webgl supported browsers.\n\nPlease "click" to advance.',
    // 2
    'A better understanding of disease progression may lead to the identification of disease genes and disease pathways, which, in turn, may offer better targets for drug development.',
    // 3
    // '',
    // 4
    'When we select mental disorders as the center node we notice that there is a strong positive association with digestive diseases. ',
    // 5
    'For anyone who has been anxious before and has felt stomach pains this association shouldn’t be too surprising. Research supports this association with an example of: Irritable Bowel Syndrome (IBS) commonly co-occurring with depression or anxiety. ',
    // 6
    'In females aged 60 to 69 we find that those with blood diseases also have a high likelihood of contracting genitourinary and digestive diseases. Further investigation as to why this is the case would be interesting.',
    // 7
    'In elderly males aged 70 to 79 with infectious or parasitic diseases we find that the strongest association appears to be with diseases of the blood.',
    //8
    'Which could be a result of white blood cells trying to fight off the infectious diseases but failing resulting in more problems.',
    // last
    'You can analyze and more stories from this visualization by using controles located on the top right.\nClick to start exploration.'
];

var params = [
    // 1
    {
        'changeState': false,
        'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
        'rowVals': ['m'],
        'colVals': ['1'],
        'cellVal': '2',
    },
    // 2
    {
        'changeState': true,
        'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
        'rowVals': ['m'],
        'colVals': ['1'],
        'cellVal': '2',
        'translation': [0.2, 0.2, 0.0],
        'scale': 1.5
    },
    // // 3
    // {
    //     'changeState': true,
    //     'image': 'data/img/sample.png',
    //     'imageScale': 0.8, // optional, default is 1.0. relative size with canvas area
    //     'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
    //     'rowVals': ['m', 'f'],
    //     'colVals': ['1'],
    //     'cellVal': '2'
    // },
    // 4
    {
        'changeState': true, // if changeState == false, other info is optional
        'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
        'rowVals': ['m', 'f'],
        'colVals': ['3', '4', '5'],
        'cellVal': '4',
    },
    // 5
    {
        'changeState': false, // if changeState == false, other info is optional
        'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
        'rowVals': ['m', 'f'],
        'colVals': ['0', '1', '2'],
        'cellVal': '2',
    },
    // 6
    {
        'changeState': true,
        'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
        'rowVals': ['f'],
        'colVals': ['6'],
        'cellVal': '3',
    },
    // 7
    {
        'changeState': true, // if changeState == false, other info is optional
        'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
        'rowVals': ['m'],
        'colVals': ['7'],
        'cellVal': '0',
    },
    // 8
    {
        'changeState': false,
    },
    // last
    {
        'changeState': false,
    }
];
