class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'-\s]+/g, "");
  }
  static titleize(string) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let words = string.split(" ")

    let titleizedSentence = [this.capitalize(words[0])]
    for (let i = 1; i < words.length; i++) {
      if (exceptions.includes(words[i])) {
        titleizedSentence.push(words[i])
      } else {
        titleizedSentence.push(this.capitalize(words[i]))
      }
    }
    return titleizedSentence.join(" ")
  }
}