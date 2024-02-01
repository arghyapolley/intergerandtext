function fullJustify(words, maxWidth) {
    const result = [];
    let line = [];
    let lineLength = 0;

    for (const word of words) {
        if (lineLength + line.length + word.length > maxWidth) {
            const spacesNeeded = maxWidth - lineLength;
            const extraSpacesCount = line.length > 1 ? line.length - 1 : 0;
            let lineStr = '';
            if (extraSpacesCount === 0) {
                lineStr = line[0] + ' '.repeat(spacesNeeded);
            } else {
                const spacesPerWord = Math.floor(spacesNeeded / extraSpacesCount);
                const extraSpaces = spacesNeeded % extraSpacesCount;

                for (let i = 0; i < line.length - 1; i++) {
                    lineStr += line[i] + ' '.repeat(spacesPerWord + (i < extraSpaces ? 1 : 0));
                }
                lineStr += line[line.length - 1];
            }
            result.push(lineStr);
            line = [];
            lineLength = 0;
        }
        line.push(word);
        lineLength += word.length;
    }
    result.push(line.join(' ').padEnd(maxWidth, ' '));
   return result;
}
