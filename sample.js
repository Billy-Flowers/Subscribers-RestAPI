console.log("1");

async function doWork() {
  console.log("2");
  const result = await new Promise(resolve => setTimeout(() => resolve("Done"), 2000));
    console.log(result); // "Done"

  console.log("3");
}

doWork();
console.log("4");
