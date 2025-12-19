let dataFile =
  "##################################\n" +
  "Location: DEU\n" +
  "##################################\n" +
  " Ammonia: 023 particles\n" +
  " Nitrogen Oxide: 919 particles\n" +
  " Carbon Monoxide: 027 particles\n" +
  "##################################\n" +
  "##################################\n" +
  "Location: USA\n" +
  "##################################\n" +
  " Ammonia: 422 particles\n" +
  " Nitrogen Oxide: 220 particles\n" +
  " Carbon Monoxide: 130 particles\n" +
  "##################################\n" +
  "##################################\n" +
  "Location: AUS\n" +
  "##################################\n" +
  " Ammonia: 122 particles\n" +
  " Nitrogen Oxide: 102 particles\n" +
  " Carbon Monoxide: 399 particles\n" +
  "##################################\n" +
  "##################################\n" +
  "Location: BHS\n" +
  "##################################\n" +
  " Ammonia: 323 particles\n" +
  " Nitrogen Oxide: 363 particles\n" +
  " Carbon Monoxide: 399 particles\n" +
  "##################################\n" +
  "##################################\n" +
  "Location: BRB\n" +
  "##################################\n" +
  " Ammonia: 344 particles\n" +
  " Nitrogen Oxide: 324 particles\n" +
  " Carbon Monoxide: 314 particles\n" +
  "##################################\n" +
  "##################################\n" +
  "Location: CHN\n" +
  "##################################\n" +
  " Ammonia: 422 particles\n" +
  " Nitrogen Oxide: 477 particles\n" +
  " Carbon Monoxide: 398 particles\n" +
  "##################################\n" +
  "##################################\n" +
  "Location: COG\n" +
  "##################################\n" +
  " Ammonia: 044 particles\n" +
  " Nitrogen Oxide: 144 particles\n" +
  " Carbon Monoxide: 244 particles\n" +
  "##################################\n" +
  "##################################\n" +
  "Location: CRI\n" +
  "##################################\n" +
  " Ammonia: 092 particles\n" +
  " Nitrogen Oxide: 099 particles\n" +
  " Carbon Monoxide: 399 particles\n" +
  "##################################\n" +
  "##################################\n" +
  "Location: ISL\n" +
  "##################################\n" +
  " Ammonia: 021 particles\n" +
  " Nitrogen Oxide: 009 particles\n" +
  " Carbon Monoxide: 077 particles\n" +
  "##################################\n" +
  "##################################\n" +
  "Location: VEN\n" +
  "##################################\n" +
  " Ammonia: 102 particles\n" +
  " Nitrogen Oxide: 103 particles\n" +
  " Carbon Monoxide: 022 particles\n" +
  "##################################\n";

function parseData() {
  // Remember, your data is in a global variable dataFile
  let regex = /#/gm;
  let newString = dataFile.replaceAll(regex, "");
  const arr = newString.split("Location:");
  arr.shift();

  const nesteArr = arr.reduce((acc, element, index) => {
    console.log(element);
  });
}
parseData();
