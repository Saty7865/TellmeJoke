
function goBtn() {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  let randNum = Math.random() * arr.length;
  randNum = Math.floor(randNum);
  // console.log(arr[randNum]);

  addTxt.innerHTML = arr[randNum];
  addTitle.innerHTML = arrt[randNum];
}

let arrt = [`OUCH`, `HIDE AND SEEK`, `PLAY THAT SONG!`, `BRRR!`, `RISE AND SHINE!`, `GUILTY!`, `POKER FACE`, `BAD WEATHER`, `RELATIONSHIP PROBLEMS`, `BAD KITTY`, `RIDIN’ FURRY`, `MOST IMPORTANT MEAL`, `PURRRFECT STRIKE`, `BAD SPORT`, `SCAREDY CAT`, `PAIN IN THE TAIL`]

let arr = [`For a man to truly understand rejection… he must first be ignored by a cat.`,

  `Why is it so hard for a leopard to hide? Because he’s always spotted.`,

  `What is a cat’s favorite song? Three Blind Mice.`,

  `What do you call a cat that lives in an igloo? An eskimew!`,

  `What do cats like to eat for breakfast? Mice Krispies.`,


  `What do you call the cat that was caught by the police? The purrpatrator.`,

  `Why don’t cats play poker in the jungle? Too many cheetahs.`,

  `Q: What’s worse than raining cats and dogs? A: Hailing taxis`,


  `I had to get rid of my husband. He was allergic to my cat.`,

  `Q: What’s the worst kind of cat? A: A cat-astrophe`,

  `Q: What do you call a cat in a station wagon? A: A car-pet`,

  `Q: What do cats eat for breakfast? A: Mice Krispies`,


  `Q: What do you call at cat that goes bowling? A: An alley cat`,

  `Q: Why was the cat disqualified from the game? A: It was a cheetah.`,

  `Q: Why did the cat run away from the tree? A: It was scared of its bark.`,

  `Q: What would a cat say if you stepped on its tail? A: “Me-OW!”`]

// when click to btn to new joke
