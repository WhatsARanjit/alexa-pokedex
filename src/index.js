var poketable = {
  "bug": {
    "super": [
      "dark",
      "grass",
      "psychic"
    ],
    "dontsuper": [
      "fairy",
      "fighting",
      "fire",
      "flying",
      "ghost",
      "poison",
      "steel"
    ],
    "dontagainst": [
      "fighting",
      "grass",
      "ground"
    ],
    "against": [
      "rock",
      "fire",
      "flying"
    ]
  },
  "dark": {
    "super": [
      "ghost",
      "psychic"
    ],
    "dontsuper": [
      "dark",
      "fairy",
      "fighting"
    ],
    "dontagainst": [
      "dark",
      "ghost"
    ],
    "against": [
      "bug",
      "fairy",
      "fighting"
    ]
  },
  "dragon": {
    "super": [
      "dragon"
    ],
    "notsuper": [
      "steel"
    ],
    "notagainst": [
      "electric",
      "fire",
      "grass",
      "water"
    ],
    "against": [
      "dragon",
      "fairy",
      "ice",
    ]
  },
  "electric": {
    "super": [
      "flying",
      "water"
    ],
    "dontsuper": [
      "dragon",
      "electric",
      "grass"
    ],
    "dontagainst": [
      "electric",
      "flying",
      "steel"
    ],
    "against": [
      "ground"
    ]
  },
  "fairy": {
    "super": [
      "dark",
      "dragon",
      "fighting"
    ],
    "dontsuper": [
      "fire",
      "poison",
      "steel"
    ],
    "dontagainst": [
      "bug",
      "dark",
      "fighting"
    ],
    "against": [
      "poison",
      "steel"
    ]
  },
  "fighting": {
    "super": [
      "dark",
      "ice",
      "normal",
      "rock",
      "steel"
    ],
    "dontsuper": [
      "bug",
      "fairy",
      "flying",
      "poison",
      "psychic"
    ],
    "dontagainst": [
      "bug",
      "dark",
      "rock"
    ],
    "against": [
      "fairy",
      "flying",
      "psychic"
    ]
  },
  "fire": {
    "super": [
      "bug",
      "grass",
      "ice",
      "steel"
    ],
    "dontsuper": [
      "dragon",
      "fire",
      "rock",
      "water"
    ],
    "dontagainst": [
      "bug",
      "fairy",
      "fire",
      "grass",
      "ice",
      "steel"
    ],
    "against": [
      "ground",
      "rock",
      "water"
    ]
  },
  "flying": {
    "super": [
      "bug",
      "fighting",
      "grass"
    ],
    "dontsuper": [
      "electric",
      "rock",
      "steel"
    ],
    "dontagainst": [
      "bug",
      "fighting",
      "grass"
    ],
    "against": [
      "electric",
      "ice",
      "rock"
    ]
  },
  "ghost": {
    "super": [
      "ghost",
      "psychic"
    ],
    "dontsuper": [
      "dark"
    ],
    "dontagainst": [
      "bug",
      "poison"
    ],
    "against": [
      "dark",
      "ghost"
    ]
  },
  "grass": {
    "super": [
      "ground",
      "rock",
      "water"
    ],
    "dontsuper": [
      "bug",
      "dragon",
      "fire",
      "flying",
      "grass",
      "poison",
      "steel"
    ],
    "dontagainst": [
      "electric",
      "grass",
      "ground",
      "water"
    ],
    "against": [
      "bug",
      "fire",
      "flying",
      "ice",
      "poison"
    ]
  },
  "ground": {
    "super": [
      "electric",
      "fire",
      "poison",
      "rock",
      "steel"
    ],
    "dontsuper": [
      "bug",
      "grass"
    ],
    "dontagainst": [
      "poison",
      "rock"
    ],
    "against": [
      "grass",
      "ice",
      "water"
    ]
  },
  "ice": {
    "super": [
      "dragon",
      "flying",
      "grass",
      "ground"
    ],
    "dontsuper": [
      "fire",
      "ice",
      "steel",
      "water"
    ],
    "dontagainst": [
      "ice"
    ],
    "against": [
      "fighting",
      "fire",
      "rock",
      "steel"
    ]
  },
  "normal": {
    "super": [
    ],
    "dontsuper": [
      "rock",
      "steel"
    ],
    "dontagainst": [
    ],
    "against": [
      "fighting"
    ]
  },
  "poison": {
    "super": [
      "fairy",
      "grass"
    ],
    "dontsuper": [
      "ghost",
      "ground",
      "poison",
      "rock"
    ],
    "dontagainst": [
      "bug",
      "fairy",
      "fighting",
      "grass",
      "poison"
    ],
    "against": [
      "ground",
      "psychic"
    ]
  },
  "psychic": {
    "super": [
      "fighting",
      "poison"
    ],
    "dontsuper": [
      "psychic",
      "steel"
    ],
    "dontagainst": [
      "fighting",
      "psychic"
    ],
    "against": [
      "bug",
      "dark",
      "ghost"
    ]
  },
  "rock": {
    "super": [
      "bug",
      "fire",
      "flying",
      "ice"
    ],
    "dontsuper": [
      "fighting",
      "ground",
      "steel"
    ],
    "dontagainst": [
      "fire",
      "flying",
      "normal",
      "poison"
    ],
    "against": [
      "fighting",
      "grass",
      "ground",
      "steel",
      "water"
    ]
  },
  "steel": {
    "super": [
      "fairy",
      "ice",
      "rock"
    ],
    "dontsuper": [
      "electric",
      "fire",
      "steel",
      "water"
    ],
    "dontagainst": [
      "bug",
      "dragon",
      "fairy",
      "flying",
      "grass",
      "ice",
      "normal",
      "psychic",
      "rock",
      "steel"
    ],
    "against": [
      "fighting",
      "fire",
      "ground"
    ]
  },
  "water": {
    "super": [
      "fire",
      "ground",
      "rock"
    ],
    "dontsuper": [
      "dragon",
      "grass",
      "water"
    ],
    "dontagainst": [
      "fire",
      "ice",
      "steel",
      "water"
    ],
    "against": [
      "electric",
      "grass"
    ]
  }
};

//App information
var AlexaSkill = require('./AlexaSkill');
var APP_ID     = 'amzn1.ask.skill.2ba97c91-c6d7-41a5-b33e-2282313e3357';

//Helper functions
var makeList = function(results) {

  string = results.join(', ');
  string = string.replace(/(\w+), (\w+)$/, "$1, or $2");
  return string;

}

//Intent functions
var handleUseAgainst = function(intent, session, response) {

  word = intent.slots.AgainstType.value;
  text = makeList( poketable[word].against );
  text = text + ' pokemon are super effective against ' + word + ' pokemon'
  //text = 'Fight against ' + word + ' pokemon with ' + text;

  response.tell(text)

}

var handleDontUseAgainst = function(intent, session, response) {

  word = intent.slots.DontAgainstType.value;
  text = makeList( poketable[word].dontagainst );
  text = text + ' pokemon are not very effective against ' + word + ' pokemon'
  //text = 'Don\'t fight against ' + word + ' pokemon with ' + text;

  response.tell(text)

}

var handleSuperAgainst = function(intent, session, response) {

  word = intent.slots.SuperType.value;
  text = makeList( poketable[word].super );
  text = word + ' pokemon are super effective against ' + text + ' pokemon'

  response.tell(text)

}

var handleDontSuperAgainst = function(intent, session, response) {

  word = intent.slots.DontSuperType.value;
  text = makeList( poketable[word].dontsuper );
  text = word + ' pokemon are not very effective against ' + text + ' pokemon'

  response.tell(text)

}

var handleBestMatch = function(intent, session, response) {

  word = intent.slots.BestMatchType.value;
  var match = [];
  for (x in poketable[word].dontsuper) {
    attack  = poketable[word].dontsuper[x]
    a_index = poketable[attack].super.indexOf(word);
    if ( a_index >= 0) {
      match.push(attack);
    }
  }
  text = makeList( match );
  if ( text.length > 0 ) {
    text = 'The best match up against ' + word + ' pokemon is ' + text + ' pokemon';
  } else {
    text = 'There is no best match up for ' + word + ' pokemon';
  }

  response.tell(text)

}

//App invocation
var AskPokedex = function() {
  AlexaSkill.call(this, APP_ID);
};

AskPokedex.prototype = Object.create(AlexaSkill.prototype);
AskPokedex.prototype.constructor = AskPokedex;

//Event Handlers
AskPokedex.prototype.eventHandlers.onLaunch = function(launchRequest, session, response) {
  //var output   = 'Welcome to Pokedex'
  //var reprompt = 'What type do you want to learn about?';

  //response.ask(output, reprompt);
};

//Intent Handlers
AskPokedex.prototype.intentHandlers = {
  UseAgainst: function(intent, session, response) {
    handleUseAgainst(intent, session, response);
  },

  DontUseAgainst: function(intent, session, response) {
    handleDontUseAgainst(intent, session, response);
  },

  SuperAgainst: function(intent, session, response) {
    handleSuperAgainst(intent, session, response);
  },

  DontSuperAgainst: function(intent, session, response) {
    handleDontSuperAgainst(intent, session, response);
  },

  BestMatch: function(intent, session, response) {
    handleBestMatch(intent, session, response);
  },

  HelpIntent: function(intent, session, response) {
    var speechOutput = 'Find out how to battle against pokemon types.' +
      'What type are you battling against?';
    response.ask(speechOutput);
  }
};

exports.handler = function(event, context) {
    var skill = new AskPokedex();
    skill.execute(event, context);
};
