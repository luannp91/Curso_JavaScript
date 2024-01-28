class WordCounter {

    constructor() {
        this.wordCount = 0;
    }

    countWords(str) {
        const words = str.split(" ");
        this.wordCount = words.length;
        return this.wordCount;
    }
}

let wordCounter = new WordCounter();
wordCounter.countWords('não sei o que escrever');
console.log(wordCounter);