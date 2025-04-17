const strContains = (source, phrase) => {
    if (!source || !phrase) return true;
    return source.toLowerCase().includes(phrase.toLowerCase());
  };

  export default strContains;