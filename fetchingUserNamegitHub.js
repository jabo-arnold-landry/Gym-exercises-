async function fetchGitHubName(username) {
  const fetching = await fetch(`https://api.github.com/users/${username}`);
  const miData = await fetching.json();

  return miData.name || null;
}

fetchGitHubName("jabo-arnold-landry").then((names) => console.log(names));
