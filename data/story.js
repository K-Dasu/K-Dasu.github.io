var stories = [
    {
        'text': 'This is BC: a visualization of diseases that is grouped by age, sex, and disease categories classified by ICD-9-CM.',
        'params': {
            'changeState': true,
            'image': 'img/Intro-1.png',
            'imageScale': 1.0,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f'],
            'colVals': ['3'],
            'cellVal': '5',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'With BC, we will share stories about the progression of certain diseases and illustrate the likelihood of contracting certain diseases.',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'BC is modeled after a bacterial cell.',
        'params': {
            'changeState': true,
            'image': 'img/Intro-1.png',
            'imageScale': 1.0,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f'],
            'colVals': ['3'],
            'cellVal': '5',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text':  'The central node mirrors the bacteria’s nucleus and represents the core of the information we’re interested in.' ,
        'params': {
            'changeState': true,
            'image': 'img/Intro-2.png',
            'imageScale': 1.0,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f'],
            'colVals': ['3'],
            'cellVal': '5',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text':'The size of the nucleus grows or shrinks depending on the number of how many other diseases are positively associated with the selected disease.',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        },
    },
    {
        'text':'The color of the ring is associated to the disease category we are currently exploring. In this case, the color  <span style="color:#b17ea0;">purple </span> associates to  <span style="color:#b17ea0;">circulatory diseases </span>.',
        'params': {
            'changeState': true,
            'image': 'img/Intro-2.png',
            'imageScale': 1.0,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f'],
            'colVals': ['3'],
            'cellVal': '5',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        },
    },
    {
        'text': 'The branches stemming from the nucleus represent the flagella.',
        'params': {
            'changeState': true,
            'image': 'img/Intro-3.png',
            'imageScale': 1.0,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f'],
            'colVals': ['3'],
            'cellVal': '5',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text':'Each flagellum represents another disease that is positively associated with the selected disease.',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        },
    },
    {
        'text':'We can see that <span style="color:#9e7560;">digestive</span>,<span style="color:#72b5b2;"> nervous </span>, and <span style="color:#bab0ac;">genitourinary </span> diseases are associated with <span style="color:#b17ea0;">circulatory diseases </span>.',
        'params': {
            'changeState': true,
            'image': 'img/Intro-3.png',
            'imageScale': 1.0,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f'],
            'colVals': ['3'],
            'cellVal': '5',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        },
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
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
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
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'The fluctuations in the flagellum show how the strength of the association varies.',
        'params': {
            'changeState': true,
            'image': 'img/Tutorial-3.png',
            'imageScale': 1.0,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f'],
            'colVals': ['3'],
            'cellVal': '6',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'Now with a better understanding of BC, let’s see how the system works.',
        'params': {
            'changeState': true,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f'],
            'colVals': ['2'],
            'cellVal': '0',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text':'Using the control panel is the top right we can specify the criteria for row, column, and cell',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        },
    },
    {
        'text':'In this example our row is showing females and our columns is restricting the age to be 20 to 29 year olds',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        },
    },
    {
        'text':'Let\'s extend the row to consider both sexes',
        'params': {
            'changeState': true,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f'],
            'colVals': ['2'],
            'cellVal': '0',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        },
    },
    {
        'text':'Let\'s extend the row to consider both sexes',
        'params': {
            'changeState': true,
            'toggleRowBorder': true,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f','m'],
            'colVals': ['2'],
            'cellVal': '0',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        },
    },
    {
        'text':'Let\'s extend the columns to now consider 30 to 39 year olds',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        },
    },
    {
        'text':'Let\'s extend the columns to now consider 30 to 39 year olds',
        'params': {
            'changeState': true,
            'toggleColBorder': true,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f','m'],
            'colVals': ['2','3'],
            'cellVal': '0',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        },
    },
    {
        'text':'When selecting an option for cell you are setting what each of the bacterial cells will have in common. In this example each bacteria cell’s body will be <span style="color:#487ba6;">Infections </span>.',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        },
    },
    {
        'text':'Let\'s explore some interesting cases in Taiwan',
        'params': {
            'changeState': true,
            'toggleColBorder': true,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f','m'],
            'colVals': ['2','3'],
            'cellVal': '0',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        },
    },
    {
        'text': 'If we focus on <span style="color:#f1c54f;">mental disorders</span> and see how it evolves over time we observe the following. The older you become there are more diseases that have a positive association with mental diseases.',
        'params': {
            'changeState': true, // if changeState == false, other info is optional
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f' , 'm'],
            'colVals': ['1', '2','4','8'],
            'cellVal': '4',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'Also note that the older you become the associativity with <span style="color:#9e7560;">digestive diseases</span> decreases while there is an increase in association with <span style="color:#72b5b2;">nervous system disorders</span>.',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'For anyone who has been anxious before and has felt stomach pains this association shouldn’t be too surprising. Research supports this association with an example of: Irritable Bowel Syndrome (IBS) commonly co-occurring with depression or anxiety. ',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'As you grow older mental disorders like dementia become more prevalent which can affect the nervous system and cause problems.',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'There is some evidence that ageing is associated with an intrinsic reduction in susceptibility to anxiety and depression, which could explain the decrease in digestive diseases associations.',
        'params': {
            'changeState': true, // if changeState == false, other info is optional
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': [ 'f','m'],
            'colVals': ['1', '2','4','8'],
            'cellVal': '4',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'Let\'s look at another case',
        'params': {
            'changeState': true,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f','m'],
            'colVals': ['2' ,'3'],
            'cellVal': '3',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'Compared to males, female nuclei are larger. So, in females, there are more diseases that are positively associated to <font color="#579d52">blood diseases</font> than males.', 
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'Taking a closer look, we can see that females with blood diseases have a stronger and more associations with <font color="#bab0ac">genitourinary diseases</span> (diseases related  to the genital and urinary organs.). ',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'This is logical as females in the 20-30’s are more sexually active, increasing their likelihood of contracting UTI and STDs, while still facing anemia, breast issues and other autoimmune disorders.',
        'params': {
            'changeState': true,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f','m'],
            'colVals': ['2' ,'3'],
            'cellVal': '3',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'When we expand the age category, we can see that this trend inverses. Now, men between ages 60-80 are more likely to have correlation with blood diseases and GU due to a higher possibility of contracting prostate cancer.',
        'params': {
            'changeState': true,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f','m'],
            'colVals': ['2', '3','6','7'],
            'cellVal': '3',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'You can analyze and more stories from this visualization by using controles located on the top right.<br />Click to start exploration.',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    }
];
