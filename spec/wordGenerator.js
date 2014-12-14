/* global wordGenerator, describe, it, expect, should */

describe('wordGenerator()', function () {
  'use strict';
  var dictionary;
  var invalid;
  var wordGenerator;
  var letters;

  beforeEach(function() {
    //debugger;
    dictionary = ['eric', 'zach', 'henry', 'todd', 'marcus'];
    invalid = ['zb', 'qt', 'jc'];
    letters = 'czha';
    wordGenerator = new Generator(letters, dictionary, invalid);

  });

  it('to return valid words', function () {
    expect(wordGenerator.getWords()).to.equal(['zach']);

  });

  it('adds words to dictionary', function () {
    expect(wordGenerator.generate('zach')).to.equal(['zach']);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
