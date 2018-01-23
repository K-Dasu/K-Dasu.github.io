var stories = [
    {
        'text': 'This visualization works best in 1280x800 or larger screen sizes on WebGL supported browsers.<br /><br />Please click "Next" to advance.',
        'params': {
            'changeState': true,
            'image': 'img/a.png',
            'imageScale': 1.0,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f'],
            'colVals': ['3'],
            'cellVal': '5',
            'explanationTranslateRatio': [-0.1, 0.7] // ratio of x and y
        }
    },
    {
        'text':'Diseases — like Ischaemic heart disease and stroke* are the leading causes of death in the world. Could we have prevented this?<br /><span id="reference">[*]<a href="http://www.who.int/gho/mortality_burden_disease/causes_death/top_10/en/" target="_blank">http://www.who.int/gho/mortality_burden_disease/causes_death/top_10/en/</a></span>',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, 0.7] // ratio of x and y
        },
    },
    {
        'text':'<span id="bold">Reasonably so.</span> Doctors and reseachers have pointed out that lifestyle and environmental changes significantly reduce the likelihood of such diseases. But what people may not be quite aware of is the progression of certain diseases and how strongly and positively associated they are to other diseases.',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, 0.7] // ratio of x and y
        }
    },
    {
        'text': 'Introducing ...',
        'params': {
            'changeState': true,
            'image': 'img/Intro-1.png',
            'imageScale': 1.0,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f'],
            'colVals': ['3'],
            'cellVal': '5',
            'explanationTranslateRatio': [-0.1, 0.7] // ratio of x and y
        }
    },
    {
        'text': 'Body',
        'params': {
            'changeState': true,
            'image': 'img/Intro-2.png',
            'imageScale': 1.0,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f'],
            'colVals': ['3'],
            'cellVal': '5',
            'explanationTranslateRatio': [-0.1, 0.7] // ratio of x and y
        }
    },
    {
        'text':'The body\'s size depends on the number of other diseases that positively associate with the selected disease  ',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, 0.7] // ratio of x and y
        },
    },
    {
        'text': 'Flagellum',
        'params': {
            'changeState': true,
            'image': 'img/Intro-3.png',
            'imageScale': 1.0,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f'],
            'colVals': ['3'],
            'cellVal': '5',
            'explanationTranslateRatio': [-0.1, 0.7] // ratio of x and y
        }
    },
    {
        'text':'Each flagellum protruding from the body represent a disease with a positive association to the body.',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, 0.7] // ratio of x and y
        },
    },
    {
        'text': 'This is BC: a visualization of diseases that is grouped by age, sex, and disease categories classified by ICD-9-CM.*<br />With BC, we will share stories about the progression of certain diseases and illustrate the likelihood of contracting certain diseases.<br /><span id="reference" >[*]<a href="http://icd9cm.chrisendres.com/" target="_blank">http://icd9cm.chrisendres.com/</a></span>',
        'params': {
            'changeState': true,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f'],
            'colVals': ['3'],
            'cellVal': '6',
            'explanationTranslateRatio': [-0.1, 0.7] // ratio of x and y
        }
    },
    {
        'text': 'The longer the flagellum the stronger the association with the disease.',
        'params': {
            'changeState': true,
            'image': 'img/Tutorial-1.png',
            'imageScale': 1.0,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f'],
            'colVals': ['3'],
            'cellVal': '6',
            'explanationTranslateRatio': [-0.1, 0.7] // ratio of x and y
        }
    },
    {
        'text': 'The thickness of the flagellum at a given point indicates the number of diseases that have a strong association at that point.',
        'params': {
            'changeState': true,
            'image': 'img/Tutorial-2.png',
            'imageScale': 1.0,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f'],
            'colVals': ['3'],
            'cellVal': '6',
            'explanationTranslateRatio': [-0.1, 0.7] // ratio of x and y
        }
    },
    {
        'text': 'The bends in the flagellum show how the strength of the association varies.',
        'params': {
            'changeState': true,
            'image': 'img/Tutorial-3.png',
            'imageScale': 1.0,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f'],
            'colVals': ['3'],
            'cellVal': '6',
            'explanationTranslateRatio': [-0.1, 0.7] // ratio of x and y
        }
    },
    {
        'text': 'How the system works...',
        'params': {
            'changeState': true,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f'],
            'colVals': ['2'],
            'cellVal': '0',
            'explanationTranslateRatio': [-0.1, 0.7] // ratio of x and y
        }
    },
    {
        'text':'Using the control panel is the top right we can specify the criteria for row, column, and cell',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, 0.7] // ratio of x and y
        },
    },
    {
        'text':'In this example our row is showing females and our columns is restricting the age to be 20 to 29 year olds',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, 0.7] // ratio of x and y
        },
    },
    {
        'text':'Let\'s extend the row to consider both sexes',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, 0.7] // ratio of x and y
        },
    },
    {
        'text':'Let\'s extend the row to consider both sexes',
        'params': {
            'changeState': true,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f','m'],
            'colVals': ['2'],
            'cellVal': '0',
            'explanationTranslateRatio': [-0.1, 0.7] // ratio of x and y
        },
    },
    {
        'text':'Let\'s extend the columns to now consider 30 to 39 year olds',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, 0.7] // ratio of x and y
        },
    },
    {
        'text':'Let\'s extend the columns to now consider 30 to 39 year olds',
        'params': {
            'changeState': true,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f','m'],
            'colVals': ['2','3'],
            'cellVal': '0',
            'explanationTranslateRatio': [-0.1, 0.7] // ratio of x and y
        },
    },
    {
        'text':'When selecting an option for cell you are setting what each of the bacterial cells will have in common. In this example each bacteria cell’s body will be Infections.',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, 0.7] // ratio of x and y
        },
    },
    {
        'text':'Let\'s explore some interesting cases in Taiwan',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, 0.7] // ratio of x and y
        },
    },
    {
        'text': 'When we select mental disorders as the center node we notice that there is a strong positive association with digestive diseases. ',
        'params': {
            'changeState': true, // if changeState == false, other info is optional
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['m', 'f'],
            'colVals': ['3', '4', '5'],
            'cellVal': '4',
            'explanationTranslateRatio': [-0.1, 0.7] // ratio of x and y
        }
    },
    {
        'text': 'For anyone who has been anxious before and has felt stomach pains this association shouldn’t be too surprising. Research supports this association with an example of: Irritable Bowel Syndrome (IBS) commonly co-occurring with depression or anxiety. ',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, 0.7] // ratio of x and y
        }
    },
    {
        'text': 'In females aged 60 to 69 we find that those with blood diseases also have a high likelihood of contracting genitourinary and digestive diseases. Further investigation as to why this is the case would be interesting.',
        'params': {
            'changeState': true,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f'],
            'colVals': ['6'],
            'cellVal': '3',
            'explanationTranslateRatio': [-0.1, 0.7] // ratio of x and y
        }
    },
    {
        'text': 'In elderly males aged 70 to 79 with infectious or parasitic diseases we find that the strongest association appears to be with diseases of the blood.',
        'params': {
            'changeState': true,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['m'],
            'colVals': ['7'],
            'cellVal': '0',
            'explanationTranslateRatio': [-0.1, 0.7] // ratio of x and y
        }
    },
    {
        'text': 'Which could be a result of white blood cells trying to fight off the infectious diseases but failing resulting in more problems.',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, 0.7] // ratio of x and y
        }
    },
    {
        'text': 'You can analyze and more stories from this visualization by using controles located on the top right.<br />Click to start exploration.',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, 0.7] // ratio of x and y
        }
    }
];
