class Test {
  // or `async data() {`
  // or `get data() {`
  data() {
    return {
      name: "Ted",
      permalink: "/_idx"
    };
  }

  render({name}) {
    // will always be "Ted"
    return `<p>${name}</p>`;
  }
}

module.exports = Test;
