function onMessage(event) {
  const message = event.message;

  if (message.slashCommand) {
    switch (message.slashCommand.commandId) {
      case 1: // Help command
        return createHelpCard();
      case 2: // Joke command
        return generateJoke();
    }
  }
}

function createHelpCard() {
  return {
    "cardsV2": [
      {
        "cardId": "1",
        "card": {
          "sections": [
            {
              "header": "",
              "widgets": [
                {
                  "decoratedText": {
                    "topLabel": "",
                    "text": "Hi! 👋 I'm here to help you with your jokes.",
                    "wrapText": true
                  }
                }
              ]
            },
            {
              "widgets": [
                {
                  "decoratedText": {
                    "topLabel": "",
                    "text": "<b>/joke</b>: I will generate a random joke.",
                    "wrapText": true
                  }
                }
              ]
            }
          ],
          "header": {
            "title": "Joke app",
            "subtitle": "Helping you get a good laugh.",
            "imageUrl": "https://goo.gle/3SfMkjb",
            "imageType": "SQUARE"
          }
        }
      }
    ]
  }
}

function generateJoke() {
  // Get a random joke from the internet.
  const jokeUrl = "https://api.chucknorris.io/jokes/random";
  const jokeResponse = UrlFetchApp.fetch(jokeUrl);
  const joke = JSON.parse(jokeResponse.getContentText()).value;
  Logger.log(joke)

  // Return the joke.
  return {text: joke}
  Logger.log("Joke sent back ")
}

function createResponseCard(responseText) {
  return {
    "cardsV2": [
      {
        "cardId": "1",
        "card": {
          "sections": [
            {
              "widgets": [
                {
                  "decoratedText": {
                    "topLabel": "",
                    "text": responseText,
                    "startIcon": {
                      "knownIcon": "NONE",
                      "altText": "Joke",
                      "iconUrl": "https://fonts.gstatic.com/s/i/short-term/web/system/1x/task_alt_gm_grey_48dp.png"
                    },
                    "wrapText": true
                  }
                }
              ]
            }
          ],
          "header": {
            "title": "Joke app",
            "subtitle": "Making you laugh",
            "imageUrl": "https://goo.gle/3SfMkjb",
            "imageType": "CIRCLE"
          }
        }
      }
    ]
  }
}
