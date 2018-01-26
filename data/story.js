var stories = [
    {
        'text': 'This is our visualization of diseases that is grouped by age, sex, and disease categories classified by ICD-9-CM*.<br /><span id="reference">[*]<a href="http://icd9cm.chrisendres.com/" target="_blank"> http://icd9cm.chrisendres.com/</a></span>',
        'params': {
            'changeState': true,
            'image': 'img/Intro-0.png',
            'imageScale': 1.0,
            'fadeIn': true,
            'toggleLegend': true,
            'toggleCenter': false,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f'],
            'colVals': ['3'],
            'cellVal': '5',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'Our visualization is modeled after a virus cell.',
        'params': {
            'changeState': true,
            'toggleLegend': true,
            'toggleCenter': true,
            'fadeIn': true,
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
        'text': 'With this representation, we will share stories about the progression of certain diseases and illustrate the likelihood of contracting certain diseases.',
        'params': {
            'changeState': true,
            'toggleLegend': true,
            'fadeIn': false,
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
        'text':  'The central node mirrors the virus\'s nucleus and represents <br>the core information we’re interested in.' ,
        'params': {
            'changeState': true,
            'toggleLegend': true,
            'toggleCenter': true,
            'fadeIn': false,
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
        'text':'The size of the nucleus grows or shrinks depending on the number of how many other diseases are positively associated with the nucleus.',
        'params': {
            'changeState': false,
            'fadeIn': false,
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        },
    },
    {
        'text':'The nucleus ring color represents the disease category we are currently exploring. In this case, the color  <span style="color:#b17ea0;">purple </span> denotes <span style="color:#b17ea0;">circulatory diseases </span>.',
        'params': {
            'changeState': true,
            'toggleLegend': true,
            'fadeIn': false,
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
            'toggleLegend': true,
            'toggleCenter': true,
            'fadeIn': false,
            'image': 'img/Intro-3.png',
            'toggleCenter': true,
            'imageScale': 1.0,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f'],
            'colVals': ['3'],
            'cellVal': '5',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text':'Each flagellum represents another disease category that is positively associated with the nucleus.',
        'params': {
            'changeState': false,
            'fadeIn': false,
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        },
    },
    {
        'text':'We can see below there are many <span style="color:#9e7560;">digestive</span>,<span style="color:#72b5b2;"> nervous </span>, and <span style="color:#bab0ac;">genitourinary </span> diseases that have a strong association with <span style="color:#b17ea0;">circulatory diseases </span>.',
        'params': {
            'changeState': true,
            'toggleLegend': true,
            'image': 'img/Intro-3.png',
            'fadeIn': false,
            'imageScale': 1.0,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f'],
            'colVals': ['3'],
            'cellVal': '5',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        },
    },
    {
        'text': 'The longer the flagellum, the stronger the association with the nucleus.',
        'params': {
            'changeState': true,
            'image': 'img/Tutorial-1.png',
            'imageScale': 1.0,
            'fadeIn': true,
            'toggleLegend': true,
            'toggleCenter': true,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f'],
            'colVals': ['3'],
            'cellVal': '6',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'The thickness of the flagellum at a given point indicates the number of diseases with a similar degree of association for that point.',
        'params': {
            'changeState': true,
            'toggleLegend': true,
            'fadeIn': false,
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
        'text': 'The fluctuations show how the strength of the association varies.',
        'params': {
            'changeState': true,
            'image': 'img/Tutorial-3.png',
            'imageScale': 1.0,
            'fadeIn': false,
            'toggleLegend': true,
            'toggleCenter': true,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f'],
            'colVals': ['3'],
            'cellVal': '6',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'With a better understanding of our model, let’s see how the system works.',
        'params': {
            'changeState': true,
            'toggleCenter': true,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f','m'],
            'colVals': ['2','3'],
            'cellVal': '6',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text':'The highlighted section shows the rows are set to females and males.',
        'params': {
            'changeState': true,
            'toggleCenter': true,
            'toggleRowBorder': true,
            'toggleCenter': true,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f','m'],
            'colVals': ['2','3'],
            'cellVal': '6',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        },
    },
    {
        'text':'Now, our columns look at two age groups: 20 - 29 and 30 - 39 year olds.',
        'params': {
            'changeState': true,
            'toggleCenter': true,
            'toggleColBorder': true,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f','m'],
            'colVals': ['2','3'],
            'cellVal': '6',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        },
    },
    {
        'text':'Finally we set the common factor to be a disease category. In this example all of the nuclei will be <span style="color:#b17ea0;">circulatory diseases </span>.',
        'params': {
            'changeState': true,
            'toggleCellBorder': true,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f','m'],
            'colVals': ['2','3'],
            'cellVal': '6',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        },
    },
    {
        'text':'Let\'s explore some interesting cases in Taiwan.',
        'params': {
            'changeState': true,
            'toggleCenter': true,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f','m'],
            'colVals': ['2','3'],
            'cellVal': '6',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        },
    },
    {
        'text': 'Focusing on <span style="color:#f1c54f;">mental disorders</span>, we see how it evolves over time and have the following observation: the older you become there are more diseases that have a positive association with mental diseases.',
        'params': {
            'changeState': true, // if changeState == false, other info is optional
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f' , 'm'],
            'colVals': ['1', '2','4'],
            'cellVal': '4',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'Also note that there is a strong associativity with <span style="color:#9e7560;">digestive diseases</span>  and as age increases so does the association with <span style="color:#72b5b2;">nervous system disorders</span>.',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'For anyone who has been anxious before and has felt stomach pains this association shouldn’t be too surprising.',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'Research supports this association with an example of: Irritable Bowel Syndrome (IBS) commonly co-occurring with depression or anxiety*.<br /><span id="reference">[*]<a href="https://www.nature.com/articles/ajg200468" target="_blank"> Psychosocial Factors are Linked to Functional Gastrointestinal Disorders</a></span>',
        'params': {
            'changeState': true, // if changeState == false, other info is optional
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f' , 'm'],
            'colVals': ['1', '2','4'],
            'cellVal': '4',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'Let\'s look at another case.',
        'params': {
            'changeState': true,
            'toggleCenter': true,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f','m'],
            'colVals': ['2' ,'3'],
            'cellVal': '3',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'Compared to males, female nuclei are larger. So, in females, there are more diseases that are positively associated to <span style="color:#579d52;">blood diseases</span> than males.',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'Taking a closer look, we can see that females with <span style="color:#579d52;">blood diseases</span> have much thicker <span style="color:#bab0ac;">genitourinary*</span> flagellum. <br /><span id="reference">[*](Diseases related to the genital and urinary organs.)</span>',
        'params': {
            'changeState': false,
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'This is logical as females in the 20-30’s are sexually active, increasing their likelihood of contracting UTI* and STDs*.<br /><span id="reference"> [*] <a href="https://jamanetwork.com/journals/jama/article-abstract/388951?redirect=true" target="_blank"> Urinary Tract Infections</a>,  Sexually Transmitted Diseases</span>',
        'params': {
            'changeState': true,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f','m'],
            'colVals': ['2' ,'3'],
            'cellVal': '3',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },{
        'text': 'In addition they still have a high risk for anemia*, breast issues, and autoimmune disorders*.<br /><span id="reference">[*]<a href="http://www.bloodjournal.org/content/48/3/449.short?sso-checked=true" target="_blank"> Evaluation of the iron status of a population</a>, <a href="https://www.sciencedirect.com/science/article/pii/S1568997203000065" target="_blank"> Autoimmue disorders</a></span>',
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
        'text': 'When we expand the age category, we can see for females as they age the thickness genitourinary decreases while increasing for males.',
        'params': {
            'changeState': true,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f','m'],
            'colVals': ['2', '3','6','7'],
            'cellVal': '3',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },{
        'text': 'The increase in males is due could be attributed to a higher possibility of contracting prostate cancer as they age*.<br /><span id="reference">[*]<a href="https://www.pcf.org/c/prostate-cancer-risk-factors/" target="_blank"> Prostate Cancer and Age</a></span>',
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
        'text': 'You can analyze and more stories from this visualization by using controls located on the top right.<br />Right arrow to start exploration.',
        'params': {
            'changeState': true,
            'lastSlide': true,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f','m'],
            'colVals': ['2', '3','6','7'],
            'cellVal': '3',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    }
];
