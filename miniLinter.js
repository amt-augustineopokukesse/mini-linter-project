let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// Split string into array
const storyWords = story.split(' ');  

//Filter out unnecessary words from array
const betterWords = storyWords.filter(word => {
  return unnecessaryWords.includes(word) === false;
});
const numBetterWords = betterWords.length;

// Count overused words 
let wordOneCount = 0;
let wordTwoCount = 0;
let wordThreeCount = 0;
betterWords.forEach(word => {
  if (word === 'really') {
    wordOneCount += 1;
  } else if (word === 'very') {
    wordTwoCount += 1;
  } else if (word === 'basically') {
    wordThreeCount += 1;
  }
});
// Count number of sentences in the paragraph
let sentenceCount = 0;
betterWords.forEach(word => {
  if (word[word.length - 1] === '!' || word[word.length - 1] === '.') {
    sentenceCount += 1;
  }
})
// Log items to the console
const logInfo = (numBetterWords, wordOneCount, wordTwoCount, wordThreeCount, sentenceCount) => {
  console.log(`Word count: ${numBetterWords}`);
  console.log(`Sentence count: ${sentenceCount}`);
  console.log(`Overused words count: "really" - ${wordOneCount}; "very" - ${wordTwoCount}; "basically" - ${wordThreeCount}`);
}

logInfo(numBetterWords, wordOneCount, wordTwoCount, wordThreeCount, sentenceCount);

console.log('The improved paragraph reads: \n' + betterWords.join(' '));