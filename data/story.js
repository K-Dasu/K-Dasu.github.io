var stories = [
    {
        'text': 'This is our visualization of disease co-occurrence.',
        'params': {
            'changeState': true,
            'image': 'img/Intro-0.png',
            'imageScale': 1.0,
            'fadeIn': true,
            'toggleLegend': true,
            'toggleCenter': true,
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
        'text': 'With this representation, we will share stories about the progression of and the joint occurrence of certain diseases.',
        'params': {
            'changeState': true,
            'toggleLegend': true,
            'fadeIn': false,
            'toggleCenter': true,
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
        'text':  'The central node mirrors the virus\'s nucleus and <br> represents the focal disease category.' ,
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
        'text':'The nucleus ring color represents the disease category we are currently exploring. In this case, the color  <span style="color:#b17ea0;">purple </span> denotes <span style="color:#b17ea0;">circulatory diseases</span>.',
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
        },
    },
    {
        'text':'The size of the nucleus grows or shrinks depending on the number of other diseases that are associated with the selected disease category.',
        'params': {
            'changeState': false,
            'toggleCenter': true,
            'fadeIn': false,
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
        'text':'Each flagellum represents another disease category and each element within the flagellum corresponds to an indiviudal disease in that category.',
        'params': {
            'changeState': false,
            'fadeIn': false,
            'toggleCenter': true,
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        },
    },
    {
        'text': 'The longer the flagellum, the stronger the association with the nucleus. <br> Indiviudal diseases that have a strong association are placed further away.',
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
        'text': 'The thickness of the flagellum indicates the number of diseases <br> with same degree of association.',
        'params': {
            'changeState': true,
            'toggleLegend': true,
            'fadeIn': false,
            'toggleCenter': true,
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
        'text':'So in this case, we can see that many <span style="color:#9e7560;">digestive</span>,<span style="color:#72b5b2;"> nervous </span>, and <span style="color:#bab0ac;">genitourinary </span> diseases have a strong association with <span style="color:#b17ea0;">circulatory diseases</span>.',
        'params': {
            'changeState': true,
            'toggleLegend': true,
            'image': 'img/Intro-0.png',
            'toggleCenter': true,
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
        'text':'Finally we set the common factor to be a disease category. In this example all of the nuclei will be <span style="color:#b17ea0;">circulatory diseases</span>.',
        'params': {
            'changeState': true,
            'toggleCellBorder': true,
            'toggleCenter': true,
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
        'text': 'Focusing on <span style="color:#f1c54f;">mental disorders</span>, we notice that the older you become there are more diseases that have an association with mental diseases.',
        'params': {
            'changeState': true, // if changeState == false, other info is optional
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'toggleCenter': true,
            'rowVals': ['f' , 'm'],
            'colVals': ['1', '2','4'],
            'cellVal': '4',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'Noting the thickness and width of the flagellum, you can see that  <span style="color:#9e7560;">digestive diseases</span> have a strong association with mental disorders.',
        'params': {
            'changeState': false,
            'toggleCenter': true,
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'For anyone who has been anxious before and has felt stomach pains <br>this association shouldn’t be too surprising.',
        'params': {
            'changeState': false,
            'toggleCenter': true,
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'Research supports this association. For example: Irritable Bowel Syndrome (IBS) commonly occurs with depression or anxiety*.<br /><span id="reference">[*]<a href="https://www.nature.com/articles/ajg200468" target="_blank"> Psychosocial Factors are Linked to Functional Gastrointestinal Disorders</a></span>',
        'params': {
            'changeState': true, // if changeState == false, other info is optional
            'toggleCenter': false,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f' , 'm'],
            'colVals': ['1', '2','4'],
            'cellVal': '4',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'As age increases, the thickness and length for the <span style="color:#72b5b2;">nervous system disorders</span> flagellum does as well. This illustrates a growth in association.',
        'params': {
            'changeState': false,
            'toggleCenter': true,
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'As you get older there is a higher risk for both Dementia and Alzheimers which lead to nervous system disorders*.<br /><span id="reference">[*]<a href="https://www.mayoclinic.org/diseases-conditions/dementia/symptoms-causes/syc-20352013" target="_blank">Disorders linked to Dementia</a></span>',
        'params': {
            'changeState': true, // if changeState == false, other info is optional
            'toggleCenter': false,
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
        'text': 'Compared to males, female nuclei are larger. So, in females, there are more diseases that are associated to <span style="color:#579d52;">blood diseases</span> than males.',
        'params': {
            'changeState': false,
            'toggleCenter': true,
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
        'text': 'This is consistent with the observation that females in the 20-30’s are sexually active, increasing their likelihood of contracting UTI* and STDs*.<br /><span id="reference"> [*] <a href="https://jamanetwork.com/journals/jama/article-abstract/388951?redirect=true" target="_blank"> Urinary Tract Infections</a>,  Sexually Transmitted Diseases</span>',
        'params': {
            'changeState': true,
            'toggleCenter': false,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f','m'],
            'colVals': ['2' ,'3'],
            'cellVal': '3',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },{
        'text': 'In addition they also have a higher risk for anemia*, breast issues, and autoimmune disorders*.<br /><span id="reference">[*]<a href="http://www.bloodjournal.org/content/48/3/449.short?sso-checked=true" target="_blank"> Evaluation of the iron status of a population</a>, <a href="https://www.sciencedirect.com/science/article/pii/S1568997203000065" target="_blank"> Autoimmue disorders</a></span>',
        'params': {
            'changeState': true,
            'toggleCenter': false,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f','m'],
            'colVals': ['2' ,'3'],
            'cellVal': '3',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'When we expand the age category, we can see for females as they age the thickness for genitourinary diseases decreases while it increases for males.',
        'params': {
            'changeState': true,
            'toggleCenter': true,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f','m'],
            'colVals': ['2', '3','6','7'],
            'cellVal': '3',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },{
        'text': 'This increase in males could be attributed to a higher possibility of contracting prostate cancer with age*.<br /><span id="reference">[*]<a href="https://www.pcf.org/c/prostate-cancer-risk-factors/" target="_blank"> Prostate Cancer and Age</a></span>',
        'params': {
            'changeState': true,
            'toggleCenter': false,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f','m'],
            'colVals': ['2', '3','6','7'],
            'cellVal': '3',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    },
    {
        'text': 'You can analyze more stories from this visualization by using controls located on the top right. Press the right arrow to start exploring.',
        'params': {
            'changeState': true,
            'lastSlide': true,
            'toggleCenter': true,
            'allocation': {'row':'sex', 'col':'age', 'cell':'category'},
            'rowVals': ['f','m'],
            'colVals': ['2', '3','6','7'],
            'cellVal': '3',
            'explanationTranslateRatio': [-0.1, -0.75] // ratio of x and y
        }
    }
];
