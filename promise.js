function sayJoke(url, jokeId) {
  try {
    // const response = await fetch(`${url}`);
    // if (!response.ok) {
    //   throw new Error("Could not fetch");
    // }
    const returnedJokes = {
      jokes: [
        {
          id: 101,
          setup: "Who is Santa's favorite singer?",
          punchLine: "Elf-is Presley!",
        },
      ],
    };
    const joke = returnedJokes.jokes.find((element) => element.id === jokeId);
    if (!joke) throw new Error(`No jokes found id: ${jokeId}`);
    return {
      saySetup() {
        return joke.setup;
      },
      sayPuncline() {
        return joke.punchLine;
      },
    };
  } catch (err) {
    return err.message;
  }
}
console.log(sayJoke("http://great.jokes/christmas", 101).sayPuncline());
