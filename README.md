Reflection Questions:

1. How did you handle state updates when the text changed?

I used react to keep track of the text. Whenever the user typed something, the  event updated the state right away, so the stats would refresh automatically.

2. What considerations did you make when calculating reading time?

I thought about how fast people usually read and used 200 words per minute as a rough average. I divided the word count by that number and rounded up to keep it simple.

3. How did you ensure the UI remained responsive during rapid text input?

I kept the logic simple by only counting characters and words directly from the text. Those are quick operations so the app stayed smooth even when typing fast.

4. What challenges did you face when implementing the statistics calculations?

The hardest part was making sure spaces didn’t get counted as words. I had to trim the text and filter out empty strings so the word count was correct. Another challenge was making sure the props matched correctly so the component would render without errors. lastly was typical debugging issues.