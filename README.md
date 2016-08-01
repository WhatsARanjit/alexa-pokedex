# Alexa Pokedex

## Table of Contents

1. [Overview](#overview)
1. [Install](#install)
  - [Create an AWS Lamba function](#create-an-aws-lamba-function)
  - [Create Alexa Skill](#create-alexa-skill)
1. [Usage](#usage)
  - [What to Use](#what-to-use)
  - [What Not to Use](#what-not-to-use)
  - [Best Match Up](#best-match-up)

## Overview

Use this repository to set up an Alexa skill which can tell you
what type of Pokémon to use against others.

## Install

### Create an AWS Lamba function

1. Create a zip file with the javascript files in the src directory.
1. Follow [this walkthrough](https://developer.amazon.com/public/community/post/TxDJWS16KUPVKO/New-Alexa-Skills-Kit-Template-Build-a-Trivia-Skill-in-under-an-Hour)
for adding an AWS Lamba function using the create zip file.

### Create Alexa Skill

1. Go to the [Amazon developer portal](https://developer.amazon.com),
and click on the "Add New Skill" button.
1. For "Skill Type" just leave the default "Custom Interaction "Model"
1. For "Name" pick anything you want.
1. For "Invocation Name" pick anything you want.
This is the name you'll use to open the skill (e.g., "Alexa, ask Pokedex...")
1. For "Endpoint" select "Lambda ARN."
The ARN is availble from the AWS Console and will look something like this: `arn:aws:lambda:us-east-1:123456789805:function:my_function`
1. Click `Next`.
1. Copy/paste `src/IntentSchema.json` into the __Intent Scheme__ field.
1. Create a new custom slot named `POKEMON_TYPES` and copy/paste `src/custom_type/POKEMON_TYPES.txt` into the field.
1. Copy/paste `src/sampleUtterances.txt` into the __Sample Utterances__ field.

## Usage

### What to Use

```
You: Alexa, ask Pokedex, what do I use against bug?
Alexa: Rock, fire, and flying Pokémon are super effective against bug Pokémon.
```

### What Not to Use

```
You: Alexa, ask Pokedex, what's not very effective against water?
Alexa: Fighting, grass, or water Pokémon are not very effective against water Pokémon.
```

### Best Match Up

Use this to find out which type is super effective against an enemy type,
and also that enemy type's attacks are not very effective.

```
You: Alexa, ask Pokedex, what's the best match up against fire?
Alexa: The best match up against fire Pokémon is rock, or water Pokémon.
```
